export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  "\"": "&quot;",
})[character] ?? character);

const field = (label: string, value: string, kind?: "email") => `
  <tr>
    <td width="30%" valign="top" style="width:30%;padding:16px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:.05em;line-height:1.5;text-transform:uppercase;">${label}</td>
    <td valign="top" style="padding:16px 0;border-bottom:1px solid #f3f4f6;color:#0d1b2a;font-family:Arial,sans-serif;font-size:15px;font-weight:500;line-height:1.5;">
      ${kind === "email" ? `<a href="mailto:${encodeURIComponent(value)}" style="color:#c9a86a;font-weight:600;text-decoration:none;">${escapeHtml(value)}</a>` : escapeHtml(value)}
    </td>
  </tr>`;

export function createContactRequestEmail(request: ContactRequest) {
  const year = new Date().getFullYear();

  return {
    html: `<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f4f6f8;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;overflow:hidden;border:1px solid rgba(13,27,42,.06);border-radius:16px;background:#ffffff;">
            <tr>
              <td align="center" style="padding:30px 40px;border-bottom:3px solid #c9a86a;background:#0d1b2a;text-align:center;">
                <img src="https://goexecution.com/wp-content/themes/go-execution/assets/images/logo-light.png" width="200" alt="Go Execution" style="display:inline-block;width:200px;max-width:100%;height:auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding:40px;">
                <h1 style="margin:0 0 24px;padding:0 0 10px;border-bottom:1px solid #e5e7eb;color:#0d1b2a;font-family:Arial,sans-serif;font-size:18px;font-weight:700;letter-spacing:.05em;line-height:1.35;text-transform:uppercase;">New Contact Form Submission</h1>
                <p style="margin:0 0 30px;color:#6b7280;font-family:Arial,sans-serif;font-size:15px;line-height:1.6;">You have received a new inquiry from the contact form on your website. Here are the submission details:</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;margin:0 0 30px;border-collapse:collapse;">
            ${field("Name", request.name)}
            ${field("Email", request.email, "email")}
            ${field("Phone", request.phone)}
            ${field("Interested In", request.service)}
            ${field("Subject", request.service)}
                </table>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:20px 24px;border-left:3px solid #c9a86a;border-radius:0 8px 8px 0;background:#f8fafc;">
                      <p style="margin:0 0 10px;color:#0d1b2a;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:.05em;line-height:1.4;text-transform:uppercase;">Message Body</p>
                      <p style="margin:0;color:#4b5563;font-family:Arial,sans-serif;font-size:15px;line-height:1.65;white-space:pre-wrap;">${escapeHtml(request.message)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 40px;border-top:1px solid #f3f4f6;background:#f9fafb;text-align:center;">
                <p style="margin:0 0 8px;color:#9ca3af;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;">This email was sent automatically from <a href="https://goexecution.com" style="color:#0d1b2a;font-weight:600;text-decoration:none;">goexecution.com</a>.</p>
                <p style="margin:0;color:#9ca3af;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;">© ${year} <a href="https://goexecution.com" style="color:#0d1b2a;text-decoration:none;">Go Execution</a>. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
    text: `NEW GO EXECUTION CONSULTATION REQUEST\n\nName: ${request.name}\nEmail: ${request.email}\nPhone: ${request.phone}\nService: ${request.service}\n\nMessage:\n${request.message}`,
  };
}
