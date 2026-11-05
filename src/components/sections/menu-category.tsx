import { SectionTitle } from "@/components/shared/section-title";
import { ZoomImage } from "@/components/shared/zoom-image";
import type { menuCategories } from "@/data/menu";
import { FoodMenuItem } from "./food-menu-item";

type MenuCategoryProps = {
  category: (typeof menuCategories)[number];
};

/** Satu kategori menu: latar yang membesar saat scroll, judul, dan daftar hidangan. */
export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section className="relative overflow-hidden">
      <ZoomImage
        src={category.background}
        alt=""
        sizes="100vw"
        className="absolute inset-0 z-0"
      />
      <div className="relative py-section">
        <div className="container">
          <SectionTitle title={category.title} subtitle={category.subtitle} align="center" />
          <div className="h-stack" />
          <div className="flex flex-wrap justify-between">
            {category.items.map((item) => (
              <FoodMenuItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
