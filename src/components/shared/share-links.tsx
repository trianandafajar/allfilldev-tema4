import { MessageCircle } from "lucide-react";
import { CopyLinkButton } from "@/components/shared/copy-link-button";
import { SocialIcon, type SocialIconName } from "@/components/shared/social-icons";
import { absoluteUrl } from "@/lib/seo";

type ShareLinksProps = {
  /** Path halaman yang dibagikan, mis. `/blog/rahasia-bumbu-rendang`. */
  path: string;
  title: string;
};

const linkClass = "text-bright hover:text-primary";

/** Tombol bagikan halaman ke Facebook, X, LinkedIn, WhatsApp, plus salin tautan. Pembungkusnya diatur pemanggil. */
export function ShareLinks({ path, title }: ShareLinksProps) {
  const url = encodeURIComponent(absoluteUrl(path));
  const text = encodeURIComponent(title);

  const targets: { label: string; href: string; icon: SocialIconName | "whatsapp" }[] = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}`, icon: "facebook" },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`, icon: "x" },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, icon: "linkedin" },
    { label: "WhatsApp", href: `https://wa.me/?text=${text}%20${url}`, icon: "whatsapp" },
  ];

  return (
    <>
      {targets.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Bagikan ke ${label}`}
          className={linkClass}
        >
          {icon === "whatsapp" ? (
            <MessageCircle aria-hidden className="size-4" />
          ) : (
            <SocialIcon name={icon} />
          )}
        </a>
      ))}
      <CopyLinkButton url={absoluteUrl(path)} />
    </>
  );
}
