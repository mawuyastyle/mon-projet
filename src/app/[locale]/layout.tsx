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
  const title = isFr
    ? 'MAWUYA — Maison de maroquinerie contemporaine. Abidjan.'
    : 'MAWUYA — Contemporary leather house. Abidjan.';
  const description = isFr
    ? 'Sacs faits à Abidjan, portés partout. Pyramid, En V, Nafi : des pièces conçues pour durer. Production limitée à 20 sacs par mois.'
    : 'Bags made in Abidjan, worn everywhere. Pyramid, V, Nafi: pieces built to last. Twenty bags a month. Not one more.';
  return {
    title: {
      default: title,
      template: '%s',
    },
    description,
    openGraph: {
      siteName: 'MAWUYA',
      locale: isFr ? 'fr_FR' : 'en_US',
      type: 'website',
      title,
      description,
      url: 'https://mawuya.com',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    metadataBase: new URL('https://mawuya.com'),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MAWUYA',
    url: 'https://mawuya.com',
    logo: 'https://mawuya.com/logo.svg',
    foundingDate: '2021',
    foundingLocation: {
      '@type': 'Place',
      name: "Abidjan, Côte d'Ivoire",
    },
    founder: {
      '@type': 'Person',
      name: 'Ama Diallo',
    },
    description:
      locale === 'fr'
        ? 'Maison de maroquinerie contemporaine fondée à Abidjan en 2021. Production limitée à vingt pièces par mois.'
        : 'Contemporary leather goods house founded in Abidjan in 2021. Limited to twenty pieces a month.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+225-07-48-06-32-55',
      contactType: 'customer service',
      email: 'contact@mawuya.com',
    },
    sameAs: [
      'https://instagram.com/ma.wuya',
      'https://tiktok.com/@mawuyaa',
    ],
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
