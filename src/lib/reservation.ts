import { businessInfo } from "@/config/site";

const SLOT_STEP_MINUTES = 30;
/** Pesanan terakhir diterima satu jam sebelum restoran tutup. */
const LAST_SEATING_BEFORE_CLOSE = 60;
const SCHEMA_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

const longDate = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const pad = (value: number) => String(value).padStart(2, "0");
const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};
const toClock = (minutes: number) => `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;

/** "yyyy-MM-dd" → `Date` pada tengah malam waktu setempat (tanpa pergeseran zona waktu). */
export function parseIsoDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

/** `Date` → "yyyy-MM-dd" menurut waktu setempat. */
export function toIsoDate(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** "2026-11-05" → "Kamis, 5 November 2026". */
export function formatLongDate(iso: string) {
  return longDate.format(parseIsoDate(iso));
}

/** "19:00" → "19.00 WIB". */
export function formatTimeLabel(time: string) {
  return `${time.replace(":", ".")} WIB`;
}

/**
 * Slot jam kedatangan (kelipatan 30 menit) untuk satu tanggal, dari jam buka sampai satu jam
 * sebelum tutup, menurut `businessInfo.openingHours`. Kosong jika restoran tutup pada hari itu.
 */
export function getTimeSlots(iso: string): string[] {
  const day = SCHEMA_DAYS[parseIsoDate(iso).getDay()];
  const hours = businessInfo.openingHours.find((slot) => (slot.days as readonly string[]).includes(day));
  if (!hours) return [];

  const slots: string[] = [];
  const last = toMinutes(hours.closes) - LAST_SEATING_BEFORE_CLOSE;
  for (let at = toMinutes(hours.opens); at <= last; at += SLOT_STEP_MINUTES) {
    slots.push(toClock(at));
  }
  return slots;
}
