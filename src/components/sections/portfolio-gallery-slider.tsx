"use client";

import Image from "next/image";
import { useState } from "react";
import { CircleArrowButton } from "@/components/shared/circle-arrow-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCarouselControls } from "@/hooks/use-carousel-state";
import type { ImageAsset } from "@/data/types";

const carouselOptions = { loop: true, align: "start" } as const;

type PortfolioGallerySliderProps = {
  images: readonly ImageAsset[];
  label: string;
};

/**
 * Slider foto hidangan. Tiap slide selebar kolomnya dan fotonya dipusatkan: di layar lebar
 * foto tampil ukuran asli dan terpotong sama di kiri dan kanan. Panah bulat ada di kiri bawah.
 */
export function PortfolioGallerySlider({ images, label }: PortfolioGallerySliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const { scrollPrev, scrollNext } = useCarouselControls(api);

  return (
    <div className="relative w-full min-w-0 overflow-hidden lg:w-auto lg:flex-1">
      <Carousel opts={carouselOptions} setApi={setApi} aria-label={label}>
        <CarouselContent className="ml-0">
          {images.map((image, i) => (
            <CarouselItem
              key={image.src}
              aria-label={`${i + 1} dari ${images.length}`}
              className="flex justify-center overflow-hidden pl-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 992px) 900px, 100vw"
                priority={i === 0}
                className="h-auto w-full shrink-0 lg:w-[900px] lg:max-w-none"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-[50px] left-0 z-10 flex gap-[44px] p-[30px]">
        <CircleArrowButton direction="prev" label="Foto sebelumnya" onClick={scrollPrev} />
        <CircleArrowButton direction="next" label="Foto berikutnya" onClick={scrollNext} />
      </div>
    </div>
  );
}
