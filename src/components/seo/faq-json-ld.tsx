import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import type { Faq } from "@/data/faq";
import { absoluteUrl, entityId } from "@/lib/seo";

/** FAQPage schema.org dari daftar tanya jawab yang tampil di halaman. */
export function FaqJsonLd({ items, path }: { items: readonly Faq[]; path: string }) {
  const url = absoluteUrl(path);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#webpage`,
        url,
        name: "Pertanyaan yang sering diajukan",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": entityId.website },
        about: { "@id": entityId.restaurant },
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}
