"use client";

import { useRef, type ComponentProps } from "react";
import { growLineStartScale, useGrowLine } from "@/hooks/use-grow-line";
import { cn } from "@/lib/utils";

type GrowLineProps = Omit<ComponentProps<"div">, "ref"> & {
  from: string;
  to: string;
  scrub?: number;
  duration?: number;
  delay?: number;
  start?: string;
  end?: string;
  /** Sisi tempat garis menempel saat memanjang. Pakai `right` untuk garis yang di-anchor ke kanan. */
  origin?: "left" | "right";
};

/**
 * Garis tipis berwarna border yang memanjang saat di-scroll. Warna bisa diganti lewat `className`.
 * Lebarnya selalu `to`; pemanjangan dilakukan dengan `scaleX` (tanpa layout ulang).
 */
export function GrowLine({
  from,
  to,
  scrub,
  duration,
  delay,
  start,
  end,
  origin = "left",
  className,
  ...props
}: GrowLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  useGrowLine(ref, { from, to, scrub, duration, delay, start, end, origin });

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("h-px bg-border", className)}
      style={{
        width: to,
        transform: `scaleX(${growLineStartScale(from, to)})`,
        transformOrigin: `${origin} center`,
      }}
      {...props}
    />
  );
}
