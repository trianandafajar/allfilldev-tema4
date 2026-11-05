import { cn } from "@/lib/utils";

const bar = "absolute left-0 block h-0.5 w-full bg-primary";
const move = "transition-transform duration-300 ease-out";

/** Ikon hamburger tiga garis yang berubah jadi tanda silang saat `active`. Semua garis bergerak bersamaan. */
export function MenuToggleIcon({ active }: { active: boolean }) {
  return (
    <span aria-hidden className="relative block h-[27px] w-[30px]">
      <span
        className={cn(
          bar,
          "top-3 origin-center transition-[opacity,scale] duration-300 ease-out",
          active && "scale-x-0 opacity-0"
        )}
      />
      <span className={cn(bar, move, "top-3 -translate-y-[9px]", active && "translate-y-0 rotate-45")} />
      <span className={cn(bar, move, "top-3 translate-y-[9px]", active && "translate-y-0 -rotate-45")} />
    </span>
  );
}
