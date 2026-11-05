import { blogPosts } from "@/data/blog";
import { chefs } from "@/data/chefs";
import { dishes } from "@/data/portfolio";

export const siteConfig = {
  name: "Elegencia",
  description:
    "Restoran kelas atas dengan hidangan Nusantara pilihan, suasana elegan, dan reservasi meja online.",
  language: "id",
  locale: "id_ID",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  copyrightYear: 2026,
} as const;

/**
 * Warna merek untuk tempat yang tidak bisa membaca CSS variable: `theme-color`, manifest, dan gambar OG (satori).
 * Nilainya harus sama dengan `--background`, `--primary`, dan `--bright` di `src/app/globals.css`.
 */
export const brandColors = {
  background: "#040d10",
  primary: "#ffd28d",
  bright: "#ffffff",
} as const;

export const businessInfo = {
  email: "halo@example.com",
  phones: [
    { label: "+62 21 5555 0123", href: "tel:+622155550123" },
    { label: "+62 812 3456 7890", href: "tel:+6281234567890" },
  ],
  address: {
    street: "Jl. Senopati No. 27, Kebayoran Baru",
    city: "Jakarta Selatan",
    region: "DKI Jakarta",
    postalCode: "12190",
    country: "ID",
  },
  geo: { latitude: -6.2297, longitude: 106.8091, isoRegion: "ID-JK" },
  socials: [] as readonly string[],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Senopati+No.+27+Kebayoran+Baru+Jakarta+Selatan",
  /** URL embed Google Maps (tanpa API key) untuk iframe di halaman kontak dan reservasi. */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Jl.+Senopati+No.+27+Kebayoran+Baru+Jakarta+Selatan&z=15&output=embed",
  cuisine: ["Indonesia", "Nusantara"],
  priceRange: "Rp 50.000 - Rp 250.000",
  /** Jam dalam format HH:mm, zona WIB. `days` memakai nama hari schema.org. */
  openingHours: [
    {
      label: "Minggu – Kamis",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:30",
      closes: "23:00",
    },
    {
      label: "Jumat & Sabtu",
      days: ["Friday", "Saturday"],
      opens: "11:30",
      closes: "24:00",
    },
  ],
} as const;

export type NavItem = {
  title: string;
  href: string;
  children?: readonly NavItem[];
};

/** Menu utama. */
export const mainNav: readonly NavItem[] = [
  { title: "Beranda", href: "/" },
  { title: "Tentang", href: "/tentang" },
  { title: "Menu", href: "/menu" },
  { title: "Koki", href: "/koki" },
  { title: "Portofolio", href: "/portofolio" },
  { title: "Blog", href: "/blog" },
  { title: "Kontak", href: "/kontak" },
];

export const topNav: readonly NavItem[] = [
  { title: "Beranda", href: "/" },
  { title: "Tentang", href: "/tentang" },
  { title: "Menu", href: "/menu" },
  { title: "Koki", href: "/koki" },
  { title: "Kontak", href: "/kontak" },
];
export const footerNav = topNav;
export const bottomNav: readonly NavItem[] = [
  { title: "FAQ", href: "/faq" },
  { title: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { title: "Syarat & Ketentuan", href: "/syarat-dan-ketentuan" },
];

export type SitePage = { path: string; title: string; description: string };

export const sitePages: readonly SitePage[] = [
  { path: "/", title: "Beranda", description: siteConfig.description },
  {
    path: "/tentang",
    title: "Tentang Kami",
    description: "Kisah Elegencia, restoran Nusantara kelas atas di Jakarta Selatan, dan komitmen kami pada bahan segar.",
  },
  {
    path: "/menu",
    title: "Menu",
    description: "Daftar hidangan pembuka, minuman segar, dan hidangan penutup Nusantara lengkap dengan harga.",
  },
  {
    path: "/koki",
    title: "Koki Kami",
    description: "Kenali para koki Elegencia dan keahlian mereka dalam masakan Nusantara.",
  },
  ...chefs.map((chef) => ({
    path: `/koki/${chef.slug}`,
    title: `Chef ${chef.name}`,
    description: `${chef.role} Elegencia. ${chef.expertise}`,
  })),
  {
    path: "/portofolio",
    title: "Portofolio Hidangan",
    description: "Kumpulan hidangan andalan Elegencia, dari rendang wagyu hingga klepon cake.",
  },
  ...dishes.map((dish) => ({
    path: `/portofolio/${dish.slug}`,
    title: dish.title,
    description: dish.description,
  })),
  {
    path: "/reservasi",
    title: "Reservasi",
    description: "Pesan meja di Elegencia secara online dan lihat lokasi cabang kami.",
  },
  {
    path: "/kontak",
    title: "Kontak",
    description: "Hubungi Elegencia untuk pertanyaan, reservasi acara, atau kerja sama.",
  },
  {
    path: "/blog",
    title: "Blog",
    description: "Cerita kuliner, resep, dan tips bersantap dari tim Elegencia.",
  },
  ...blogPosts.map((post) => ({
    path: post.href,
    title: post.title,
    description: post.excerpt,
  })),
  {
    path: "/faq",
    title: "FAQ",
    description: "Pertanyaan yang sering diajukan tentang reservasi, jam buka, menu, acara, parkir, dan pembayaran.",
  },
  {
    path: "/kebijakan-privasi",
    title: "Kebijakan Privasi",
    description: "Cara Elegencia mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  },
  {
    path: "/syarat-dan-ketentuan",
    title: "Syarat & Ketentuan",
    description: "Ketentuan penggunaan situs dan layanan reservasi Elegencia.",
  },
];
