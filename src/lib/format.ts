const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

/** 65000 → "Rp 65.000" (spasi biasa, bukan non-breaking, agar mudah dibaca ulang). */
export function formatRupiah(amount: number) {
  return rupiah.format(amount).replace(/\s/g, " ");
}

/** "11:30" → "11.30" (format jam Indonesia). */
function localTime(time: string) {
  return time.replace(":", ".");
}

export function formatHours(slot: { label: string; opens: string; closes: string }) {
  return `${slot.label}: ${localTime(slot.opens)} – ${localTime(slot.closes)} WIB`;
}

const MONTHS = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];

/** "6 Juni 2026" → "2026-06-06" (ISO 8601 untuk JSON-LD). Hasil kosong bila formatnya tidak dikenali. */
export function indonesianDateToIso(text: string) {
  const match = /^(\d{1,2}) (\S+) (\d{4})$/.exec(text.trim());
  const month = match ? MONTHS.indexOf(match[2].toLowerCase()) : -1;
  if (!match || month < 0) return undefined;
  return `${match[3]}-${String(month + 1).padStart(2, "0")}-${match[1].padStart(2, "0")}`;
}
