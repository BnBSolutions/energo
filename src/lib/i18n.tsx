import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type Language = 'ro' | 'en' | 'ru';

export const languages: Language[] = ['ro', 'en', 'ru'];

export const languageNames: Record<Language, string> = {
  ro: 'RO',
  en: 'EN',
  ru: 'RU',
};

const LANGUAGE_KEY = 'preferred-language';

export const detectLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_KEY) as Language;
  if (stored && languages.includes(stored)) {
    return stored;
  }
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ro')) return 'ro';
  if (browserLang.startsWith('ru')) return 'ru';
  if (browserLang.startsWith('en')) return 'en';
  
  return 'ro';
};

export const saveLanguage = (lang: Language) => {
  localStorage.setItem(LANGUAGE_KEY, lang);
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  translations: Record<Language, Record<string, any>>;
}

export function I18nProvider({ children, translations }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(detectLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
