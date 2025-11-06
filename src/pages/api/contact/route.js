import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* simple validators */
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
const min = (s = "", n) => (s || "").trim().length >= n;

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, serviceType, message, website } = body || {};

    // honeypot
    if (website) return NextResponse.json({ ok: true });

    // validation
    const errors = {};
    if (!min(name, 2)) errors.name = "Name must be at least 2 characters";
    if (!isEmail(email)) errors.email = "Please enter a valid email address";
    if (!serviceType) errors.serviceType = "Please select an inquiry type";
    if (!min(message, 20))
      errors.message = "Message must be at least 20 characters";

    if (Object.keys(errors).length) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // SMTP transport (no DNS/TXT needed)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    /* ===== Owner notification ===== */
    const ownerHtml = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;">
        <tr><td style="padding:24px;">
          <h2 style="margin:0 0 16px 0;color:#212529;font-weight:500;">New Enquiry</h2>
          <p style="margin:0 0 6px 0;color:#212529;"><b>Name:</b> ${name}</p>
          <p style="margin:0 0 6px 0;color:#212529;"><b>Email:</b> ${email}</p>
          <p style="margin:0 0 6px 0;color:#212529;"><b>Phone:</b> ${phone || "-"}</p>
          <p style="margin:0 0 6px 0;color:#212529;"><b>Type:</b> ${serviceType}</p>
          <p style="margin:12px 0 6px 0;color:#212529;"><b>Message:</b></p>
          <div style="white-space:pre-wrap;color:#212529;border:1px solid #d3d3d4;border-radius:8px;padding:12px;">${message}</div>
        </td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM, // e.g. "Website Enquiries <hello@yourdomain.com>"
      to: process.env.MAIL_TO, // your inbox
      replyTo: email, // lets you reply to sender
      subject: `New enquiry from ${name}`,
      html: ownerHtml,
    });

    /* ===== Auto-reply to the sender ===== */
    const brand = {
      green80: "#3e6947", // primary-80
      green40: "#71ad7d", // primary-40
      grey100: "#212529",
      grey60: "#7a7c7f",
      grey20: "#d3d3d4",
    };

    const ackHtml = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;">
        <tr>
          <td style="padding:0">
            <div style="height:6px;background:linear-gradient(90deg, ${brand.green80}, ${brand.green40});"></div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <h1 style="margin:0 0 10px 0;color:${brand.grey100};font-size:20px;font-weight:600;letter-spacing:.5px;">
              Thanks, ${name} — your message is in!
            </h1>
            <p style="margin:0 0 16px 0;color:${brand.grey60};font-size:14px;line-height:1.6;">
              We’ve received your enquiry and will get back to you within 48 hours.
            </p>

            <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid ${brand.grey20};border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:14px;background:#f9faf9;border-bottom:1px solid ${brand.grey20};color:${brand.grey100};"><b>Summary</b></td>
              </tr>
              <tr><td style="padding:14px;color:${brand.grey100};">
                <div style="margin-bottom:6px;"><b>Email:</b> ${email}</div>
                <div style="margin-bottom:6px;"><b>Phone:</b> ${phone || "-"}</div>
                <div style="margin-bottom:6px;"><b>Type:</b> ${serviceType}</div>
                <div style="margin-top:10px;"><b>Message:</b></div>
                <div style="white-space:pre-wrap;border:1px solid ${brand.grey20};border-radius:8px;padding:10px;margin-top:6px;">${message}</div>
              </td></tr>
            </table>

            <p style="margin:18px 0 0 0;color:${brand.grey60};font-size:13px;">
              If this was not you, just ignore this email.
            </p>
          </td>
        </tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "We received your enquiry",
      html: ackHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
