"use client";

import { useNow } from "@/hooks/use-now";

const units = [
  { key: "days", label: "Hari", size: 86_400_000 },
  { key: "hours", label: "Jam", size: 3_600_000 },
  { key: "minutes", label: "Menit", size: 60_000 },
  { key: "seconds", label: "Detik", size: 1000 },
] as const;

/** Hitung mundur ke `target` (ISO 8601). Angka baru muncul setelah hydrasi agar tidak mismatch dengan HTML server. */
export function Countdown({ target }: { target: string }) {
  const now = useNow();
  const diff = now === null ? null : Math.max(0, new Date(target).getTime() - now);

  if (diff === 0) {
    return <p className="text-xl text-bright">Kami sudah buka. Sampai jumpa!</p>;
  }

  return (
    <dl className="m-0 flex justify-center gap-3 md:gap-6" aria-live="off">
      {units.map(({ key, label, size }, i) => {
        const value = diff === null ? null : Math.floor(diff / size) % (i === 0 ? Infinity : i === 1 ? 24 : 60);
        return (
          <div key={key} className="w-[72px] md:w-[150px]">
            <dd className="m-0 font-heading text-[40px] leading-none text-transparent [-webkit-text-stroke:1px_var(--primary)] md:text-[100px] md:[-webkit-text-stroke:2px_var(--primary)]">
              {value === null ? "--" : String(value).padStart(2, "0")}
            </dd>
            <dt className="mt-2 text-sm text-bright md:text-base">{label}</dt>
          </div>
        );
      })}
    </dl>
  );
}
