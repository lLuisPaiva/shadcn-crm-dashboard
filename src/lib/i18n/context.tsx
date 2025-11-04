"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const COOKIE_NAME = "preferred-language";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/**
 * Detect browser language and map to supported languages
 */
function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en";

  // Get browser language
  const browserLang = navigator.language || (navigator as any).userLanguage || "en";

  // Extract language code (e.g., "pt-BR" -> "pt")
  const langCode = browserLang.split("-")[0].toLowerCase();

  // Map to supported languages
  if (langCode === "pt") return "pt";
  if (langCode === "da") return "da";

  // Default to English
  return "en";
}

/**
 * Get language from cookie
 */
function getLanguageFromCookie(): Language | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  const langCookie = cookies.find((c) => c.trim().startsWith(`${COOKIE_NAME}=`));

  if (langCookie) {
    const lang = langCookie.split("=")[1]?.trim() as Language;
    if (lang === "pt" || lang === "da" || lang === "en") {
      return lang;
    }
  }

  return null;
}

/**
 * Set language in cookie
 */
function setLanguageInCookie(lang: Language) {
  if (typeof document === "undefined") return;

  document.cookie = `${COOKIE_NAME}=${lang}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

/**
 * Language Provider Component
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // First check cookie
    const cookieLang = getLanguageFromCookie();
    if (cookieLang) return cookieLang;

    // Then detect from browser
    return detectBrowserLanguage();
  });

  useEffect(() => {
    // Save to cookie when language changes
    setLanguageInCookie(language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setLanguageInCookie(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to use language context
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
