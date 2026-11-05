import Image from "next/image";
import Link from "next/link";
import { ScrollTopLogo } from "@/components/layout/scroll-top-logo";
import { CtaButton } from "@/components/shared/cta-button";
import { GrowLine } from "@/components/shared/grow-line";
import { businessInfo, footerNav, bottomNav, siteConfig } from "@/config/site";
import { formatHours } from "@/lib/format";

const { address } = businessInfo;

export function SiteFooter() {
  return (
    <footer>
      <div className="h-section" />
      <div className="relative">
        <Image
          src="/images/bg/footer.png"
          alt=""
          width={372}
          height={576}
          className="pointer-events-none absolute right-0 bottom-0 h-1/2 w-1/2 object-cover md:h-[70%] md:w-1/5"
        />
        <div className="container relative">
          <div className="text-center">
            <ScrollTopLogo />
          </div>
          <div className="h-section-sm" />
          <GrowLine from="0%" to="100%" duration={0.5} delay={0.3} start="top 90%" end="bottom 10%" />

          <div className="py-[30px] md:px-[50px] md:py-[70px]">
            <div className="flex flex-wrap items-center justify-between">
              <div className="group/email">
                <a href={`mailto:${businessInfo.email}`} className="text-[35px] text-bright">
                  {businessInfo.email}
                </a>
                <span className="block h-0.5 w-0 bg-bright transition-[width] duration-300 group-hover/email:w-full" />
              </div>
              <nav aria-label="Menu footer">
                <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-3 p-0 text-bright uppercase max-md:my-0 md:gap-[clamp(30px,2.9vw,55px)] max-md:mt-[30px] lg:my-0 lg:gap-[clamp(40px,5.2vw,100px)]">
                  {footerNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="h-5 lg:h-[75px]" />
            <div className="flex flex-wrap items-center justify-between gap-[30px] text-bright uppercase">
              <div>
                {businessInfo.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="block">
                    {phone.label}
                  </a>
                ))}
              </div>
              <div>
                <a href={businessInfo.mapUrl} target="_blank" rel="noopener noreferrer">
                  {address.street}
                  <br />
                  {address.city} {address.postalCode}, Indonesia
                </a>
              </div>
              <div>
                {businessInfo.openingHours.map((slot, i) => (
                  <div key={slot.label}>
                    {i > 0 && <GrowLine from="0%" to="100%" duration={0.5} className="my-1" />}
                    <p>{formatHours(slot)}</p>
                  </div>
                ))}
              </div>
              <CtaButton href="/reservasi" variant="light">
                Reservasi
              </CtaButton>
            </div>
          </div>

          <div className="relative h-0">
            <GrowLine
              from="0%"
              to="100%"
              duration={0.8}
              delay={0.8}
              origin="right"
              className="absolute right-0"
            />
          </div>
          <div className="h-[30px] lg:h-[130px]" />
          <div className="flex flex-col gap-y-[15px] text-bright uppercase md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-[30px]">
            <p>
              Hak cipta {siteConfig.copyrightYear} {siteConfig.name}. Seluruh hak dilindungi.
            </p>
            <nav
              aria-label="Tautan bawah"
              className="flex flex-wrap gap-x-[30px] gap-y-1 md:border-l md:border-border md:pl-[30px]"
            >
              {bottomNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="h-[30px] lg:h-[45px]" />
        </div>
      </div>
    </footer>
  );
}
