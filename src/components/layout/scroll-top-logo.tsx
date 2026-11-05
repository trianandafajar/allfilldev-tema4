"use client";

import Image from "next/image";
import { scrollToTop } from "@/lib/scroll";

/** Logo footer dengan panah di atasnya; diklik untuk kembali ke atas halaman. */
export function ScrollTopLogo() {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="group inline-block cursor-pointer bg-transparent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="13"
        viewBox="0 0 30 13"
        fill="none"
        aria-hidden
        className="mx-auto mb-2.5"
      >
        <path
          d="M28.991 12.2063L14.8322 1L0.67334 12.2063"
          className="stroke-bright transition-colors group-hover:stroke-primary"
          strokeLinecap="round"
        />
      </svg>
      <Image
        src="/images/logo/elegencia-wordmark.png"
        alt="Elegencia"
        width={111}
        height={22}
        className="h-auto w-[111px]"
      />
    </button>
  );
}
