import { foodMenu } from "./home";
import { withMenuImages } from "./menu-image";
import type { MenuItem } from "./types";

type RawItem = Omit<MenuItem, "image">;

const drinks: RawItem[] = [
  { title: "Es Teh Tarik Rempah", price: 28000, description: "Teh hitam, jahe, dan kayu manis dengan susu", note: "Isi ulang sekali" },
  { title: "Wedang Uwuh", price: 30000, description: "Rebusan secang, jahe, dan cengkih khas Yogyakarta", note: "Disajikan hangat" },
  { title: "Es Jeruk Kelapa Muda", price: 32000, description: "Perasan jeruk peras dengan daging kelapa muda", note: "Tanpa pemanis buatan" },
  { title: "Jus Alpukat Gula Aren", price: 38000, description: "Alpukat mentega dengan sirup gula aren kental", note: "Tambah espresso Rp 8.000" },
  { title: "Es Cendol Durian", price: 42000, description: "Cendol pandan, santan, dan gula aren dengan durian", note: "Porsi besar" },
  { title: "Kopi Tubruk Gayo", price: 30000, description: "Biji arabika Gayo diseduh tradisional", note: "Gratis kue cubit" },
  { title: "Es Kopi Susu Aren", price: 34000, description: "Espresso, susu segar, dan gula aren", note: "Tersedia tanpa gula" },
  { title: "Bir Pletok", price: 29000, description: "Minuman rempah Betawi dari jahe dan secang", note: "Tanpa alkohol" },
  { title: "Es Sirsak Madu", price: 33000, description: "Buah sirsak segar dengan madu hutan", note: "Tanpa pengawet" },
  { title: "Lemongrass Soda", price: 31000, description: "Serai, jeruk nipis, dan soda dingin", note: "Gratis es batu ekstra" },
];

const desserts: RawItem[] = [
  { title: "Klepon Cake", price: 42000, description: "Kue pandan lembut berisi lelehan gula aren", note: "Gratis es krim kelapa" },
  { title: "Es Teler Elegencia", price: 38000, description: "Alpukat, nangka, dan kelapa muda dengan susu", note: "Gratis kerupuk manis" },
  { title: "Pisang Goreng Keju", price: 35000, description: "Pisang kepok garing dengan keju dan cokelat", note: "Pilihan topping" },
  { title: "Serabi Kuah Kinca", price: 34000, description: "Serabi hangat dengan kuah gula merah dan santan", note: "Gratis teh hangat" },
  { title: "Es Podeng Manado", price: 36000, description: "Es krim kelapa, kacang, dan susu cokelat", note: "Porsi untuk berdua" },
  { title: "Dadar Gulung Pandan", price: 32000, description: "Kulit pandan dengan isian kelapa dan gula aren", note: "Isi tiga potong" },
  { title: "Kue Lapis Legit", price: 40000, description: "Lapisan mentega dan rempah yang dipanggang tipis", note: "Dipanggang harian" },
  { title: "Bubur Sumsum", price: 30000, description: "Bubur tepung beras dengan kuah gula jawa", note: "Disajikan hangat" },
  { title: "Es Campur Elegan", price: 39000, description: "Cincau, kolang-kaling, dan buah dengan sirup", note: "Gratis kerupuk" },
  { title: "Wajik Cokelat", price: 33000, description: "Ketan manis dengan lapisan cokelat Nusantara", note: "Gratis kopi" },
];

export const menuCategories = [
  {
    id: "hidangan-pembuka",
    subtitle: "Hidangan Pembuka",
    title: "Pembuka",
    background: "/images/bg/menu-appetizer.png",
    items: foodMenu.items,
  },
  {
    id: "minuman",
    subtitle: "Bar Minuman",
    title: "Minuman Segar",
    background: "/images/bg/menu-drinks.png",
    items: withMenuImages("drink", drinks),
  },
  {
    id: "penutup",
    subtitle: "Manis Penutup",
    title: "Hidangan Penutup",
    background: "/images/bg/menu-dessert.png",
    items: withMenuImages("dessert", desserts),
  },
];
