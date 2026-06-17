import logo from "@/assets/logo.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLang } from "@/i18n/LanguageProvider";
import { CLINIC } from "@/lib/clinic";

const INTERN_TEAMS = [
  {
    role: "Backend Development",
    members: [
      { name: "T. Sneha", id: "NGS-DEV26-SN17" },
      { name: "T. Sravanthi", id: "NGS-DEV26-TH14" },
    ],
  },
  {
    role: "Frontend Development",
    members: [
      { name: "B. Siva Charan", id: "NGS-DEV26-BA16" },
      { name: "T. Sai Nithin Reddy", id: "NGS-DEV26-TH15" },
      { name: "M. Kiran Kumar", id: "NGS-DEV26-MK23" },
      { name: "A B KAMAL", id: "NGS-DEV26-AB04" },
    ],
  },
  {
    role: "Deployment & DevOps",
    members: [
      { name: "GUNALA LAHARI", id: "NGS-DEV26-GU06" },
      { name: "M. Siva Tejaswini", id: "NGS-DEV26-MA07" },
      { name: "Muppireddy Keerthi", id: "NGS-DEV26-MU09" },
    ],
  },
  {
    role: "Database & Infrastructure",
    members: [
      { name: "Janith Sai", id: "NGS-DEV26-KO42" },
      { name: "Geetha", id: "NGS-DEV26-KG38" },
      { name: "Scandan", id: "NGS-DEV26-NA10" },
    ],
  },
  {
    role: "Design & UX",
    members: [
      { name: "T. Leelanchana", id: "NGS-DEV26-LT52" },
      { name: "G. Jashnavi", id: "NGS-DEV26-JG53" },
    ],
  },
  {
    role: "Quality Assurance & Testing",
    members: [
      { name: "K. Keerthana", id: "NGS-DEV26-KK22" },
      { name: "M Lavanya", id: "NGS-DEV26-ML51" },
      { name: "V.md. Fareed", id: "NGS-DEV26-VM11" },
      { name: "T. Manasa Reddy", id: "NGS-DEV26-TM12" },
      { name: "K. Madhukar", id: "NGS-DEV26-KM19" },
    ],
  },
];

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-7 md:px-6">
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
                  Pain Relief &middot; Obesity Care &middot; {CLINIC.city}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{t.footer.tagline}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              {CLINIC.doctor.name} &middot; {CLINIC.doctor.credentials} &middot; Reg No:{" "}
              {CLINIC.doctor.regNo}
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
                  WhatsApp &middot; {CLINIC.whatsappDisplay}
                </a>
              </li>
              <li>{CLINIC.address.line}</li>
              <li>{CLINIC.hours.weekdays}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {CLINIC.name}. {t.footer.rights}
          </p>
          <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:text-right">
            <p>
              Best Physiotherapy Clinic in {CLINIC.city} &middot; Back Pain &middot; Obesity
              &middot; Sports Rehab
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
                >
                  Developed by NxtGenSec Interns
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[92dvh] max-w-3xl overflow-hidden p-0">
                <DialogHeader className="border-b border-border px-4 pb-2.5 pt-4 sm:px-6 sm:pb-4 sm:pt-5">
                  <DialogTitle className="font-display text-xl sm:text-2xl">
                    NxtGenSec Interns
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm">
                    Development and deployment contributors for Yogi Physiotherapy website.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid max-h-[72dvh] grid-cols-2 gap-2 overflow-auto px-3 py-3 sm:max-h-[68vh] sm:grid-cols-3 sm:gap-3 sm:px-6 sm:py-5">
                  {INTERN_TEAMS.map((team) => (
                    <section
                      key={team.role}
                      className="rounded-lg border border-border bg-background/70 p-2.5 sm:p-3"
                    >
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
                        {team.role}
                      </h3>
                      <ul className="mt-1.5 space-y-1.5">
                        {team.members.map((member) => (
                          <li key={member.id} className="min-w-0">
                            <p className="break-words text-[11px] font-semibold leading-tight text-foreground sm:text-sm">
                              {member.name}
                            </p>
                            <p className="font-mono text-[9px] leading-tight text-muted-foreground sm:text-[11px]">
                              {member.id}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
