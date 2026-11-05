import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { dishes } from "@/data/portfolio";
import { createMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/portofolio" });

export default function PortfolioPage() {
  return (
    <main>
      <WebPageJsonLd
        type="CollectionPage"
        path="/portofolio"
        name="Portofolio Hidangan"
        description="Kumpulan hidangan andalan Elegencia, dari rendang wagyu hingga klepon cake."
        extra={{ mainEntity: itemListJsonLd(dishes.map((dish) => ({ name: dish.title, path: dish.href }))) }}
      />
      <PageHero title="Portofolio" href="/portofolio" />
      <div className="h-section" />
      <PortfolioGrid dishes={dishes} />
      <div className="h-section" />
    </main>
  );
}
