import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import type { Chef } from "@/data/chefs";
import { absoluteUrl, entityId } from "@/lib/seo";

/** `ProfilePage` dengan `Person` sebagai entitas utama, bekerja di restoran. */
export function ChefJsonLd({ chef }: { chef: Chef }) {
  const url = absoluteUrl(`/koki/${chef.slug}`);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${url}#webpage`,
        url,
        name: `Chef ${chef.name}`,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": entityId.website },
        mainEntity: {
          "@type": "Person",
          "@id": `${url}#person`,
          name: chef.name,
          jobTitle: chef.role,
          description: chef.bio,
          knowsAbout: chef.expertise,
          image: absoluteUrl(chef.image.src),
          url,
          worksFor: { "@id": entityId.restaurant },
        },
      }}
    />
  );
}
