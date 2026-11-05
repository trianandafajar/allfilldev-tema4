import { DishCard } from "@/components/shared/dish-card";
import type { Dish } from "@/data/portfolio";

export function PortfolioGrid({ dishes }: { dishes: readonly Dish[] }) {
  return (
    <section className="container">
      <ul className="grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <li key={dish.slug}>
            <DishCard
              dish={dish}
              sizes="(min-width: 992px) 360px, (min-width: 768px) 45vw, 100vw"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
