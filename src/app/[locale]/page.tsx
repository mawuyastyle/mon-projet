import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { products } from '@/lib/products';
import FadeInUp from '@/components/ui/FadeInUp';
import ProductCard from '@/components/ProductCard';
import NewsletterForm from '@/components/NewsletterForm';

function HeroSection() {
  const t = useTranslations();
  return (
    <section className="min-h-screen flex items-center pt-16" style={{ backgroundColor: 'var(--mw-white)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">
          {/* Visuel sac — placeholder */}
          <div className="w-full md:w-[60%] flex items-center justify-center">
            <div
              className="w-full max-w-[520px] aspect-square flex items-end justify-center relative"
              style={{ backgroundColor: 'var(--mw-line)' }}
            >
              <span
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-caps text-[11px]"
                style={{ color: 'var(--mw-stone)' }}
              >
                3D CAROUSEL · À VENIR
              </span>
            </div>
          </div>

          {/* Texte */}
          <div className="w-full md:w-[40%] md:pl-16">
            <FadeInUp>
              <p className="text-caps mb-6" style={{ color: 'var(--mw-stone)' }}>
                {t('hero.subtitle')}
              </p>
              <h1
                className="font-display leading-[1.05] mb-8"
                style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
              >
                {t('hero.title1')}
                <br />
                {t('hero.title2')}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/collection"
                  className="inline-block px-8 py-3.5 text-caps text-[12px] text-white transition-colors duration-200"
                  style={{ backgroundColor: 'var(--mw-ink)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--mw-stone)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--mw-ink)')}
                >
                  {t('hero.cta_primary')}
                </Link>
                <Link
                  href="/maison"
                  className="inline-block px-8 py-3.5 text-caps text-[12px] link-underline"
                  style={{ color: 'var(--mw-ink)' }}
                >
                  {t('hero.cta_secondary')}
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignaturesSection() {
  const t = useTranslations('signatures');
  const signatures = [
    { slug: 'pyramid', tagline: t('pyramid_tagline'), price: 98000 },
    { slug: 'en-v', tagline: t('v_tagline'), price: 88000, name: 'En V' },
    { slug: 'nafi', tagline: t('nafi_tagline'), price: 145000, badge: t('nafi_badge') },
  ];
  const names = ['Pyramid', 'En V', 'Nafi'];

  return (
    <section className="py-32 px-6 md:px-10" style={{ borderTop: '1px solid var(--mw-line)' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('eyebrow')}</p>
          <h2 className="font-display mb-16" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
            {t('title')}
          </h2>
        </FadeInUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {signatures.map((s, i) => (
            <FadeInUp key={s.slug} delay={i * 100}>
              <div className="group">
                <div
                  className="w-full aspect-square mb-6 flex items-end justify-center relative overflow-hidden"
                  style={{ backgroundColor: 'var(--mw-line)' }}
                >
                  {s.badge && (
                    <span
                      className="absolute top-4 left-4 text-caps text-[11px] px-3 py-1"
                      style={{ backgroundColor: 'var(--mw-ink)', color: 'white' }}
                    >
                      {s.badge}
                    </span>
                  )}
                </div>
                <p className="font-display text-2xl mb-1">{names[i]}</p>
                <p className="text-sm mb-3" style={{ color: 'var(--mw-stone)', fontStyle: 'italic' }}>
                  {s.tagline}
                </p>
                <p className="text-caps text-[12px] mb-4" style={{ color: 'var(--mw-stone)' }}>
                  {t('from')} {s.price.toLocaleString('fr-FR')} {t('currency')}
                </p>
                <Link
                  href={`/collection/${s.slug}`}
                  className="link-underline text-caps text-[12px]"
                  style={{ color: 'var(--mw-ink)' }}
                >
                  {t('cta')}
                </Link>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifesteSection() {
  const t = useTranslations('manifeste');
  return (
    <section className="py-40 px-6 md:px-10 text-center" style={{ backgroundColor: 'var(--mw-white)', borderTop: '1px solid var(--mw-line)' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <h2
            className="font-display leading-tight mb-12"
            style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
          >
            {t('line1')}
            <br />
            {t('line2')}
          </h2>
          <p
            className="text-lg mx-auto leading-relaxed"
            style={{ color: 'var(--mw-stone)', maxWidth: '580px' }}
          >
            {t('body')}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

function AtelierSection() {
  const t = useTranslations('atelier_section');
  return (
    <section className="py-32" style={{ borderTop: '1px solid var(--mw-line)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center">
          <div
            className="w-full md:w-[60%] aspect-[4/3]"
            style={{ backgroundColor: 'var(--mw-line)' }}
          />
          <FadeInUp className="w-full md:w-[40%] md:pl-16">
            <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('eyebrow')}</p>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
              {t('title')}
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--mw-stone)' }}>
              {t('body')}
            </p>
            <Link href="/atelier" className="link-underline text-caps text-[12px]" style={{ color: 'var(--mw-ink)' }}>
              {t('cta')}
            </Link>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function NouvelleCollectionSection() {
  const t = useTranslations('nouvelle_collection');
  const newProducts = products.filter(p =>
    ['nafi', 'pyramid', 'cuvee', 'en-v', 'speciale', 'wax'].includes(p.slug)
  );

  return (
    <section className="py-32 px-6 md:px-10" style={{ borderTop: '1px solid var(--mw-line)' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <p className="text-caps mb-3" style={{ color: 'var(--mw-stone)' }}>{t('eyebrow')}</p>
          <h2 className="font-display mb-16" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontStyle: 'italic' }}>
            {t('title')}
          </h2>
        </FadeInUp>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {newProducts.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/collection" className="link-underline text-caps text-[12px]" style={{ color: 'var(--mw-ink)' }}>
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}

function JournalSection() {
  const t = useTranslations('journal_section');
  const articles = [
    { key: 'article1', href: '/journal/sac-ne-sur-une-plage' },
    { key: 'article2', href: '/journal/vingt-sacs-par-mois' },
    { key: 'article3', href: '/journal/details-dores' },
  ] as const;

  return (
    <section className="py-32 px-6 md:px-10" style={{ borderTop: '1px solid var(--mw-line)' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('eyebrow')}</p>
          <h2 className="font-display mb-16" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontStyle: 'italic' }}>
            {t('title')}
          </h2>
        </FadeInUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map(({ key, href }, i) => (
            <FadeInUp key={key} delay={i * 100}>
              <Link href={href} className="group block">
                <div
                  className="w-full aspect-[4/3] mb-6"
                  style={{ backgroundColor: 'var(--mw-line)' }}
                />
                <h3 className="font-display text-xl mb-2 group-hover:opacity-70 transition-opacity">
                  {t(`${key}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-sm" style={{ color: 'var(--mw-stone)', fontStyle: 'italic' }}>
                  {t(`${key}_desc` as Parameters<typeof t>[0])}
                </p>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SignaturesSection />
      <ManifesteSection />
      <AtelierSection />
      <NouvelleCollectionSection />
      <JournalSection />
      <NewsletterSection />
    </>
  );
}

function NewsletterSection() {
  const t = useTranslations('newsletter');
  return (
    <section className="py-32 px-6 md:px-10 text-center" style={{ borderTop: '1px solid var(--mw-line)', backgroundColor: 'var(--mw-white)' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <h2 className="font-display mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            {t('title')}
          </h2>
          <p className="text-base mb-10 mx-auto" style={{ color: 'var(--mw-stone)', maxWidth: '480px' }}>
            {t('body')}
          </p>
          <NewsletterForm />
        </FadeInUp>
      </div>
    </section>
  );
}
