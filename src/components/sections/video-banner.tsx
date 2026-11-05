import { VideoDialog } from "@/components/shared/video-dialog";
import { ZoomImage } from "@/components/shared/zoom-image";
import type { aboutVideo } from "@/data/about-page";

/** Pita lebar dengan latar foto dan tombol putar yang membuka video. */
export function VideoBanner({ data }: { data: typeof aboutVideo }) {
  return (
    <>
      <div className="h-section" />
      <section className="relative overflow-hidden">
        <ZoomImage src={data.background} alt="" sizes="100vw" className="absolute inset-0 z-0" />
        <div className="relative">
          <VideoDialog videoId={data.videoId} title={data.title} />
        </div>
      </section>
    </>
  );
}
