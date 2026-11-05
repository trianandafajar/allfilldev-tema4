import { memo } from "react";
import { CtaButton } from "@/components/shared/cta-button";
import { CarouselItem } from "@/components/ui/carousel";
import type { heroSlides } from "@/data/home";
import { cn } from "@/lib/utils";

type HeroSlideData = (typeof heroSlides)[number];

type HeroSlideProps = {
  slide: HeroSlideData;
  index: number;
  total: number;
  /** Slide yang sedang tampil memicu animasi muncul bertahap. */
  active: boolean;
};

/** Elemen yang muncul bertahap (naik + fade) ketika slide-nya aktif. Naik lewat `translate`, bukan `top`, supaya tanpa layout. */
const reveal =
  "relative translate-y-10 opacity-0 transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.7,-0.56,0.27,1.6)] group-data-[active=true]/slide:translate-y-0 group-data-[active=true]/slide:opacity-100";

/** Satu slide hero. Di-`memo` supaya pindah slide hanya merender dua slide (yang keluar dan yang masuk). */
export const HeroSlide = memo(function HeroSlide({ slide, index, total, active }: HeroSlideProps) {
  return (
    <CarouselItem
      data-active={active}
      aria-label={`${index + 1} dari ${total}`}
      className="group/slide pl-0"
    >
      <div className="w-full md:w-[90%]">
        <HeroHeading as={index === 0 ? "h1" : "p"}>
          <span className={cn(reveal, "block text-bright delay-200")}>{slide.title}</span>
          <span
            className={cn(
              reveal,
              "inline-flex border-b border-border italic delay-[400ms] md:left-[10%]"
            )}
          >
            {slide.subtitle}
          </span>
        </HeroHeading>
        <div className="h-[30px]" />
        <p
          className={cn(
            reveal,
            "mt-0 mr-5 text-base leading-[27px] tracking-[0.36px] delay-[600ms] md:mt-5 md:mr-[clamp(0px,10.4vw,200px)] min-[1747px]:text-lg"
          )}
        >
          {slide.description}
        </p>
        <div className="h-[30px] lg:h-[70px]" />
        <div className={cn(reveal, "delay-[800ms]")}>
          <CtaButton href={slide.cta.href} variant="gold">
            {slide.cta.label}
          </CtaButton>
        </div>
      </div>
    </CarouselItem>
  );
});

function HeroHeading({ as: Tag, children }: { as: "h1" | "p"; children: React.ReactNode }) {
  return (
    <Tag
      className={cn(
        "font-heading font-normal text-primary uppercase",
        "text-hero leading-normal"
      )}
    >
      {children}
    </Tag>
  );
}
