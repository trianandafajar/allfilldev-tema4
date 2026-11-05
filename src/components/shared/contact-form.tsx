"use client";

import { useState } from "react";
import { CtaButton } from "@/components/shared/cta-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const field = "rounded-none border-border bg-transparent px-2.5 text-base text-bright md:text-base dark:bg-transparent";

/** Form kontak sederhana (nama, email, pesan). Belum terhubung ke backend. */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: kirim FormData(event.currentTarget) ke API kontak sebelum produksi.
        setSubmitted(true);
      }}
    >
      <label htmlFor="contact-name" className="sr-only">
        Nama
      </label>
      <Input
        id="contact-name"
        name="name"
        autoComplete="name"
        placeholder="Nama"
        required
        className={`${field} mb-5 h-[50px]`}
      />
      <label htmlFor="contact-email" className="sr-only">
        Email
      </label>
      <Input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        required
        className={`${field} mb-5 h-[50px]`}
      />
      <label htmlFor="contact-message" className="sr-only">
        Pesan
      </label>
      <Textarea
        id="contact-message"
        name="message"
        rows={6}
        placeholder="Pesan Anda"
        required
        className={`${field} min-h-[150px] py-2.5`}
      />
      <div className="h-stack-sm" />
      <CtaButton variant="light">Kirim Pesan</CtaButton>
      <p role="status" className="mt-4 text-bright empty:hidden">
        {submitted ? "Terima kasih. Pesan Anda sudah kami terima dan akan segera kami balas." : ""}
      </p>
    </form>
  );
}
