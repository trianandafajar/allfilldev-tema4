# react-day-picker

Dipasang lewat `bunx shadcn@latest add calendar popover`. Paket yang ikut masuk: `react-day-picker` (v10) dan `date-fns` (v4, dipakai react-day-picker untuk format dan locale).

Dipakai untuk memilih tanggal di form reservasi (`/reservasi` dan beranda). Komponen shadcn `Calendar` ada di `src/components/ui/calendar.tsx`, dibungkus `Popover` (`src/components/ui/popover.tsx`).

## Cara dipakai di repo ini

- `src/components/shared/date-picker-field.tsx`: tombol pemicu + popover berisi `Calendar`. Props: `value` (string `yyyy-MM-dd`), `onChange`, `invalid`.
- `src/components/shared/time-picker-field.tsx`: pemicu serupa untuk jam, isinya daftar tombol (bukan react-day-picker).
- `src/components/shared/picker-trigger.tsx` dan `field-styles.ts`: tampilan tombol dan panel yang sama dengan `Select` jumlah tamu.
- `src/lib/reservation.ts`: `parseIsoDate`, `toIsoDate`, `formatLongDate`, `formatTimeLabel`, dan `getTimeSlots(tanggal)` yang membuat slot 30 menit dari `businessInfo.openingHours` sampai satu jam sebelum tutup.

## Keputusan dan hal yang perlu diketahui

- **Locale Indonesia.** `import { id } from "react-day-picker/locale"` lalu `locale={id}` dan `weekStartsOn={1}` (minggu mulai Senin). Format tampil dibuat `Intl.DateTimeFormat("id-ID")` di `reservation.ts`.
- **Nilai disimpan sebagai string ISO**, bukan `Date`, supaya aman melintasi batas server/klien dan mudah dikirim. Tanggal di-parse sebagai tanggal lokal (bukan UTC) agar tidak bergeser sehari.
- **Hidden input.** Pemicu popover adalah `<button>`, jadi nilainya tidak ikut `FormData`. Tiap field menulis `<input type="hidden" name="date|time">`. Karena itu atribut `required` bawaan browser tidak berlaku: form memakai `noValidate` dan validasi manual di `onSubmit` (pesan di `role="alert"`, fokus ke pemicu yang kosong).
- **Tidak ada `new Date()` saat prerender.** Dengan `cacheComponents`, "hari ini" dihitung di `ReservationCalendar` (di dalam `date-picker-field.tsx`) yang hanya dirender saat popover dibuka, jadi tidak ikut prerender. Jangan memindahkannya ke badan `DatePickerField`.
- **Tanggal lampau dinonaktifkan** (`disabled={{ before: today }}`).
- **Jam mengikuti hari.** Jumat dan Sabtu tutup lebih malam, jadi daftar jam dibangun ulang saat tanggal berganti dan jam lama yang tidak tersedia dikosongkan.
- **Tema.** `calendar.tsx` disesuaikan: `--cell-size` 36px, hari ini diberi garis `border-primary`, hari terpilih `bg-primary text-primary-foreground`, hover `border-primary`. Hanya token, tanpa hex.
