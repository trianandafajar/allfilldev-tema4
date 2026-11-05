"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

/** Indeks slide aktif dan jumlah snap dari Embla, dibaca lewat useSyncExternalStore. */
export function useCarouselState(api: CarouselApi | undefined) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!api) return () => {};
      api.on("select", onChange);
      api.on("reInit", onChange);
      return () => {
        api.off("select", onChange);
        api.off("reInit", onChange);
      };
    },
    [api]
  );

  const selected = useSyncExternalStore(
    subscribe,
    () => api?.selectedScrollSnap() ?? 0,
    () => 0
  );
  const count = useSyncExternalStore(
    subscribe,
    () => api?.scrollSnapList().length ?? 0,
    () => 0
  );

  return { selected, count };
}

/**
 * Penggerak carousel dengan identitas fungsi yang stabil (berubah hanya saat `api` berganti),
 * supaya tombol panah/dots yang di-`memo` tidak ikut render saat slide berpindah.
 */
export function useCarouselControls(api: CarouselApi | undefined) {
  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);
  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return { scrollPrev, scrollNext, scrollTo };
}
