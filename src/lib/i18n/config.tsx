"use client";

import { createContext, useContext, ReactNode } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import en from "./en.json";
import ja from "./ja.json";

export type Language = "en" | "ja";

const translations = { en, ja };

type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = typeof en;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: Translations, path: string): string {
  const keys = path.split(".");
  let current: TranslationValue = obj;

  for (const key of keys) {
    if (typeof current === "object" && current !== null && key in current) {
      current = (current as { [key: string]: TranslationValue })[key];
    } else {
      return path;
    }
  }

  return typeof current === "string" ? current : path;
}

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const language = locale;

  const searchParams = useSearchParams();

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    // Replace current locale in pathname with new locale
    const segments = pathname.split("/");
    // path is starts with /, so segments[0] is empty, segments[1] is locale
    if (segments[1] === "ja" || segments[1] === "en") {
      segments[1] = lang;
    } else {
      // Should not happen if middleware works, but fallback
      segments.splice(1, 0, lang);
    }

    // Set flag to indicate language switch (for state persistence)
    if (typeof window !== "undefined") {
      // Dispatch event to allow components to save state synchronously before navigation
      window.dispatchEvent(new Event("beforeLanguageSwitch"));
      sessionStorage.setItem("languageSwitchPending", "true");
    }

    const newPath = segments.join("/");
    const params = searchParams.toString();
    const fullPath = params ? `${newPath}?${params}` : newPath;

    router.push(fullPath, { scroll: false });
  };

  const t = (key: string): string => {
    return getNestedValue(translations[language], key);
  };

  // Always provide context, even before mount
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export function useLanguage() {
  return useI18n().language;
}
