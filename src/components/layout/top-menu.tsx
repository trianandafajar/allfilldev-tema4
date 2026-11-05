import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { MenuToggleIcon } from "@/components/layout/menu-toggle-icon";
import { topNav } from "@/config/site";
import { cn } from "@/lib/utils";

type TopMenuProps = {
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

/** Bilah atas desktop: tautan reservasi, logo tengah, dan tombol menu layar penuh. */
export const TopMenu = memo(function TopMenu({ open, onToggle, onNavigate }: TopMenuProps) {
  return (
    <div className="relative hidden h-[70px] pr-2.5 pl-7 xl:block">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full items-center border-r-[0.3px] border-line">
          <Link
            href="/reservasi"
            className="pr-7 text-lg text-bright uppercase hover:text-primary"
          >
            Reservasi
          </Link>
        </div>
        <Link href="/" className="mr-[88px]" aria-label="Elegencia, ke beranda">
          <Image
            src="/images/logo/elegencia-logo.png"
            alt="Elegencia"
            width={127}
            height={46}
            priority
            className="h-auto w-[127px]"
          />
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="top-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={onToggle}
          className="relative flex h-full w-20 cursor-pointer items-center justify-center border-l-[0.3px] border-line bg-transparent"
        >
          <MenuToggleIcon active={open} />
        </button>
        <ul
          id="top-menu"
          inert={!open}
          className={cn(
            "absolute -top-[50vh] left-0 -z-10 m-0 flex h-0 w-full list-none flex-col justify-center bg-overlay p-0 transition-all duration-500 ease-out",
            open && "top-0 h-screen"
          )}
        >
          {topNav.map((item, i) => (
            <li
              key={item.href}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
              className={cn(
                "flex h-[70px] translate-y-[50px] items-center justify-between pr-[5%] pl-[15%] font-heading text-bright uppercase italic opacity-0 transition-all duration-400",
                open && "translate-y-0 opacity-100"
              )}
            >
              <Link
                href={item.href}
                onClick={onNavigate}
                className="inline-block text-[60px] leading-[120%] hover:translate-x-[50px] hover:text-primary"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
