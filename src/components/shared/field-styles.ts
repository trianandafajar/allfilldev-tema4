import { cn } from "@/lib/utils";

/** Gaya pemicu field form (select, tanggal, jam) supaya ketiganya seragam: tinggi 60px, sudut tajam, garis emas saat fokus. */
export const fieldTriggerClass = cn(
  "flex h-[60px] w-full cursor-pointer items-center justify-between gap-3 rounded-none border border-border bg-transparent px-[9px] text-left text-base text-bright transition-colors outline-none",
  "hover:border-primary hover:bg-transparent focus-visible:border-primary focus-visible:ring-0 aria-expanded:border-primary aria-invalid:border-destructive",
  "data-placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-60 data-[size=default]:h-[60px] dark:bg-transparent dark:hover:bg-transparent"
);

/** Panel dropdown (select dan popover): bingkai tipis, bayangan lembut, tanpa ring bawaan. */
export const fieldPanelClass = "rounded-none border border-border bg-popover shadow-xl ring-0";

/** Baris pilihan di dalam `SelectContent`. */
export const fieldOptionClass = "min-h-11 cursor-pointer rounded-none py-2.5 pr-9 pl-3 text-base";
