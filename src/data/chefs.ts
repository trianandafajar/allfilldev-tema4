import type { ImageAsset, SocialLink } from "./types";

const socials: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
];

const base = [
  {
    slug: "bayu-prasetyo",
    name: "Bayu Prasetyo",
    role: "Kepala Koki",
    bio: "Dua puluh tahun berkarier di dapur hotel bintang lima di Jakarta dan Singapura. Chef Bayu memimpin dapur Elegencia dengan filosofi sederhana: bahan terbaik, teknik yang jujur, dan rasa yang tidak melupakan asalnya.",
    expertise:
      "Memadukan resep rendang dan gulai warisan keluarga dengan teknik memasak modern seperti sous vide dan pengasapan.",
  },
  {
    slug: "dewi-anggraini",
    name: "Dewi Anggraini",
    role: "Spesialis Masakan Jawa",
    bio: "Lahir dan besar di Yogyakarta, Chef Dewi belajar meracik gudeg dan bacem langsung dari neneknya. Ia menjaga cita rasa manis-gurih khas Jawa dalam setiap sajian.",
    expertise:
      "Gudeg, nasi liwet, dan aneka jajanan pasar yang dibuat ulang dengan tampilan modern.",
  },
  {
    slug: "made-wirawan",
    name: "Made Wirawan",
    role: "Spesialis Masakan Bali",
    bio: "Chef Made menekuni base genep, bumbu dasar Bali, sejak remaja di dapur adat desanya. Ia membawa aroma bara dan rempah segar ke meja Elegencia.",
    expertise:
      "Bebek betutu, sate lilit, dan ikan bakar dengan sambal matah yang diracik setiap hari.",
  },
  {
    slug: "andi-mappasessu",
    name: "Andi Mappasessu",
    role: "Spesialis Masakan Sulawesi",
    bio: "Berasal dari Makassar, Chef Andi mengangkat masakan Sulawesi seperti coto dan konro ke tingkat fine dining tanpa kehilangan kekuatan bumbunya.",
    expertise:
      "Konro bakar, coto, dan ikan kuah kuning dengan bahan baku dari nelayan lokal.",
  },
  {
    slug: "rina-kusumawati",
    name: "Rina Kusumawati",
    role: "Kepala Pastry",
    bio: "Chef Rina menempuh pendidikan pastry di Bandung dan Paris. Di Elegencia ia mengolah kue dan jajanan tradisional menjadi hidangan penutup yang elegan.",
    expertise:
      "Klepon cake, lapis legit, dan es krim rasa Nusantara seperti kelapa bakar dan gula aren.",
  },
  {
    slug: "hendra-gunawan",
    name: "Hendra Gunawan",
    role: "Spesialis Hidangan Laut",
    bio: "Sebelas tahun menangani seafood di restoran pesisir Jimbaran dan Manado. Chef Hendra memilih sendiri tangkapan harian untuk menjaga kesegaran di setiap piring.",
    expertise:
      "Ikan bakar, kepiting saus padang, dan udang galah dengan bumbu rica-rica.",
  },
];

export const chefs = base.map((chef, i) => ({
  ...chef,
  socials,
  image: {
    src: `/images/chef/chef-${i + 1}.jpg`,
    alt: `Chef ${chef.name}, ${chef.role} Elegencia`,
    width: 420,
    height: 500,
  } satisfies ImageAsset,
}));

export type Chef = (typeof chefs)[number];
