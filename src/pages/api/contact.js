import nodemailer from "nodemailer";

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

    // Owner email
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM, // "Tetiana … <t.koldunenko@gmail.com>"
      to: process.env.MAIL_TO, // your inbox
      replyTo: email, // user’s email
      subject: `New enquiry from ${name}`,
      text: `From: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${serviceType}\n\n${message}`,
    });

    console.log("✅ Owner mail:", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    // Optional: auto-reply to the sender
    const ack = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "We received your enquiry",
      text: `Hi ${name}, thanks for reaching out. We'll reply within 48 hours.\n\n— Tetiana`,
    });

    console.log("✅ Ack mail:", {
      messageId: ack.messageId,
      accepted: ack.accepted,
      rejected: ack.rejected,
      response: ack.response,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Nodemailer error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
