import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/data/blog";
import { indonesianDateToIso } from "@/lib/format";
import { absoluteUrl, entityId } from "@/lib/seo";

/** `BlogPosting` schema.org untuk detail blog. Tanggal terbit diubah dari teks Indonesia di data ke ISO 8601. */
export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const url = absoluteUrl(post.href);
  const published = indonesianDateToIso(post.date);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: absoluteUrl(post.cover.src),
        inLanguage: siteConfig.language,
        articleSection: post.category,
        keywords: post.tags.join(", "),
        ...(published && { datePublished: published, dateModified: published }),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        isPartOf: { "@id": entityId.website },
        author: { "@type": "Organization", name: post.author, "@id": entityId.organization },
        publisher: { "@id": entityId.organization },
      }}
    />
  );
}
