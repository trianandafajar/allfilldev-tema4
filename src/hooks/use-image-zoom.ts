"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/** Gambar latar membesar perlahan (1x → 1.3x) mengikuti scroll di dalam `containerRef`. */
export function useImageZoom(
  containerRef: RefObject<HTMLElement | null>,
  imageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { scale: 1 },
        {
          scale: 1.3,
          duration: 3.5,
          ease: "power1.inOut",
          transformOrigin: "50% 50%",
          scrollTrigger: { trigger: container, scrub: 1 },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [containerRef, imageRef]);
}
