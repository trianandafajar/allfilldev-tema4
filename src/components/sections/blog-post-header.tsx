import type { BlogPost } from "@/data/blog";

/** Judul artikel dan baris tanggal | penulis, selebar container di atas kolom konten. */
export function BlogPostHeader({ post }: { post: BlogPost }) {
  return (
    <header>
      <h2 className="text-title">{post.title}</h2>
      <p className="mt-[15px] flex flex-wrap items-center gap-[30px]">
        <time>{post.date}</time>
        <span aria-hidden className="h-5 border-l-2 border-border" />
        <span>{post.author}</span>
      </p>
    </header>
  );
}
