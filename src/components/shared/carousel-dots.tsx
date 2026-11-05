import { memo } from "react";
import { cn } from "@/lib/utils";

type CarouselDotsProps = {
  count: number;
  selected: number;
  onSelect: (index: number) => void;
  label: (index: number) => string;
  className?: string;
};

/** `onSelect` dan `label` harus stabil (useCallback atau fungsi modul), kalau tidak `memo` tidak berguna. */
export const CarouselDots = memo(function CarouselDots({
  count,
  selected,
  onSelect,
  label,
  className,
}: CarouselDotsProps) {
  return (
    <div className={cn("flex flex-wrap justify-center", className)}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={label(i)}
          aria-current={i === selected}
          onClick={() => onSelect(i)}
          className={cn(
            "relative m-[5px] h-[9px] w-2.5 cursor-pointer rounded-full border border-border bg-transparent p-0",
            i === selected && "border-primary bg-primary"
          )}
        />
      ))}
    </div>
  );
});
