export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

const field = (label: string, value: string, kind?: "email") => `
  <tr>
    <td width="30%" valign="top" style="width:30%;padding:14px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:.05em;line-height:1.5;text-transform:uppercase;">${label}</td>
    <td valign="top" style="padding:14px 0;border-bottom:1px solid #f3f4f6;color:#0d1b2a;font-family:Arial,sans-serif;font-size:15px;font-weight:500;line-height:1.5;">
      ${kind === "email" ? `<a href="mailto:${encodeURIComponent(value)}" style="color:#c9a86a;font-weight:600;text-decoration:none;">${escapeHtml(value)}</a>` : escapeHtml(value)}
    </td>
  </tr>`;

function formatMessageHtml(rawMessage: string): string {
  const escaped = escapeHtml(rawMessage);
  const lines = escaped.split("\n");

  return lines
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return `<div style="height:10px;"></div>`;
      if (trimmed.startsWith("---") && trimmed.endsWith("---")) {
        const title = trimmed.replace(/---/g, "").trim();
        return `<div style="margin:20px 0 12px;padding:10px 14px;background:#0d1b2a;color:#c9a86a;font-weight:700;font-size:13px;border-radius:8px;letter-spacing:0.05em;text-transform:uppercase;">${title}</div>`;
      }

      // Match line headers like "1. Name to appear on logo:" or "Submitter Name:"
      const match = trimmed.match(/^([0-9]+\.\s*[^:]+:|[^:]+:)(.*)$/);
      if (match) {
        const [, label, value] = match;
        const formattedVal = value.trim() ? value.trim() : `<span style="color:#9ca3af;font-style:italic;">N/A</span>`;
        return `
          <div style="margin-bottom:10px;padding:12px 16px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.02);">
            <div style="color:#0d1b2a;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.03em;text-transform:uppercase;margin-bottom:4px;">${label}</div>
            <div style="color:#374151;font-family:Arial,sans-serif;font-size:14.5px;line-height:1.6;font-weight:500;">${formattedVal}</div>
          </div>`;
      }

      return `<div style="margin-bottom:6px;color:#374151;font-family:Arial,sans-serif;font-size:14.5px;line-height:1.6;">${trimmed}</div>`;
    })
    .join("");
}

export function createContactRequestEmail(request: ContactRequest) {
  const year = new Date().getFullYear();

  // Dynamic Header Title
  let headerTitle = "New Contact Form Submission";
  let subText = "You have received a new inquiry from the contact form on your website. Here are the submission details:";

  if (request.service.includes("Logo Design")) {
    headerTitle = "New Logo Design Brief Submission";
    subText = "You have received a new Logo Design Brief submission from your website. Here are the full project requirements:";
  } else if (request.service.includes("Website Project") || request.service.includes("Questionnaire")) {
    headerTitle = "New Website Project Brief Submission";
    subText = "You have received a new Website Project Brief submission from your website. Here are the full project requirements:";
  }

  const formattedHtmlBody = formatMessageHtml(request.message);

  return {
    html: `<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${headerTitle}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f4f6f8;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table role="presentation" width="620" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:620px;overflow:hidden;border:1px solid rgba(13,27,42,.08);border-radius:16px;background:#ffffff;box-shadow:0 10px 30px rgba(0,0,0,0.05);">
            <tr>
              <td align="center" style="padding:28px 40px;border-bottom:3px solid #c9a86a;background:#0d1b2a;text-align:center;">
                <img src="https://goexecution.com/assets/images/logo-light.png" width="200" alt="Go Execution" style="display:inline-block;width:200px;max-width:100%;height:auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding:36px 40px;">
                <h1 style="margin:0 0 16px;padding:0 0 12px;border-bottom:2px solid #f3f4f6;color:#0d1b2a;font-family:Arial,sans-serif;font-size:20px;font-weight:800;letter-spacing:.03em;line-height:1.35;text-transform:uppercase;">${headerTitle}</h1>
                <p style="margin:0 0 28px;color:#6b7280;font-family:Arial,sans-serif;font-size:15px;line-height:1.6;">${subText}</p>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;margin:0 0 28px;border-collapse:collapse;">
            ${field("Client Name", request.name)}
            ${field("Email Address", request.email, "email")}
            ${field("Phone Number", request.phone)}
            ${field("Type of Service", request.service)}
                </table>

                <div style="padding:24px;border-left:4px solid #c9a86a;border-radius:0 12px 12px 0;background:#f8fafc;margin-top:20px;">
                  <div style="margin:0 0 16px;color:#0d1b2a;font-family:Arial,sans-serif;font-size:13px;font-weight:800;letter-spacing:.05em;line-height:1.4;text-transform:uppercase;">Detailed Submission Brief</div>
                  ${formattedHtmlBody}
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 40px;border-top:1px solid #f3f4f6;background:#f9fafb;text-align:center;">
                <p style="margin:0 0 8px;color:#9ca3af;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;">This email was generated automatically from <a href="https://goexecution.com" style="color:#0d1b2a;font-weight:600;text-decoration:none;">goexecution.com</a>.</p>
                <p style="margin:0;color:#9ca3af;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;">© ${year} <a href="https://goexecution.com" style="color:#0d1b2a;text-decoration:none;">Go Execution</a>. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
    text: `${headerTitle.toUpperCase()}\n\nName: ${request.name}\nEmail: ${request.email}\nPhone: ${request.phone}\nService: ${request.service}\n\nSubmission Details:\n${request.message}`,
  };
}
