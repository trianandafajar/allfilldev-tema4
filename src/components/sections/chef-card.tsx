import Image from "next/image";
import Link from "next/link";
import type { Chef } from "@/data/chefs";

/** Kartu koki: foto dengan panel nama dan jabatan; saat hover atau fokus panel melebar dan menampilkan tautan sosial. */
export function ChefCard({ chef }: { chef: Chef }) {
  return (
    <div className="group relative mx-auto mb-5 max-w-[420px]">
      <Image
        src={chef.image.src}
        alt={chef.image.alt}
        width={chef.image.width}
        height={chef.image.height}
        sizes="(min-width: 992px) 420px, (min-width: 768px) 45vw, 100vw"
        className="h-auto w-full"
      />
      <div className="absolute inset-x-[12%] -bottom-5 flex h-[100px] flex-col justify-end overflow-hidden border-b border-border bg-surface px-3 pb-5 text-center transition-all duration-500 ease-in-out group-focus-within:h-[200px] group-hover:h-[200px]">
        <ul className="mb-4 flex list-none flex-col items-center gap-1 p-0 text-sm text-bright uppercase underline opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100">
          {chef.socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
        <Link href={`/koki/${chef.slug}`} className="text-xl text-primary uppercase hover:text-bright">
          {chef.name}
        </Link>
        <p className="text-sm">{chef.role}</p>
      </div>
    </div>
  );
}
