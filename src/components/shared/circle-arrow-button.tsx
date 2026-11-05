import { memo } from "react";
import { cn } from "@/lib/utils";

type CircleArrowButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  className?: string;
};

/** Tombol hero: busur emas yang menutup jadi lingkaran penuh saat hover, dengan panah emas di tengah. */
export const CircleArrowButton = memo(function CircleArrowButton({
  direction,
  onClick,
  label,
  className,
}: CircleArrowButtonProps) {
  const prev = direction === "prev";
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn("group relative h-14 w-14 cursor-pointer bg-transparent text-primary", className)}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0 left-0 size-14 rounded-full border-r border-primary transition-all duration-300 group-hover:border",
          prev && "rotate-180"
        )}
      />
      <svg
        aria-hidden
        width="40"
        height="55"
        viewBox="0 0 54 52"
        fill="currentColor"
        className={cn(
          "absolute top-0 left-0 h-[55px] w-10 transition-transform duration-300",
          prev ? "translate-x-2.5 group-hover:translate-x-0" : "-scale-x-100 translate-x-2.5 group-hover:translate-x-0"
        )}
      >
        <path d="M16.6309 25.4001L25.1406 16.8902C25.4463 16.5333 25.9835 16.4917 26.3405 16.7974C26.6974 17.1031 26.739 17.6403 26.4333 17.9973C26.4048 18.0306 26.3738 18.0617 26.3405 18.0901L19.2859 25.1532H52.9762C53.4461 25.1532 53.8271 25.5343 53.8271 26.0043C53.8271 26.4743 53.4461 26.8552 52.9762 26.8552H19.2859L26.3405 33.9098C26.6974 34.2155 26.739 34.7527 26.4333 35.1097C26.1275 35.4666 25.5904 35.5082 25.2334 35.2025C25.2001 35.174 25.1691 35.1429 25.1406 35.1097L16.6308 26.5999C16.3009 26.2681 16.3009 25.732 16.6309 25.4001Z" />
      </svg>
    </button>
  );
});
