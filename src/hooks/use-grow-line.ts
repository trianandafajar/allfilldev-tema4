"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type GrowLineOptions = {
  from: string;
  to: string;
  /** Dengan `scrub`, lebar mengikuti scroll. Tanpa `scrub`, animasi diputar sekali saat masuk viewport. */
  scrub?: number;
  duration?: number;
  delay?: number;
  start?: string;
  end?: string;
  /** Elemen pemicu scroll; default garis itu sendiri. */
  triggerRef?: RefObject<HTMLElement | null>;
  /** Sisi tempat garis menempel saat memanjang. */
  origin?: "left" | "right";
};

/** Rasio `from` terhadap `to` bila satuannya sama (mis. "2%"/"13%"); selain itu garis mulai dari 0. */
export function growLineStartScale(from: string, to: string) {
  const a = parseFloat(from);
  const b = parseFloat(to);
  const sameUnit = from.replace(/[\d.\s-]/g, "") === to.replace(/[\d.\s-]/g, "");
  return sameUnit && b > 0 && a >= 0 ? Math.min(a / b, 1) : 0;
}

/**
 * Garis dekoratif memanjang. Lebar elemen dikunci ke `to`; yang dianimasikan adalah `scaleX`
 * (dari `from/to` ke 1), jadi tidak memicu layout di setiap frame scroll.
 * Dipakai about, menu makanan, dan footer.
 */
export function useGrowLine(
  lineRef: RefObject<HTMLElement | null>,
  {
    from,
    to,
    scrub,
    duration = 0.5,
    delay = 0,
    start = "top 90%",
    end = "bottom 10%",
    triggerRef,
    origin = "left",
  }: GrowLineOptions
) {
  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    if (prefersReducedMotion()) {
      gsap.set(line, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: growLineStartScale(from, to) },
        {
          scaleX: 1,
          duration,
          delay,
          ease: scrub === undefined ? "power1.out" : "none",
          transformOrigin: `${origin} center`,
          scrollTrigger: {
            trigger: triggerRef?.current ?? line,
            start,
            end,
            scrub: scrub ?? false,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [lineRef, triggerRef, from, to, scrub, duration, delay, start, end, origin]);
}
