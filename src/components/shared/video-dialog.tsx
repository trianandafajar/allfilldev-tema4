"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type VideoDialogProps = {
  videoId: string;
  title: string;
};

/** Tombol putar bulat yang membuka video YouTube di dialog. Iframe baru dimuat saat dialog dibuka. */
export function VideoDialog({ videoId, title }: VideoDialogProps) {
  return (
    <Dialog>
      <div className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden md:h-[60vh]">
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`Putar video: ${title}`}
            className={
              "absolute top-1/2 left-1/2 z-10 flex size-[100px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent py-[18px] pr-5 pl-7 " +
              "before:absolute before:top-1/2 before:left-1/2 before:z-0 before:size-full before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-ring before:rounded-full before:bg-border/40 motion-reduce:before:animate-none " +
              "after:absolute after:top-1/2 after:left-1/2 after:z-[1] after:size-full after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-border/40 after:transition-all after:duration-200"
            }
          >
            <span className="relative z-[3] block size-0 border-y-[16px] border-l-[24px] border-y-transparent border-l-border/80" />
          </button>
        </DialogTrigger>
      </div>
      <DialogContent
        showCloseButton
        className="max-w-[min(94vw,1100px)] gap-0 rounded-none bg-dark p-0 sm:max-w-[min(94vw,1100px)]"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="aspect-video w-full">
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
