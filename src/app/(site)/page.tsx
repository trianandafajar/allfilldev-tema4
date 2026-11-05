import type { Metadata } from "next";
import { RestaurantJsonLd } from "@/components/seo/restaurant-json-ld";
import { About } from "@/components/sections/about";
import { BestItem } from "@/components/sections/best-item";
import { DishShowcase } from "@/components/sections/dish-showcase";
import { FoodMenu } from "@/components/sections/food-menu";
import { Hero } from "@/components/sections/hero";
import { MovingText } from "@/components/sections/moving-text";
import { OpeningHours } from "@/components/sections/opening-hours";
import { Reservation } from "@/components/sections/reservation";
import { Testimonials } from "@/components/sections/testimonials";
import { siteConfig } from "@/config/site";
import {
  about,
  bestItem,
  dishShowcase,
  foodMenu,
  heroBackground,
  heroSlides,
  movingText,
  openingHours,
  reservation,
  testimonials,
} from "@/data/home";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  path: "/",
  title: `${siteConfig.name} | Restoran Nusantara Elegan di Jakarta Selatan`,
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main>
      <RestaurantJsonLd />
      <Hero slides={heroSlides} background={heroBackground} />
      <MovingText {...movingText} />
      <About data={about} />
      <OpeningHours data={openingHours} />
      <DishShowcase data={dishShowcase} />
      <FoodMenu data={foodMenu} />
      <BestItem data={bestItem} />
      <Testimonials items={testimonials} />
      <Reservation data={reservation} />
    </main>
  );
}
