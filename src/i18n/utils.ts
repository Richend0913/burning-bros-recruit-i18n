import en from './en.json';
import vi from './vi.json';
import ne from './ne.json';
import id from './id.json';

const translations: Record<string, any> = { en, vi, ne, id };

export function getTranslation(lang: string) {
  return translations[lang] || translations.en;
}

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'ne', name: 'नेपाली' },
  { code: 'id', name: 'Bahasa Indonesia' },
];
