import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { products, getProductBySlug, whatsappLink } from '@/lib/products';
import { routing } from '@/i18n/routing';
import Accordion from '@/components/Accordion';
import VariantSelector from '@/components/VariantSelector';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    products.map(p => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const isFr = locale === 'fr';
  return {
    title: isFr
      ? `Sac ${product.name} — MAWUYA`
      : `${product.name} bag — MAWUYA`,
    description: product.description.slice(0, 160),
  };
}

function categoryLabel(category: string, locale: string): string {
  const map: Record<string, { fr: string; en: string }> = {
    signature: { fr: 'SIGNATURE', en: 'SIGNATURE' },
    'nouvelle-collection': { fr: 'NOUVELLE COLLECTION', en: 'NEW COLLECTION' },
    cuvee: { fr: 'CUVÉE', en: 'CUVÉE' },
    'edition-limitee': { fr: 'ÉDITION LIMITÉE', en: 'LIMITED EDITION' },
    'petite-maroquinerie': { fr: 'PETITE MAROQUINERIE', en: 'SMALL LEATHER GOODS' },
    collection: { fr: 'COLLECTION', en: 'COLLECTION' },
  };
  return map[category]?.[locale as 'fr' | 'en'] ?? 'COLLECTION';
}

export default async function ProductPage({ params }: Props) {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations('product');
  const minPrice = Math.min(...product.variants.map(v => v.price));

  return (
    <div className="pt-28 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">

          {/* Gauche — images */}
          <div className="w-full md:w-1/2">
            <div
              className="w-full aspect-square mb-4"
              style={{ backgroundColor: 'var(--mw-line)' }}
            />
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((_, i) => (
                  <div
                    key={i}
                    className="w-20 aspect-square"
                    style={{ backgroundColor: 'var(--mw-line)' }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Droite — infos */}
          <div className="w-full md:w-1/2">
            <p className="text-caps text-[11px] mb-4" style={{ color: 'var(--mw-gold)' }}>
              {categoryLabel(product.category, locale)}
            </p>
            <h1 className="font-display mb-2" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
              {product.name}
            </h1>
            <p className="text-base italic mb-6" style={{ color: 'var(--mw-stone)' }}>
              {product.tagline}
            </p>
            <p className="text-2xl font-semibold mb-8">
              {t('from')} {minPrice.toLocaleString('fr-FR')} {locale === 'fr' ? 'FCFA' : 'FCFA'}
            </p>

            <VariantSelector product={product} />

            {/* CTA */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                className="w-full py-4 text-caps text-[12px] text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'var(--mw-ink)' }}
              >
                {t('add_to_cart')}
              </button>
              <a
                href={whatsappLink(product.name, minPrice)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-caps text-[12px] text-center border transition-colors hover:bg-mw-ink hover:text-white"
                style={{ borderColor: 'var(--mw-ink)', color: 'var(--mw-ink)' }}
              >
                {t('whatsapp')}
              </a>
            </div>

            <p className="text-sm italic mb-8" style={{ color: 'var(--mw-stone)' }}>
              {t('handmade')}
            </p>

            {/* Accordéons */}
            <div>
              <Accordion title={t('description')}>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title={t('details')}>
                <ul className="list-disc list-inside space-y-1">
                  {product.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </Accordion>
              <Accordion title={t('livraison')}>
                <p>
                  Abidjan : livraison le jour même si la pièce est en stock.<br />
                  International : 5 à 7 jours ouvrés via DHL Express.<br />
                  Pièces sur mesure : 10 à 21 jours ouvrés.
                </p>
              </Accordion>
              <Accordion title={t('entretien')}>
                <p>
                  Cuir lisse : chiffon doux et sec.<br />
                  Éviter l'humidité prolongée et le soleil direct.<br />
                  Ranger dans sa pochette d'origine.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
