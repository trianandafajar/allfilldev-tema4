import { ScrollUp } from "@/components/layout/scroll-up";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

/** Kerangka halaman biasa: header, footer, dan tombol kembali ke atas. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <ScrollUp />
    </>
  );
}
