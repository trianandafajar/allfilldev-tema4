import type { MetadataRoute } from "next";
import { brandColors, siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    lang: siteConfig.language,
    start_url: "/",
    display: "standalone",
    background_color: brandColors.background,
    theme_color: brandColors.background,
    icons: [
      { src: "/images/icon/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/images/icon/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
