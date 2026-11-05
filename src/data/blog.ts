import type { ImageAsset } from "./types";

type PostExtra = {
  shortTitle: string;
  shortDesc: string;
  shortDescTwo: string;
};

export type BlogComment = {
  name: string;
  avatar: string;
  date: string;
  text: string;
  replies: readonly Omit<BlogComment, "replies">[];
};

const base = [
  {
    slug: "seni-menikmati-hidangan-nusantara",
    title: "Seni Menikmati Hidangan Nusantara",
    date: "6 Juni 2026",
    category: "Kuliner",
    excerpt: "Dari urutan penyajian hingga cara memadukan rasa, kenali etika menikmati makan malam ala Nusantara.",
    paragraphs: [
      "Hidangan Nusantara dirancang untuk dinikmati bersama. Beragam lauk, sambal, dan lalapan diletakkan di tengah agar setiap orang dapat meracik suapan sesuai selera.",
      "Mulailah dengan sesuatu yang ringan seperti sup atau hidangan pembuka, lalu lanjutkan ke lauk utama. Biarkan rasa pedas, asam, dan manis saling menyeimbangkan di lidah Anda.",
    ],
    quote: "Makanan terbaik adalah yang membuat meja terasa seperti rumah.",
  },
  {
    slug: "rahasia-bumbu-rendang",
    title: "Rahasia Bumbu di Balik Rendang",
    date: "12 Juni 2026",
    category: "Resep",
    excerpt: "Mengapa rendang membutuhkan waktu berjam-jam dan rempah apa saja yang membuatnya begitu kaya rasa.",
    paragraphs: [
      "Rendang bukan sekadar daging bersantan. Proses memasak yang lama membuat air menguap perlahan hingga bumbu menyatu dan mengering menjadi lapisan gelap yang pekat.",
      "Kunci rasanya ada pada keseimbangan lengkuas, serai, kunyit, dan cabai, ditambah kelapa sangrai yang memberi aroma gurih yang dalam.",
    ],
    quote: "Kesabaran adalah bumbu yang tidak bisa dibeli.",
  },
  {
    slug: "memilih-bahan-segar-dari-pasar",
    title: "Memilih Bahan Segar dari Pasar Lokal",
    date: "20 Juni 2026",
    category: "Di Balik Dapur",
    excerpt: "Setiap pagi tim dapur kami berbelanja langsung. Begini cara kami memilih bahan terbaik.",
    paragraphs: [
      "Kesegaran dimulai dari pasar. Kami memeriksa warna, aroma, dan tekstur setiap bahan sebelum dibawa ke dapur, terutama ikan dan sayuran daun.",
      "Bekerja sama dengan petani dan nelayan lokal membuat rantai pasokan lebih pendek, sehingga bahan sampai ke piring Anda dalam hitungan jam.",
    ],
    quote: "Hidangan terbaik berawal dari bahan yang dipilih dengan teliti.",
  },
  {
    slug: "panduan-memilih-menu-untuk-acara-keluarga",
    title: "Panduan Memilih Menu untuk Acara Keluarga",
    date: "28 Juni 2026",
    category: "Tips",
    excerpt: "Merencanakan makan bersama keluarga besar? Ini kombinasi hidangan yang disukai semua usia.",
    paragraphs: [
      "Untuk rombongan besar, pilih beberapa hidangan berbagi yang beragam: satu daging, satu ikan atau ayam, satu sayuran, dan nasi hangat dengan sambal yang tingkat pedasnya berbeda.",
      "Jangan lupa hidangan penutup. Es teler atau klepon cake biasanya menjadi penutup yang disukai anak-anak maupun orang dewasa.",
    ],
    quote: "Makan bersama adalah hadiah yang paling sederhana.",
  },
  {
    slug: "tradisi-jajanan-pasar",
    title: "Tradisi Jajanan Pasar yang Tetap Hidup",
    date: "4 Juli 2026",
    category: "Budaya",
    excerpt: "Klepon, kue lapis, dan serabi: jajanan sederhana yang menyimpan sejarah panjang.",
    paragraphs: [
      "Jajanan pasar lahir dari kebiasaan membuat kudapan dengan bahan seadanya: tepung beras, kelapa, dan gula aren. Dari kesederhanaan itu tercipta rasa yang sulit ditiru.",
      "Di Elegencia, kami menyajikannya kembali dengan teknik pastry modern tanpa menghilangkan karakter aslinya.",
    ],
    quote: "Yang sederhana sering kali yang paling berkesan.",
  },
  {
    slug: "memadukan-minuman-dengan-masakan-pedas",
    title: "Memadukan Minuman dengan Masakan Pedas",
    date: "11 Juli 2026",
    category: "Minuman",
    excerpt: "Es teh, jus alpukat, atau wedang? Pilih pendamping yang tepat untuk meredam dan menonjolkan pedas.",
    paragraphs: [
      "Minuman bersusu atau berlemak seperti jus alpukat membantu meredakan pedas, sementara teh tawar membersihkan lidah di antara suapan.",
      "Untuk makan malam yang lebih santai, wedang rempah memberi kehangatan dan melengkapi aroma rempah dalam hidangan utama.",
    ],
    quote: "Pendamping yang tepat membuat setiap suapan lebih berkesan.",
  },
  {
    slug: "kisah-di-balik-sate-lilit",
    title: "Kisah di Balik Sate Lilit Bali",
    date: "18 Juli 2026",
    category: "Kuliner",
    excerpt: "Sate tanpa tusuk bambu? Telusuri asal-usul sate lilit dan cara membuat tekstur yang pas.",
    paragraphs: [
      "Sate lilit dibuat dari daging atau ikan cincang yang dilekatkan pada batang serai atau bambu pipih. Serai memberi aroma segar saat dibakar.",
      "Kunci tekstur ada pada kelapa parut dan santan yang dicampurkan ke adonan sehingga sate tetap lembap dan tidak mudah hancur.",
    ],
    quote: "Setiap daerah punya cara sendiri merayakan api dan rempah.",
  },
  {
    slug: "merayakan-momen-spesial-di-elegencia",
    title: "Merayakan Momen Spesial di Elegencia",
    date: "25 Juli 2026",
    category: "Acara",
    excerpt: "Ulang tahun, lamaran, hingga makan malam bisnis: bagaimana kami menyiapkan meja untuk acara Anda.",
    paragraphs: [
      "Tim kami membantu menata meja, menyesuaikan menu, dan mengatur alur penyajian agar acara berjalan tenang. Hubungi kami beberapa hari sebelumnya untuk reservasi khusus.",
      "Kami juga menyediakan ruang privat untuk kelompok kecil yang menginginkan suasana lebih tertutup.",
    ],
    quote: "Momen terbaik layak disambut dengan hidangan terbaik.",
  },
  {
    slug: "mengenal-ragam-sambal-nusantara",
    title: "Mengenal Ragam Sambal Nusantara",
    date: "2 Agustus 2026",
    category: "Resep",
    excerpt: "Dari sambal matah hingga sambal terasi, kenali karakter dan pasangan terbaiknya.",
    paragraphs: [
      "Sambal matah segar dengan irisan serai dan bawang cocok mendampingi hidangan bakar, sedangkan sambal terasi yang pekat lebih serasi dengan lauk goreng.",
      "Mencoba beberapa sambal sekaligus adalah cara menyenangkan untuk mengenal keragaman rasa pedas di Nusantara.",
    ],
    quote: "Sambal adalah bahasa pemersatu di meja makan kita.",
  },
];

