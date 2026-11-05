import { JsonLd } from "@/components/seo/json-ld";
import { businessInfo, siteConfig } from "@/config/site";
import { absoluteUrl, entityId } from "@/lib/seo";

/** Entitas tingkat situs yang muncul di semua halaman: `Organization` dan `WebSite`. */
export function SiteJsonLd() {
  const [phone] = businessInfo.phones;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": entityId.organization,
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            logo: {
              "@type": "ImageObject",
              url: absoluteUrl("/images/icon/icon-512.png"),
              width: 512,
              height: 512,
            },
            image: absoluteUrl("/images/og/default.jpg"),
            email: businessInfo.email,
            ...(businessInfo.socials.length > 0 && { sameAs: businessInfo.socials }),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "reservations",
              telephone: phone.label,
              email: businessInfo.email,
              areaServed: businessInfo.address.country,
              availableLanguage: ["id", "en"],
            },
          },
          {
            "@type": "WebSite",
            "@id": entityId.website,
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            inLanguage: siteConfig.language,
            publisher: { "@id": entityId.organization },
          },
        ],
      }}
    />
  );
}
