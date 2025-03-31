import { useRouter } from 'next/router';
import en from '../locales/en.json';
import bg from '../locales/bg.json';
import de from '../locales/de.json';

const locales = {
  en,
  bg,
  de,
};

export type Locale = keyof typeof locales;

export function useTranslation() {
  const router = useRouter();
  const { locale = 'bg' } = router;

  // Type guard to ensure locale is a valid key
  const safeLocale = (locale as Locale) in locales ? (locale as Locale) : 'bg';

  return {
    t: (key: string) => {
      // Split the key by dots to traverse nested objects
      return (
        key.split('.').reduce((obj, k) => obj?.[k], locales[safeLocale]) || key
      );
    },
    locale: safeLocale,
    changeLocale: (newLocale: Locale) => {
      router.push(router.pathname, router.asPath, { locale: newLocale });
    },
  };
}
