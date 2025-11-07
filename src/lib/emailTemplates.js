// lib/emailTemplates.js

const brand = {
  green100: "#27472e",
  green80: "#3e6947",
  green60: "#568b61",
  green40: "#71ad7d",
  green20: "#8ecf9b",
  green10: "#d2f9da",
  grey100: "#212529",
  grey80: "#4d5154",
  grey60: "#7a7c7f",
  grey40: "#a6a8a9",
  grey20: "#d3d3d4",
  grey10: "#e9e9ea",
  white: "#ffffff",
  black: "#000000",
};

const baseWrap = (preheader, inner) => `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title></title>
    <style>
      /* Some clients (Gmail web) honor minimal embedded CSS */
      @media (prefers-color-scheme: dark) {
        .card { background:#0f0f0f !important; }
      }
    </style>
  </head>
  <body style="margin:0;background:${brand.white};">
    <!-- Preheader (hidden in most clients) -->
    <div style="display:none;overflow:hidden;line-height:1;height:0;opacity:0;max-height:0;max-width:0;">
      ${preheader}
    </div>

    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background:${brand.white};">
      <tr>
        <td align="center" style="padding:24px;">
          <table role="presentation" width="100%" style="max-width:640px;background:${brand.white};">
            <tr>
              <td style="height:6px;background:linear-gradient(90deg, ${brand.green80}, ${brand.green40});border-radius:6px;"></td>
            </tr>
            <tr>
              <td class="card" style="background:${brand.white};border:1px solid ${brand.grey10};border-radius:12px;padding:24px;">
                ${inner}
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="text-align:center;color:${brand.grey60};font:13px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
                © ${new Date().getFullYear()} Tetiana Koldunenko
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`;

export function ownerHtml({ name, email, phone, serviceType, message }) {
  const inner = `
    <h1 style="margin:0 0 8px 0;color:${brand.grey100};font:600 20px/1.3 Raleway,Arial,sans-serif;letter-spacing:.4px;">
      New Enquiry
    </h1>
    <p style="margin:0 0 16px 0;color:${brand.grey60};font:14px/1.6 Lexend,Arial,sans-serif;">
      You’ve received a new enquiry from your website.
    </p>

    <table role="presentation" width="100%" style="border:1px solid ${brand.grey20};border-radius:10px;overflow:hidden;">
      <tr><td style="background:${brand.green10};color:${brand.grey100};padding:12px 14px;font:600 14px/1.4 Lexend,Arial;">Summary</td></tr>
      <tr><td style="padding:14px;color:${brand.grey100};font:14px/1.6 Lexend,Arial;">
        <div><b>Name:</b> ${escapeHtml(name)}</div>
        <div><b>Email:</b> ${escapeHtml(email)}</div>
        <div><b>Phone:</b> ${escapeHtml(phone || "-")}</div>
        <div><b>Type:</b> ${escapeHtml(serviceType)}</div>
        <div style="margin-top:10px;"><b>Message:</b></div>
        <div style="white-space:pre-wrap;border:1px solid ${brand.grey20};border-radius:8px;padding:10px;margin-top:6px;">
          ${escapeHtml(message)}
        </div>
      </td></tr>
    </table>

    <div style="margin-top:16px;">
      <a href="mailto:${encodeURIComponent(email)}"
         style="display:inline-block;background:${brand.green80};color:#fff;text-decoration:none;
                padding:10px 16px;border-radius:999px;font:500 14px/1 Lexend,Arial;">
        Reply to ${escapeHtml(name)}
      </a>
    </div>
  `;
  return baseWrap("New enquiry received.", inner);
}

export function ackHtml({ name, email, phone, serviceType, message }) {
  const inner = `
    <h1 style="margin:0 0 8px 0;color:${brand.grey100};font:600 20px/1.3 Raleway,Arial;letter-spacing:.4px;">
      Thanks, ${escapeHtml(name)} — your message is in!
    </h1>
    <p style="margin:0 0 16px 0;color:${brand.grey60};font:14px/1.6 Lexend,Arial;">
      We’ve received your enquiry and will get back to you within 48 hours.
    </p>

    <table role="presentation" width="100%" style="border:1px solid ${brand.grey20};border-radius:10px;overflow:hidden;">
      <tr><td style="background:#f9faf9;color:${brand.grey100};padding:12px 14px;font:600 14px/1.4 Lexend,Arial;">Your Details</td></tr>
      <tr><td style="padding:14px;color:${brand.grey100};font:14px/1.6 Lexend,Arial;">
        <div><b>Email:</b> ${escapeHtml(email)}</div>
        <div><b>Phone:</b> ${escapeHtml(phone || "-")}</div>
        <div><b>Inquiry type:</b> ${escapeHtml(serviceType)}</div>
        <div style="margin-top:10px;"><b>Your message:</b></div>
        <div style="white-space:pre-wrap;border:1px solid ${brand.grey20};border-radius:8px;padding:10px;margin-top:6px;">
          ${escapeHtml(message)}
        </div>
      </td></tr>
    </table>

    <p style="margin:16px 0 0 0;color:${brand.grey60};font:13px/1.6 Lexend,Arial;">
      If this wasn’t you, you can ignore this email.
    </p>
  `;
  return baseWrap("We received your enquiry.", inner);
}

// very small escape helper to avoid HTML injection
function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
