# Gambar (foto stok)

Foto di `public/images/` yang dulu berupa kotak placeholder sudah diganti foto stok dari **Pexels** (kecuali `about/about-wagyu.jpg`, lihat tabel) (lisensi Pexels: boleh dipakai komersial, atribusi tidak wajib). Tidak ada package atau konfigurasi `next/image` tambahan karena file disimpan lokal.

Yang bukan foto stok dan tidak diganti: `bg/page-hero.png`, `bg/menu-*.png`, `bg/coming-soon.png`, `bg/error.png`, `bg/footer.png`, `logo/*`, `icon/*`.

## Aturan slot

Ukuran piksel file sama dengan `width`/`height` yang ditulis di `src/data/*.ts`. Slot `h-auto` membaca rasio dari angka itu, jadi **foto pengganti harus dipotong persis ke ukuran yang sama** (cover-crop), kalau tidak layout bergeser. Slot `fill` (hero, banner, latar) di-crop `object-cover`.

| Folder | Ukuran | Catatan |
| --- | --- | --- |
| `bg/hero.jpg` | 1920x1081 | Sisi kiri sengaja gelap (teks hero); hidangan di kanan |
| `bg/reservation.jpg` | 1920x701 | |
| `about/about-bg.jpg` / `opening-hours.jpg` / `video-bg.jpg` | 1600x1200 / 1200x1200 / 1920x501 | `about-bg` dan `opening-hours` tampil lebar (±860px dan 760px) lalu di-zoom 1.3x, jadi sumbernya harus besar |
| `about/about-wagyu.jpg` | 1672x941 | Dipakai di "Tentang Kami" beranda (`about.image` di `src/data/home.ts`). Foto dari pemilik repo, bukan Pexels, jadi lisensinya tanggung jawab pemilik. `about-bg.jpg` masih dipakai halaman `/tentang` |
| `best-item/best-item-1.jpg` / `best-item-2.jpg` | 643x700 / 527x367 | |
| `chef/chef-1..6.jpg` | 420x500 | Potret, wajah di bagian atas |
| `dishes/dish-1..9.jpg` | 430x600 | Urutan sama dengan `dishes` di `src/data/portfolio.ts` |
| `blog/blog-1..9.jpg` | 391x291 | Urutan sama dengan `blogPosts` di `src/data/blog.ts` |
| `blog/blog-detail.jpg`, `blog-video.jpg` | 983x511 | |
| `blog/author-*.png`, `testimonial/guest-*.jpg` | 128x128 | Tampil 49-65px (bulat); disimpan 2x agar tajam |
| `menu/appetizer-1..10.jpg`, `drink-1..10.jpg`, `dessert-1..10.jpg` | 320x320 | Gambar hover bulat (±150px) per baris menu. Nomor = urutan hidangan di `foodMenu` (`src/data/home.ts`) dan `drinks`/`desserts` (`src/data/menu.ts`), dipasang oleh `withMenuImages` |
| `menu/appetizer-1.jpg` | 8250192 | Grilled marinated meat on skewers over charcoal (weak: bukan sate lilit) |
| `menu/appetizer-2.jpg` | 6646369 | Stack of fried spring rolls on a wooden board (close) |
| `menu/appetizer-3.jpg` | 4518587 | Tofu cubes in glossy sweet-chili sauce (close, tahu tidak digoreng) |
| `menu/appetizer-4.jpg` | 32393811 | Shrimp shumai in a bamboo steamer (close) |
| `menu/appetizer-5.jpg` | 29269199 | Fried croquette sticks with dip, fries and celery (weak: bukan perkedel jagung) |
| `menu/appetizer-6.jpg` | 12392923 | Banana-leaf-wrapped slab on a steel plate (weak: isi tidak terlihat) |
| `menu/appetizer-7.jpg` | 6646097 | Shiitake mushroom with fried tofu in a bowl (weak: bukan pepes) |
| `menu/appetizer-8.jpg` | 14883840 | Golden fried croquette rolls with salad and chili dip (close) |
| `menu/appetizer-9.jpg` | 10102480 | Small savory griddle cakes on a street-vendor griddle (weak: bukan martabak telur) |
| `menu/appetizer-10.jpg` | 31336113 | Overhead gado-gado plate with vegetables, egg, tofu, crackers (exact) |
| `menu/drink-1.jpg` | 36905212 | Iced amber tea in a glass (weak: tanpa susu/kayu manis) |
| `menu/drink-2.jpg` | 36905229 | Dark red-brown spiced tea with lemongrass stick (close) |
| `menu/drink-3.jpg` | 36905220 | Cold yellow orange drink with orange slice (weak: tanpa kelapa muda; ujung topi merah kecil masih tampak di pojok kanan atas) |
| `menu/drink-4.jpg` | 5337686 | Thick green smoothie with bamboo straw and mint (weak: bukan alpukat) |
| `menu/drink-5.jpg` | 36905211 | Es cendol: green cendol, coconut milk, palm sugar (close, tanpa durian) |
| `menu/drink-6.jpg` | 3846220 | Glass of black coffee with beans on a wooden table (exact) |
| `menu/drink-7.jpg` | 16496287 | Iced milk coffee with swirling milk (close, tanpa gula aren) |
| `menu/drink-8.jpg` | 10280078 | Red spiced tea in a glass cup with lemongrass, dark background (close) |
| `menu/drink-9.jpg` | 4134388 | Pale cold drink with lemon slice and green straw (weak: bukan sirsak) |
| `menu/drink-10.jpg` | 8679609 | Clear soda with lime slices, ice, red-white straw (close, tanpa serai) |
| `menu/dessert-1.jpg` | 36905231 | Klepon with grated coconut on banana leaf (exact, bukan cake) |
| `menu/dessert-2.jpg` | 2955817 | Three fruit-ice cups with red syrup, cream, coconut (weak: bukan es teler) |
| `menu/dessert-3.jpg` | 12362284 | Caramelised fried banana slices on a black plate (close, tanpa keju/cokelat) |
| `menu/dessert-4.jpg` | 31694686 | Golden pancakes cooked in an iron mould (weak: bukan serabi kuah kinca) |
| `menu/dessert-5.jpg` | 16015237 | Chocolate and yellow ice cream scoops in a glass bowl (close) |
| `menu/dessert-6.jpg` | 36905221 | Three green pandan dadar gulung on banana leaf (exact) |
| `menu/dessert-7.jpg` | 36905217 | Steamed rainbow layer cake in a bamboo basket (weak: bukan lapis legit) |
| `menu/dessert-8.jpg` | 32835478 | White rice porridge with spring onion in a ceramic bowl (weak: bubur gurih, tanpa kuah gula jawa) |
| `menu/dessert-9.jpg` | 8306187 | Metal bowl of coconut-milk iced dessert with black grass jelly on red (close) |
| `menu/dessert-10.jpg` | 4023249 | Two pieces of black glutinous rice sweet with grated coconut, pandan leaf (close) |
| `portfolio/detail-1.jpg`, `detail-2.jpg` | 900x500 | Dipakai bersama oleh semua hidangan |

