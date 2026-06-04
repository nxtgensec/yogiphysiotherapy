import { CheckCircle2, GraduationCap, MessageCircle, Stethoscope } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { buildWhatsAppLink, CLINIC } from "@/lib/clinic";
import { useReveal } from "@/hooks/use-reveal";

export function AboutDoctor() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="doctor" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-background"
        aria-hidden
      />
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-12"
      >
        <div className="relative lg:col-span-5">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-elevated">
            <img
              src={doctorImg}
              alt={`${CLINIC.doctor.name}, Physiotherapist in ${CLINIC.city}`}
              className="size-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={1254}
              height={1254}
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-card/95 p-4 shadow-elevated backdrop-blur sm:left-auto sm:right-5 sm:w-72">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">{CLINIC.doctor.name}</p>
                <p className="text-xs text-muted-foreground">{CLINIC.doctor.credentials}</p>
                <p className="text-[11px] text-muted-foreground">Reg No: {CLINIC.doctor.regNo}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.doctor.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.doctor.title}
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">{t.doctor.bio}</p>

          <h3 className="mt-8 flex items-center gap-2 text-base font-semibold text-foreground">
            <Stethoscope className="size-5 text-primary" />
            {t.doctor.philosophyTitle}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.doctor.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 rounded-xl bg-card p-3 shadow-soft">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[color:var(--whatsapp)]" />
                <span className="text-sm text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gradient-primary px-6 text-base font-semibold text-primary-foreground shadow-elevated"
            >
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                {t.doctor.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
