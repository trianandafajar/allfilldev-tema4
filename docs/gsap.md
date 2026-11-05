# GSAP + SplitType

Dipakai untuk animasi scroll di beranda (judul per huruf, tirai gambar, zoom latar, garis dekoratif, gambar menu yang mengikuti kursor). Berasal dari template React sumber; slider memakai shadcn Carousel (Embla), bukan Swiper.

## Paket

```bash
bun add gsap split-type
```

Hanya plugin `ScrollTrigger` yang dipakai. `ScrollToPlugin` tidak didaftarkan; scroll ke atas memakai `window.scrollTo({ behavior: "smooth" })` (`src/lib/scroll.ts`).

## Struktur

- `src/lib/gsap.ts`: satu-satunya tempat `registerPlugin`. Impor `gsap` dan `ScrollTrigger` dari sini, jangan dari `gsap` langsung. Juga berisi `prefersReducedMotion()`.
- `src/hooks/use-*.ts`: hook client-only per jenis animasi.

| Hook | Efek | Dipakai oleh |
| --- | --- | --- |
| `useSectionTitle` | Judul dipecah per huruf (SplitType), muncul saat masuk viewport. Varian `rise` dan `flip` | `shared/section-title.tsx` |
| `useImageOverlay` | Tirai warna latar menyingkap gambar; opsi `zoom` | `shared/image-overlay.tsx` |
| `useImageZoom` | Gambar latar membesar 1x ke 1.3x mengikuti scroll | `shared/zoom-image.tsx` |
| `useGrowLine` | Garis memanjang (dengan atau tanpa scrub) | `shared/grow-line.tsx` |
| `useCursorImage` | Gambar bulat mengikuti kursor saat hover baris menu | `sections/food-menu-item.tsx` |

## Aturan

- Hook hanya dipanggil dari komponen `"use client"`. Section tetap Server Component; bagian beranimasi dipisah ke komponen client kecil (`SectionTitle`, `ImageOverlay`, `ZoomImage`, `GrowLine`) dengan elemen pemicu milik komponen itu sendiri.
- Semua efek memakai `useLayoutEffect` + `gsap.context(...)` dan **wajib** mengembalikan `ctx.revert()` (dan `split.revert()` untuk SplitType). Ini yang membuat React Strict Mode (efek dijalankan dua kali di dev) aman.
- `prefers-reduced-motion: reduce`: animasi dilewati dan konten langsung tampil (`useImageOverlay` dan `useGrowLine` men-set keadaan akhir).
- Judul yang dipecah SplitType diberi `aria-label` berisi teks penuh supaya pembaca layar tidak membaca huruf per huruf.
- `--height` pada `ImageOverlay` adalah CSS variable yang dianimasikan GSAP; pseudo-element `after:` membaca nilainya sebagai tinggi tirai.

## Perbedaan dari template sumber

- Preloader template (`PreLoader.jsx`) tidak dipakai di `Home`/`App`, jadi tidak dimigrasikan.
- Tombol panah kiri/kanan carousel di template memanggil `slideNext`/`slidePrev` terbalik. Di sini kiri = sebelumnya, kanan = berikutnya.
- Atribut parallax `data-speed` / `data-lag` di template tidak berfungsi (ScrollSmoother tidak dipasang), jadi dibuang.
- Listener `mousemove` / `mouseleave` menu makanan di template tidak pernah dilepas; di sini dilepas saat unmount.
