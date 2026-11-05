"use client";

import Image from "next/image";
import { useRef } from "react";
import { useImageZoom } from "@/hooks/use-image-zoom";
import { cn } from "@/lib/utils";

type ZoomImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Kelas untuk pembungkus (ukuran, posisi). Pembungkus selalu `overflow-hidden`. */
  className?: string;
  imageClassName?: string;
};

/** Gambar latar `object-cover` yang membesar perlahan mengikuti scroll di dalam pembungkusnya. */
export function ZoomImage({ src, alt, sizes, priority, className, imageClassName }: ZoomImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useImageZoom(wrapperRef, imageRef);

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover will-change-transform", imageClassName)}
      />
    </div>
  );
}
