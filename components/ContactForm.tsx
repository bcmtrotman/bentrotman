"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "failed";

export default function ContactForm({ commercialEmail }: { commercialEmail: string }) {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      form.reset();
    } catch {
      setState("failed");
    }
  }

  if (state === "sent") {
    return <p className="chrome text-green">Message received 13:13. No further action required.</p>;
  }

  const field = "w-full bg-bg text-fg border border-fg px-3 py-2 font-sans text-[17px] lg:text-[18px]";

  return (
    <form onSubmit={onSubmit} className="flex max-w-[66ch] flex-col gap-4" noValidate={false}>
      <label className="flex flex-col gap-1">
        <span className="chrome-xs text-dim">Name</span>
        <input name="name" type="text" required autoComplete="name" className={field} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="chrome-xs text-dim">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="chrome-xs text-dim">Message</span>
        <textarea name="message" required rows={7} className={field} />
      </label>
      {/* Honeypot. Humans never see it. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="chrome-block bg-cyan px-4 py-2 text-bg hover:bg-yellow disabled:opacity-60"
        >
          {state === "sending" ? "Transmitting" : "Transmit"}
        </button>
        {state === "failed" && (
          <p className="chrome text-red">
            Transmission failed. Try again or email{" "}
            <a href={`mailto:${commercialEmail}`} className="text-red underline">
              {commercialEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
