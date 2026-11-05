"use client";

import Image from "next/image";
import { useRef } from "react";
import { GrowLine } from "@/components/shared/grow-line";
import { useCursorImage } from "@/hooks/use-cursor-image";
import type { MenuItem } from "@/data/types";
import { formatRupiah } from "@/lib/format";

type FoodMenuItemProps = {
  item: MenuItem;
};

/** Satu baris menu. Gambar bulat muncul dan mengikuti kursor saat baris di-hover. */
export function FoodMenuItem({ item }: FoodMenuItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useCursorImage(itemRef, imageRef);

  return (
    <div ref={itemRef} className="relative mb-5 basis-full md:mb-10 xl:mb-[50px] xl:basis-[47%]">
      <Image
        ref={imageRef}
        src={item.image.src}
        alt=""
        width={item.image.width}
        height={item.image.height}
        className="pointer-events-none absolute z-[999] h-[220%] w-auto -translate-x-[30%] -translate-y-1/2 rounded-full opacity-0 max-md:hidden"
      />
      <div>
        <div className="flex items-start justify-between max-md:flex-col-reverse md:items-center">
          <h3 className="border-b border-primary text-lg uppercase">{item.title}</h3>
          <div className="mr-[-40px] my-0.5 hidden min-w-0 shrink overflow-hidden xl:block" aria-hidden>
            {[0, 1].map((n) => (
              <GrowLine
                key={n}
                from="0px"
                to="200px"
                scrub={0.1}
                className="mt-0.5 mr-[-40px] mb-[3px]"
              />
            ))}
          </div>
          <p className="text-lg whitespace-nowrap text-primary">{formatRupiah(item.price)}</p>
        </div>
        <div className="mt-[7px] flex justify-between gap-x-4 text-bright max-md:flex-wrap">
          <p>{item.description}</p>
          <p>{item.note}</p>
        </div>
      </div>
    </div>
  );
}
