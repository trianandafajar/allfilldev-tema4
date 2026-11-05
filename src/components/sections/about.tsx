import { GrowLine } from "@/components/shared/grow-line";
import { SectionTitle } from "@/components/shared/section-title";
import { TextButton } from "@/components/shared/text-button";
import { ZoomImage } from "@/components/shared/zoom-image";
import type { about as aboutData } from "@/data/home";

export function About({ data }: { data: typeof aboutData }) {
  return (
    <section className="bg-background pt-section">
      <div className="relative max-lg:flex max-lg:flex-wrap">
        <ZoomImage
          src={data.image.src}
          alt={data.image.alt}
          sizes="(min-width: 992px) 45vw, 100vw"
          className="aspect-[16/9] w-full lg:absolute lg:top-0 lg:right-0 lg:aspect-auto lg:h-full lg:w-[45%]"
        />
        <GrowLine
          from="2%"
          to="13%"
          scrub={0.5}
          className="absolute mt-[190px] hidden bg-primary min-[1725px]:inline-block"
        />
        <div className="container">
          <div className="w-full pt-[30px] pb-0 lg:w-1/2 lg:py-section">
            <SectionTitle title={data.title} lead={data.lead} subtitle={data.subtitle} />
            <div className="h-[30px]" />
            <p>{data.details}</p>
            <div className="h-[30px]" />
            <p>{data.summary}</p>
            <div className="h-stack-sm" />
            <TextButton href={data.cta.href}>{data.cta.label}</TextButton>
          </div>
        </div>
      </div>
    </section>
  );
}
