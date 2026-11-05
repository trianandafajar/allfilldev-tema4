"use client";

import { useState } from "react";
import { CtaButton } from "@/components/shared/cta-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const field = "rounded-none border-border bg-transparent px-2.5 text-base text-bright md:text-base dark:bg-transparent";

/** Form kirim komentar (nama, email, isi). Belum terhubung ke backend. */
export function BlogCommentForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="comment-form" aria-labelledby="comment-form-title">
      <h3 id="comment-form-title" className="mb-5 text-display text-bright lg:mb-[60px]">
        Tulis Komentar
      </h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: kirim FormData(event.currentTarget) ke API komentar sebelum produksi.
          setSubmitted(true);
        }}
      >
        <div className="mb-5 flex gap-2">
          <label htmlFor="comment-name" className="sr-only">
            Nama
          </label>
          <Input
            id="comment-name"
            name="name"
            autoComplete="name"
            placeholder="Nama"
            required
            className={`${field} h-[50px] w-1/2`}
          />
          <label htmlFor="comment-email" className="sr-only">
            Email
          </label>
          <Input
            id="comment-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
            className={`${field} h-[50px] w-1/2`}
          />
        </div>
        <label htmlFor="comment-text" className="sr-only">
          Komentar
        </label>
        <Textarea
          id="comment-text"
          name="comment"
          rows={5}
          placeholder="Tulis komentar Anda."
          required
          className={`${field} min-h-[130px] py-2.5`}
        />
        <div className="h-5 lg:h-10" />
        <CtaButton variant="light">Kirim Komentar</CtaButton>
        <p role="status" className="mt-4 text-bright empty:hidden">
          {submitted ? "Terima kasih. Komentar Anda sudah kami terima." : ""}
        </p>
      </form>
    </section>
  );
}
