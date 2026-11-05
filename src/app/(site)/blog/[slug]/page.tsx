import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/sections/blog-article";
import { BlogGrid } from "@/components/sections/blog-grid";
import { BlogPostHeader } from "@/components/sections/blog-post-header";
import { BlogSidebar } from "@/components/sections/blog-sidebar";
import { BlogPostingJsonLd } from "@/components/seo/blog-posting-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { blogCategories, blogPosts } from "@/data/blog";
import { indonesianDateToIso } from "@/lib/format";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createMetadata({
    path: post.href,
    type: "article",
    publishedTime: indonesianDateToIso(post.date),
    authors: [post.author],
    section: post.category,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const similar = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <BlogPostingJsonLd post={post} />
      <PageHero
        title="Detail Blog"
        href={post.href}
        parents={[{ label: "Blog", href: "/blog" }]}
      />
      <section className="container">
        <div className="h-section" />
        <BlogPostHeader post={post} />
        <div className="grid md:grid-cols-[2fr_1fr] md:gap-6">
          <BlogArticle post={post} />
          <BlogSidebar categories={blogCategories} tags={post.tags} />
        </div>
        <div className="h-section" />
        <SectionTitle title="Berita Serupa" subtitle="Baca Juga" align="center" />
        <div className="h-stack" />
        <BlogGrid posts={similar} variant="similar" />
      </section>
    </main>
  );
}
