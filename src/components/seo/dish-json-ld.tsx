import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import type { Dish } from "@/data/portfolio";
import { absoluteUrl, entityId } from "@/lib/seo";

/** `ItemPage` dengan `MenuItem` sebagai entitas utama (nama, deskripsi beserta bahan, gambar). */
export function DishJsonLd({ dish }: { dish: Dish }) {
  const url = absoluteUrl(dish.href);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemPage",
        "@id": `${url}#webpage`,
        url,
        name: dish.title,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": entityId.website },
        about: { "@id": entityId.restaurant },
        mainEntity: {
          "@type": "MenuItem",
          "@id": `${url}#dish`,
          name: dish.title,
          description: `${dish.description} Bahan: ${dish.ingredients}`,
          image: [dish.image, ...dish.gallery].map((image) => absoluteUrl(image.src)),
        },
      }}
    />
  );
}
