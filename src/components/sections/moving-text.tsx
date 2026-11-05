type MovingTextProps = {
  text: string;
  highlight: string;
};

/** Teks berjalan tanpa putus. Salinan kedua disembunyikan dari pembaca layar. */
export function MovingText({ text, highlight }: MovingTextProps) {
  return (
    <div className="overflow-hidden bg-secondary uppercase">
      <div className="flex min-w-full flex-nowrap whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 animate-marquee items-center py-[15px] pr-[0.35em] motion-reduce:animate-none"
          >
            <h2 className="text-display">
              {text} <span className="text-bright">{highlight}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
