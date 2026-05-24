'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

type Filter = 'all' | 'signature' | 'nouvelle-collection' | 'cuvee' | 'petite-maroquinerie' | 'edition-limitee';

export default function CollectionPage() {
  const t = useTranslations('collection');
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('filter_all') },
    { key: 'signature', label: t('filter_signature') },
    { key: 'nouvelle-collection', label: t('filter_nouvelle') },
    { key: 'cuvee', label: t('filter_cuvee') },
    { key: 'petite-maroquinerie', label: t('filter_petite') },
    { key: 'edition-limitee', label: t('filter_limitee') },
  ];

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-display mb-12" style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}>
          {t('title')}
        </h1>

        {/* Filtres */}
        <div
          className="flex flex-wrap gap-4 mb-16 pb-8"
          style={{ borderBottom: '1px solid var(--mw-line)' }}
        >
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="text-caps text-[11px] pb-1 transition-colors"
              style={{
                color: activeFilter === key ? 'var(--mw-ink)' : 'var(--mw-stone)',
                borderBottom: activeFilter === key ? '1px solid var(--mw-ink)' : '1px solid transparent',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
