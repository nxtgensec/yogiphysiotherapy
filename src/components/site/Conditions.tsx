import {
  Activity, Bone, Dumbbell, Footprints, HandHeart, Heart, MoveRight, PersonStanding, Scale, Stethoscope, Zap,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { buildWhatsAppLink } from "@/lib/clinic";
import { useReveal } from "@/hooks/use-reveal";

const ICONS = [Bone, PersonStanding, Footprints, Scale, Dumbbell, Activity, Heart, HandHeart, Stethoscope, Zap, MoveRight, PersonStanding];

export function Conditions() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const keys = Object.keys(t.conditions.items) as (keyof typeof t.conditions.items)[];

  return (
    <section id="conditions" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Quick care</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.conditions.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.conditions.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {keys.map((k, i) => {
            const Icon = ICONS[i] ?? Activity;
            const label = t.conditions.items[k];
            return (
              <a
                key={k}
                href={buildWhatsAppLink(label)}
                target="_blank"
                rel="noopener"
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-healing text-primary transition-transform group-hover:scale-110">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium leading-tight text-foreground">{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
