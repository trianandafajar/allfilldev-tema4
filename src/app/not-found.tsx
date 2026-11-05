import type { Metadata } from "next";
import { CtaButton } from "@/components/shared/cta-button";
import { StatusScreen } from "@/components/shared/status-screen";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <StatusScreen background="/images/bg/error.png">
      <p
        aria-hidden
        className="font-heading text-[100px] leading-none text-transparent [-webkit-text-stroke:1px_var(--primary)] md:text-[180px] md:[-webkit-text-stroke:3px_var(--primary)]"
      >
        404
      </p>
      <h1 className="mt-6 text-[28px] text-bright md:text-4xl">Maaf, halaman tidak ditemukan</h1>
      <p className="mx-auto mt-4 max-w-[700px]">
        Alamat yang Anda tuju mungkin salah ketik, sudah dipindahkan, atau tidak lagi tersedia.
        Silakan kembali ke beranda atau lihat menu kami.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <CtaButton href="/">Kembali ke Beranda</CtaButton>
        <CtaButton href="/menu" variant="gold">
          Lihat Menu
        </CtaButton>
      </div>
    </StatusScreen>
  );
}
