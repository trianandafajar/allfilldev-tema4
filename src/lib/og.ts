import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { businessInfo, sitePages } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { chefs } from "@/data/chefs";
import { dishes } from "@/data/portfolio";

type Photo = { src: string; width: number; height: number };

export type OgContent = {
  kicker: string;
  title: string;
  description: string;
  photo: Photo;
};

const fallbackPhoto: Photo = { src: "/images/og/default.jpg", width: 1200, height: 630 };

const mimeByExtension: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
};

/** Slug route `/og/...` kembali menjadi path halaman. `beranda` adalah `/`. */
export function ogSlugToPath(slug: readonly string[]) {
  return slug.length === 1 && slug[0] === "beranda" ? "/" : `/${slug.join("/")}`;
}

/** Path halaman menjadi slug route `/og/...`. Dipakai `generateStaticParams`. */
export function ogPathToSlug(path: string) {
  return path === "/" ? ["beranda"] : path.split("/").filter(Boolean);
}

function kickerFor(path: string) {
  if (path.startsWith("/koki/")) return "Koki Kami";
  if (path.startsWith("/portofolio/")) return "Hidangan Andalan";
  if (path.startsWith("/blog/")) return "Blog";
  return businessInfo.address.city;
}

function photoFor(path: string): Photo {
  const chef = chefs.find((item) => `/koki/${item.slug}` === path);
  if (chef) return chef.image;
  const dish = dishes.find((item) => item.href === path);
  if (dish) return dish.image;
  const post = blogPosts.find((item) => item.href === path);
  if (post) return post.cover;
  return fallbackPhoto;
}

/** Isi kartu OG sebuah halaman, atau `undefined` bila path tidak terdaftar di `sitePages`. */
export function getOgContent(path: string): OgContent | undefined {
  const page = sitePages.find((item) => item.path === path);
  if (!page) return undefined;
  return {
    kicker: kickerFor(path),
    title: path === "/" ? "Restoran Nusantara Elegan" : page.title,
    description: page.description,
    photo: photoFor(path),
  };
}

/** Foto dari `public/` sebagai data URL. Satori tidak bisa mengambil gambar lewat path relatif. */
export async function readPublicImage(src: string) {
  const file = await readFile(join(process.cwd(), "public", src));
  const mime = mimeByExtension[extname(src).toLowerCase()] ?? "image/jpeg";
  return `data:${mime};base64,${file.toString("base64")}`;
}

export function readOgFont() {
  return readFile(join(process.cwd(), "src/assets/fonts/Baskervville-Regular.woff"));
}
