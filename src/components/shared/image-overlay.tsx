"use client";

import Image from "next/image";
import { useRef } from "react";
import { useImageOverlay } from "@/hooks/use-image-overlay";
import type { ImageAsset } from "@/data/types";
import { cn } from "@/lib/utils";

type ImageOverlayProps = {
  image: ImageAsset;
  sizes: string;
  /** Gambar ikut membesar mengikuti scroll. */
  zoom?: boolean;
  className?: string;
};

/** Gambar disingkap tirai warna latar saat masuk viewport. */
export function ImageOverlay({ image, sizes, zoom = false, className }: ImageOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useImageOverlay(containerRef, imageRef, zoom);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden [--height:0%]",
        "after:absolute after:bottom-0 after:left-0 after:h-(--height) after:w-full after:bg-background",
        className
      )}
    >
      <Image
        ref={imageRef}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className={cn("h-auto w-full opacity-0", zoom && "will-change-transform")}
      />
    </div>
  );
}
