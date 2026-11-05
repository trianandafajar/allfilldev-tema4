import { ImageOverlay } from "@/components/shared/image-overlay";
import { SectionTitle } from "@/components/shared/section-title";
import { TextButton } from "@/components/shared/text-button";
import type { Chef } from "@/data/chefs";

export function ChefProfile({ chef }: { chef: Chef }) {
  return (
    <section className="container">
      <div className="grid items-center gap-[30px] lg:grid-cols-2 lg:gap-[clamp(40px,5.2vw,100px)]">
        <div>
          <SectionTitle title={chef.name} subtitle={chef.role} />
          <div className="h-[25px]" />
          <p>{chef.bio}</p>
          <div className="h-[25px]" />
          <p>{chef.expertise}</p>
          <div className="h-[30px]" />
          <ul className="flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-bright uppercase underline">
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
          <div className="h-[30px] lg:h-[45px]" />
          <TextButton href="/koki">Lihat Semua Koki</TextButton>
        </div>
        <ImageOverlay
          image={chef.image}
          sizes="(min-width: 992px) 480px, 100vw"
          zoom
          className="mx-auto max-w-[480px]"
        />
      </div>
    </section>
  );
}