/** Isi tambahan artikel: subjudul, dua paragraf penutup (di sekitar video). */
const extras: Record<string, PostExtra> = {
  "seni-menikmati-hidangan-nusantara": {
    shortTitle: "Mulai dari yang Ringan",
    shortDesc: "Urutan yang baik membuat setiap rasa punya ruang: pembuka yang segar, lauk utama yang kaya, lalu penutup yang manis.",
    shortDescTwo: "Jangan terburu-buru. Makan malam Nusantara paling nikmat bila dinikmati perlahan bersama orang-orang terdekat.",
  },
  "rahasia-bumbu-rendang": {
    shortTitle: "Waktu adalah Bumbu Utama",
    shortDesc: "Api kecil dan pengadukan berkala membuat santan pecah menjadi minyak yang menggoreng bumbu dari dalam.",
    shortDescTwo: "Rendang yang baik justru lebih enak keesokan harinya, saat rempah sudah benar-benar meresap.",
  },
  "memilih-bahan-segar-dari-pasar": {
    shortTitle: "Kenali Tanda Kesegaran",
    shortDesc: "Mata ikan yang jernih, daun yang renyah, dan aroma yang bersih adalah tanda sederhana yang tidak pernah berbohong.",
    shortDescTwo: "Dengan membeli secukupnya setiap hari, tidak ada bahan yang menunggu terlalu lama di dapur kami.",
  },
  "panduan-memilih-menu-untuk-acara-keluarga": {
    shortTitle: "Seimbangkan Rasa dan Selera",
    shortDesc: "Sediakan pilihan tidak pedas untuk anak-anak dan sambal terpisah untuk yang menyukainya.",
    shortDescTwo: "Reservasi lebih awal membantu kami menyiapkan meja panjang dan porsi berbagi yang pas untuk rombongan Anda.",
  },
  "tradisi-jajanan-pasar": {
    shortTitle: "Manis yang Menyimpan Cerita",
    shortDesc: "Setiap jajanan punya makna: klepon untuk kejutan, lapis untuk kehidupan yang berlapis, serabi untuk kebersamaan.",
    shortDescTwo: "Mencicipinya kembali adalah cara kecil untuk merawat tradisi kuliner yang diwariskan turun-temurun.",
  },
  "memadukan-minuman-dengan-masakan-pedas": {
    shortTitle: "Dingin atau Hangat?",
    shortDesc: "Minuman dingin memberi jeda cepat dari pedas, sedangkan minuman hangat melarutkan rasa dan memperpanjang aroma rempah.",
    shortDescTwo: "Tanyakan rekomendasi pelayan kami; setiap hidangan punya pasangan minuman yang sudah kami uji.",
  },
  "kisah-di-balik-sate-lilit": {
    shortTitle: "Dibakar di Atas Sabut Kelapa",
    shortDesc: "Bara sabut kelapa memberi asap yang lembut dan manis, berbeda dari arang biasa.",
    shortDescTwo: "Sajikan selagi hangat dengan sambal matah dan perasan jeruk limau untuk rasa yang paling segar.",
  },
  "merayakan-momen-spesial-di-elegencia": {
    shortTitle: "Detail Kecil yang Berarti",
    shortDesc: "Dari kue ulang tahun hingga susunan tempat duduk, kami mencatat setiap permintaan agar malam Anda berjalan mulus.",
    shortDescTwo: "Ceritakan kebutuhan Anda lewat halaman reservasi dan tim kami akan menghubungi Anda.",
  },
  "mengenal-ragam-sambal-nusantara": {
    shortTitle: "Pedas yang Berkarakter",
    shortDesc: "Sambal bukan sekadar pedas; ada yang segar, pekat, asam, atau manis, dan masing-masing mengubah rasa hidangan.",
    shortDescTwo: "Kami meracik sambal setiap hari agar rasa segarnya tetap terjaga hingga ke meja Anda.",
  },
};

