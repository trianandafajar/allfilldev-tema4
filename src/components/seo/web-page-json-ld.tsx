import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { absoluteUrl, defaultOgImage, entityId } from "@/lib/seo";

type WebPageType =
  | "WebPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage"
  | "ProfilePage"
  | "ItemPage";

type WebPageJsonLdProps = {
  type?: WebPageType;
  path: string;
  name: string;
  description: string;
  /** Path gambar utama halaman; bawaan: gambar Open Graph situs. */
  image?: string;
  /** Tanggal diperbarui, ISO 8601. */
  dateModified?: string;
  /** Properti tambahan yang khas jenis halamannya (`mainEntity`, `about`, dst). */
  extra?: Record<string, unknown>;
};

/**
 * Node halaman schema.org yang tersambung ke `WebSite` dan restoran lewat `@id`.
 * Satu komponen untuk semua jenis halaman supaya bentuknya seragam.
 */
export function WebPageJsonLd({
  type = "WebPage",
  path,
  name,
  description,
  image = defaultOgImage.src,
  dateModified,
  extra,
}: WebPageJsonLdProps) {
  const url = absoluteUrl(path);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: siteConfig.language,
        primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image) },
        isPartOf: { "@id": entityId.website },
        about: { "@id": entityId.restaurant },
        ...(dateModified && { dateModified }),
        ...extra,
      }}
    />
  );
}
