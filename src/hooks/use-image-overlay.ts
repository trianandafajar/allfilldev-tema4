"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Gambar disingkap oleh tirai warna latar (`--height` pada container, dipakai pseudo-element),
 * lalu mengecil dari 1.2x. Dengan `zoom`, gambar ikut membesar mengikuti scroll.
 */
export function useImageOverlay(
  containerRef: RefObject<HTMLElement | null>,
  imageRef: RefObject<HTMLElement | null>,
  zoom = false
) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    if (prefersReducedMotion()) {
      gsap.set(image, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        })
        .to(container, { duration: 0.7, "--height": "100%", ease: "power2.out" })
        .to(container, { duration: 0.7, "--height": "0%", ease: "power2.out" })
        .to(image, { duration: 0.2, opacity: 1, delay: -0.7 })
        .from(image, { duration: 1, scale: 1.2, ease: "power2.inOut", delay: -0.5 });

      if (zoom) {
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
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef, imageRef, zoom]);
}
