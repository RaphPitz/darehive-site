'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

export type Language = 'fr' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: frTranslations,
  en: enTranslations,
  es: esTranslations,
};

export const languageNames = {
  fr: '🇫🇷 Français',
  en: '🇬🇧 English',
  es: '🇪🇸 Español',
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [isInitialized, setIsInitialized] = useState(false);

  // Fonction pour récupérer une traduction à partir d'un chemin de clé
  const getNestedTranslation = (obj: Record<string, unknown>, path: string): string => {
    const keys = path.split('.');
    let result: unknown = obj;
    
    for (const key of keys) {
      if (result && typeof result === 'object' && result !== null && key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return path; // Retourne la clé si la traduction n'est pas trouvée
      }
    }
    
    return typeof result === 'string' ? result : path;
  };

  const t = (key: string): string => {
    return getNestedTranslation(translations[language], key);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darehive-language', lang);
    }
  };

  // Initialisation de la langue depuis le localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('darehive-language') as Language;
      if (savedLanguage && ['fr', 'en', 'es'].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
      setIsInitialized(true);
    }
  }, []);

  // Éviter le hydration mismatch
  if (!isInitialized) {
    return null;
  }

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 