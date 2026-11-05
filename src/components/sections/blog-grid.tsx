import type { BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";
import { BlogCard } from "./blog-card";

type BlogGridProps = {
  posts: readonly BlogPost[];
  /** `list`: dua baris pertama diberi garis bawah. `similar`: tanpa garis bawah (berita serupa). */
  variant?: "list" | "similar";
};

/** Grid 3 kolom. Garis vertikal dengan garis emas yang menetes hanya tampil di layar lebar. */
export function BlogGrid({ posts, variant = "list" }: BlogGridProps) {
  return (
    <div className="container">
      <ul className="grid list-none p-0 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => {
          const ruled = variant === "list" && i < 6;
          const dropLine = i % 3 !== 2;
          return (
            <li
              key={post.slug}
              className={cn(
                "relative overflow-hidden",
                ruled ? "lg:border-b" : variant === "list" && "lg:px-3"
              )}
            >
              {dropLine && (
                <>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-0 right-0 hidden h-full w-px bg-border lg:block"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-[60px] right-0 hidden h-[60px] w-px animate-drop-line opacity-0 bg-linear-to-b from-transparent via-primary to-transparent lg:block motion-reduce:hidden"
                    style={{ animationDelay: i % 3 === 0 ? "0.5s" : "0.3s" }}
                  />
                </>
              )}
              <BlogCard post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
