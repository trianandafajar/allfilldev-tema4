import { cn } from "@/lib/utils";

type MapEmbedProps = {
  src: string;
  title: string;
  className?: string;
};

/** Peta Google Maps yang dimuat malas, diberi filter gelap agar serasi dengan tema. */
export function MapEmbed({ src, title, className }: MapEmbedProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block size-full border-0 [filter:grayscale(100%)_invert(90%)_contrast(120%)]"
      />
    </div>
  );
}
