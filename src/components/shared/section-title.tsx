"use client";

import { useRef } from "react";
import { useSectionTitle } from "@/hooks/use-section-title";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  /** Teks kecil miring di atas judul. */
  subtitle?: React.ReactNode;
  /** Baris pertama berwarna terang di atas judul emas. */
  lead?: string;
  align?: "start" | "center";
  /** `rise`: huruf naik dari bawah (judul tengah). `flip`: huruf berputar masuk. */
  animation?: "rise" | "flip";
  /** Tingkat heading. Pakai `h1` untuk judul utama halaman. */
  as?: "h1" | "h2";
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  lead,
  align = "start",
  animation = "rise",
  as: Heading = "h2",
  className,
}: SectionTitleProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const label = lead ? `${lead} ${title}` : title;

  useSectionTitle(titleRef, sectionRef, animation, label);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "overflow-hidden",
        align === "center" && "flex flex-col items-center justify-center",
        className
      )}
    >
      {subtitle && (
        <div className="font-heading mb-[5px] text-lg text-primary italic md:mb-0">
          {subtitle}
        </div>
      )}
      <Heading
        ref={titleRef}
        aria-label={label}
        className="m-0 text-display font-normal text-primary"
      >
        {lead && (
          <>
            <span className="text-bright">{lead}</span>
            <br />
          </>
        )}
        {title}
      </Heading>
    </div>
  );
}
