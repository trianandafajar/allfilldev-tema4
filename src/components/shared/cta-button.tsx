import Link from "next/link";
import { cn } from "@/lib/utils";

const base = cn(
  "relative z-10 inline-block cursor-pointer border-0 px-5 py-2.5 text-base text-dark uppercase transition-all duration-[350ms] md:px-9 md:py-[18px]",
  "hover:text-bright",
  "before:absolute before:inset-y-0 before:left-0 before:-z-10 before:w-full before:transition-all before:duration-300 hover:before:scale-x-0",
  "after:absolute after:inset-y-0 after:left-1/2 after:z-[1] after:w-0 after:-translate-x-1/2 after:border-y after:border-transparent after:transition-all after:duration-300 hover:after:w-full hover:after:border-primary hover:after:delay-500"
);

const variants = {
  light: "before:bg-bright",
  gold: "before:bg-primary",
} as const;

type CtaButtonProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
} & (
  | { href: string }
  | ({ href?: undefined } & Omit<React.ComponentProps<"button">, "className" | "children">)
);

/** Tombol solid dengan efek tirai: latar menyusut ke tengah, garis emas muncul. Tautan bila ada `href`, selain itu tombol submit. */
export function CtaButton({ variant = "light", className, children, ...props }: CtaButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="submit" {...props} className={cn(classes, "bg-transparent text-lg")}>
      {children}
    </button>
  );
}
