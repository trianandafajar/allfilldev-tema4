# SEO, GEO, sitemap

Catatan setup. Dokumen ini diperbarui seiring fitur ditambah; bagian "Belum dikerjakan" adalah daftar kerja berikutnya.

"GEO" di sini berarti Generative Engine Optimization (agar muncul/terkutip di jawaban AI). SEO lokal (area layanan, alamat) dicatat terpisah di bagian terakhir.

## Yang sudah ada

| Fitur | File | Keterangan |
| --- | --- | --- |
| Identitas situs | `src/config/site.ts` | `siteConfig` (nama, deskripsi, bahasa, locale, url), `businessInfo` (alamat, jam, `geo`, `socials`) dan `sitePages` (daftar halaman publik) |
| Metadata seragam | `src/lib/seo.ts` → `createMetadata()` | Dipakai **semua** halaman: title, description, canonical, Open Graph (dengan gambar), dan Twitter card |
| Metadata global | `src/app/layout.tsx` | `metadataBase`, title template `%s \| Elegencia`, default untuk halaman tanpa `createMetadata` (404) |
| Gambar OG | `src/app/og/[...slug]/route.tsx`, `src/lib/og.ts`, `src/components/seo/og-card.tsx` | Kartu 1200x630 dibuat otomatis per halaman saat build (kicker, judul, deskripsi, foto); lihat `docs/images.md`. `public/images/og/default.jpg` jadi latar halaman biasa dan cadangan untuk 404 |
| Ikon dan PWA | `src/app/icon.svg`, `favicon.ico`, `apple-icon.png`, `manifest.ts` | Favicon merek (huruf E), ikon iOS, manifest (nama, ikon 192/512/maskable, warna). `theme-color` dari `viewport` di `layout.tsx` |
| Tombol share | `src/components/shared/share-links.tsx`, `copy-link-button.tsx` | Facebook, X, LinkedIn, WhatsApp (tautan resmi, tanpa SDK) + salin tautan. Dipakai di detail blog dan hidangan |
| Meta geo | `src/app/layout.tsx` | `geo.region`, `geo.placename`, `geo.position`, `ICBM` dari `businessInfo` |
| robots.txt | `src/app/robots.ts` | Izinkan semua (termasuk crawler AI), tunjuk ke sitemap, `host` |
| sitemap.xml | `src/app/sitemap.ts` | Dibuat dari `sitePages` |
| llms.txt | `src/app/llms.txt/route.ts` | Fakta singkat bisnis + peta halaman per kelompok; dibangun oleh `src/lib/llms.ts` |
| llms-full.txt | `src/app/llms-full.txt/route.ts` | Teks lengkap: menu dengan harga, hidangan, koki, tanya jawab, ringkasan blog; dari data yang sama dengan halaman |
| JSON-LD situs | `src/components/seo/site-json-ld.tsx` | `Organization` (logo, `contactPoint`, `sameAs`) + `WebSite`, di root layout |
| JSON-LD `Restaurant` | `src/components/seo/restaurant-json-ld.tsx` | Beranda: alamat, `geo`, jam buka, `hasMenu`, `acceptsReservations`, `ReserveAction`; datanya dari `businessInfo`, satu sumber dengan footer |
| JSON-LD halaman | `src/components/seo/web-page-json-ld.tsx` | `AboutPage` (`/tentang`), `ContactPage` (`/kontak`), `CollectionPage` + `ItemList` (`/koki`, `/portofolio`, `/blog`), `WebPage` (`/reservasi`, legal) |
| JSON-LD `Menu` | `src/components/seo/menu-json-ld.tsx` | `/menu`: `Menu` > `MenuSection` > `MenuItem` dengan harga IDR |
| JSON-LD koki | `src/components/seo/chef-json-ld.tsx` | `/koki/[slug]`: `ProfilePage` + `Person` (`worksFor` restoran) |
| JSON-LD hidangan | `src/components/seo/dish-json-ld.tsx` | `/portofolio/[slug]`: `ItemPage` + `MenuItem` |
| JSON-LD `BlogPosting` | `src/components/seo/blog-posting-json-ld.tsx` | `/blog/[slug]`, lengkap dengan `datePublished` (dari `indonesianDateToIso`, `src/lib/format.ts`) |
| JSON-LD `FAQPage` | `src/components/seo/faq-json-ld.tsx` | `/faq`; diambil dari `src/data/faq.ts`, satu sumber dengan teks di halaman |
| JSON-LD `BreadcrumbList` | `src/components/seo/breadcrumb-json-ld.tsx` | Otomatis lewat `PageHero` di semua halaman dalam |
| Helper | `src/lib/seo.ts` | `absoluteUrl()`, `serializeJsonLd()`, `entityId`, `defaultOgImage`, `itemListJsonLd()` |

Tidak ada package tambahan; semua memakai fitur bawaan Next.

