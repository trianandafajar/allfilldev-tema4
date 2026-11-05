import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetail } from "@/components/sections/portfolio-detail";
import { DishJsonLd } from "@/components/seo/dish-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { dishes } from "@/data/portfolio";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return dishes.map((dish) => ({ slug: dish.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portofolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const dish = dishes.find((item) => item.slug === slug);
  if (!dish) return {};
  return createMetadata({ path: dish.href });
}

export default async function DishPage({ params }: PageProps<"/portofolio/[slug]">) {
  const { slug } = await params;
  const dish = dishes.find((item) => item.slug === slug);
  if (!dish) notFound();

  return (
    <main>
      <DishJsonLd dish={dish} />
      <PageHero
        title="Detail Hidangan"
        href={dish.href}
        parents={[{ label: "Portofolio", href: "/portofolio" }]}
      />
      <div className="h-section" />
      <div
        aria-hidden
        className="absolute left-0 mt-[125px] hidden h-px w-[250px] bg-border min-[1741px]:block"
      />
      <PortfolioDetail dish={dish} />
    </main>
  );
}
