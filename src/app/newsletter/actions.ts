"use server";

export type NewsletterState = {
  ok: boolean;
  message: string;
  values?: { name: string; email: string };
};

export async function subscribe(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!name || !email) {
    return {
      ok: false,
      message: "Please enter your name and email.",
      values: { name, email },
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      message: "That email address doesn't look right.",
      values: { name, email },
    };
  }

  // In production: forward to mailing-list provider (Mailchimp, Beehiiv, …).
  // For now, log so the demo submission works end-to-end.
  console.log("[newsletter] new subscriber", { name, email });

  return {
    ok: true,
    message:
      "You're on the list. The next FMY Brief lands in your inbox on the first of the month.",
  };
}
