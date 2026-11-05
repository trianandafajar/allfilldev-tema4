import Image from "next/image";

type StatusScreenProps = {
  /** Gambar latar layar penuh. */
  background: string;
  children: React.ReactNode;
};

/** Layar penuh tanpa header/footer untuk halaman status (404, segera hadir): latar foto dan garis dekoratif. */
export function StatusScreen({ background, children }: StatusScreenProps) {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Image src={background} alt="" fill priority sizes="100vw" className="object-cover" />
      <span aria-hidden className="absolute top-[15%] left-0 h-px w-full bg-border" />
      <span aria-hidden className="absolute bottom-[10%] left-0 h-px w-full bg-border" />
      <span aria-hidden className="absolute top-0 left-[2%] h-full w-px bg-border lg:left-[20%]" />
      <span aria-hidden className="absolute top-0 right-[2%] h-full w-px bg-border lg:right-[20%]" />
      <div className="relative z-10 container text-center">{children}</div>
    </main>
  );
}
