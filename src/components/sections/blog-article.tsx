import Image from "next/image";
import { BlogCommentForm } from "@/components/sections/blog-comment-form";
import { BlogComments } from "@/components/sections/blog-comments";
import { BlogVideo } from "@/components/sections/blog-video";
import { ShareLinks } from "@/components/shared/share-links";
import { ZoomImage } from "@/components/shared/zoom-image";
import type { BlogPost } from "@/data/blog";

/** Spacer antarblok isi artikel: 75px di desktop, 30px di layar kecil. */
function Gap() {
  return <div className="h-[30px] lg:h-[75px]" />;
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden">
      <div className="h-stack-sm" />
      <ZoomImage
        src={post.cover.src}
        alt={post.cover.alt}
        sizes="(min-width: 992px) 760px, 100vw"
        priority
        className="aspect-[983/511] w-full"
      />
      <Gap />
      <div className="grid gap-5">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Gap />
      <blockquote className="m-0 flex items-center justify-between">
        <Image src="/images/icon/quote-left.svg" alt="" width={38} height={38} className="h-auto w-[38px]" />
        <p className="m-0 w-full text-start font-heading text-[22px] leading-normal text-bright italic md:w-4/5">
          {post.quote}
        </p>
        <Image src="/images/icon/quote-right.svg" alt="" width={38} height={38} className="h-auto w-[38px]" />
      </blockquote>
      <Gap />
      <h4 className="text-title text-bright">{post.shortTitle}</h4>
      <div className="h-5" />
      <p>{post.shortDesc}</p>
      <Gap />
      <BlogVideo image={post.videoImage} videoId={post.videoId} title={post.title} />
      <Gap />
      <p>{post.shortDescTwo}</p>
      <Gap />
      <hr className="m-0 border-0 border-t border-border" />
      <div className="h-[30px] lg:h-[35px]" />
      <div className="flex flex-wrap items-center gap-[25px]">
        <p className="m-0">Bagikan:</p>
        <ShareLinks path={post.href} title={post.title} />
      </div>
      <div className="h-section-sm" />
      <BlogComments comments={post.comments} />
      <div className="h-section-sm" />
      <BlogCommentForm />
    </article>
  );
}
