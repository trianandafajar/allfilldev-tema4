import type { LucideIcon } from "lucide-react";
import { fieldTriggerClass } from "@/components/shared/field-styles";
import { cn } from "@/lib/utils";

type PickerTriggerProps = Omit<React.ComponentProps<"button">, "value"> & {
  icon: LucideIcon;
  /** Teks nilai terpilih; kosong menampilkan `placeholder`. */
  value?: string;
  placeholder: string;
};

/** Tombol pemicu popover (tanggal, jam) dengan tampilan sama seperti `SelectTrigger` di form. */
export function PickerTrigger({ icon: Icon, value, placeholder, className, ...props }: PickerTriggerProps) {
  return (
    <button
      type="button"
      data-placeholder={value ? undefined : ""}
      className={cn(fieldTriggerClass, className)}
      {...props}
    >
      <span className="truncate">{value || placeholder}</span>
      <Icon aria-hidden className="size-5 shrink-0 text-primary" />
    </button>
  );
}
