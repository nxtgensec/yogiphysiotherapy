import { Activity, Zap, Flame, Waves, Move3d, Sparkles, Cog, Scale } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";
import { buildWhatsAppLink } from "@/lib/clinic";

const ICONS = [Waves, Zap, Flame, Sparkles, Move3d, Activity, Cog, Scale];

export function Machinery() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="machinery" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-background" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.machinery.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.machinery.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.machinery.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {t.machinery.items.map((item, i) => {
            const Icon = ICONS[i] ?? Activity;
            return (
              <a
                key={item.t}
                href={buildWhatsAppLink(item.t, `I'd like to know more about ${item.t} treatment.`)}
                target="_blank"
                rel="noopener"
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated sm:p-5"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-base font-semibold leading-tight">{item.t}</h3>
                <p className="text-xs text-muted-foreground sm:text-sm">{item.d}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
