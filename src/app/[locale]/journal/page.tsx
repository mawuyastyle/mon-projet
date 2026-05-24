import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import FadeInUp from '@/components/ui/FadeInUp';

export default function JournalPage() {
  const t = useTranslations('journal_section');

  const articles = [
    {
      slug: 'sac-ne-sur-une-plage',
      title: t('article1_title'),
      desc: t('article1_desc'),
    },
    {
      slug: 'vingt-sacs-par-mois',
      title: t('article2_title'),
      desc: t('article2_desc'),
    },
    {
      slug: 'details-dores',
      title: t('article3_title'),
      desc: t('article3_desc'),
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('eyebrow')}</p>
          <h1 className="font-display mb-16 italic" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
            {t('title')}
          </h1>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map(({ slug, title, desc }, i) => (
            <FadeInUp key={slug} delay={i * 100}>
              <Link href={`/journal/${slug}`} className="group block">
                <div className="w-full aspect-[4/3] mb-6" style={{ backgroundColor: 'var(--mw-line)' }} />
                <h2 className="font-display text-xl mb-2 group-hover:opacity-70 transition-opacity">{title}</h2>
                <p className="text-sm italic" style={{ color: 'var(--mw-stone)' }}>{desc}</p>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </div>
  );
}
