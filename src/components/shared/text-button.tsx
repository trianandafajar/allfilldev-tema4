import Link from "next/link";
import { cn } from "@/lib/utils";

type TextButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Tautan beraksen garis emas atas-bawah; saat hover garis digambar dari sisi berlawanan. */
export function TextButton({ href, children, className }: TextButtonProps) {
  return (
    <div className={cn("my-[15px]", className)}>
      <Link
        href={href}
        className={cn(
          "relative z-10 inline-block cursor-pointer border-y border-primary p-[15px] font-normal text-bright outline-none",
          "hover:border-transparent hover:text-bright",
          "before:absolute before:top-0 before:right-0 before:h-px before:w-0 before:bg-primary before:transition-all before:duration-[400ms]",
          "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-[400ms]",
          "hover:before:w-full hover:before:duration-1000 hover:after:w-full hover:after:duration-1000"
        )}
      >
        {children}
      </Link>
    </div>
  );
}
