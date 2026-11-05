"use client";

import { useState } from "react";
import { CarouselArrow } from "@/components/shared/carousel-arrow";
import { CarouselDots } from "@/components/shared/carousel-dots";
import { DishCard } from "@/components/shared/dish-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCarouselControls, useCarouselState } from "@/hooks/use-carousel-state";
import type { dishShowcase } from "@/data/home";

const carouselOptions = { loop: true, align: "center" } as const;
const dotLabel = (index: number) => `Ke hidangan ${index + 1}`;

type DishCarouselProps = {
  dishes: (typeof dishShowcase)["dishes"];
};

export function DishCarousel({ dishes }: DishCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const { selected, count } = useCarouselState(api);
  const { scrollPrev, scrollNext, scrollTo } = useCarouselControls(api);

  return (
    <>
      <Carousel
        opts={carouselOptions}
        setApi={setApi}
        aria-label="Etalase hidangan"
        className="w-screen max-w-full overflow-hidden"
      >
        <CarouselContent className="ml-0">
          {dishes.map((dish, i) => (
            <CarouselItem
              key={dish.slug}
              aria-label={`${i + 1} dari ${dishes.length}`}
              className="basis-full pl-0 md:basis-1/2 lg:basis-1/4"
            >
              <DishCard
                dish={dish}
                sizes="(min-width: 992px) 25vw, (min-width: 768px) 50vw, 100vw"
                active={i === selected}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="container">
        <div className="relative z-[2] mt-[30px] flex items-center justify-center gap-[25px] md:gap-9">
          <CarouselArrow
            direction="prev"
            label="Hidangan sebelumnya"
            onClick={scrollPrev}
          />
          <CarouselDots
            count={count}
            selected={selected}
            onSelect={scrollTo}
            label={dotLabel}
            className="w-[60%] md:w-1/5"
          />
          <CarouselArrow
            direction="next"
            label="Hidangan berikutnya"
            onClick={scrollNext}
          />
        </div>
      </div>
    </>
  );
}
