'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { Product } from '@/lib/products';
import FadeInUp from '@/components/ui/FadeInUp';

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const t = useTranslations('collection');
  const [hovered, setHovered] = useState(false);
  const minPrice = Math.min(...product.variants.map(v => v.price));
  const hasImage = product.images.length > 0;

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
          {hasImage && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500"
              style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          )}
          {/* Overlay hover */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-end p-4 transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0, background: 'linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 60%)' }}
          >
            <p className="text-caps text-[11px] text-white">
              {t('from')} {minPrice.toLocaleString('fr-FR')} {t('currency')}
            </p>
          </div>
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
