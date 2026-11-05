import type { Metadata } from "next";
import { siteConfig, sitePages } from "@/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** `@id` entitas utama situs. Dipakai bersama supaya JSON-LD antarhalaman saling terhubung. */
export const entityId = {
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  restaurant: `${siteConfig.url}/#restaurant`,
} as const;

/** Alamat gambar OG yang dibuat otomatis untuk sebuah halaman (`src/app/og/[...slug]/route.tsx`). */
export function ogImagePath(path: string) {
  return path === "/" ? "/og/beranda" : `/og${path}`;
}

export const ogImageSize = { width: 1200, height: 630 } as const;

/** Gambar Open Graph statis (1200x630) untuk halaman yang tidak lewat `createMetadata`, mis. 404. */
export const defaultOgImage = {
  src: "/images/og/default.jpg",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}, restoran Nusantara elegan`,
};

type OgImage = { src: string; width?: number; height?: number; alt?: string };

type CreateMetadataInput = {
  /** Path halaman. Judul dan deskripsi diambil dari `sitePages` (satu sumber dengan sitemap dan llms.txt) bila tidak diisi. */
  path: string;
  title?: string;
  description?: string;
  /** Menimpa gambar OG otomatis (`ogImagePath`). Biasanya tidak perlu diisi. */
  image?: OgImage;
  type?: "website" | "article" | "profile";
  /** Khusus `type: "article"`, format ISO 8601. */
  publishedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  /** Judul ditulis utuh tanpa akhiran nama situs (beranda). */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

/**
 * Metadata seragam untuk setiap halaman: title, description, canonical, Open Graph, dan Twitter card.
 * Semua halaman memakai fungsi ini supaya pola SEO sama persis di mana-mana.
 */
export function createMetadata({
  path,
  title,
  description,
  image,
  type = "website",
  publishedTime,
  authors,
  section,
  tags,
  absoluteTitle = false,
  noindex = false,
}: CreateMetadataInput): Metadata {
  const page = sitePages.find((item) => item.path === path);
  const resolvedTitle = title ?? page?.title;
  const resolvedDescription = description ?? page?.description;
  if (!resolvedTitle || !resolvedDescription) {
    throw new Error(`createMetadata: halaman "${path}" belum terdaftar di sitePages dan tidak diberi title/description.`);
  }

  const socialTitle = absoluteTitle ? resolvedTitle : `${resolvedTitle} | ${siteConfig.name}`;
  // Halaman di luar `sitePages` (mis. noindex) tidak punya kartu OG otomatis.
  const picture = image ?? (page ? { src: ogImagePath(path), ...ogImageSize } : defaultOgImage);
  const ogImage = { url: picture.src, width: picture.width, height: picture.height, alt: picture.alt ?? socialTitle };
  const article =
    type === "article"
      ? { type, ...(publishedTime && { publishedTime }), ...(authors && { authors }), ...(section && { section }), ...(tags && { tags }) }
      : { type };

  return {
    title: absoluteTitle ? { absolute: resolvedTitle } : resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical: path },
    ...(noindex && { robots: { index: false } }),
    openGraph: {
      ...article,
      url: path,
      title: socialTitle,
      description: resolvedDescription,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: resolvedDescription,
      images: [{ url: picture.src, alt: ogImage.alt }],
    },
  };
}

/** `ItemList` schema.org dari daftar tautan, untuk halaman koleksi (koki, hidangan, blog). */
export function itemListJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
