"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MainNav } from "@/components/layout/main-nav";
import { TopMenu } from "@/components/layout/top-menu";
import { cn } from "@/lib/utils";

/**
 * Header tetap di atas. Setelah di-scroll melewati tingginya, header disembunyikan
 * dan muncul kembali (dengan latar) hanya saat scroll ke atas.
 */
export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const lastTop = useRef(0);
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(false);
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const toggleTopMenu = useCallback(() => setTopMenuOpen((v) => !v), []);
  const closeTopMenu = useCallback(() => setTopMenuOpen(false), []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      const top = window.scrollY;
      if (top >= header.offsetHeight + 30) {
        setSticky(true);
        setVisible(top < lastTop.current);
      } else {
        setSticky(false);
        setVisible(false);
      }
      lastTop.current = top;
    };
    // Satu pembaruan per frame, bukan satu per event scroll.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!topMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setTopMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [topMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed left-0 z-[999] w-full transition-[top,background-color] duration-[400ms]",
        !sticky && "top-0",
        sticky && (visible ? "top-0 bg-header" : "-top-[150px] bg-header")
      )}
    >
      <TopMenu
        open={topMenuOpen}
        onToggle={toggleTopMenu}
        onNavigate={closeTopMenu}
      />
      <div className="w-full border-b-[0.5px] border-primary opacity-30" />
      <MainNav hidden={topMenuOpen} />
    </header>
  );
}
