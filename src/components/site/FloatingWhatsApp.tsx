import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { buildWhatsAppLink } from "@/lib/clinic";

export function FloatingWhatsApp() {
  const { t } = useLang();
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener"
      aria-label={t.floating.label}
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-elevated animate-pulse-ring hover:bg-[color:var(--whatsapp)]/90"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">{t.floating.label}</span>
    </a>
  );
}
