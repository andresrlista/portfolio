import { en } from './en';
import { es } from './es';
import type { Dictionary } from './en';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Locale = keyof typeof languages;

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizedPath(locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return locale === 'en' ? `${base}/` : `${base}/${locale}/`;
}
