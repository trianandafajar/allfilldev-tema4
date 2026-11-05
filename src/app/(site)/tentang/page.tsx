import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { OpeningHours } from "@/components/sections/opening-hours";
import { Testimonials } from "@/components/sections/testimonials";
import { VideoBanner } from "@/components/sections/video-banner";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { aboutPage, aboutVideo } from "@/data/about-page";
import { openingHours, testimonials } from "@/data/home";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/tentang" });

export default function AboutPage() {
  return (
    <main>
      <WebPageJsonLd
        type="AboutPage"
        path="/tentang"
        name="Tentang Kami"
        description={aboutPage.details}
        image={aboutPage.image.src}
      />
      <PageHero title="Tentang Kami" href="/tentang" />
      <About data={aboutPage} />
      <Testimonials items={testimonials} />
      <OpeningHours data={openingHours} />
      <VideoBanner data={aboutVideo} />
    </main>
  );
}
