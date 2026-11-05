"use client";

import { Clock } from "lucide-react";
import { memo, useState } from "react";
import { fieldPanelClass } from "@/components/shared/field-styles";
import { PickerTrigger } from "@/components/shared/picker-trigger";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { formatTimeLabel } from "@/lib/reservation";
import { cn } from "@/lib/utils";

type TimePickerFieldProps = {
  /** Id tombol pemicu; dipakai `<label htmlFor>` dan untuk memindahkan fokus saat validasi gagal. */
  id: string;
  name: string;
  label: string;
  placeholder: string;
  /** Jam yang bisa dipilih, "HH:mm". Kosong menonaktifkan field. */
  slots: readonly string[];
  /** Jam terpilih, "HH:mm". */
  value?: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  className?: string;
};

/** Saat daftar muncul, gulir ke jam terpilih (tanpa menggulir halaman, hanya daftarnya). */
function centerSelected(list: HTMLDivElement | null) {
  const selected = list?.querySelector<HTMLElement>("[aria-pressed=true]");
  if (!list || !selected) return;
  list.scrollTop = selected.offsetTop - list.clientHeight / 2 + selected.offsetHeight / 2;
}

/** Pilih jam lewat popover berisi daftar jam. Nilainya ikut terkirim di form lewat input tersembunyi. */
export const TimePickerField = memo(function TimePickerField({
  id,
  name,
  label,
  placeholder,
  slots,
  value,
  onChange,
  invalid,
  className,
}: TimePickerFieldProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <PickerTrigger
            id={id}
            icon={Clock}
            placeholder={placeholder}
            value={value ? formatTimeLabel(value) : undefined}
            disabled={slots.length === 0}
            aria-invalid={invalid || undefined}
          />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className={cn(fieldPanelClass, "w-[min(20rem,calc(100vw-2rem))] p-2")}
        >
          <div
            ref={centerSelected}
            className="relative grid max-h-64 grid-cols-3 gap-1 overflow-y-auto overscroll-contain [scrollbar-color:var(--primary)_transparent] [scrollbar-width:thin]"
          >
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                aria-pressed={slot === value}
                onClick={() => {
                  onChange(slot);
                  setOpen(false);
                }}
                className={cn(
                  "h-11 cursor-pointer border border-transparent text-base text-bright transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:outline-none",
                  slot === value && "bg-primary text-primary-foreground hover:text-primary-foreground"
                )}
              >
                {slot.replace(":", ".")}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <input type="hidden" name={name} value={value ?? ""} />
    </div>
  );
});
