import type { Metadata } from "next";
import { FaqList } from "@/components/sections/faq-list";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { CtaButton } from "@/components/shared/cta-button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { faqs } from "@/data/faq";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: "/faq" });

export default function FaqPage() {
  return (
    <main>
      <FaqJsonLd items={faqs} path="/faq" />
      <PageHero title="FAQ" href="/faq" />
      <div className="h-section" />
      <div className="container">
        <SectionTitle title="Pertanyaan Umum" subtitle="Ada Pertanyaan?" align="center" />
      </div>
      <div className="h-stack" />
      <FaqList items={faqs} />
      <div className="h-section-sm" />
      <div className="container text-center">
        <h3 className="text-title text-bright">Masih ada pertanyaan?</h3>
        <p className="mt-3">Tim kami siap membantu melalui halaman kontak.</p>
        <div className="mt-[30px]">
          <CtaButton href="/kontak" variant="light">
            Hubungi Kami
          </CtaButton>
        </div>
      </div>
    </main>
  );
}
