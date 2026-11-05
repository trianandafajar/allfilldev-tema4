import { withMenuImages } from "./menu-image";
import { dishes } from "./portfolio";
import type { ImageAsset } from "./types";

export type { ImageAsset };

export const heroSlides = [
  {
    title: "Santap Elegan",
    subtitle: "Nusantara",
    description:
      "Selamat datang di restoran kami, tempat seni kuliner bertemu pengalaman bersantap yang istimewa. Kami menghadirkan surga gastronomi yang memanjakan lidah dan meninggalkan kenangan tak terlupakan.",
    cta: { label: "Reservasi Sekarang", href: "/reservasi" },
  },
  {
    title: "Cita Rasa",
    subtitle: "Warisan",
    description:
      "Resep turun-temurun diracik ulang oleh para koki kami dengan bahan segar pilihan, menghasilkan hidangan yang setia pada akar tradisi sekaligus memikat mata.",
    cta: { label: "Reservasi Sekarang", href: "/reservasi" },
  },
  {
    title: "Malam",
    subtitle: "Istimewa",
    description:
      "Nikmati makan malam dalam suasana hangat dan elegan, cocok untuk perayaan keluarga, pertemuan bisnis, atau sekadar menikmati waktu berkualitas bersama orang tersayang.",
    cta: { label: "Reservasi Sekarang", href: "/reservasi" },
  },
] as const;

export const heroBackground = {
  src: "/images/bg/hero.jpg?v=1",
  width: 1920,
  height: 1081,
};

export const movingText = {
  text: "Mulai petualangan kuliner Anda",
  highlight: "dipandu hidangan istimewa kami",
};

export const about = {
  subtitle: "Tentang Kami",
  lead: "Pengalaman Bersantap Eksklusif Bagi",
  title: "Tamu Terhormat",
  details:
    "Selamat datang di restoran kami, tempat seni kuliner bertemu pengalaman bersantap yang luar biasa. Kami menghadirkan surga gastronomi yang memanjakan lidah dan meninggalkan kenangan yang tak terlupakan.",
  summary:
    "Setiap hidangan disiapkan dengan bahan lokal segar dan teknik memasak yang dijaga turun-temurun, disajikan dalam suasana yang tenang dan elegan.",
  cta: { label: "Jelajahi Dapur Kami", href: "/tentang" },
  image: {
    src: "/images/about/about-wagyu.jpg",
    alt: "Steak wagyu A5 dengan marbling merata dan taburan thyme",
    width: 1672,
    height: 941,
  } satisfies ImageAsset,
};

export const openingHours = {
  title: "Jam Buka",
  description:
    "Kami buka setiap hari untuk makan siang dan makan malam. Reservasi sangat dianjurkan pada akhir pekan dan hari libur agar Anda mendapatkan meja terbaik.",
  cta: { label: "Reservasi", href: "/reservasi" },
  image: {
    src: "/images/about/opening-hours.jpg",
    alt: "Meja makan yang tertata rapi di restoran Elegencia",
    width: 556,
    height: 556,
  } satisfies ImageAsset,
};

export const dishShowcase = {
  subtitle: "Etalase Hidangan",
  title: "Hidangan Pilihan",
  dishes,
};

export const foodMenu = {
  subtitle: "Menu Kami",
  title: "Hidangan Pembuka",
  cta: { label: "Lihat Selengkapnya", href: "/menu" },
  items: withMenuImages("appetizer", [
    { title: "Sate Lilit Bali", price: 65000, description: "Ikan tenggiri cincang berbumbu base genep", note: "Gratis es teh" },
    { title: "Lumpia Semarang", price: 48000, description: "Rebung, udang, dan ayam dengan saus kental", note: "Gratis acar" },
    { title: "Tahu Gejrot Cirebon", price: 38000, description: "Tahu goreng dengan kuah asam pedas manis", note: "Gratis kerupuk" },
    { title: "Siomay Bandung", price: 52000, description: "Ikan tenggiri dan udang dengan saus kacang", note: "Gratis teh hangat" },
    { title: "Perkedel Jagung", price: 36000, description: "Jagung manis garing dengan sambal terasi", note: "Gratis lalapan" },
    { title: "Otak-otak Palembang", price: 55000, description: "Ikan giling bakar daun pisang dengan cuko", note: "Gratis es jeruk" },
    { title: "Pepes Tahu Jamur", price: 42000, description: "Tahu dan jamur kukus daun pisang berbumbu kemangi", note: "Gratis nasi mini" },
    { title: "Risoles Ragout", price: 40000, description: "Kulit renyah isi ayam dan jamur saus krim", note: "Gratis saus sambal" },
    { title: "Martabak Telur Mini", price: 58000, description: "Telur bebek dan daging sapi cincang dengan acar", note: "Gratis es teh" },
    { title: "Gado-gado Betawi", price: 45000, description: "Sayuran segar, telur, dan saus kacang kental", note: "Gratis emping" },
  ]),
};

export const bestItem = {
  lead: "Sajian",
  title: "Andalan Kami",
  details:
    "Selamat datang di restoran kami, tempat seni kuliner bertemu pengalaman bersantap yang luar biasa. Kami menghadirkan surga gastronomi yang memanjakan lidah Anda.",
  imageOne: {
    src: "/images/best-item/best-item-1.jpg",
    alt: "Sajian andalan Elegencia yang disajikan di piring keramik",
    width: 643,
    height: 700,
  } satisfies ImageAsset,
  imageTwo: {
    src: "/images/best-item/best-item-2.jpg",
    alt: "Hidangan penutup khas Elegencia",
    width: 527,
    height: 367,
  } satisfies ImageAsset,
  ornament: "/images/icon/star-line.svg",
};

export const testimonials = [
  {
    name: "Budi Santoso",
    origin: "Jakarta",
    quote:
      "“Tim koki yang penuh semangat meracik setiap hidangan dengan bahan terbaik dan teknik inovatif, menghasilkan sajian yang indah dipandang sekaligus lezat dinikmati.”",
  },
  {
    name: "Ayu Lestari",
    origin: "Denpasar",
    quote:
      "“Rendang wagyunya empuk sekali dan bumbunya terasa dalam. Pelayanannya ramah dan suasananya cocok untuk makan malam keluarga.”",
  },
  {
    name: "Rizky Pratama",
    origin: "Surabaya",
    quote:
      "“Kami merayakan ulang tahun pernikahan di sini. Proses reservasinya mudah, dan seluruh hidangan keluar tepat waktu dengan rasa yang konsisten.”",
  },
].map((t, i) => ({
  ...t,
  image: {
    src: `/images/testimonial/guest-${i + 1}.jpg`,
    alt: `Foto ${t.name}`,
    width: 49,
    height: 49,
  } satisfies ImageAsset,
}));

export const reservation = {
  subtitle: "Reservasi",
  title: "Pesan Meja",
  videoId: "UsD1MhKBmD4",
  videoTitle: "Video profil restoran Elegencia",
  background: "/images/bg/reservation.jpg",
  guestOptions: [
    { value: "2", label: "2 Orang" },
    { value: "3-4", label: "3–4 Orang" },
    { value: "5-8", label: "5–8 Orang" },
    { value: "9+", label: "Lebih dari 8 Orang" },
  ],
};
