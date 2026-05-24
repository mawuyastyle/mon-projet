import type { Metadata } from 'next';
import CollectionClient from './CollectionClient';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';
  return {
    title: isFr ? 'Collection — MAWUYA' : 'Collection — MAWUYA',
    description: isFr
      ? 'Pyramid, En V, Nafi et plus. Sacs faits à Abidjan, production limitée à vingt pièces par mois.'
      : 'Pyramid, V, Nafi and more. Bags made in Abidjan, limited to twenty pieces a month.',
    openGraph: {
      title: isFr ? 'Collection — MAWUYA' : 'Collection — MAWUYA',
      description: isFr
        ? 'Pyramid, En V, Nafi et plus. Sacs faits à Abidjan, production limitée à vingt pièces par mois.'
        : 'Pyramid, V, Nafi and more. Bags made in Abidjan, limited to twenty pieces a month.',
    },
  };
}

export default function CollectionPage() {
  return <CollectionClient />;
}
