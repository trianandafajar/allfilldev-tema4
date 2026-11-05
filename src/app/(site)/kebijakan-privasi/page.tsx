import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/legal-content";
import { WebPageJsonLd } from "@/components/seo/web-page-json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { privacyPolicy } from "@/data/legal";
import { indonesianDateToIso } from "@/lib/format";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ path: privacyPolicy.path });

export default function PrivacyPolicyPage() {
  return (
    <main>
      <WebPageJsonLd
        path={privacyPolicy.path}
        name={privacyPolicy.title}
        description={privacyPolicy.description}
        dateModified={indonesianDateToIso(privacyPolicy.updatedAt)}
      />
      <PageHero title={privacyPolicy.title} href={privacyPolicy.path} />
      <div className="h-section" />
      <LegalContent document={privacyPolicy} />
    </main>
  );
}
