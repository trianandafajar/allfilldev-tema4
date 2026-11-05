import { memo } from "react";
import { cn } from "@/lib/utils";

type CarouselArrowProps = {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  className?: string;
};

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden className={cn("shrink-0 stroke-bright transition duration-200", className)}>
      <g fill="none" fillRule="evenodd">
        <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4" />
      </g>
    </svg>
  );
}

/** Tombol bulat 56px: dua panah bergeser saat hover dan latar berubah emas muda. */
export const CarouselArrow = memo(function CarouselArrow({
  direction,
  onClick,
  label,
  className,
}: CarouselArrowProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "group flex size-14 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-accent bg-transparent p-0 text-bright transition duration-200 hover:bg-accent",
        direction === "prev" && "rotate-180",
        className
      )}
    >
      <ArrowIcon className="-translate-x-[167%] group-hover:translate-x-[51%]" />
      <ArrowIcon className="-translate-x-[68%] group-hover:translate-x-[178%]" />
    </button>
  );
});
