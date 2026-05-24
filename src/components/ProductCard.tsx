'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { Product } from '@/lib/products';
import FadeInUp from './ui/FadeInUp';

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const t = useTranslations('collection');
  const [hovered, setHovered] = useState(false);
  const minPrice = Math.min(...product.variants.map(v => v.price));

  return (
    <FadeInUp delay={index * 80}>
      <Link
        href={`/collection/${product.slug}`}
        className="block group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="w-full aspect-square mb-4 overflow-hidden relative"
          style={{ backgroundColor: 'var(--mw-line)' }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-end p-4 transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0, backgroundColor: 'rgba(250,250,247,0.1)' }}
          >
            <p className="font-display text-lg mb-1" style={{ color: 'var(--mw-ink)' }}>
              {product.name}
            </p>
            <p className="text-caps text-[11px]" style={{ color: 'var(--mw-stone)' }}>
              {t('from')} {minPrice.toLocaleString('fr-FR')} {t('currency')}
            </p>
          </div>
          <div
            className="w-full h-full transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.02)' : 'scale(1)' }}
          />
        </div>
        <p className="font-display text-lg mb-0.5">{product.name}</p>
        <p className="text-sm italic mb-1" style={{ color: 'var(--mw-stone)' }}>{product.tagline}</p>
        <p className="text-caps text-[11px]" style={{ color: 'var(--mw-stone)' }}>
          {t('from')} {minPrice.toLocaleString('fr-FR')} {t('currency')}
        </p>
      </Link>
    </FadeInUp>
  );
}
