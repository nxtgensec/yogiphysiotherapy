import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageProvider";
import { CLINIC } from "@/lib/clinic";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="size-12 rounded-xl object-cover shadow-soft"
                loading="lazy"
                decoding="async"
                width={48}
                height={48}
              />
              <div>
                <p className="font-display text-lg font-semibold">{CLINIC.shortName}</p>
                <p className="text-xs text-muted-foreground">
                  Pain Relief · Obesity Care · {CLINIC.city}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{t.footer.tagline}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              {CLINIC.doctor.name} · {CLINIC.doctor.credentials} · Reg No: {CLINIC.doctor.regNo}
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider">
              {t.footer.quickLinks}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-primary" href="/#top">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/#about-clinic">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/#services">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/#machinery">
                  {t.nav.equipment}
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/#testimonials">
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/#faq">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/#contact">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider">
              {t.footer.contact}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-primary" href={`tel:${CLINIC.phone}`}>
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary"
                  href={`https://wa.me/${CLINIC.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp · {CLINIC.whatsappDisplay}
                </a>
              </li>
              <li>{CLINIC.address.line}</li>
              <li>{CLINIC.hours.weekdays}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {CLINIC.name}. {t.footer.rights}
          </p>
          <p>Best Physiotherapy Clinic in {CLINIC.city} · Back Pain · Obesity · Sports Rehab</p>
        </div>
      </div>
    </footer>
  );
}
