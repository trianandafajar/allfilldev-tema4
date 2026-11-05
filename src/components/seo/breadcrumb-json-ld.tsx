import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/seo";

export type Crumb = { label: string; href: string };

/** BreadcrumbList schema.org. Item terakhir adalah halaman saat ini. */
export function BreadcrumbJsonLd({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.label,
          item: absoluteUrl(crumb.href),
        })),
      }}
    />
  );
}
