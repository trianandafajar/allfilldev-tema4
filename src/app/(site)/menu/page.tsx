import type { Metadata } from "next";
import { BestItem } from "@/components/sections/best-item";
import { MenuCategory } from "@/components/sections/menu-category";
import { MenuJsonLd } from "@/components/seo/menu-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { bestItem } from "@/data/home";
import { menuCategories } from "@/data/menu";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/menu" });

export default function MenuPage() {
  return (
    <main>
      <MenuJsonLd path="/menu" categories={menuCategories} />
      <PageHero title="Menu Kami" href="/menu" />
      {menuCategories.map((category) => (
        <MenuCategory key={category.id} category={category} />
      ))}
      <BestItem data={bestItem} />
    </main>
  );
}
