import type { Metadata, Viewport } from "next";
import { Baskervville, Prompt } from "next/font/google";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { brandColors, businessInfo, siteConfig } from "@/config/site";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const { address, geo } = businessInfo;

export const viewport: Viewport = {
  themeColor: brandColors.background,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  category: "restaurant",
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Meta geo klasik. Google mengabaikannya; sinyal lokal utama tetap JSON-LD dan Google Business Profile.
  other: {
    "geo.region": geo.isoRegion,
    "geo.placename": address.city,
    "geo.position": `${geo.latitude};${geo.longitude}`,
    ICBM: `${geo.latitude}, ${geo.longitude}`,
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={`${prompt.variable} ${baskervville.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
