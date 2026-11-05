import { SectionTitle } from "@/components/shared/section-title";
import { TextButton } from "@/components/shared/text-button";
import type { foodMenu as foodMenuData } from "@/data/home";
import { FoodMenuItem } from "./food-menu-item";

export function FoodMenu({ data }: { data: typeof foodMenuData }) {
  return (
    <section>
      <div className="h-section" />
      <div className="container">
        <SectionTitle title={data.title} subtitle={data.subtitle} align="center" />
        <div className="h-stack" />
        <div className="flex flex-wrap justify-between">
          {data.items.map((item) => (
            <FoodMenuItem key={item.title} item={item} />
          ))}
        </div>
        <div className="h-5" />
        <div className="md:text-center">
          <TextButton href={data.cta.href}>{data.cta.label}</TextButton>
        </div>
      </div>
    </section>
  );
}
