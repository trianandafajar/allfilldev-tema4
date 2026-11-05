import Image from "next/image";
import { ImageOverlay } from "@/components/shared/image-overlay";
import { SectionTitle } from "@/components/shared/section-title";
import type { bestItem as bestItemData } from "@/data/home";

export function BestItem({ data }: { data: typeof bestItemData }) {
  return (
    <section>
      <div className="h-section" />
      <div className="container">
        <div className="flex items-end justify-between overflow-hidden max-md:flex-wrap">
          <div className="basis-[60%] lg:basis-2/5 max-md:basis-full">
            <SectionTitle title={data.title} lead={data.lead} />
            <div className="h-[30px]" />
            <p>{data.details}</p>
            <div className="h-stack-sm" />
            <ImageOverlay
              image={data.imageTwo}
              sizes="(min-width: 992px) 40vw, 60vw"
              className="relative"
            />
          </div>
          {/* Ornamen vertikal; di bawah md diputar jadi garis horizontal di antara dua foto (kotaknya ditengahkan agar tinggi tata letak tetap 48px). */}
          <div className="relative basis-[10%] self-end text-center max-md:h-12 max-md:basis-full">
            <Image
              src={data.ornament}
              alt=""
              width={32}
              height={336}
              className="mx-auto h-auto w-8 max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:rotate-90"
            />
          </div>
          <div className="basis-2/5 self-end lg:basis-1/2 max-md:basis-full">
            <ImageOverlay
              image={data.imageOne}
              sizes="(min-width: 992px) 50vw, 40vw"
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
