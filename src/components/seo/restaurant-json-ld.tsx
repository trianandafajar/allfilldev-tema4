import { JsonLd } from "@/components/seo/json-ld";
import { businessInfo, siteConfig } from "@/config/site";
import { absoluteUrl, entityId } from "@/lib/seo";

/** schema.org `Restaurant` untuk beranda. Datanya dari `businessInfo` agar satu sumber dengan footer. */
export function RestaurantJsonLd() {
  const { address, geo } = businessInfo;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": entityId.restaurant,
        name: siteConfig.name,
        description: siteConfig.description,
        url: absoluteUrl("/"),
        image: [absoluteUrl("/images/og/default.jpg"), absoluteUrl("/images/bg/hero.jpg")],
        logo: absoluteUrl("/images/icon/icon-512.png"),
        email: businessInfo.email,
        telephone: businessInfo.phones[0].label,
        servesCuisine: businessInfo.cuisine,
        priceRange: businessInfo.priceRange,
        currenciesAccepted: "IDR",
        inLanguage: siteConfig.language,
        hasMap: businessInfo.mapUrl,
        areaServed: { "@type": "City", name: address.city },
        hasMenu: absoluteUrl("/menu"),
        acceptsReservations: absoluteUrl("/reservasi"),
        parentOrganization: { "@id": entityId.organization },
        ...(businessInfo.socials.length > 0 && { sameAs: businessInfo.socials }),
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          addressRegion: address.region,
          postalCode: address.postalCode,
          addressCountry: address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        openingHoursSpecification: businessInfo.openingHours.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: slot.days,
          opens: slot.opens,
          closes: slot.closes === "24:00" ? "23:59" : slot.closes,
        })),
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: absoluteUrl("/reservasi"),
            inLanguage: siteConfig.language,
            actionPlatform: [
              "https://schema.org/DesktopWebPlatform",
              "https://schema.org/MobileWebPlatform",
            ],
          },
          result: { "@type": "FoodEstablishmentReservation", name: `Reservasi meja di ${siteConfig.name}` },
        },
      }}
    />
  );
}
