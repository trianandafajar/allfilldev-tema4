import { businessInfo } from "@/config/site";
import { formatHours } from "@/lib/format";

export type Faq = {
  question: string;
  /** Teks polos: dipakai juga untuk data terstruktur FAQPage. */
  answer: string;
};

const { address, email, openingHours, phones } = businessInfo;

/** Isi placeholder. Ganti dengan kebijakan dan data asli restoran sebelum produksi. */
export const faqs: readonly Faq[] = [
  {
    question: "Bagaimana cara memesan meja?",
    answer:
      "Anda dapat memesan melalui halaman Reservasi di situs ini, menghubungi kami lewat telepon, atau mengirim email. Cantumkan tanggal, jam, jumlah tamu, dan permintaan khusus. Reservasi baru berlaku setelah kami mengonfirmasinya.",
  },
  {
    question: "Jam berapa restoran buka?",
    answer: `${openingHours.map(formatHours).join(". ")}.`,
  },
  {
    question: "Apakah reservasi bisa diubah atau dibatalkan?",
    answer:
      "Bisa. Mohon hubungi kami sesegera mungkin jika rencana Anda berubah. Jika Anda terlambat cukup lama tanpa kabar, meja dapat kami berikan kepada tamu lain.",
  },
  {
    question: "Apakah ada pilihan untuk alergi atau pantangan makanan?",
    answer:
      "Ada. Beri tahu kami saat reservasi atau kepada pelayan Anda tentang alergi (misalnya kacang, seafood, atau susu) maupun pantangan seperti vegetarian dan tanpa babi. Tim dapur akan menyesuaikan hidangan sedapat mungkin.",
  },
  {
    question: "Apakah tersedia menu untuk anak-anak?",
    answer:
      "Kami menyediakan porsi kecil dan hidangan tidak pedas yang cocok untuk anak-anak. Pelayan kami siap membantu memilihkan.",
  },
  {
    question: "Bisakah saya mengadakan acara atau pertemuan di sini?",
    answer: `Bisa. Kami menerima perayaan keluarga, makan malam bisnis, dan acara kelompok kecil di ruang privat. Hubungi kami di ${email} atau ${phones[0].label} beberapa hari sebelumnya agar kami dapat menyiapkan menu dan tata meja.`,
  },
  {
    question: "Di mana lokasi restoran dan apakah tersedia parkir?",
    answer: `Kami berada di ${address.street}, ${address.city} ${address.postalCode}. Informasi area parkir dan layanan valet akan kami sampaikan saat konfirmasi reservasi.`,
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer:
      "Kami menerima pembayaran tunai, kartu debit dan kredit, serta dompet digital atau QRIS. Pembayaran dilakukan di restoran setelah Anda bersantap.",
  },
  {
    question: "Apakah ada aturan berpakaian?",
    answer:
      "Tidak ada aturan khusus. Kami menyarankan busana rapi yang membuat Anda nyaman menikmati makan malam.",
  },
  {
    question: "Bolehkah membawa kue atau makanan dari luar?",
    answer:
      "Untuk perayaan, Anda boleh membawa kue ulang tahun. Mohon beri tahu kami lebih dulu agar dapat disiapkan dan disajikan dengan baik. Makanan dan minuman lain dari luar tidak dapat dibawa masuk.",
  },
];
