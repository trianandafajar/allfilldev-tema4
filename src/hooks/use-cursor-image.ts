"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

/** Selisih horizontal antara kursor dan gambar. */
const OFFSET_X = 50;

/**
 * Gambar di dalam `itemRef` muncul dan mengikuti kursor saat hover; hilang saat kursor keluar.
 * Posisi digerakkan lewat transform (`quickTo`), jadi tiap mousemove tidak membuat tween baru
 * dan tidak memicu layout.
 */
export function useCursorImage(
  itemRef: RefObject<HTMLElement | null>,
  imageRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const item = itemRef.current;
    const image = imageRef.current;
    if (!item || !image) return;

    const moveX = gsap.quickTo(image, "x", { duration: 0.5, ease: "power3.out" });
    const moveY = gsap.quickTo(image, "y", { duration: 0.5, ease: "power3.out" });
    const position = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      return { x: e.clientX - rect.left + OFFSET_X, y: e.clientY - rect.top };
    };

    const enter = (e: MouseEvent) => {
      // Mulai dari kursor, bukan dari posisi terakhir, supaya gambar tidak meluncur melintasi baris.
      gsap.set(image, position(e));
      gsap.to(image, { opacity: 1, duration: 0.3, ease: "power3.out", overwrite: "auto" });
    };
    const move = (e: MouseEvent) => {
      const { x, y } = position(e);
      moveX(x);
      moveY(y);
    };
    const leave = () => {
      gsap.to(image, { opacity: 0, duration: 0.8, ease: "power3.out", overwrite: "auto" });
    };

    item.addEventListener("mouseenter", enter);
    item.addEventListener("mousemove", move);
    item.addEventListener("mouseleave", leave);
    return () => {
      item.removeEventListener("mouseenter", enter);
      item.removeEventListener("mousemove", move);
      item.removeEventListener("mouseleave", leave);
      gsap.killTweensOf(image);
    };
  }, [itemRef, imageRef]);
}
