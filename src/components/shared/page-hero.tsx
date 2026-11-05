import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, type Crumb } from "@/components/seo/breadcrumb-json-ld";
import { SectionTitle } from "@/components/shared/section-title";

type PageHeroProps = {
  title: string;
  /** Alamat halaman ini, dipakai di breadcrumb JSON-LD. */
  href: string;
  /** Halaman induk di antara "Beranda" dan judul (mis. "Koki" untuk detail koki). */
  parents?: readonly Crumb[];
};

/** Banner judul halaman dalam: latar, breadcrumb, dan `<h1>`. */
export function PageHero({ title, href, parents = [] }: PageHeroProps) {
  const trail: Crumb[] = [{ label: "Beranda", href: "/" }, ...parents];

  return (
    <section>
      <BreadcrumbJsonLd crumbs={[...trail, { label: title, href }]} />
      <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden md:min-h-[460px]">
        <Image
          src="/images/bg/page-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 mt-[8%]">
          <SectionTitle
            as="h1"
            align="center"
            title={title}
            subtitle={
              <nav aria-label="Breadcrumb" className="text-bright">
                {trail.map((crumb) => (
                  <span key={crumb.href}>
                    <Link href={crumb.href}>
                      {crumb.label}
                    </Link>
                    {" / "}
                  </span>
                ))}
                <span aria-current="page">{title}</span>
              </nav>
            }
          />
        </div>
      </div>
    </section>
  );
}
