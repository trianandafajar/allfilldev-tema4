import { Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import type { BlogPost } from "@/data/blog";

type BlogSidebarProps = {
  categories: readonly string[];
  tags: BlogPost["tags"];
};

/** Sidebar blog: kolom pencarian, kategori, tag, dan kotak penulis. Pencarian belum berfungsi. */
export function BlogSidebar({ categories, tags }: BlogSidebarProps) {
  return (
    <aside className="grid content-start gap-[30px] pt-[30px] md:gap-[50px] md:pt-[50px]" aria-label="Info blog">
      <div role="search" className="flex">
        <label htmlFor="blog-search" className="sr-only">
          Cari artikel
        </label>
        <Input
          id="blog-search"
          type="search"
          placeholder="Cari"
          className="h-auto rounded-none border-border border-r-0 bg-transparent p-[15px] text-base text-bright md:text-base dark:bg-transparent"
        />
        <button
          type="button"
          aria-label="Cari"
          className="border border-l-0 border-border p-[15px] text-bright"
        >
          <Search aria-hidden className="size-6" />
        </button>
      </div>
      <div>
        <h5>Kategori Populer</h5>
        <ul className="mt-[25px] flex list-none flex-col gap-5 p-0">
          {categories.map((category) => (
            <li key={category}>
              <a href="#" className="block">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="m-0 flex list-none flex-wrap gap-[25px] p-0" aria-label="Tag populer">
        {tags.map((tag) => (
          <li key={tag}>
            <a href="#">{tag}</a>
          </li>
        ))}
      </ul>
      <div className="bg-secondary p-[35px]">
        <Image
          src="/images/blog/author-1.png"
          alt=""
          width={65}
          height={65}
          className="rounded-full"
        />
        <h6 className="mt-[18px] text-[22px]">Tim Elegencia</h6>
        <p className="my-[18px]">
          Para koki dan pegiat kuliner yang berbagi cerita dari dapur dan meja makan Elegencia.
        </p>
      </div>
    </aside>
  );
}