/** Komentar contoh yang sama untuk semua artikel. Belum terhubung ke backend. */
export const blogComments: readonly BlogComment[] = [
  {
    name: "Rina Maharani",
    avatar: "/images/blog/author-2.png",
    date: "Agustus 2026",
    text: "Artikelnya menarik sekali. Saya jadi ingin mencoba hidangan ini saat berkunjung ke Elegencia akhir pekan nanti.",
    replies: [
      {
        name: "Tim Elegencia",
        avatar: "/images/blog/author-1.png",
        date: "Agustus 2026",
        text: "Terima kasih, Rina! Kami tunggu kedatangan Anda. Jangan lupa reservasi lebih awal untuk akhir pekan.",
      },
    ],
  },
];

export const blogPosts = base.map((post, i) => ({
  ...post,
  ...extras[post.slug],
  videoId: "UsD1MhKBmD4",
  videoImage: {
    src: "/images/blog/blog-video.jpg",
    alt: post.title,
    width: 983,
    height: 511,
  } satisfies ImageAsset,
  comments: blogComments,
  author: "Tim Elegencia",
  href: `/blog/${post.slug}`,
  tags: ["Kuliner", "Nusantara", post.category],
  image: {
    src: `/images/blog/blog-${i + 1}.jpg`,
    alt: post.title,
    width: 391,
    height: 291,
  } satisfies ImageAsset,
  cover: {
    src: "/images/blog/blog-detail.jpg",
    alt: post.title,
    width: 983,
    height: 511,
  } satisfies ImageAsset,
}));

export type BlogPost = (typeof blogPosts)[number];

export const blogCategories = [...new Set(blogPosts.map((post) => post.category))];
