import { Calendar, HeartPulse, Phone, ShieldCheck, Sparkles } from "lucide-react";
import clinicEntrance from "@/assets/clinic-entrance.jpg";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { buildCallLink, buildWhatsAppLink, CLINIC } from "@/lib/clinic";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative isolate min-h-[calc(100svh-1rem)] overflow-hidden px-4 pb-14 pt-28 text-center md:min-h-[760px] md:pb-20 md:pt-36">
      <img
        src={clinicEntrance}
        alt=""
        className="absolute inset-0 -z-20 size-full scale-105 object-cover object-[center_42%] blur-[2px] saturate-[0.95]"
        fetchPriority="high"
        decoding="async"
        width={800}
        height={1067}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.76)_42%,rgba(255,255,255,0.9)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-3 py-1.5 text-xs font-medium text-primary shadow-soft backdrop-blur">
          <Sparkles className="size-3.5" />
          {t.hero.badge}
        </span>

        <h1 className="mx-auto mt-5 max-w-4xl font-display text-[2.35rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t.hero.title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-full bg-gradient-primary px-7 text-base font-semibold text-primary-foreground shadow-elevated hover:opacity-95 sm:w-auto"
          >
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Calendar className="size-5" />
              {t.hero.bookCta}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-full border-2 border-primary/20 bg-card/80 px-7 text-base font-semibold text-foreground hover:bg-secondary sm:w-auto"
          >
            <a
              href={buildCallLink()}
              aria-label={`Call ${CLINIC.shortName} at ${CLINIC.phoneDisplay}`}
            >
              <Phone className="size-5 text-primary" />
              {t.hero.callCta}
            </a>
          </Button>
        </div>

        <dl className="mx-auto mt-10 grid max-w-4xl gap-3 border-y border-border/60 py-5 text-left sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: t.hero.trust1 },
            { icon: HeartPulse, label: t.hero.trust2 },
            { icon: Sparkles, label: t.hero.trust3 },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg bg-card/70 p-3 shadow-soft"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[color:var(--healing)]/45 text-primary">
                <item.icon className="size-4" />
              </span>
              <dt className="text-sm font-semibold leading-tight text-foreground">{item.label}</dt>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-5 max-w-2xl text-sm font-medium text-muted-foreground">
          {CLINIC.doctor.name} &middot; {CLINIC.doctor.credentials} &middot; Reg No:{" "}
          {CLINIC.doctor.regNo}
        </p>
      </div>
    </section>
  );
}
