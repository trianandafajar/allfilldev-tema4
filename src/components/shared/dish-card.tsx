import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { Dish } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type DishCardProps = {
  dish: Pick<Dish, "href" | "title" | "category" | "image">;
  sizes: string;
  /** Panel info tetap terlihat (mis. slide aktif di carousel). */
  active?: boolean;
};

/** Kartu hidangan: foto dengan panel judul yang naik saat hover atau saat aktif. */
export const DishCard = memo(function DishCard({ dish, sizes, active = false }: DishCardProps) {
  return (
    <Link
      href={dish.href}
      className="group/card relative block overflow-hidden transition-all duration-500"
    >
      <Image
        src={dish.image.src}
        alt={dish.image.alt}
        width={dish.image.width}
        height={dish.image.height}
        sizes={sizes}
        className="h-auto w-full"
      />
      <div
        className={cn(
          "absolute bottom-[-60px] left-0 mx-[37px] mb-[37px] bg-background opacity-0 transition-all duration-300 ease-in-out md:left-[5%] md:mx-[30px]",
          "group-hover/card:bottom-0 group-hover/card:opacity-100 group-focus-visible/card:bottom-0 group-focus-visible/card:opacity-100",
          active && "bottom-0 opacity-100"
        )}
      >
        <div className="py-[38px] pr-5 pl-[19px] md:py-[45px] md:pr-[50px] md:pl-[30px]">
          <h3 className="text-2xl text-primary md:text-[26px]">{dish.title}</h3>
          <div className="text-bright transition-colors group-hover/card:text-primary">
            {dish.category}
          </div>
        </div>
      </div>
    </Link>
  );
});
