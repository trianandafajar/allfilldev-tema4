"use client";

import { useLayoutEffect, type RefObject } from "react";
import SplitType from "split-type";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type TitleVariant = "rise" | "flip";

/**
 * Memecah judul menjadi huruf lalu memunculkannya saat masuk viewport.
 * `rise`: huruf naik dan membesar (judul tengah). `flip`: huruf berputar dari bawah.
 */
export function useSectionTitle(
  titleRef: RefObject<HTMLElement | null>,
  scopeRef: RefObject<HTMLElement | null>,
  variant: TitleVariant = "rise",
  text?: string
) {
  useLayoutEffect(() => {
    const title = titleRef.current;
    if (!title || prefersReducedMotion()) return;

    const split = new SplitType(title, { types: "words,chars" });
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: title, start: "top 90%", end: "bottom 20%" },
      });

      if (variant === "rise") {
        gsap.set(title, { overflow: "hidden" });
        tl.from(split.chars, {
          duration: 0.8,
          y: 200,
          autoAlpha: 0,
          scale: 0.1,
          stagger: { from: "start", axis: "x", amount: 0.3, ease: "quint.out" },
        });
      } else {
        tl.from(split.chars, {
          duration: 0.8,
          y: 80,
          opacity: 0,
          rotationX: 100,
          transformOrigin: "0% 30% -30",
          ease: "expo.inOut",
          stagger: 0.05,
        });
      }
    }, scopeRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [titleRef, scopeRef, variant, text]);
}
