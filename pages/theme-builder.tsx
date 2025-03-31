import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getLocale } from '@/locales';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ThemeBuilder() {
  const router = useRouter();
  const { locale } = router;
  const t = getLocale(locale || 'en');
  const page = 'themeBuilder';

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mb-6'>
          <Button variant='outline' asChild>
            <Link href='/'>{t.common.back}</Link>
          </Button>
        </div>

        <h1 className='text-4xl font-bold mb-6'>{t.pages[page].title}</h1>

        <Card className='mb-8'>
          <CardContent className='pt-6'>
            <p className='text-lg mb-6'>{t.pages[page].description}</p>

            <div className='bg-slate-200 dark:bg-slate-800 rounded-md h-64 flex items-center justify-center mb-6'>
              <p className='text-muted-foreground'>
                {t.common.imagePlaceholder}
              </p>
            </div>

            <Button asChild className='w-full sm:w-auto'>
              <a
                href='https://www.elegantthemes.com/documentation/divi/theme-builder/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {t.documentation.officialDocs}
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Layout>
  );
}
