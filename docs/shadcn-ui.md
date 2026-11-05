# shadcn/ui

Terpasang pada 2026-10-29 lewat `bunx shadcn@latest init -t next -b radix -d -y`.

## Konfigurasi

Sumber kebenaran ada di `components.json`.

| Item | Nilai |
| --- | --- |
| Style | `radix-nova` |
| Base library | Radix (paket `radix-ui`) |
| Base color | `neutral` |
| CSS variables | ya, di `src/app/globals.css` |
| Icon | `lucide-react` |
| RSC | ya |
| Tailwind config | kosong (Tailwind v4, token lewat CSS) |

Alias:

| Alias | Lokasi |
| --- | --- |
| `@/components` | `src/components/` |
| `@/components/ui` | `src/components/ui/` (komponen shadcn) |
| `@/lib/utils` | `src/lib/utils.ts` (`cn`) |
| `@/hooks` | `src/hooks/` |

## Menambah komponen

```bash
bunx shadcn@latest add card
bunx shadcn@latest add dialog input label
```

File masuk ke `src/components/ui/` dan **menjadi milik repo ini**: boleh diedit. Jangan menimpa komponen yang sudah dimodifikasi tanpa `git diff` dulu (`add` akan menanyakan sebelum menimpa; jangan pakai `--overwrite` sembarangan).

Jika sebuah komponen shadcn dimodifikasi dari aslinya, catat perubahannya di bagian "Keputusan dan hal yang perlu diketahui" di bawah.

## Mengubah tema

Seluruh warna dan radius ada di `src/app/globals.css`:

- `:root` berisi tema Elegencia (gelap, aksen emas `--primary`). Tema ini dark-only, jadi blok `.dark` bawaan shadcn dihapus.
- Token tambahan di luar bawaan shadcn: `--surface` (latar section kedua), `--bright` / `--dark` (putih / hitam), `--header`, `--overlay` (hitam transparan untuk header dan menu), `--line` (garis pemisah header). Semuanya terdaftar di `@theme inline`, jadi dipakai sebagai `bg-surface`, `text-bright`, `bg-header`, `border-line`, dst.
- `--radius` bernilai `0`: desain Elegencia bersudut tajam.
- Breakpoint Tailwind disamakan dengan Bootstrap 5 (`sm` 576, `md` 768, `lg` 992, `xl` 1200, `2xl` 1400) dan `container` meniru container Bootstrap, supaya layout sama dengan template sumber.

### Ukuran fluid (responsif)

Desain asli dibuat untuk 1920px. Agar tidak sempit di laptop dengan skala Windows 125% atau 150% (viewport ±1536 dan ±1280px), tablet, dan ponsel, ukuran besar memakai `clamp()` yang berujung di nilai 1920px (tampilan di 1920px tidak berubah). Semuanya ada di `src/app/globals.css`:

| Token | Utility | Rentang |
| --- | --- | --- |
| `--gutter` | `container`, `px-(--gutter)`, `left-(--gutter)` | 20px (ponsel), 40px (tablet), `clamp(40px, 9vw, 173px)` dari lg |
| `--spacing-section`, `--spacing-section-sm` | `h-section`, `py-section`, `pt-section`, `h-section-sm` | 60px sampai 150px / 100px |
| `--spacing-stack`, `--spacing-stack-sm` | `h-stack`, `h-stack-sm` | 30px sampai 65px / 50px |
| `--text-display`, `--text-title`, `--text-hero` | `text-display`, `text-title`, `text-hero` | judul section (32 sampai 60), judul kecil (28 sampai 48), judul hero (42 sampai 80) |

Catatan:

- **Jangan menamai token spacing dengan `block`, `flex`, dst.** `--spacing-block` membuat utility `inline-block` terbaca sebagai `inline-size: ...` sehingga semua tombol `inline-block` menyempit (teks CTA pecah). Itu sebabnya namanya `stack`.
- Layout dua kolom yang bergantung pada lebar kolom, bukan lebar layar (mis. kolom tanggal dan jam di form reservasi), memakai container query Tailwind (`@container` dan `@md:`).
- Untuk menguji ponsel dan tablet di Playwright pakai context `isMobile: true`; Chromium biasa memakai scrollbar klasik 15px sehingga lebar halaman tampak 15px lebih sempit.

