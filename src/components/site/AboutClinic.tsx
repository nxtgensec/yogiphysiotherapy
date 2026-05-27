import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";
import { CLINIC } from "@/lib/clinic";
import logo from "@/assets/logo.png";

export function AboutClinic() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about-clinic" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {t.aboutClinic.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {t.aboutClinic.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t.aboutClinic.body}</p>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.aboutClinic.stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft"
                >
                  <dt className="font-display text-2xl font-semibold text-primary sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto flex max-w-sm flex-col items-center gap-4 rounded-3xl border border-border bg-gradient-healing p-8 text-center shadow-elevated">
              <img src={logo} alt={CLINIC.name} className="h-20 w-20 rounded-2xl object-cover shadow-soft" />
              <p className="font-display text-xl font-semibold leading-tight text-foreground">
                {CLINIC.name}
              </p>
              <p className="text-sm text-foreground/80">
                {CLINIC.city}, {CLINIC.state}
              </p>
              <p className="text-xs text-muted-foreground">
                {CLINIC.doctor.name} · {CLINIC.doctor.credentials}
                <br />Reg No: {CLINIC.doctor.regNo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
