import { Mail, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import type { locations as locationsData } from "@/data/locations";

type LocationCardsProps = {
  items: typeof locationsData;
  title: string;
  subtitle: string;
};

/** Daftar cabang dalam grid 3 kolom dengan garis pemisah. */
export function LocationCards({ items, title, subtitle }: LocationCardsProps) {
  return (
    <section className="container">
      <SectionTitle title={title} subtitle={subtitle} align="center" />
      <div className="h-stack" />
      <ul className="grid list-none p-0 text-center sm:grid-cols-2 sm:text-start lg:grid-cols-3">
        {items.map((location) => (
          <li
            key={location.city}
            className="group border-border px-0 py-[15px] sm:px-[17px] lg:p-[50px] lg:nth-[3n]:border-r-0 lg:nth-[-n+3]:border-b lg:border-r"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-bright text-bright transition-all duration-1000 group-hover:border-primary group-hover:bg-primary group-hover:text-dark">
              <MapPin aria-hidden className="size-5" />
            </span>
            <h3 className="mt-[17px] text-lg text-primary uppercase">{location.city}</h3>
            <address className="mt-[17px] not-italic">
              {location.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <a
              href={`mailto:${location.email}`}
              className="mt-[17px] inline-flex items-center gap-2 text-bright hover:text-primary"
            >
              <Mail aria-hidden className="size-4" />
              {location.email}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
