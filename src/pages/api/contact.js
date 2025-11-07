import nodemailer from "nodemailer";
import { ownerHtml, ackHtml } from "@/lib/emailTemplates";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { name, email, phone, serviceType, message, website } = req.body || {};
  if (website) return res.status(200).json({ ok: true }); // honeypot

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    // Optional: verify connection/auth (helps during setup)
    await transporter.verify();

    // Send to owner
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: ownerHtml({ name, email, phone, serviceType, message }),
      text: `From: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${serviceType}\n\n${message}`, // fallback
    });

    // Auto-reply to sender
    const ack = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "We received your enquiry",
      html: ackHtml({ name, email, phone, serviceType, message }),
      text: `Hi ${name},\n\nThanks for reaching out. We'll reply within 48 hours.\n\n— Tetiana`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Nodemailer error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
