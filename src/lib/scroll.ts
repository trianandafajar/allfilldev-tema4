import { prefersReducedMotion } from "@/lib/gsap";

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}
