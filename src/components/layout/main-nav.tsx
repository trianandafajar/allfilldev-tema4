"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useEffect, useState } from "react";
import { MenuToggleIcon } from "@/components/layout/menu-toggle-icon";
import { NavItem } from "@/components/layout/nav-item";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

/** Bilah menu utama. Di bawah 1200px berubah jadi logo + hamburger dengan panel layar penuh. */
export const MainNav = memo(function MainNav({ hidden }: { hidden: boolean }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative">
      <div className="max-w-full px-[15px] xl:px-[100px]">
        <div className="relative flex flex-wrap items-center justify-start max-xl:h-20 xl:mt-[15px] xl:justify-center">
          <div className="z-10 inline-block xl:hidden">
            <Link href="/" className="inline-block" aria-label="Elegencia, ke beranda">
              <Image
                src="/images/logo/elegencia-logo.png"
                alt="Elegencia"
                width={127}
                height={46}
                className="h-8 w-auto sm:h-[45px]"
              />
            </Link>
          </div>
          <div className={cn("flex h-full items-center", hidden && "hidden")}>
            <nav aria-label="Menu utama" className="flex h-full items-center text-base leading-[1.6em]">
              <ul
                id="main-nav"
                className={cn(
                  "m-0 list-none p-0",
                  "max-xl:invisible max-xl:absolute max-xl:top-0 max-xl:-left-[15px] max-xl:h-0 max-xl:w-screen max-xl:overflow-hidden max-xl:border-y max-xl:border-bright/20 max-xl:bg-header max-xl:pt-[75px] max-xl:pb-2.5 max-xl:transition-[height,visibility] max-xl:duration-500 max-xl:ease-out",
                  open && "max-xl:visible max-xl:h-screen",
                  "xl:flex xl:h-full xl:flex-wrap"
                )}
              >
                {mainNav.map((item) => (
                  <NavItem key={item.title} item={item} onNavigate={close} />
                ))}
              </ul>
              <button
                type="button"
                aria-expanded={open}
                aria-controls="main-nav"
                aria-label={open ? "Tutup menu" : "Buka menu"}
                onClick={toggle}
                className="absolute top-1/2 right-0 -mt-[13px] inline-block cursor-pointer bg-transparent xl:hidden"
              >
                <MenuToggleIcon active={open} />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
});
