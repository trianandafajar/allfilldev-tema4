import { businessInfo, siteConfig } from "@/config/site";

export type LegalSection = {
  heading: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  path: string;
  /** Tanggal ditulis tetap: `new Date()` tidak boleh dipakai saat prerender (cacheComponents). */
  updatedAt: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
};

const { name } = siteConfig;
const { email, address } = businessInfo;
const contactLine = `Email: ${email}. Alamat: ${address.street}, ${address.city} ${address.postalCode}, ${address.region}.`;

/**
 * Draf teks legal. Tinjau dengan penasihat hukum dan sesuaikan dengan praktik bisnis nyata
 * (data yang benar-benar dikumpulkan, penyedia pihak ketiga, kebijakan pembatalan) sebelum produksi.
 */
export const privacyPolicy: LegalDocument = {
  title: "Kebijakan Privasi",
  description: `Cara ${name} mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai UU Pelindungan Data Pribadi.`,
  path: "/kebijakan-privasi",
  updatedAt: "4 November 2026",
  intro: [
    `${name} menghargai privasi Anda. Kebijakan ini menjelaskan data pribadi apa yang kami kumpulkan melalui situs ini, untuk apa kami menggunakannya, dan hak Anda atas data tersebut, sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.`,
    "Dengan menggunakan situs ini, Anda menyatakan telah membaca dan memahami kebijakan ini.",
  ],
  sections: [
    {
      heading: "Data yang Kami Kumpulkan",
      paragraphs: ["Kami hanya mengumpulkan data yang Anda berikan atau yang diperlukan agar situs berfungsi:"],
      items: [
        "Formulir kontak: nama, alamat email, dan isi pesan Anda.",
        "Formulir reservasi: nama, kontak, tanggal dan jam kedatangan, jumlah tamu, dan catatan khusus.",
        "Komentar blog: nama, alamat email, dan isi komentar.",
        "Data teknis: jenis perangkat dan peramban, alamat IP, serta halaman yang Anda kunjungi, yang tercatat otomatis oleh server.",
      ],
    },
    {
      heading: "Tujuan Penggunaan Data",
      items: [
        "Menanggapi pertanyaan dan pesan Anda.",
        "Memproses, mengonfirmasi, dan mengelola reservasi meja.",
        "Menampilkan dan memoderasi komentar pada artikel blog.",
        "Menjaga keamanan situs dan memahami cara pengunjung memakainya untuk perbaikan layanan.",
        "Memenuhi kewajiban yang diatur peraturan perundang-undangan.",
      ],
    },
    {
      heading: "Dasar Pemrosesan",
      paragraphs: [
        "Kami memproses data pribadi Anda berdasarkan persetujuan yang Anda berikan saat mengirim formulir, kebutuhan untuk menjalankan reservasi yang Anda minta, kepentingan yang sah untuk menjaga keamanan dan kualitas layanan, serta kewajiban hukum yang berlaku.",
      ],
    },
    {
      heading: "Penyimpanan dan Keamanan",
      paragraphs: [
        "Data disimpan selama diperlukan untuk tujuan di atas atau selama diwajibkan oleh hukum, lalu dihapus atau dianonimkan. Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi data dari akses, perubahan, atau pengungkapan yang tidak sah. Tidak ada transmisi internet yang sepenuhnya bebas risiko, sehingga kami tidak dapat menjamin keamanan mutlak.",
      ],
    },
    {
      heading: "Berbagi dengan Pihak Ketiga",
      paragraphs: [
        "Kami tidak menjual data pribadi Anda. Data hanya dibagikan kepada penyedia layanan yang membantu operasional situs dan bila diwajibkan oleh hukum atau permintaan resmi aparat berwenang.",
        "Situs ini menampilkan konten dari pihak ketiga, yaitu peta Google Maps dan video YouTube. Saat Anda memuat atau memutar konten tersebut, penyedia terkait dapat menerima data teknis Anda sesuai kebijakan privasi mereka masing-masing. Video diputar melalui domain YouTube privasi-diperluas yang tidak memasang cookie sebelum video diputar.",
      ],
    },
    {
      heading: "Cookie",
      paragraphs: [
        "Situs ini tidak menggunakan cookie pelacakan atau iklan milik kami. Peramban Anda dapat menyimpan data teknis yang diperlukan agar halaman tampil dengan benar. Anda dapat mengatur atau menghapus cookie melalui pengaturan peramban.",
      ],
    },
    {
      heading: "Hak Anda",
      paragraphs: ["Sebagai pemilik data pribadi, Anda berhak untuk:"],
      items: [
        "Meminta informasi tentang data Anda yang kami proses.",
        "Meminta salinan, perbaikan, atau pembaruan data yang tidak akurat.",
        "Meminta penghapusan data atau menarik kembali persetujuan Anda.",
        "Mengajukan keberatan atas pemrosesan data tertentu.",
      ],
    },
    {
      heading: "Anak-anak",
      paragraphs: [
        "Situs ini tidak ditujukan bagi anak di bawah 18 tahun. Kami tidak dengan sengaja mengumpulkan data anak tanpa persetujuan orang tua atau wali. Jika Anda mengetahui hal tersebut terjadi, hubungi kami agar data dapat dihapus.",
      ],
    },
    {
      heading: "Perubahan Kebijakan",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Tanggal pembaruan terakhir tercantum di bagian atas halaman. Penggunaan situs setelah perubahan berarti Anda menerima kebijakan yang diperbarui.",
      ],
    },
    {
      heading: "Hubungi Kami",
      paragraphs: [
        "Untuk menggunakan hak Anda atau mengajukan pertanyaan tentang kebijakan ini, hubungi kami.",
        contactLine,
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Syarat & Ketentuan",
  description: `Ketentuan penggunaan situs dan layanan reservasi ${name}.`,
  path: "/syarat-dan-ketentuan",
  updatedAt: "4 November 2026",
  intro: [
    `Selamat datang di situs ${name}. Dengan mengakses atau menggunakan situs ini, termasuk layanan reservasi meja, Anda setuju terikat pada syarat dan ketentuan berikut. Jika Anda tidak setuju, mohon hentikan penggunaan situs.`,
  ],
  sections: [
    {
      heading: "Penggunaan Situs",
      paragraphs: [
        "Anda setuju menggunakan situs ini hanya untuk tujuan yang sah dan tidak melanggar hukum, tidak mengganggu fungsi situs, dan tidak mencoba mengakses sistem tanpa izin.",
      ],
    },
    {
      heading: "Reservasi Meja",
      items: [
        "Reservasi melalui situs merupakan permintaan dan baru berlaku setelah kami mengonfirmasinya.",
        "Informasi yang Anda berikan harus benar dan dapat dihubungi.",
        "Ketersediaan meja bergantung pada kapasitas dan jam operasional pada hari yang bersangkutan.",
        "Untuk rombongan besar atau acara khusus, kami dapat meminta ketentuan tambahan yang akan disampaikan sebelum konfirmasi.",
      ],
    },
    {
      heading: "Perubahan dan Pembatalan",
      paragraphs: [
        "Mohon sampaikan perubahan atau pembatalan reservasi sesegera mungkin melalui kontak kami. Jika Anda terlambat cukup lama tanpa pemberitahuan, kami dapat memberikan meja kepada tamu lain.",
      ],
    },
    {
      heading: "Menu dan Harga",
      paragraphs: [
        "Menu, harga, dan ketersediaan hidangan di situs dapat berubah sewaktu-waktu tanpa pemberitahuan. Harga yang berlaku adalah harga di restoran saat Anda memesan. Foto hidangan bersifat ilustrasi.",
      ],
    },
    {
      heading: "Komentar dan Pesan Anda",
      paragraphs: [
        "Anda bertanggung jawab atas isi komentar atau pesan yang Anda kirim. Kami berhak menyunting atau menghapus komentar yang mengandung ujaran kebencian, pelecehan, spam, informasi pribadi pihak lain, atau yang melanggar hukum.",
      ],
    },
    {
      heading: "Hak Kekayaan Intelektual",
      paragraphs: [
        `Seluruh konten situs, termasuk teks, foto, logo, dan desain, dimiliki oleh ${name} atau pemberi lisensinya dan dilindungi hukum hak cipta. Anda tidak boleh menyalin, memperbanyak, atau menggunakannya untuk keperluan komersial tanpa izin tertulis dari kami.`,
      ],
    },
    {
      heading: "Tautan dan Layanan Pihak Ketiga",
      paragraphs: [
        "Situs ini dapat memuat tautan atau konten dari pihak ketiga seperti peta dan video. Kami tidak mengendalikan dan tidak bertanggung jawab atas isi maupun kebijakan privasi pihak ketiga tersebut.",
      ],
    },
    {
      heading: "Batas Tanggung Jawab",
      paragraphs: [
        `Situs disediakan sebagaimana adanya. Sejauh diizinkan hukum, ${name} tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs, gangguan akses, atau ketidakakuratan informasi. Ketentuan ini tidak membatasi hak Anda sebagai konsumen berdasarkan peraturan perundang-undangan.`,
      ],
    },
    {
      heading: "Hukum yang Berlaku",
      paragraphs: [
        "Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Perselisihan diupayakan diselesaikan secara musyawarah terlebih dahulu sebelum menempuh jalur hukum.",
      ],
    },
    {
      heading: "Perubahan Ketentuan",
      paragraphs: [
        "Kami dapat memperbarui ketentuan ini sewaktu-waktu. Tanggal pembaruan terakhir tercantum di bagian atas halaman, dan penggunaan situs setelah perubahan berarti Anda menyetujuinya.",
      ],
    },
    {
      heading: "Hubungi Kami",
      paragraphs: ["Pertanyaan tentang ketentuan ini dapat disampaikan melalui kontak berikut.", contactLine],
    },
  ],
};
