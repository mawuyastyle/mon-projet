import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer style={{ backgroundColor: 'var(--mw-white)', borderTop: '1px solid var(--mw-line)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <p className="font-display text-xl mb-3" style={{ letterSpacing: '0.2em' }}>MAWUYA</p>
            <p className="text-sm italic mb-4" style={{ color: 'var(--mw-stone)' }}>{t('footer.tagline')}</p>
            <p className="text-sm" style={{ color: 'var(--mw-stone)' }}>{t('footer.location')}</p>
            <p className="text-sm mt-1" style={{ color: 'var(--mw-stone)' }}>contact@mawuya.com</p>
            <p className="text-sm" style={{ color: 'var(--mw-stone)' }}>+225 07 48 06 32 55</p>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('footer.col2_title')}</p>
            <nav className="flex flex-col gap-2" aria-label="Navigation maison">
              <Link href="/maison" className="link-underline text-sm">{t('nav.maison')}</Link>
              <Link href="/atelier" className="link-underline text-sm">{t('nav.atelier')}</Link>
              <Link href="/journal" className="link-underline text-sm">{t('nav.journal')}</Link>
              <Link href="/contact" className="link-underline text-sm">{t('nav.contact')}</Link>
            </nav>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('footer.col3_title')}</p>
            <nav className="flex flex-col gap-2" aria-label="Navigation service">
              <Link href="/livraison" className="link-underline text-sm">{t('footer.livraison')}</Link>
              <Link href="/entretien" className="link-underline text-sm">{t('footer.entretien')}</Link>
              <Link href="/cgv" className="link-underline text-sm">{t('footer.cgv')}</Link>
              <Link href="/privacy" className="link-underline text-sm">{t('footer.privacy')}</Link>
            </nav>
          </div>
        </div>

        {/* Bas */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--mw-line)' }}
        >
          <p className="text-caps text-[11px]" style={{ color: 'var(--mw-stone)' }}>
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/ma.wuya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caps text-[11px] link-underline"
              style={{ color: 'var(--mw-stone)' }}
              aria-label="Instagram MAWUYA"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@mawuyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caps text-[11px] link-underline"
              style={{ color: 'var(--mw-stone)' }}
              aria-label="TikTok MAWUYA"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
