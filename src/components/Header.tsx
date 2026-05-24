'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleLocale = () => {
    const next = locale === 'fr' ? 'en' : 'fr';
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: '/collection', label: t('nav.collection') },
    { href: '/maison', label: t('nav.maison') },
    { href: '/atelier', label: t('nav.atelier') },
    { href: '/journal', label: t('nav.journal') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250,250,247,0.92)' : 'rgba(250,250,247,1)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: `1px solid var(--mw-line)`
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="font-display text-[22px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--mw-ink)' }}
            >
              MAWUYA
            </span>
            <span
              className="italic text-[10px] mt-0.5 hidden sm:block"
              style={{ color: 'var(--mw-stone)', letterSpacing: '0.02em' }}
            >
              {t('tagline')}
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="link-underline text-caps text-[13px]"
                style={{ color: 'var(--mw-ink)' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Langue */}
            <button
              onClick={toggleLocale}
              className="text-caps text-[12px] hidden sm:block"
              style={{ color: 'var(--mw-stone)' }}
              aria-label={`Passer en ${locale === 'fr' ? 'anglais' : 'français'}`}
            >
              {locale === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* Recherche */}
            <button
              className="p-1"
              style={{ color: 'var(--mw-ink)' }}
              aria-label="Rechercher"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Panier */}
            <button
              className="p-1 relative"
              style={{ color: 'var(--mw-ink)' }}
              aria-label={`Panier, ${cartCount} article${cartCount !== 1 ? 's' : ''}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] flex items-center justify-center text-white" style={{ backgroundColor: 'var(--mw-ink)' }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger mobile */}
            <button
              className="md:hidden p-1 flex flex-col gap-1.5"
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  backgroundColor: 'var(--mw-ink)',
                  transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none'
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  backgroundColor: 'var(--mw-ink)',
                  opacity: menuOpen ? 0 : 1
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  backgroundColor: 'var(--mw-ink)',
                  transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none'
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-24 px-8"
          style={{ backgroundColor: 'var(--mw-white)' }}
        >
          <nav className="flex flex-col gap-8" aria-label="Navigation mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-display text-4xl"
                style={{ color: 'var(--mw-ink)' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-12">
            <button
              onClick={() => { toggleLocale(); setMenuOpen(false); }}
              className="text-caps"
              style={{ color: 'var(--mw-stone)' }}
            >
              {locale === 'fr' ? 'English' : 'Français'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
