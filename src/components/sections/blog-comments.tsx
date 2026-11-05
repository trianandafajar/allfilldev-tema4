import Image from "next/image";
import type { BlogComment } from "@/data/blog";

type CommentItemProps = {
  comment: Omit<BlogComment, "replies">;
};

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={comment.avatar}
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-bright">{comment.name}</span>
      </div>
      <p className="py-[5px] text-sm">{comment.date}</p>
      <p className="py-[5px]">{comment.text}</p>
      <a
        href="#comment-form"
        className="inline-flex items-center gap-2 text-primary hover:text-bright"
      >
        Balas
        <svg aria-hidden width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path
            d="M1 5.74707H8.5C10.0913 5.74707 11.6174 6.37921 12.7426 7.50443C13.8679 8.62965 14.5 10.1558 14.5 11.7471V13.2471M1 5.74707L5.5 10.2471M1 5.74707L5.5 1.24707"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

/** Daftar komentar dengan balasan bersarang. Data contoh, belum dari backend. */
export function BlogComments({ comments }: { comments: readonly BlogComment[] }) {
  const total = comments.reduce((sum, comment) => sum + 1 + comment.replies.length, 0);

  return (
    <section aria-labelledby="comments-title">
      <h3 id="comments-title" className="text-display text-bright">
        Komentar ({total})
      </h3>
      <ol className="m-0 list-none p-0 lg:mr-[50px]">
        {comments.map((comment) => (
          <li key={comment.name} className="pt-[30px]">
            <CommentItem comment={comment} />
            {comment.replies.length > 0 && (
              <ol className="m-0 list-none p-0 lg:ml-[30px]">
                {comment.replies.map((reply) => (
                  <li key={reply.name} className="pt-[30px]">
                    <CommentItem comment={reply} />
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