## Mengganti foto

1. Unduh foto asli (tanpa `?w=`), potong ke ukuran di tabel dengan `fit: "cover"` (mis. `sharp`, yang sudah terpasang bersama Next), simpan JPEG kualitas ~82 progresif (PNG untuk file ber-ekstensi `.png`).
2. Timpa file dengan nama yang sama. Path di data tidak perlu diubah.
3. Perbarui tabel kredit di bawah.

## Catatan dan keterbatasan

- Foto orang (koki, penulis blog, tamu) adalah stok untuk contoh; nama di data fiktif. Ganti dengan foto tim dan pelanggan asli sebelum produksi.
- Beberapa hidangan tidak ada padanan persis di Pexels dan memakai yang paling mirip: `dish-3` (gudeg, diganti rica kacang di mangkuk), `dish-7` (es teler, diganti es krim kelapa), `dish-9` (bebek betutu, diganti dada bebek).
- `portfolio/detail-1.jpg` dan `detail-2.jpg` adalah foto penyajian generik, sama untuk semua hidangan.
- `bg/hero.jpg` adalah foto steak wagyu di atas piring hitam dan batu slate (sisi kiri gelap untuk teks), diberikan pemilik proyek, bukan stok Pexels. Dipotong cover ke 1920x1081.
- `heroBackground.src` memakai `?v=1` untuk cache-busting. Next 16 menolak query string pada gambar lokal kecuali diizinkan di `images.localPatterns` (`next.config.ts`). Saat hero diganti lagi, naikkan versinya di `src/data/home.ts` **dan** `next.config.ts`.
- `bg/booking.png` tidak dipakai di kode (duplikat lama `reservation.jpg`).

## Kredit

ID adalah nomor foto Pexels; URL: `https://www.pexels.com/photo/<ID>/`.

