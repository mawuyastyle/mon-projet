'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  const hasRealImages = images.some(src => !src.includes('placeholder'));

  if (!hasRealImages || images.length === 0) {
    return (
      <div className="w-full aspect-square" style={{ backgroundColor: 'var(--mw-line)' }} />
    );
  }

  return (
    <div>
      {/* Image principale */}
      <div className="relative w-full aspect-square mb-4 overflow-hidden" style={{ backgroundColor: 'var(--mw-line)' }}>
        <Image
          src={images[active]}
          alt={`${name} — vue ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={active === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Vignettes */}
      {images.length > 1 && (
        <div className="flex gap-3 flex-wrap">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative w-20 aspect-square overflow-hidden transition-opacity"
              style={{
                opacity: active === i ? 1 : 0.5,
                outline: active === i ? '1px solid var(--mw-ink)' : 'none',
                outlineOffset: '2px',
              }}
              aria-label={`Vue ${i + 1} du ${name}`}
            >
              <Image
                src={src}
                alt={`${name} vue ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
