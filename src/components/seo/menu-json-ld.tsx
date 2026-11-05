import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import type { menuCategories } from "@/data/menu";
import { absoluteUrl, entityId } from "@/lib/seo";

type MenuJsonLdProps = {
  path: string;
  categories: typeof menuCategories;
};

/** `Menu` > `MenuSection` > `MenuItem` dengan harga rupiah, dibuat dari data yang sama dengan daftar menu di halaman. */
export function MenuJsonLd({ path, categories }: MenuJsonLdProps) {
  const url = absoluteUrl(path);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Menu",
        "@id": `${url}#menu`,
        name: `Menu ${siteConfig.name}`,
        url,
        inLanguage: siteConfig.language,
        provider: { "@id": entityId.restaurant },
        hasMenuSection: categories.map((category) => ({
          "@type": "MenuSection",
          name: category.title,
          url: `${url}#${category.id}`,
          hasMenuItem: category.items.map((item) => ({
            "@type": "MenuItem",
            name: item.title,
            description: item.description,
            image: absoluteUrl(item.image.src),
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "IDR",
            },
          })),
        })),
      }}
    />
  );
}
