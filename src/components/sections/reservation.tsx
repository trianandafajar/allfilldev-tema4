import { ReservationForm } from "@/components/shared/reservation-form";
import { SectionTitle } from "@/components/shared/section-title";
import { VideoDialog } from "@/components/shared/video-dialog";
import { ZoomImage } from "@/components/shared/zoom-image";
import type { reservation as reservationData } from "@/data/home";

export function Reservation({ data }: { data: typeof reservationData }) {
  return (
    <>
      <div className="h-section" />
      <section id="reservasi" className="relative overflow-hidden">
        <ZoomImage
          src={data.background}
          alt=""
          sizes="100vw"
          className="absolute inset-0 z-0"
        />
        {/* Di bawah lg form berada di atas foto yang terang; digelapkan agar isian dan teksnya terbaca. */}
        <div aria-hidden className="absolute inset-0 z-0 bg-background/65 lg:hidden" />
        <div className="relative py-section">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full lg:w-1/2">
                <div className="h-[60px] lg:h-0" />
                <VideoDialog videoId={data.videoId} title={data.videoTitle} />
                <div className="h-[60px] lg:h-0" />
              </div>
              <div className="w-full lg:w-1/2 lg:px-3">
                <SectionTitle title={data.title} subtitle={data.subtitle} animation="flip" />
                <div className="h-[30px] lg:h-[60px]" />
                <ReservationForm guestOptions={data.guestOptions} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
