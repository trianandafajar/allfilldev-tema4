import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChefProfile } from "@/components/sections/chef-profile";
import { ChefJsonLd } from "@/components/seo/chef-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { chefs } from "@/data/chefs";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return chefs.map((chef) => ({ slug: chef.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/koki/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const chef = chefs.find((item) => item.slug === slug);
  if (!chef) return {};
  return createMetadata({ path: `/koki/${chef.slug}`, type: "profile" });
}

export default async function ChefPage({ params }: PageProps<"/koki/[slug]">) {
  const { slug } = await params;
  const chef = chefs.find((item) => item.slug === slug);
  if (!chef) notFound();

  return (
    <main>
      <ChefJsonLd chef={chef} />
      <PageHero
        title="Profil Koki"
        href={`/koki/${chef.slug}`}
        parents={[{ label: "Koki", href: "/koki" }]}
      />
      <div className="h-section" />
      <ChefProfile chef={chef} />
      <div className="h-section" />
    </main>
  );
}
