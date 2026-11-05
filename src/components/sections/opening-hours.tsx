import { ImageOverlay } from "@/components/shared/image-overlay";
import { SectionTitle } from "@/components/shared/section-title";
import { TextButton } from "@/components/shared/text-button";
import { businessInfo } from "@/config/site";
import type { openingHours as openingHoursData } from "@/data/home";
import { formatHours } from "@/lib/format";

export function OpeningHours({ data }: { data: typeof openingHoursData }) {
  return (
    <>
      <div className="h-section" />
      <div className="bg-secondary">
        {/* Di bawah lg gambar di atas dan teks di bawah; dari lg dua kolom, gambar mentok kiri (760px di 1920px, mengecil halus di layar lebih sempit). */}
        <div className="grid items-center gap-[30px] max-lg:pb-section-sm lg:grid-cols-[minmax(0,clamp(380px,39.6vw,760px))_1fr] lg:gap-[clamp(40px,5.2vw,100px)]">
          <div className="h-[250px] overflow-hidden md:h-[420px] lg:h-auto lg:max-h-[765px]">
            <ImageOverlay
              image={data.image}
              sizes="(min-width: 992px) 760px, 100vw"
              zoom
            />
          </div>
          <div className="max-lg:px-(--gutter) lg:pr-(--gutter)">
            <div className="mx-auto w-full max-w-[640px]">
              <SectionTitle title={data.title} animation="flip" />
              <div className="h-[30px]" />
              <p>{data.description}</p>
              <div className="h-[30px]" />
              <div className="relative max-w-[440px] [&_p]:text-base [&_p]:text-bright md:[&_p]:text-xl">
                {businessInfo.openingHours.map((slot, i) => (
                  <div key={slot.label}>
                    {i > 0 && (
                      <div className="my-2.5 h-[0.5px] w-[84%] bg-primary opacity-20 md:w-[98%]" />
                    )}
                    <p>{formatHours(slot)}</p>
                  </div>
                ))}
              </div>
              <div className="h-[30px] lg:h-[70px]" />
              <TextButton href={data.cta.href}>{data.cta.label}</TextButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
