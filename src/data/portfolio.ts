import type { ImageAsset } from "./types";

const slides = (title: string): ImageAsset[] => [
  { src: "/images/portfolio/detail-1.jpg", alt: `${title}, tampilan hidangan utuh`, width: 900, height: 500 },
  { src: "/images/portfolio/detail-2.jpg", alt: `${title}, detail penyajian`, width: 900, height: 500 },
];

const base = [
  {
    slug: "rendang-wagyu",
    title: "Rendang Wagyu",
    category: "Hidangan Utama",
    date: "12 Maret 2026",
    tags: ["Daging", "Padang", "Signature"],
    description:
      "Potongan wagyu dimasak perlahan selama delapan jam dalam santan dan rempah pilihan hingga bumbu meresap dan teksturnya selembut sutra.",
    ingredients:
      "Wagyu sirloin, santan kelapa segar, cabai merah keriting, serai, lengkuas, daun jeruk, dan kelapa sangrai.",
  },
  {
    slug: "sate-lilit-bali",
    title: "Sate Lilit Bali",
    category: "Hidangan Pembuka",
    date: "3 April 2026",
    tags: ["Ikan", "Bali", "Panggang"],
    description:
      "Ikan tenggiri cincang dibumbui base genep, dililitkan pada batang serai, lalu dipanggang di atas bara sabut kelapa.",
    ingredients:
      "Ikan tenggiri, kelapa parut, base genep, jeruk limau, serai, dan sambal matah.",
  },
  {
    slug: "gudeg-jogja-premium",
    title: "Gudeg Jogja Premium",
    category: "Hidangan Utama",
    date: "21 April 2026",
    tags: ["Jawa", "Manis", "Tradisional"],
    description:
      "Nangka muda dimasak semalaman bersama gula aren dan daun jati, disajikan dengan ayam kampung, telur pindang, dan sambal krecek.",
    ingredients:
      "Nangka muda, gula aren, santan, daun jati, ayam kampung, telur bebek, dan krecek.",
  },
  {
    slug: "soto-betawi",
    title: "Soto Betawi",
    category: "Sup",
    date: "9 Mei 2026",
    tags: ["Betawi", "Kuah", "Hangat"],
    description:
      "Kuah santan dan susu yang gurih berisi daging sapi empuk, kentang, dan tomat, ditaburi emping serta bawang goreng.",
    ingredients:
      "Daging sapi, santan, susu segar, kentang, tomat, emping, dan bawang goreng.",
  },
  {
    slug: "ikan-bakar-jimbaran",
    title: "Ikan Bakar Jimbaran",
    category: "Hidangan Laut",
    date: "30 Mei 2026",
    tags: ["Ikan", "Bali", "Bakar"],
    description:
      "Ikan kakap segar dibakar dengan bumbu kecap manis dan jeruk nipis, ditemani sambal matah dan lalapan.",
    ingredients:
      "Kakap putih, kecap manis, jeruk nipis, bawang merah, serai, dan cabai rawit.",
  },
  {
    slug: "nasi-liwet-solo",
    title: "Nasi Liwet Solo",
    category: "Hidangan Utama",
    date: "14 Juni 2026",
    tags: ["Jawa", "Nasi", "Santan"],
    description:
      "Nasi gurih yang dimasak dengan santan, daun salam, dan serai, disajikan bersama suwiran ayam, telur, dan areh yang kental.",
    ingredients:
      "Beras pulen, santan, ayam kampung, telur, labu siam, dan daun salam.",
  },
  {
    slug: "es-teler-elegencia",
    title: "Es Teler Elegencia",
    category: "Hidangan Penutup",
    date: "2 Juli 2026",
    tags: ["Dingin", "Buah", "Segar"],
    description:
      "Alpukat, nangka, dan kelapa muda disajikan bersama susu kental manis dan serutan es halus untuk penutup yang menyegarkan.",
    ingredients:
      "Alpukat mentega, nangka, kelapa muda, susu kental manis, dan sirup cocopandan.",
  },
  {
    slug: "klepon-cake",
    title: "Klepon Cake",
    category: "Hidangan Penutup",
    date: "19 Juli 2026",
    tags: ["Kue", "Pandan", "Manis"],
    description:
      "Kue lembut beraroma pandan dengan lelehan gula aren di dalamnya, dibalut kelapa parut gurih seperti klepon tradisional.",
    ingredients:
      "Tepung ketan, pasta pandan, gula aren cair, kelapa parut, dan krim santan.",
  },
  {
    slug: "bebek-betutu",
    title: "Bebek Betutu",
    category: "Hidangan Utama",
    date: "5 Agustus 2026",
    tags: ["Bebek", "Bali", "Rempah"],
    description:
      "Bebek utuh dibumbui base genep, dibungkus daun pisang, dan dimasak dengan api kecil hingga dagingnya lepas dari tulang.",
    ingredients:
      "Bebek, base genep, daun singkong, daun pisang, kemiri, dan kencur.",
  },
];

/** Satu sumber untuk etalase beranda dan halaman portofolio. */
export const dishes = base.map((dish, i) => ({
  ...dish,
  href: `/portofolio/${dish.slug}`,
  image: {
    src: `/images/dishes/dish-${i + 1}.jpg`,
    alt: dish.title,
    width: 430,
    height: 600,
  } satisfies ImageAsset,
  gallery: slides(dish.title),
}));

export type Dish = (typeof dishes)[number];
