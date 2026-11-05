import Image from "next/image";
import { memo } from "react";
import { CarouselItem } from "@/components/ui/carousel";
import type { testimonials } from "@/data/home";
import { cn } from "@/lib/utils";

type TestimonialData = (typeof testimonials)[number];

type TestimonialSlideProps = {
  item: TestimonialData;
  index: number;
  total: number;
  /** Slide yang sedang tampil memicu animasi muncul bertahap. */
  active: boolean;
};

const ease = "ease-[cubic-bezier(0.7,-0.56,0.27,1.6)]";
const reveal = cn(
  "relative opacity-0 transition-[opacity,translate] duration-500",
  ease,
  "group-data-[active=true]/slide:translate-y-0 group-data-[active=true]/slide:opacity-100"
);

/** Satu testimoni. Di-`memo` supaya pindah slide hanya merender dua slide. */
export const TestimonialSlide = memo(function TestimonialSlide({
  item,
  index,
  total,
  active,
}: TestimonialSlideProps) {
  return (
    <CarouselItem
      data-active={active}
      aria-label={`${index + 1} dari ${total}`}
      className="group/slide pl-0"
    >
      <div>
        <figure className="flex items-end justify-between">
          <QuoteIcon src="/images/icon/quote-left.svg" />
          <div className="w-full text-center italic lg:w-[56%]">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className={cn(reveal, "translate-y-[30px] mx-auto mb-5 size-12 rounded-full delay-300")}
            />
            <figcaption>
              <h3 className={cn(reveal, "translate-y-5 text-[22px] delay-500")}>{item.name}</h3>
              <p className={cn(reveal, "translate-y-2.5 mt-2.5 text-bright delay-700")}>
                Dari {item.origin}
              </p>
            </figcaption>
            <blockquote className="mt-2.5 text-base leading-normal text-bright md:mt-[30px] md:text-[22px]">
              {item.quote}
            </blockquote>
          </div>
          <QuoteIcon src="/images/icon/quote-right.svg" />
        </figure>
      </div>
    </CarouselItem>
  );
});

function QuoteIcon({ src }: { src: string }) {
  return (
    <Image src={src} alt="" width={59} height={77} className="mb-6 hidden h-[77px] w-[59px] lg:block" />
  );
}
