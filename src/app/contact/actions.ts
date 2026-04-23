"use server";

export type ContactState = {
  ok: boolean;
  message: string;
  values?: Record<string, string>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
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

  // In production: forward to an inbox, CRM, or ticket system here.
  // For now, log server-side so the demo submit works end-to-end.
  console.log("[contact] new enquiry", values);

  return {
    ok: true,
    message:
      "Thanks — a partner will be in touch within one business day. Check your inbox for confirmation.",
  };
}