| File | ID Pexels | Isi |
| --- | --- | --- |
| `bg/hero.jpg` | - | Wagyu steak medium rare dengan rosemary di piring hitam, latar slate gelap (foto dari pemilik proyek) |
| `bg/reservation.jpg` | 34723813 | Elegant dining setting in dimly lit restaurant: wine glasses, napkins, cutlery on marble table, very dark background. Crop a horizontal band around y 22-78%. |
| `about/about-bg.jpg` | 1639561 | Close-up beef filet with microgreens on a dark blue-black ceramic plate, very dark moody background (crop 4:3) |
| `about/opening-hours.jpg` | 19569909 | Long wooden dinner table with plates, wine glasses, two lit candles and orange calla lilies in a dim restaurant (square crop of the table) |
| `about/video-bg.jpg` | 19689233 | Luxury restaurant bar interior with glowing gold ceiling light, curved bar, red stools, warm tones. Wide crop band at about y 31-70% (crop offset 420px of 1331 at w=2000), no visible text. |
| `best-item/best-item-1.jpg` | 8112907 | Portrait gourmet main course on a black matte plate on dark wood, candle at top, moody light. |
| `best-item/best-item-2.jpg` | 28561583 | Gourmet dessert with rich chocolate sauce on white gold-rimmed plate on dark wood table, dark background. |
| `portfolio/detail-1.jpg` | 3655917 | Golden roasted meat with colourful carrots on wooden board, dark teal background. |
| `portfolio/detail-2.jpg` | 1639563 | Beef fillet with micro-greens and dipping sauce on a black plate, very dark background. |
| `blog/blog-detail.jpg` | 30120987 | Chefs working at the pass in a dark restaurant kitchen, warm light. Subject top-left; one masked chef is the focus. |
| `blog/blog-video.jpg` | 2403392 | Chef hand holding steel pot over plated dishes in dark warm kitchen, cooking-action feel. |
| `dishes/dish-1.jpg` | 37339493 | Beef rendang on white plate with sambal and chili slices, Padang spread, warm wood |
| `dishes/dish-2.jpg` | 37211519 | Sate lilit skewers on lemongrass sticks on a black plate |
| `dishes/dish-3.jpg` | 31302309 | Sweet braised brown beans over rice in black bowl, dark background (weak match: closest sweet-braise on rice; no real gudeg on Pexels) |
| `dishes/dish-4.jpg` | 32928771 | Coto Makassar beef soup in bowl with sambal, lime and scallion on dark wood |
| `dishes/dish-5.jpg` | 7234281 | Indonesian spread on banana leaf: grilled fish, rice, sambal, curry, dark wood |
| `dishes/dish-6.jpg` | 11912788 | Nasi lemak rice with fried chicken, egg, sambal and peanuts on banana leaf |
| `dishes/dish-7.jpg` | 28735376 | Coconut ice cream scooped in a fresh coconut shell |
| `dishes/dish-8.jpg` | 35685622 | Klepon green coconut-coated rice balls in coconut halves with pandan leaves |
| `dishes/dish-9.jpg` | 16204678 | Plated duck breast on dark plate with garnish and sauce |
| `blog/blog-1.jpg` | 37065121 | Overhead Indonesian feast flat lay of many dishes and sambals |
| `blog/blog-2.jpg` | 1008747 | Cinnamon sticks and star anise spices |
| `blog/blog-3.jpg` | 29005878 | Vendor with produce, spices and eggs at traditional Asian market, warm tones |
| `blog/blog-4.jpg` | 6646360 | Shared Asian family dinner table with several dishes (hands visible at edges) |
| `blog/blog-5.jpg` | 29530641 | Indonesian market stall with colourful traditional sweets |
| `blog/blog-6.jpg` | 8619612 | Iced tea with lemon slices in glass |
| `blog/blog-7.jpg` | 5407359 | Grilled meat skewers close-up |
| `blog/blog-8.jpg` | 28059309 | Long candlelit dining table under chandelier, dark warm restaurant |
| `blog/blog-9.jpg` | 37090673 | Three bowls of Indonesian sambal on wooden table |
| `chef/chef-1.jpg` | 3814446 | male chef, white toque, glasses, crossed arms, bright outdoor background (Bayu) |
| `chef/chef-2.jpg` | 4910311 | smiling woman in headscarf and black chef jacket holding plate (Dewi) |
| `chef/chef-3.jpg` | 8879388 | Asian male chef, white jacket and navy apron, dark backdrop (Made) |
| `chef/chef-4.jpg` | 6050332 | senior bearded chef, black toque, white jacket, grey backdrop (Andi) |
| `chef/chef-5.jpg` | 5463856 | smiling female chef in white jacket, white studio background (Rina, pastry) |
| `chef/chef-6.jpg` | 18679482 | male chef in white jacket arms crossed, warm wood background (Hendra) |
| `blog/author-1.png` | 31268612 | smiling Asian man in blazer, grey studio backdrop (Tim Elegencia) |
| `blog/author-2.png` | 1645820 | smiling Asian woman, green blurred background (Rina Maharani) |
| `testimonial/guest-1.jpg` | 36298150 | middle-aged Indonesian-looking man, tight face (Budi Santoso) |
| `testimonial/guest-2.jpg` | 8357253 | young woman in black hijab smiling (Ayu Lestari) |
| `testimonial/guest-3.jpg` | 5384445 | young Asian man laughing, white tee (Rizky Pratama) |

