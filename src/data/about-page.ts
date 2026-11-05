import type { ImageAsset } from "./types";

export const aboutPage = {
  subtitle: "Kisah Kami",
  lead: "Dari Dapur Keluarga Menuju",
  title: "Meja Istimewa",
  details:
    "Elegencia bermula dari dapur kecil keluarga di Jakarta Selatan yang percaya bahwa makan bersama adalah cara terbaik merayakan hidup. Kini kami menyajikan masakan Nusantara dengan standar pelayanan restoran kelas atas.",
  summary:
    "Setiap pekan tim kami berkeliling pasar dan kebun mitra petani untuk memilih bahan terbaik, lalu mengolahnya menjadi hidangan yang setia pada akar tradisi.",
  cta: { label: "Lihat Menu Kami", href: "/menu" },
  image: {
    src: "/images/about/about-bg.jpg",
    alt: "Koki Elegencia menyiapkan hidangan di dapur",
    width: 880,
    height: 571,
  } satisfies ImageAsset,
};

export const aboutVideo = {
  videoId: "UsD1MhKBmD4",
  title: "Video profil restoran Elegencia",
  background: "/images/about/video-bg.jpg",
};
