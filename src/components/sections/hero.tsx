"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroSlide } from "@/components/sections/hero-slide";
import { CircleArrowButton } from "@/components/shared/circle-arrow-button";
import { Carousel, CarouselContent, type CarouselApi } from "@/components/ui/carousel";
import { useCarouselControls, useCarouselState } from "@/hooks/use-carousel-state";
import type { heroSlides } from "@/data/home";

const carouselOptions = { loop: true };

type HeroProps = {
  slides: typeof heroSlides;
  background: { src: string; width: number; height: number };
};

export function Hero({ slides, background }: HeroProps) {
  const [api, setApi] = useState<CarouselApi>();
  const { selected } = useCarouselState(api);
  const { scrollPrev, scrollNext } = useCarouselControls(api);

  return (
    <section>
      {/*
        Tinggi hero mengikuti konten: di layar pendek (laptop dengan skala Windows 125% atau 150%)
        hero tumbuh, bukan menimpa header. `py` menyisakan ruang untuk header tetap di atas.
      */}
      <div className="relative flex min-h-[calc(100svh+10px)] items-center pt-32 pb-44 md:min-h-svh lg:min-h-[calc(100svh+clamp(0px,7.8vw,150px))] lg:py-32">
        <Image
          src={background.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-[9] object-cover object-[72%_50%] lg:object-center"
        />
        {/* Di bawah lg teks selebar layar dan menimpa foto, jadi latar digelapkan agar tetap terbaca. */}
        <div aria-hidden className="absolute inset-0 z-[9] bg-linear-to-r from-background/90 via-background/65 to-background/20 lg:hidden" />
        <div className="container relative z-10">
          <Carousel
            opts={carouselOptions}
            setApi={setApi}
            aria-label="Sorotan restoran"
            className="w-full overflow-hidden lg:w-1/2"
          >
            <CarouselContent className="ml-0">
              {slides.map((slide, i) => (
                <HeroSlide
                  key={slide.title}
                  slide={slide}
                  index={i}
                  total={slides.length}
                  active={i === selected}
                />
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="absolute bottom-[13vh] left-(--gutter) z-10 lg:bottom-[max(2rem,25vh)] lg:left-[calc(var(--gutter)+(100%-2*var(--gutter))/2-4.5rem)]">
          <div className="flex justify-start gap-11">
            <CircleArrowButton direction="prev" label="Slide sebelumnya" onClick={scrollPrev} />
            <CircleArrowButton direction="next" label="Slide berikutnya" onClick={scrollNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
