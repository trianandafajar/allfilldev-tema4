import type { Metadata } from "next";
import { ChefGrid } from "@/components/sections/chef-grid";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { chefs } from "@/data/chefs";
import { createMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/koki" });

export default function ChefsPage() {
  return (
    <main>
      <WebPageJsonLd
        type="CollectionPage"
        path="/koki"
        name="Koki Kami"
        description="Kenali para koki Elegencia dan keahlian mereka dalam masakan Nusantara."
        extra={{
          mainEntity: itemListJsonLd(
            chefs.map((chef) => ({ name: `Chef ${chef.name}`, path: `/koki/${chef.slug}` }))
          ),
        }}
      />
      <PageHero title="Koki Kami" href="/koki" />
      <div className="h-section" />
      <ChefGrid chefs={chefs} />
      <div className="h-section" />
    </main>
  );
}
