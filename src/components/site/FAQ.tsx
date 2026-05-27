import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

export function FAQ() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div ref={ref} className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.faq.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {t.faq.items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`q-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft data-[state=open]:shadow-elevated"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline sm:text-lg">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
