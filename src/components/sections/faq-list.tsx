import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/faq";

/** Daftar tanya jawab berbentuk akordeon: satu jawaban terbuka dalam satu waktu. */
export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="container">
      <Accordion type="single" collapsible className="mx-auto max-w-[900px] border-t border-border">
        {items.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
