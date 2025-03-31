import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocale } from '@/locales';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { locale } = router;
  const t = getLocale(locale || 'en');

  return (
    <div className='min-h-screen bg-background'>
      <Head>
        <title>{t.common.title}</title>
        <meta name='description' content='Divi WordPress Help Center' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-primary text-primary-foreground py-4 px-6'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link
            href='/'
            className='text-2xl font-bold hover:text-primary-foreground/80'
          >
            {t.common.title}
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className='container mx-auto py-8 px-4'>{children}</main>

      <footer className='bg-muted py-6 px-4'>
        <div className='container mx-auto text-center text-muted-foreground'>
          <p>© {new Date().getFullYear()} Divi WordPress Help Center</p>
        </div>
      </footer>
    </div>
  );
}
