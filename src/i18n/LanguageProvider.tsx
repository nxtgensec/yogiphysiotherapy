import * as React from "react";
import { dictionaries, type Lang, type Dict } from "./dictionaries";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageCtx = React.createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "te") setLangState(stored);
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  }, []);

  const value = React.useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] as Dict }),
    [lang, setLang],
  );

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LanguageCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
