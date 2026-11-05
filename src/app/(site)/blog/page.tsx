import type { Metadata } from "next";
import { BlogGrid } from "@/components/sections/blog-grid";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { blogPosts } from "@/data/blog";
import { createMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/blog" });

export default function BlogPage() {
  return (
    <main>
      <WebPageJsonLd
        type="CollectionPage"
        path="/blog"
        name="Blog"
        description="Cerita kuliner, resep, dan tips bersantap dari tim Elegencia."
        extra={{ mainEntity: itemListJsonLd(blogPosts.map((post) => ({ name: post.title, path: post.href }))) }}
      />
      <PageHero title="Blog" href="/blog" />
      <div className="h-section" />
      <BlogGrid posts={blogPosts} />
    </main>
  );
}
