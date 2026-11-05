import { brandColors, siteConfig } from "@/config/site";
import { ogImageSize } from "@/lib/seo";
import type { OgContent } from "@/lib/og";

const { width, height } = ogImageSize;
const PANEL_WIDTH = 460;

/** "#040d10" + 0.9 → "rgba(4,13,16,0.9)". Satori tidak mengenal hex 8 digit di gradien. */
function withAlpha(hex: string, alpha: number) {
  const value = Number.parseInt(hex.slice(1), 16);
  return `rgba(${(value >> 16) & 255},${(value >> 8) & 255},${value & 255},${alpha})`;
}

function titleSize(title: string) {
  if (title.length <= 22) return 92;
  if (title.length <= 36) return 74;
  return 60;
}

function clip(text: string, max: number) {
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
}

type OgCardProps = {
  content: OgContent;
  /** Foto sebagai data URL. */
  photo: string;
};

/**
 * Kartu gambar OG 1200x630. Foto lanskap menjadi latar penuh; foto potret (koki, hidangan)
 * ditaruh di panel kanan supaya tidak pecah saat diperbesar. Hanya dirender oleh `ImageResponse`.
 */
export function OgCard({ content, photo }: OgCardProps) {
  const portrait = content.photo.height > content.photo.width;
  const textWidth = portrait ? width - PANEL_WIDTH - 140 : 700;

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        position: "relative",
        background: brandColors.background,
        color: brandColors.bright,
        fontFamily: "Baskervville",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- satori, bukan DOM */}
      <img
        src={photo}
        alt=""
        width={portrait ? PANEL_WIDTH : width}
        height={height}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: portrait ? PANEL_WIDTH : width,
          height,
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: portrait ? width - PANEL_WIDTH : 0,
          display: "flex",
          background: `linear-gradient(90deg, ${withAlpha(brandColors.background, portrait ? 1 : 0.96)} 0%, ${withAlpha(
            brandColors.background,
            portrait ? 0.2 : 0.7
          )} ${portrait ? 40 : 58}%, ${withAlpha(brandColors.background, portrait ? 0 : 0.15)} 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontStyle: "italic", color: brandColors.primary }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: textWidth }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: brandColors.primary,
            }}
          >
            {content.kicker}
          </div>
          <div style={{ display: "flex", width: 96, height: 3, margin: "20px 0 28px", background: brandColors.primary }} />
          <div style={{ display: "flex", fontSize: titleSize(content.title), lineHeight: 1.08 }}>
            {clip(content.title, 60)}
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 28, lineHeight: 1.4, opacity: 0.78 }}>
            {clip(content.description, 120)}
          </div>
        </div>
      </div>
    </div>
  );
}
