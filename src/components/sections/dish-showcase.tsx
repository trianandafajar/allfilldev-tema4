import { SectionTitle } from "@/components/shared/section-title";
import type { dishShowcase } from "@/data/home";
import { DishCarousel } from "./dish-carousel";

export function DishShowcase({ data }: { data: typeof dishShowcase }) {
  return (
    <section>
      <div className="h-section" />
      <div className="container-fluid">
        <SectionTitle title={data.title} subtitle={data.subtitle} align="center" />
        <div className="h-stack" />
        <DishCarousel dishes={data.dishes} />
      </div>
    </section>
  );
}
