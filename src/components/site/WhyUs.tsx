import {
  Award,
  BadgeCheck,
  Clock,
  GraduationCap,
  Heart,
  Home,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

const ICONS = [Heart, Sparkles, BadgeCheck, MessageCircle, Home, Clock, GraduationCap, Award];

export function WhyUs() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-[color:var(--healing)]/15 to-background"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why us
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.why.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((it, i) => {
            const Icon = ICONS[i] ?? Heart;
            return (
              <div
                key={it.t}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                  <Icon className="size-6" strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-lg font-semibold">{it.t}</h3>
                <p className="text-sm text-muted-foreground">{it.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
