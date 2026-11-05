import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/legal-content";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { termsOfService } from "@/data/legal";
import { indonesianDateToIso } from "@/lib/format";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: termsOfService.path });

export default function TermsOfServicePage() {
  return (
    <main>
      <WebPageJsonLd
        path={termsOfService.path}
        name={termsOfService.title}
        description={termsOfService.description}
        dateModified={indonesianDateToIso(termsOfService.updatedAt)}
      />
      <PageHero title={termsOfService.title} href={termsOfService.path} />
      <div className="h-section" />
      <LegalContent document={termsOfService} />
    </main>
  );
}
