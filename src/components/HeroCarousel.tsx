'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SLIDES = [
  { src: '/products/pyramid-1.jpg', label: 'Pyramid', slug: 'pyramid' },
  { src: '/products/nafi-1.jpg', label: 'Nafi', slug: 'nafi' },
  { src: '/products/wax-1.jpg', label: 'Wax', slug: 'wax' },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(i => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[520px] select-none">
      {/* Image principale */}
      <div className="relative w-full aspect-square overflow-hidden" style={{ backgroundColor: 'var(--mw-line)' }}>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.slug}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: active === i ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
        ))}
      </div>

      {/* Sélecteur de sac */}
      <div className="flex gap-6 mt-4 justify-center">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.slug}
            onClick={() => setActive(i)}
            className="text-caps text-[11px] pb-1 transition-colors"
            style={{
              color: active === i ? 'var(--mw-ink)' : 'var(--mw-stone)',
              borderBottom: active === i ? '1px solid var(--mw-ink)' : '1px solid transparent',
            }}
          >
            {slide.label}
          </button>
        ))}
      </div>

      {/* Indicateurs */}
      <div className="flex gap-2 justify-center mt-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="transition-all duration-300"
            style={{
              width: active === i ? '20px' : '6px',
              height: '2px',
              backgroundColor: active === i ? 'var(--mw-ink)' : 'var(--mw-line)',
            }}
            aria-label={`Voir ${SLIDES[i].label}`}
          />
        ))}
      </div>
    </div>
  );
}
