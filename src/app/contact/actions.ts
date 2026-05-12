"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  ok: boolean;
  message: string;
  values?: Record<string, string>;
};

function buildEmailHtml(v: Record<string, string>) {
  const row = (label: string, value: string) =>
    value
      ? `<tr class="data-row">
          <td class="label-cell" style="padding:10px 0;border-bottom:1px solid #073d27;width:160px;vertical-align:top;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#7a8d83;font-family:sans-serif;white-space:nowrap">${label}</td>
          <td class="value-cell" style="padding:10px 0 10px 16px;border-bottom:1px solid #073d27;vertical-align:top;font-size:15px;color:#ebefee;font-family:sans-serif;word-break:break-word">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    @media only screen and (max-width:600px) {
      .outer-pad { padding: 20px 8px !important; }
      .header-pad { padding: 24px 20px 22px !important; border-radius: 12px 12px 0 0 !important; }
      .header-brand { display: block !important; }
      .header-badge { display: block !important; margin-top: 12px !important; text-align: left !important; }
      .header-title { font-size: 18px !important; margin-top: 18px !important; }
      .body-pad { padding: 24px 20px !important; }
      .footer-pad { padding: 20px !important; border-radius: 0 0 12px 12px !important; }
      .footer-left { display: block !important; width: 100% !important; }
      .footer-right { display: block !important; width: 100% !important; text-align: left !important; padding-top: 10px !important; }
      .label-cell { display: block !important; width: 100% !important; padding-bottom: 2px !important; border-bottom: none !important; }
      .value-cell { display: block !important; width: 100% !important; padding: 0 0 10px 0 !important; border-bottom: 1px solid #073d27 !important; }
      .reply-btn { display: block !important; text-align: center !important; }
      .reply-btn a { display: block !important; width: 100% !important; box-sizing: border-box !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#010e08">
  <table width="100%" cellpadding="0" cellspacing="0" class="outer-pad" style="background-color:#010e08;padding:40px 16px">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px">

          <!-- Header -->
          <tr>
            <td class="header-pad" style="background:linear-gradient(135deg,#023320 0%,#01180e 100%);border-radius:16px 16px 0 0;padding:40px 40px 36px;border:1px solid #073d27;border-bottom:none">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="header-brand">
                    <span style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#ebefee;letter-spacing:-0.5px">FMY</span>
                    <span style="font-family:sans-serif;font-size:11px;color:#7a8d83;letter-spacing:0.12em;text-transform:uppercase;display:block;margin-top:2px">Chartered Accountants</span>
                  </td>
                  <td class="header-badge" align="right" valign="middle">
                    <span style="display:inline-block;background-color:#0f4a31;border:1px solid #1a583c;border-radius:6px;padding:5px 12px;font-family:sans-serif;font-size:11px;color:#d4b661;letter-spacing:0.06em;text-transform:uppercase">New Enquiry</span>
                  </td>
                </tr>
              </table>
              <div class="header-title" style="margin-top:28px;font-family:Georgia,serif;font-size:22px;color:#ebefee;line-height:1.3">
                New enquiry from <span style="color:#d4b661">${v.name}</span>${v.company ? `<span style="color:#7a8d83;font-size:17px"> &mdash; ${v.company}</span>` : ""}
              </div>
              <div style="margin-top:8px;font-family:sans-serif;font-size:14px;color:#7a8d83">
                Submitted via the FMY website contact form
              </div>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#d4b661 0%,#e8cf8a 50%,#c9a449 100%);border-left:1px solid #073d27;border-right:1px solid #073d27"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="body-pad" style="background-color:#01180e;border:1px solid #073d27;border-top:none;border-bottom:none;padding:36px 40px">

              <!-- Contact details -->
              <div style="font-family:sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#7a8d83;margin-bottom:8px">Contact</div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
                ${row("Name", v.name)}
                ${row("Email", `<a href="mailto:${v.email}" style="color:#d4b661;text-decoration:none">${v.email}</a>`)}
                ${row("Phone", v.phone)}
              </table>

              <!-- Business details -->
              <div style="font-family:sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#7a8d83;margin-bottom:8px">Business</div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
                ${row("Business Name", v.company)}
                ${row("Type", v.businessType)}
                ${row("Annual Turnover", v.annualTurnover)}
                ${row("Annual Profit", v.annualProfit)}
                ${row("VAT Registered", v.vatRegistered)}
                ${row("Employees", v.employees)}
              </table>

              <!-- Service -->
              ${v.service ? `
              <div style="font-family:sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#7a8d83;margin-bottom:8px">Service of Interest</div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
                ${row("Service", v.service)}
              </table>` : ""}

              <!-- Message -->
              <div style="font-family:sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#7a8d83;margin-bottom:12px">Message</div>
              <div style="background-color:#023320;border:1px solid #073d27;border-left:3px solid #d4b661;border-radius:0 8px 8px 0;padding:20px 24px;font-family:sans-serif;font-size:15px;color:#ebefee;line-height:1.7;white-space:pre-wrap;word-break:break-word">${v.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

              <!-- Reply CTA -->
              <div class="reply-btn" style="margin-top:32px;text-align:center">
                <a href="mailto:${v.email}" style="display:inline-block;background:linear-gradient(135deg,#d4b661,#c9a449);color:#01180e;font-family:sans-serif;font-size:14px;font-weight:700;letter-spacing:0.04em;text-decoration:none;padding:13px 32px;border-radius:8px">Reply to ${v.name}</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-pad" style="background-color:#023320;border:1px solid #073d27;border-top:1px solid #073d27;border-radius:0 0 16px 16px;padding:24px 40px">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="footer-left" style="font-family:sans-serif;font-size:12px;color:#7a8d83;line-height:1.6">
                    <strong style="color:#b8c5be">FMY Accountants Limited</strong><br>
                    86-90 Paul Street, London, EC2A 4NE<br>
                    Regulated by the ICAEW &mdash; Firm No. C011008484
                  </td>
                  <td class="footer-right" align="right" valign="middle" style="font-family:sans-serif;font-size:11px;color:#2d6a4f;white-space:nowrap">
                    fmyaccountants.co.uk
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values: Record<string, string> = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    businessType: String(formData.get("businessType") ?? "").trim(),
    annualTurnover: String(formData.get("annualTurnover") ?? "").trim(),
    annualProfit: String(formData.get("annualProfit") ?? "").trim(),
    vatRegistered: String(formData.get("vatRegistered") ?? "").trim(),
    employees: String(formData.get("employees") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (!values.name || !values.email || !values.message) {
    return {
      ok: false,
      message: "Please fill in your name, email, and message.",
      values,
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return {
      ok: false,
      message: "That email address doesn't look right.",
      values,
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"FMY Website" <${process.env.GMAIL_USER}>`,
    to: "info@fmyaccountants.co.uk",
    replyTo: values.email,
    subject: `New enquiry from ${values.name}${values.company ? ` — ${values.company}` : ""}`,
    html: buildEmailHtml(values),
    text: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.company && `Business Name: ${values.company}`,
      values.businessType && `Type of Business: ${values.businessType}`,
      values.annualTurnover && `Annual Turnover: ${values.annualTurnover}`,
      values.annualProfit && `Annual Profit: ${values.annualProfit}`,
      values.vatRegistered && `VAT Registered: ${values.vatRegistered}`,
      values.employees && `Employees: ${values.employees}`,
      values.service && `Service: ${values.service}`,
      ``,
      values.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return {
    ok: true,
    message:
      "Thanks, a partner will be in touch within one business day. Check your inbox for confirmation.",
  };
}
