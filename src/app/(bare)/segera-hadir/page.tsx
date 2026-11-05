import type { Metadata } from "next";
import { Countdown } from "@/components/shared/countdown";
import { CtaButton } from "@/components/shared/cta-button";
import { StatusScreen } from "@/components/shared/status-screen";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  path: "/segera-hadir",
  title: "Segera Hadir",
  description: "Cabang baru Elegencia segera dibuka.",
  noindex: true,
});

/** Tanggal pembukaan placeholder (WIB). Ganti dengan tanggal asli. */
const launchAt = "2027-01-01T00:00:00+07:00";

export default function ComingSoonPage() {
  return (
    <StatusScreen background="/images/bg/coming-soon.png">
      <h1 className="mb-10 text-title text-bright">Segera Hadir</h1>
      <Countdown target={launchAt} />
      <p className="mx-auto mt-10 max-w-[600px]">
        Cabang baru Elegencia sedang kami siapkan. Nantikan hidangan Nusantara pilihan kami di
        tempat baru.
      </p>
      <div className="mt-8">
        <CtaButton href="/">Kembali ke Beranda</CtaButton>
      </div>
    </StatusScreen>
  );
}