Semua node JSON-LD saling terhubung lewat `@id` (`entityId.organization`, `.website`, `.restaurant` di `src/lib/seo.ts`), bukan entitas terpisah. Node halaman memakai `${url}#webpage`.

## Environment

`NEXT_PUBLIC_SITE_URL` (lihat `.env.example`) menentukan domain di canonical, sitemap, robots, llms, Open Graph, dan JSON-LD. Jika kosong, jatuh ke `http://localhost:3000`, jadi **wajib diisi di production**. Nilainya ikut tertanam saat build, bukan saat runtime.

## Struktur route

- `src/app/layout.tsx`: root (font, metadata, JSON-LD situs), tanpa header/footer.
- `src/app/(site)/`: halaman biasa; `layout.tsx` di sini memasang `SiteHeader`, `SiteFooter`, `ScrollUp`.
- `src/app/(bare)/`: halaman layar penuh tanpa header/footer (`/segera-hadir`).
- `src/app/not-found.tsx`: 404 untuk semua URL tak dikenal dan `notFound()` (tanpa header/footer, `noindex` otomatis dari Next).
- Halaman detail (`koki/[slug]`, `portofolio/[slug]`, `blog/[slug]`) memakai `generateStaticParams` dari `src/data/*`, `generateMetadata`, dan `notFound()` bila slug tak dikenal. Semuanya di-prerender saat build.
- Link `href` ke detail dibuat dari data (`dish.href`, `post.href`, `/koki/${slug}`), jadi slug hanya ditulis di data.

## Menambah halaman baru

1. Buat route di `src/app/(site)/...`.
2. Daftarkan di `sitePages` (`src/config/site.ts`). Otomatis masuk sitemap, llms.txt, dan menjadi sumber title/description.
3. Di `page.tsx` export `metadata = createMetadata({ path: "/path" })`. Title dan description diambil dari `sitePages`; isi `title`/`description`/`image`/`type` hanya bila perlu menimpa. Untuk halaman detail, panggil `createMetadata` di `generateMetadata`; kartu OG-nya otomatis memakai foto item bila datanya dikenali `getOgContent` (`src/lib/og.ts`), jadi tambahkan jenis halaman baru di sana.
4. Pasang JSON-LD yang sesuai jenis halaman (`WebPageJsonLd` dengan `type`, atau komponen khusus di `src/components/seo/`).
5. Tautan di baris paling bawah footer (FAQ, Kebijakan Privasi, Syarat & Ketentuan) ada di `bottomNav` (`src/config/site.ts`), terpisah dari `topNav`.
6. Halaman yang tidak boleh diindeks (login, dashboard, `/segera-hadir`): jangan masukkan ke `sitePages`, dan beri `createMetadata({ ..., noindex: true })` dengan `title` dan `description` sendiri.

## Keputusan dan batasan

- **Sitemap tanpa `lastModified`.** Dengan `cacheComponents: true`, `new Date()` saat prerender membuat build gagal (contoh di doc Next memakainya, tapi tidak berlaku di setup ini). Isi `lastModified` hanya dari data nyata, mis. `updatedAt` konten dari database.
- **Canonical diset per halaman, bukan di layout.** Canonical di layout akan menunjuk semua halaman ke `/`.
- **Open Graph per halaman menimpa seluruh objek `openGraph` dari layout** (Next tidak menggabungkan sebagian), karena itu `createMetadata` selalu menulis `siteName`, `locale`, `url`, dan `images` sendiri.
- **Title beranda memakai `title.absolute`** (`createMetadata({ absoluteTitle: true })`). `title.template` di layout tidak berlaku untuk `page.tsx` di segmen yang sama. Halaman di subfolder otomatis mendapat akhiran ` | Elegencia`.
- **`twitter:card` = `summary_large_image`** dengan gambar dari `createMetadata`.
- **Gambar OG otomatis, satu route.** `createMetadata` mengisi `og:image` dengan `/og/<path>` untuk halaman yang terdaftar di `sitePages`; halaman lain (noindex, 404) memakai `defaultOgImage`. Satori tidak bisa memuat font variabel, jadi font kartu adalah berkas statis di `src/assets/fonts/`.
- **`theme-color`, manifest, dan kartu OG memakai `brandColors`** (`src/config/site.ts`). Mereka tidak bisa membaca CSS variable, jadi nilainya disalin dari `globals.css`; ubah keduanya bersamaan.
- **Meta artikel.** `createMetadata` menerima `publishedTime`, `authors`, `section`, `tags` untuk `type: "article"` (detail blog), menjadi `article:published_time` dan seterusnya.
- **Meta geo hanya pelengkap.** Google mengabaikan `geo.*` dan `ICBM`; manfaatnya terbatas (Bing, direktori lama). Sinyal lokal utama: JSON-LD `Restaurant` (`geo`, `hasMap`, `areaServed`, alamat) dan Google Business Profile.
- **Tombol share bukan SDK.** Hanya tautan intent resmi; tidak ada skrip pihak ketiga, jadi tidak ada pelacakan atau biaya performa. Tautan sosial yang dulu ada di kartu penulis blog dihapus karena mengarah ke beranda platform, bukan akun asli.
- **`<html lang>`** diambil dari `siteConfig.language` (`id`).
- **JSON-LD** disisipkan lewat `<script>` biasa, dengan `<` di-escape (`<`) sesuai panduan Next, supaya data dinamis tidak bisa menutup tag script.
- **`sameAs` kosong sampai diisi.** `businessInfo.socials` sengaja `[]`: tautan sosial di footer dan profil koki masih URL umum platform, dan memasukkannya ke `sameAs` akan salah. Isi dengan URL akun asli, `Organization` dan `Restaurant` mengikuti.
- **`geo` placeholder.** `businessInfo.geo` adalah koordinat kawasan Senopati; ganti dengan titik asli dari Google Business Profile.
- **llms.txt** adalah usulan standar komunitas, dan belum ada bukti kuat mesin AI utama membacanya. Biayanya kecil (dibangun dari data yang sama, tanpa teks tambahan yang harus dirawat), jadi disertakan, tapi jangan dianggap pengganti konten yang jelas, JSON-LD, dan halaman yang bisa di-crawl.
- **Crawler AI** (GPTBot, ClaudeBot, PerplexityBot, dll.) tidak diblokir karena aturan `*` mengizinkan semua. Untuk membatasi, tambah rule per `userAgent` di `robots.ts`.
- **Tidak ada `aggregateRating` / `review`.** Testimoni di beranda adalah data contoh; menandainya sebagai ulasan asli melanggar pedoman Google. Tambahkan hanya dari ulasan nyata.

