"use client";

import Link from "next/link";
import { memo, useCallback, useState } from "react";
import type { NavItem as NavItemData } from "@/config/site";
import { cn } from "@/lib/utils";

type NavItemProps = {
  item: NavItemData;
  onNavigate: () => void;
};

const linkClass =
  "block px-5 py-2 text-bright uppercase hover:text-primary xl:inline-flex xl:h-full xl:items-center xl:px-0 xl:py-2.5";

/** Item menu utama. Submenu: dropdown saat hover/fokus di desktop, akordeon di mobile. */
export const NavItem = memo(function NavItem({ item, onNavigate }: NavItemProps) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((v) => !v), []);
  const hasChildren = !!item.children?.length;

  return (
    <li className="group/item relative xl:mr-[50px] xl:h-full xl:last:mr-0">
      <Link href={item.href} onClick={onNavigate} className={linkClass}>
        {item.title}
      </Link>
      {hasChildren && (
        <>
          <ul
            className={cn(
              "m-0 list-none p-0 max-xl:max-h-0 max-xl:overflow-hidden max-xl:pl-[15px] max-xl:transition-all max-xl:duration-500",
              !expanded && "max-xl:invisible",
              expanded && "max-xl:max-h-[9999px]",
              "xl:invisible xl:absolute xl:top-[calc(100%+15px)] xl:left-0 xl:z-[100] xl:w-[260px] xl:rounded-b-[5px] xl:border-t-2 xl:border-primary xl:bg-header xl:py-2.5 xl:opacity-0 xl:transition-all xl:duration-100",
              "xl:group-focus-within/item:visible xl:group-focus-within/item:top-full xl:group-focus-within/item:opacity-100 xl:group-focus-within/item:duration-[400ms]",
              "xl:group-hover/item:visible xl:group-hover/item:top-full xl:group-hover/item:opacity-100 xl:group-hover/item:duration-[400ms]"
            )}
          >
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className="block px-5 py-2 text-bright uppercase hover:text-primary xl:py-[7px]"
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-expanded={expanded}
            aria-label={`${expanded ? "Tutup" : "Buka"} submenu ${item.title}`}
            onClick={toggle}
            className={cn(
              "absolute top-[5px] right-5 size-[30px] cursor-pointer bg-transparent xl:hidden",
              "before:absolute before:top-1/2 before:left-1/2 before:h-0.5 before:w-2.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90 before:bg-foreground before:transition-all before:duration-300",
              "after:absolute after:top-1/2 after:left-1/2 after:h-0.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-foreground after:transition-all after:duration-300",
              expanded && "before:rotate-0"
            )}
          />
        </>
      )}
    </li>
  );
});
