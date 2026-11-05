"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/scroll";
import { cn } from "@/lib/utils";

/** Tombol kembali ke atas; muncul setelah halaman di-scroll. */
export function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Kembali ke atas"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      onClick={scrollToTop}
      className={cn(
        "fixed right-[15px] z-[1111] flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-dark p-[5px] text-bright shadow-md transition-all duration-[400ms] hover:bg-primary hover:text-dark sm:right-10",
        show ? "top-[85%]" : "top-[110%]"
      )}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor" />
      </svg>
    </button>
  );
}
