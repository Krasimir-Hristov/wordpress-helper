import enLocale from './en.json';
import bgLocale from './bg.json';
import deLocale from './de.json';

const locales = {
  en: enLocale,
  bg: bgLocale,
  de: deLocale
};

export const getLocale = (lang) => {
  return locales[lang] || locales.en;
};

export const getSupportedLanguages = () => {
  return Object.keys(locales);
};

export default locales;
