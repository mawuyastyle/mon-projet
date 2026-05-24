import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';
  return {
    title: isFr
      ? 'MAWUYA — Maison de maroquinerie contemporaine. Abidjan.'
      : 'MAWUYA — Contemporary leather house. Abidjan.',
    description: isFr
      ? 'Sacs faits à Abidjan, portés partout. Pyramid, En V, Nafi : des pièces conçues pour durer. Production limitée à 20 sacs par mois.'
      : 'Bags made in Abidjan, worn everywhere. Pyramid, V, Nafi: pieces built to last. Twenty bags a month. Not one more.',
    openGraph: {
      siteName: 'MAWUYA',
      locale: isFr ? 'fr_FR' : 'en_US',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
