import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col p-6">
      <Link href={post.href} tabIndex={-1} aria-hidden className="block">
        <Image
          src={post.image.src}
          alt=""
          width={post.image.width}
          height={post.image.height}
          sizes="(min-width: 992px) 360px, (min-width: 768px) 45vw, 100vw"
          className="h-auto w-full"
        />
      </Link>
      <div className="mt-[25px] flex flex-1 flex-col">
        <p className="leading-normal">{post.date}</p>
        {/* Ukuran dan line-height dipasang di h3 dan <a>: h3 bawaan 48px dan `a { font-size: 16px }` global akan melebarkan baris. */}
        <h3 className="relative mt-2 mb-5 w-fit text-[22px] leading-[1.35] after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:w-0 after:bg-border after:transition-[width] after:duration-500 hover:after:w-full">
          <Link href={post.href} className="text-[22px] leading-[1.35] text-primary">
            {post.title}
          </Link>
        </h3>
        <Link
          href={post.href}
          aria-label={`Baca selengkapnya: ${post.title}`}
          className="mt-auto block uppercase"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}