Komponen hanya memakai utility token (`bg-primary`, `text-muted-foreground`, `border-border`). Jangan menulis hex atau palet Tailwind mentah (`zinc-500`) di komponen.

## Keputusan dan hal yang perlu diketahui

- **Radix, bukan Base UI.** CLI menawarkan `radix`, `base`, `aria`. Dipilih Radix karena paling umum dan dokumentasinya paling banyak. Mengganti base di kemudian hari berarti meng-install ulang semua komponen.
- **`cn` dari paket `cn`**, bukan `clsx` + `tailwind-merge`. Ini bawaan CLI saat ini (`src/lib/utils.ts` hanya `export { cn } from "cn"`). Paket tersebut dari org `shadcn-ui` di GitHub. Impor tetap lewat `@/lib/utils`, jadi bisa diganti tanpa menyentuh komponen.
- **Tema dark-only.** Varian `dark:` di komponen shadcn tidak pernah aktif karena class `.dark` tidak dipasang. Aman diabaikan; nilai dark sudah menjadi nilai `:root`.
- **Font.** `--font-sans` menunjuk `--font-prompt` dan `--font-heading` menunjuk `--font-baskervville`, keduanya didefinisikan lewat `next/font/google` di `src/app/layout.tsx`. CLI shadcn menulis `--font-sans: var(--font-sans)` (merujuk dirinya sendiri); jika menjalankan `shadcn init` ulang atau `--reinstall`, periksa baris ini lagi.
- **Dependency yang ikut terpasang**: `radix-ui`, `class-variance-authority`, `cn`, `lucide-react`, `tw-animate-css`, dan `shadcn` (dipakai untuk `@import "shadcn/tailwind.css"`).
- **Komponen terpasang**: `accordion` (FAQ), `button`, `calendar` dan `popover` (form reservasi, lihat `docs/react-day-picker.md`), `carousel`, `dialog`, `input`, `select`, `textarea` (dipakai form kontak).
- **`carousel.tsx` dimodifikasi.** Versi bawaan memanggil `setState` di dalam `useEffect` (ditolak aturan `react-hooks/set-state-in-effect`). `canScrollPrev` / `canScrollNext` sekarang dibaca lewat `useSyncExternalStore` dari event Embla (`select`, `reInit`). Perilaku sama. Komponen carousel di `src/components/sections` memakai `setApi` + `src/hooks/use-carousel-state.ts` untuk indeks slide aktif.
- **`dialog.tsx` dimodifikasi.** Latar overlay diganti `bg-black/10` menjadi `bg-dark/60` (token, dan lebih gelap) agar cocok untuk dialog video.
- **`accordion.tsx` dimodifikasi.** Disesuaikan ke tema Elegencia: baris `border-b border-border`, pertanyaan memakai font heading (22px, 26px dari `md`) warna `text-bright` yang menjadi `text-primary` saat hover atau terbuka, ikon chevron bawaan diganti plus/minus (`PlusIcon`/`MinusIcon`), jawaban 16px dengan `pr-12`. Animasi buka/tutup tetap dari `tw-animate-css`.
- **Verifikasi**: `tsc --noEmit`, `eslint`, dan `next build` lolos; beranda sudah dicek di browser (desktop 1440 dan mobile 390).
- **`carousel.tsx`: cursor dan context.** Area geser (`CarouselContent`) berkursor `grab`, menjadi `grabbing` saat tombol mouse ditahan (termasuk di atas tautan atau tombol di dalam slide), dan `select-none` hanya saat ditahan. Nilai `CarouselContext` dibungkus `useMemo` agar konsumen tidak render ulang tanpa perubahan.
- **`calendar.tsx` dimodifikasi.** Ukuran sel, gaya hari ini, terpilih, dan hover disesuaikan ke token tema (detail di `docs/react-day-picker.md`).
- **`select.tsx` dipakai apa adanya**; tampilan form reservasi (tinggi 60px, sudut tajam, panel `bg-popover` berbingkai, item 44px) diberikan lewat `className` dari `src/components/shared/field-styles.ts`, bukan dengan mengubah file shadcn.