## Gambar Open Graph

Gambar pratinjau tautan (Open Graph dan Twitter) **dibuat otomatis per halaman** oleh `src/app/og/[...slug]/route.tsx` (`ImageResponse` dari `next/og`, tanpa package tambahan). Satu route melayani semua halaman di `sitePages` (`/og/beranda`, `/og/menu`, `/og/koki/bayu-prasetyo`, dst.) dan dibuat saat build lewat `generateStaticParams`. Dengan `cacheComponents`, pembacaan berkas (font, foto) dibungkus fungsi `"use cache"` supaya route ikut di-prerender; tanpa itu route dirender ulang di setiap permintaan. `createMetadata` memasang alamatnya lewat `ogImagePath(path)` (`src/lib/seo.ts`).

- Isi kartu (kicker, judul, deskripsi, foto) disusun `getOgContent` di `src/lib/og.ts` dari data yang sama dengan halamannya. Latar: foto sendiri untuk koki (`chef.image`), hidangan (`dish.image`), dan blog (`post.cover`); halaman lain memakai `og/default.jpg`.
- Tampilan ada di `src/components/seo/og-card.tsx`. Foto lanskap menjadi latar penuh; foto potret (tinggi > lebar, mis. koki dan hidangan) ditaruh di panel kanan supaya tidak pecah saat diperbesar.
- Font: satori tidak bisa memakai `next/font`, jadi `src/assets/fonts/Baskervville-Regular.woff` (SIL OFL, sama dengan font judul situs) dibaca langsung. **Satori gagal memuat font variabel** (`fvar`), pakai berkas statis (ttf, otf, atau woff, bukan woff2). Hanya satu bobot dan tanpa miring.
- Warna kartu dari `brandColors` (`src/config/site.ts`), yang harus sama dengan token di `globals.css`.
- Halaman di luar `sitePages` (mis. `/segera-hadir`, 404) memakai `defaultOgImage` statis.

`og/default.jpg` (1200x630) tetap dipakai sebagai latar halaman biasa dan gambar `Organization`/404. Dibuat dari potongan tengah `bg/hero.jpg`:

```bash
magick public/images/bg/hero.jpg -resize 1200x630^ -gravity center -extent 1200x630 -strip -quality 82 public/images/og/default.jpg
```

`createMetadata({ image })` masih bisa menimpa kartu otomatis bila suatu halaman butuh gambar khusus.

## Ikon aplikasi

Ikon dirender dari `icon/favicon.svg` (lingkaran emas, huruf E) dengan ImageMagick. Jalankan ulang bila SVG diganti:

```bash
S=public/images/icon/favicon.svg
cp $S src/app/icon.svg
for n in 16 32 48; do magick -background none -density 600 $S -resize ${n}x${n} /tmp/f$n.png; done
magick /tmp/f16.png /tmp/f32.png /tmp/f48.png src/app/favicon.ico
magick -background none -density 600 $S -resize 192x192 public/images/icon/icon-192.png
magick -background none -density 600 $S -resize 512x512 public/images/icon/icon-512.png
magick -background none -density 600 $S -resize 124x124 -background '#040d10' -gravity center -extent 180x180 -alpha remove src/app/apple-icon.png
magick -background none -density 600 $S -resize 360x360 -background '#040d10' -gravity center -extent 512x512 -alpha remove public/images/icon/icon-maskable-512.png
```

`icon.svg`, `favicon.ico`, dan `apple-icon.png` di `src/app/` dipasang otomatis oleh Next (file convention). `icon-512.png` dipakai sebagai `logo` JSON-LD (persegi, >= 112x112); `icon-192/512` dan `icon-maskable-512` dipakai `src/app/manifest.ts`. `logo/elegencia-logo.png` (127x46) hanya dipakai di header dan footer.
