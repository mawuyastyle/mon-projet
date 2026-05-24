'use client';

import { useState } from 'react';
import type { Product } from '@/lib/products';

export default function VariantSelector({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);

  if (product.variants.length <= 1) return null;

  return (
    <div className="mb-6">
      <p className="text-caps text-[11px] mb-3" style={{ color: 'var(--mw-stone)' }}>
        MODÈLE — {product.variants[selected].name}
      </p>
      <div className="flex flex-wrap gap-2">
        {product.variants.map((v, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="px-4 py-2 text-sm border transition-colors"
            style={{
              borderColor: selected === i ? 'var(--mw-ink)' : 'var(--mw-line)',
              color: selected === i ? 'var(--mw-ink)' : 'var(--mw-stone)',
              backgroundColor: selected === i ? 'transparent' : 'transparent',
            }}
          >
            {v.name} — {v.price.toLocaleString('fr-FR')} FCFA
          </button>
        ))}
      </div>
    </div>
  );
}
