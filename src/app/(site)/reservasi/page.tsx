import type { Metadata } from "next";
import { LocationCards } from "@/components/sections/location-cards";
import { MapEmbed } from "@/components/shared/map-embed";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { ReservationForm } from "@/components/shared/reservation-form";
import { SectionTitle } from "@/components/shared/section-title";
import { businessInfo } from "@/config/site";
import { reservation } from "@/data/home";
import { locations } from "@/data/locations";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/reservasi" });

export default function ReservationPage() {
  return (
    <main>
      <WebPageJsonLd
        path="/reservasi"
        name="Reservasi"
        description="Pesan meja di Elegencia secara online dan lihat lokasi cabang kami."
      />
      <PageHero title="Reservasi" href="/reservasi" />
      <div className="h-section" />
      <div className="container-fluid">
        <div className="flex flex-col lg:flex-row">
          <MapEmbed
            src={businessInfo.mapEmbedUrl}
            title="Peta lokasi restoran Elegencia"
            className="h-[400px] lg:h-auto lg:min-h-[700px] lg:w-1/2"
          />
          <div className="bg-secondary px-[15px] py-[60px] lg:w-1/2 lg:px-[8%] lg:py-[100px]">
            <SectionTitle title="Pesan Meja" subtitle="Reservasi" animation="flip" />
            <div className="h-[30px] lg:h-[60px]" />
            <ReservationForm guestOptions={reservation.guestOptions} />
          </div>
        </div>
      </div>
      <div className="h-section" />
      <LocationCards items={locations} title="Temukan Kami" subtitle="Kunjungi Kami" />
      <div className="h-section" />
    </main>
  );
}
