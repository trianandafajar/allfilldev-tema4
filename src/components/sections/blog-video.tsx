import { VideoDialog } from "@/components/shared/video-dialog";
import { ZoomImage } from "@/components/shared/zoom-image";
import type { ImageAsset } from "@/data/types";

type BlogVideoProps = {
  image: ImageAsset;
  videoId: string;
  title: string;
};

/** Poster video yang membesar saat scroll, dengan tombol putar di tengah. */
export function BlogVideo({ image, videoId, title }: BlogVideoProps) {
  return (
    <div className="relative">
      <ZoomImage
        src={image.src}
        alt={image.alt}
        sizes="(min-width: 992px) 760px, 100vw"
        className="absolute inset-0"
      />
      <VideoDialog videoId={videoId} title={title} />
    </div>
  );
}
