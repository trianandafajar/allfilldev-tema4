"use client";

import { CalendarDays } from "lucide-react";
import { memo, useState } from "react";
import { id as idLocale } from "react-day-picker/locale";
import { fieldPanelClass } from "@/components/shared/field-styles";
import { PickerTrigger } from "@/components/shared/picker-trigger";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { formatLongDate, parseIsoDate, toIsoDate } from "@/lib/reservation";
import { cn } from "@/lib/utils";

type DatePickerFieldProps = {
  /** Id tombol pemicu; dipakai `<label htmlFor>` dan untuk memindahkan fokus saat validasi gagal. */
  id: string;
  name: string;
  label: string;
  placeholder: string;
  /** Tanggal terpilih, "yyyy-MM-dd". */
  value?: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  className?: string;
};

/** Pilih tanggal lewat popover kalender. Nilainya ikut terkirim di form lewat input tersembunyi. */
export const DatePickerField = memo(function DatePickerField({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  invalid,
  className,
}: DatePickerFieldProps) {
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
            icon={CalendarDays}
            placeholder={placeholder}
            value={value ? formatLongDate(value) : undefined}
            aria-invalid={invalid || undefined}
          />
        </PopoverTrigger>
        <PopoverContent align="start" className={cn(fieldPanelClass, "w-auto p-0")}>
          <ReservationCalendar
            value={value}
            onSelect={(next) => {
              onChange(next);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <input type="hidden" name={name} value={value ?? ""} />
    </div>
  );
});

/** Dirender hanya saat popover terbuka (sisi klien), jadi "hari ini" tidak dihitung saat prerender. */
function ReservationCalendar({ value, onSelect }: { value?: string; onSelect: (value: string) => void }) {
  const [today] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  });
  const selected = value ? parseIsoDate(value) : undefined;

  return (
    <Calendar
      mode="single"
      locale={idLocale}
      weekStartsOn={1}
      selected={selected}
      defaultMonth={selected ?? today}
      disabled={{ before: today }}
      onSelect={(date) => date && onSelect(toIsoDate(date))}
      autoFocus
    />
  );
}
