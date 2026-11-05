import type { Chef } from "@/data/chefs";
import { ChefCard } from "./chef-card";

export function ChefGrid({ chefs }: { chefs: readonly Chef[] }) {
  return (
    <section className="container">
      <ul className="grid list-none gap-12 p-0 md:grid-cols-2 lg:grid-cols-3">
        {chefs.map((chef) => (
          <li key={chef.slug}>
            <ChefCard chef={chef} />
          </li>
        ))}
      </ul>
    </section>
  );
}
