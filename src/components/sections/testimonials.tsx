"use client";

import { useState } from "react";
import { TestimonialSlide } from "@/components/sections/testimonial-slide";
import { CarouselArrow } from "@/components/shared/carousel-arrow";
import { Carousel, CarouselContent, type CarouselApi } from "@/components/ui/carousel";
import { useCarouselControls, useCarouselState } from "@/hooks/use-carousel-state";
import type { testimonials as testimonialsData } from "@/data/home";

const carouselOptions = { loop: true };

export function Testimonials({ items }: { items: typeof testimonialsData }) {
  const [api, setApi] = useState<CarouselApi>();
  const { selected } = useCarouselState(api);
  const { scrollPrev, scrollNext } = useCarouselControls(api);

  return (
    <section className="container">
      <div className="h-section" />
      <Carousel opts={carouselOptions} setApi={setApi} aria-label="Testimoni tamu" className="overflow-hidden">
        <CarouselContent className="ml-0">
          {items.map((item, i) => (
            <TestimonialSlide
              key={item.name}
              item={item}
              index={i}
              total={items.length}
              active={i === selected}
            />
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-[30px] flex justify-center gap-[50px] pl-2.5 lg:mt-[60px]">
        <CarouselArrow direction="prev" label="Testimoni sebelumnya" onClick={scrollPrev} />
        <CarouselArrow direction="next" label="Testimoni berikutnya" onClick={scrollNext} />
      </div>
    </section>
  );
}
