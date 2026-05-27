import { MessageCircle, Phone, Calendar, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { useLang } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";
import { buildCallLink, buildWhatsAppLink, CLINIC } from "@/lib/clinic";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background flourishes */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden />
      <div
        className="absolute top-24 -left-20 -z-10 size-72 rounded-full bg-[color:var(--healing)]/40 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -right-24 -z-10 size-96 rounded-full bg-[color:var(--primary)]/15 blur-3xl animate-float-slow"
        style={{ animationDelay: "-3s" }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-3 py-1.5 text-xs font-medium text-primary shadow-soft backdrop-blur">
            <Sparkles className="size-3.5" />
            {t.hero.badge}
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{t.hero.subtitle}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gradient-primary px-6 text-base font-semibold text-primary-foreground shadow-elevated hover:opacity-95"
            >
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener">
                <Calendar className="size-5" />
                {t.hero.bookCta}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-2 border-[color:var(--whatsapp)]/30 px-6 text-base font-semibold text-[color:var(--whatsapp)] hover:bg-[color:var(--whatsapp)]/10"
            >
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener">
                <MessageCircle className="size-5" />
                {t.hero.whatsappCta}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-5 text-base font-semibold text-foreground"
            >
              <a href={buildCallLink()}>
                <Phone className="size-5" />
                {t.hero.callCta}
              </a>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-6 text-left">
            {[
              { icon: ShieldCheck, label: t.hero.trust1 },
              { icon: HeartPulse, label: t.hero.trust2 },
              { icon: Sparkles, label: t.hero.trust3 },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[color:var(--healing)]/40 text-primary">
                  <item.icon className="size-4" />
                </span>
                <dt className="text-xs font-medium text-foreground sm:text-sm">{item.label}</dt>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs text-muted-foreground">
            {CLINIC.doctor.name} · {CLINIC.doctor.credentials} · Reg No: {CLINIC.doctor.regNo}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-elevated md:aspect-[4/5]">
            <img
              src={heroImg}
              alt="Physiotherapist guiding patient through recovery exercise in Tirupati"
              className="size-full object-cover"
              width={1536}
              height={1152}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" aria-hidden />
          </div>

          {/* Floating cards */}
          <div className="absolute -bottom-6 -left-4 hidden w-60 rounded-2xl border border-border bg-card/90 p-4 shadow-elevated backdrop-blur sm:block animate-float-slow">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-[color:var(--healing)]/60 text-primary">
                <HeartPulse className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Pain-free in weeks</p>
                <p className="text-xs text-muted-foreground">Custom recovery plans</p>
              </div>
            </div>
          </div>
          <div
            className="absolute -top-4 -right-2 hidden w-52 rounded-2xl border border-border bg-card/90 p-4 shadow-elevated backdrop-blur md:block animate-float-slow"
            style={{ animationDelay: "-4s" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Trusted Care</p>
                <p className="text-xs text-muted-foreground">Reg No: {CLINIC.doctor.regNo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
