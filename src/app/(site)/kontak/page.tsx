import type { Metadata } from "next";
import { LocationCards } from "@/components/sections/location-cards";
import { ContactForm } from "@/components/shared/contact-form";
import { MapEmbed } from "@/components/shared/map-embed";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { businessInfo } from "@/config/site";
import { locations } from "@/data/locations";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/kontak" });

export default function ContactPage() {
  return (
    <main>
      <WebPageJsonLd
        type="ContactPage"
        path="/kontak"
        name="Kontak"
        description="Hubungi Elegencia untuk pertanyaan, reservasi acara, atau kerja sama."
      />
      <PageHero title="Kontak" href="/kontak" />
      <div className="h-section" />
      <div className="container">
        <div className="flex flex-col gap-[60px] lg:flex-row">
          <div className="lg:w-2/5">
            <SectionTitle title="Hubungi Kami" subtitle="Kirim Pesan" />
            <div className="h-5 lg:h-[50px]" />
            <ContactForm />
          </div>
          <MapEmbed
            src={businessInfo.mapEmbedUrl}
            title="Peta lokasi restoran Elegencia"
            className="h-[400px] lg:h-[500px] lg:w-3/5"
          />
        </div>
      </div>
      <div className="h-section" />
      <LocationCards items={locations} title="Temukan Kami" subtitle="Kunjungi Kami" />
      <div className="h-section" />
    </main>
  );
}