## Belum dikerjakan

- [ ] **Search Console / Bing Webmaster**: verifikasi domain dan submit `sitemap.xml` setelah domain final.
- [ ] **Isi `businessInfo.socials` dan `businessInfo.geo` dengan data asli**, serta logo persegi minimal 112x112 (`public/images/logo/`) dan gambar OG bermerek.
- [ ] **Form kontak, reservasi, dan komentar**: belum terhubung ke backend (`TODO` di `contact-form.tsx`, `reservation-form.tsx`, dan `blog-comment-form.tsx`). Daftar komentar di detail blog adalah data contoh (`blogComments` di `src/data/blog.ts`), sama untuk semua artikel.
- [ ] **Isi FAQ**: `src/data/faq.ts` adalah placeholder (kebijakan pembatalan, parkir, metode pembayaran, aturan membawa kue). Ganti dengan kebijakan asli; JSON-LD `FAQPage` dan llms-full.txt ikut berubah otomatis.
- [ ] **Teks legal**: `/kebijakan-privasi` dan `/syarat-dan-ketentuan` (`src/data/legal.ts`) adalah draf. Tinjau dengan penasihat hukum dan sesuaikan dengan data yang benar-benar dikumpulkan, penyedia pihak ketiga, dan kebijakan pembatalan sebelum produksi. Tanggal `updatedAt` ditulis tetap di data.
- [ ] **Pencarian blog**: kolom cari di sidebar detail blog belum berfungsi (sama seperti referensi), dan link kategori/tag masih `#`.
- [ ] **Tanggal buka `/segera-hadir`**: konstanta `launchAt` di `src/app/(bare)/segera-hadir/page.tsx` masih placeholder.
- [ ] **JSON-LD cabang.** Cabang di halaman Kontak (`src/data/locations.ts`) masih placeholder dan tanpa koordinat, jadi belum ditandai sebagai `Restaurant`/`Place` terpisah. Setelah datanya asli, tambahkan alamat dan `geo` tiap cabang.
- [ ] **Uji gambar share** dengan Facebook Sharing Debugger, LinkedIn Post Inspector, dan pratinjau WhatsApp setelah ada URL publik (tidak bisa dari localhost).
- [ ] **Multi-bahasa** (`alternates.languages` / hreflang) bila situs lebih dari satu bahasa. Lihat guide `internationalization.md`.
- [ ] **Validasi** dengan Rich Results Test dan Schema Markup Validator setelah ada URL publik (tidak bisa dijalankan dari localhost). Sebelum itu, JSON-LD diperiksa dengan skrip yang mem-parse tiap `application/ld+json` dan mengecek `@type` serta `@id`.

## SEO lokal (area layanan)

Beranda memuat JSON-LD `Restaurant` (alamat, `geo`, `openingHoursSpecification`, telepon, `servesCuisine`, `hasMenu`, `ReserveAction`). **Datanya masih placeholder** (`businessInfo` di `src/config/site.ts`): ganti dengan data asli dan samakan persis dengan Google Business Profile.
