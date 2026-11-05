import { ImageResponse } from "next/og";
import { OgCard } from "@/components/seo/og-card";
import { sitePages } from "@/config/site";
import { getOgContent, ogPathToSlug, ogSlugToPath, readOgFont, readPublicImage } from "@/lib/og";
import { ogImageSize } from "@/lib/seo";

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: ogPathToSlug(page.path) }));
}

/** PNG kartu OG sebuah halaman. `use cache` membuat pembacaan berkas ikut ter-prerender saat build. */
async function renderOgPng(path: string) {
  "use cache";
  const content = getOgContent(path);
  if (!content) return undefined;

  const [photo, font] = await Promise.all([readPublicImage(content.photo.src), readOgFont()]);
  const image = new ImageResponse(<OgCard content={content} photo={photo} />, {
    ...ogImageSize,
    fonts: [{ name: "Baskervville", data: font, style: "normal", weight: 400 }],
  });
  return image.arrayBuffer();
}

/** Gambar Open Graph per halaman, dibuat saat build dari data yang sama dengan halamannya. */
export async function GET(_request: Request, { params }: RouteContext<"/og/[...slug]">) {
  const { slug } = await params;
  const png = await renderOgPng(ogSlugToPath(slug));
  if (!png) return new Response("Halaman tidak ditemukan", { status: 404 });
  return new Response(png, { headers: { "Content-Type": "image/png" } });
}
