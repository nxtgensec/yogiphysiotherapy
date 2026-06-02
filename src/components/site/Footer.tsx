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

const INTERNS = [
  { name: "T. Sravanthi", id: "NGS-DEV26-TH14", role: "Backend" },
  { name: "T. Sneha", id: "NGS-DEV26-SN17", role: "Backend" },
  { name: "GUNALA LAHARI", id: "NGS-DEV26-GU06", role: "Deployment Team" },
  { name: "K. Keerthana", id: "NGS-DEV26-KK22", role: "Intern" },
  { name: "M. Siva Tejaswini", id: "NGS-DEV26-MA07", role: "Deployment Team" },
  { name: "T. Manasa Reddy", id: "NGS-DEV26-TM12", role: "Intern" },
  { name: "M. Lavanya", id: "NGS-DEV26-ML51", role: "Intern" },
  { name: "A B KAMAL", id: "NGS-DEV26-AB04", role: "Intern" },
  { name: "M Kiran Kumar", id: "NGS-DEV26-MK23", role: "Intern" },
  { name: "Goparam Jashnavi", id: "NGS-DEV26-JG32", role: "Intern" },
  { name: "Muppireddy Keerthi", id: "NGS-DEV26-MU09", role: "Deployment Team" },
  { name: "V.md. Fareed", id: "NGS-DEV26-VM11", role: "Intern" },
];

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
              <DialogContent className="max-h-[85vh] max-w-3xl overflow-hidden p-0">
                <DialogHeader className="border-b border-border px-5 pb-4 pt-5 sm:px-6">
                  <DialogTitle className="font-display text-2xl">NxtGenSec Interns</DialogTitle>
                  <DialogDescription>
                    Development and deployment contributors for Yogi Physiotherapy website.
                  </DialogDescription>
                </DialogHeader>
                <div className="max-h-[62vh] overflow-auto px-5 pb-5 sm:px-6">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead className="sticky top-0 bg-background">
                      <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="py-3 pr-4 font-semibold">Name</th>
                        <th className="py-3 pr-4 font-semibold">Intern ID</th>
                        <th className="py-3 font-semibold">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {INTERNS.map((intern) => (
                        <tr key={intern.id} className="border-b border-border/70 last:border-0">
                          <td className="py-3 pr-4 font-medium text-foreground">{intern.name}</td>
                          <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">
                            {intern.id}
                          </td>
                          <td className="py-3 text-muted-foreground">{intern.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
