import { PortfolioGallerySlider } from "@/components/sections/portfolio-gallery-slider";
import { ShareLinks } from "@/components/shared/share-links";
import type { Dish } from "@/data/portfolio";

type PortfolioDetailProps = {
  dish: Dish;
};

const infoRow =
  "mb-3 border-b border-border pb-2.5 uppercase [word-spacing:10px]";
const infoValue = "font-sans text-bright capitalize";

export function PortfolioDetail({ dish }: PortfolioDetailProps) {
  return (
    <section className="container">
      <div className="flex flex-wrap gap-[30px] md:gap-[60px] lg:flex-nowrap lg:gap-[clamp(40px,5.6vw,108px)]">
        <div className="lg:shrink-0">
          <h2 className="mt-0 mb-[30px] text-display md:mb-5 lg:mt-[85px] lg:mb-[85px]">
            {dish.category}
          </h2>
          <h6 className={infoRow}>
            Kategori : <span className={infoValue}>{dish.category}</span>
          </h6>
          <h6 className={infoRow}>
            Tanggal : <span className={infoValue}>{dish.date}</span>
          </h6>
          <h6 className={infoRow}>
            Tag : <span className={infoValue}>{dish.tags.join(" ")}</span>
          </h6>
        </div>
        <PortfolioGallerySlider images={dish.gallery} label={`Foto ${dish.title}`} />
      </div>
      <div className="h-section-sm" />
      <h3 className="text-title text-bright">Bahan Utama</h3>
      <div className="hidden h-[30px] lg:block" />
      <div className="flex flex-wrap items-center md:flex-nowrap">
        <div className="md:border-r md:border-border md:pr-[30px]">
          <p>{dish.description}</p>
          <div className="h-[15px] lg:h-[30px]" />
          <p>{dish.ingredients}</p>
        </div>
        <div className="mt-[30px] flex items-center gap-[15px] md:mt-0 md:pl-10">
          <h6 className="mt-[3px] uppercase">Bagikan:</h6>
          <ShareLinks path={dish.href} title={dish.title} />
        </div>
      </div>
    </section>
  );
}
