"use client";

import { useCallback, useId, useMemo, useState } from "react";
import { CtaButton } from "@/components/shared/cta-button";
import { DatePickerField } from "@/components/shared/date-picker-field";
import { fieldOptionClass, fieldPanelClass, fieldTriggerClass } from "@/components/shared/field-styles";
import { TimePickerField } from "@/components/shared/time-picker-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getTimeSlots } from "@/lib/reservation";

type ReservationFormProps = {
  guestOptions: readonly { value: string; label: string }[];
};

const DEFAULT_TIME = "19:00";

type FieldError = { field: "date" | "time"; message: string };

/** Form reservasi tiga kolom (jumlah tamu, jam, tanggal). Belum terhubung ke backend. */
export function ReservationForm({ guestOptions }: ReservationFormProps) {
  const uid = useId();
  const ids = { guests: `${uid}-guests`, time: `${uid}-time`, date: `${uid}-date` };

  const [date, setDate] = useState<string>();
  const [time, setTime] = useState(DEFAULT_TIME);
  const [error, setError] = useState<FieldError>();
  const [submitted, setSubmitted] = useState(false);

  // Jam buka berbeda per hari, jadi daftar jam dibangun ulang hanya saat tanggal berganti.
  const slots = useMemo(() => (date ? getTimeSlots(date) : []), [date]);

  const handleDateChange = useCallback((next: string) => {
    setDate(next);
    // Jam yang tidak tersedia di hari baru dikosongkan; yang masih valid dipertahankan.
    setTime((current) => (getTimeSlots(next).includes(current) ? current : ""));
    setError(undefined);
    setSubmitted(false);
  }, []);

  const handleTimeChange = useCallback((next: string) => {
    setTime(next);
    setError(undefined);
    setSubmitted(false);
  }, []);

  return (
    <form
      noValidate
      className="@container"
      onSubmit={(event) => {
        event.preventDefault();
        const missing: FieldError | undefined = !date
          ? { field: "date", message: "Pilih tanggal kedatangan terlebih dulu." }
          : !time
            ? { field: "time", message: "Pilih jam kedatangan." }
            : undefined;
        setError(missing);
        if (missing) {
          document.getElementById(ids[missing.field])?.focus();
          return;
        }
        // TODO: kirim FormData(event.currentTarget) ke API reservasi sebelum produksi.
        setSubmitted(true);
      }}
    >
      <label htmlFor={ids.guests} className="sr-only">
        Jumlah tamu
      </label>
      <Select name="guests" defaultValue={guestOptions[0]?.value} required>
        <SelectTrigger id={ids.guests} className={`${fieldTriggerClass} mb-[25px]`}>
          <SelectValue placeholder="Jumlah tamu" />
        </SelectTrigger>
        <SelectContent position="popper" className={fieldPanelClass}>
          {guestOptions.map((option) => (
            <SelectItem key={option.value} value={option.value} className={fieldOptionClass}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex flex-col gap-[25px] @md:flex-row @md:justify-between">
        <DatePickerField
          id={ids.date}
          name="date"
          label="Tanggal kedatangan"
          placeholder="Pilih tanggal"
          value={date}
          onChange={handleDateChange}
          invalid={error?.field === "date"}
          className="@md:basis-[48%]"
        />
        <TimePickerField
          id={ids.time}
          name="time"
          label="Jam kedatangan"
          placeholder={date ? "Pilih jam" : "Pilih tanggal dulu"}
          slots={slots}
          value={date ? time : undefined}
          onChange={handleTimeChange}
          invalid={error?.field === "time"}
          className="@md:basis-[48%]"
        />
      </div>

      <p role="alert" className="mt-4 text-destructive empty:hidden">
        {error?.message}
      </p>

      <div className="h-stack-sm" />
      <CtaButton variant="light">Pesan Meja</CtaButton>
      <p role="status" className="mt-4 text-bright empty:hidden">
        {submitted
          ? "Terima kasih. Permintaan reservasi Anda sudah kami terima dan akan dikonfirmasi oleh tim kami."
          : ""}
      </p>
    </form>
  );
}
