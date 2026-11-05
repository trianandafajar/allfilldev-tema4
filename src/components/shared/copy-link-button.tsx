"use client";

import { Check, Link2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type CopyLinkButtonProps = {
  /** Alamat lengkap yang disalin. */
  url: string;
};

/** Tombol salin tautan. Satu-satunya bagian share yang butuh klien (clipboard dan umpan balik). */
export function CopyLinkButton({ url }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, [url]);

  const Icon = copied ? Check : Link2;

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label="Salin tautan"
        className="cursor-pointer text-bright hover:text-primary"
      >
        <Icon aria-hidden className="size-4" />
      </button>
      <span role="status" className="sr-only">
        {copied ? "Tautan disalin" : ""}
      </span>
    </>
  );
}
