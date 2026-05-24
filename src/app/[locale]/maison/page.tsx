import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import FadeInUp from '@/components/ui/FadeInUp';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Notre histoire — MAWUYA',
    description: "Comment MAWUYA est née d'un geste, en 2021, dans un appartement d'Abidjan. L'histoire d'une fondatrice, d'un sac et d'une maison.",
  };
}

export default async function MaisonPage() {
  const t = await getTranslations('maison');

  return (
    <div className="pt-32 pb-24" style={{ minHeight: '100vh' }}>
      {/* Bloc 1 — Ouverture */}
      <section className="px-6 md:px-10 mb-32">
        <div className="max-w-screen-xl mx-auto">
          <FadeInUp>
            <h1 className="font-display leading-[1.05] mb-10" style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}>
              {t('title1')}<br />{t('title2')}
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--mw-stone)', fontSize: '19px' }}
            >
              {t('intro')}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Bloc 2 — Le déclic */}
      <section className="px-6 md:px-10 mb-32" style={{ borderTop: '1px solid var(--mw-line)' }}>
        <div className="max-w-screen-xl mx-auto pt-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3]" style={{ backgroundColor: 'var(--mw-line)' }} />
            <FadeInUp className="w-full md:w-1/2">
              <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('declic_eyebrow')}</p>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
                {t('declic_title')}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--mw-stone)' }}>
                Pendant le confinement, Ama Diallo, formée à la mode et passionnée d'art depuis l'enfance grâce à sa mère, transforme une pochette en pièce ornée. Elle la montre. On lui en demande une. Puis deux. Puis dix.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--mw-stone)' }}>
                À ses débuts, MAWUYA c'est des pochettes vendues entre 15 000 et 30 000 FCFA, et des colliers en cauri. Le bouche-à-oreille fait le reste. Une marque est née sans plan marketing, sans levée de fonds, sans précédent dans la famille. Juste un œil, et beaucoup de patience.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Bloc 3 — La fondatrice */}
      <section className="px-6 md:px-10 mb-32 py-24" style={{ backgroundColor: 'var(--mw-line)' }}>
        <div className="max-w-screen-xl mx-auto">
          <FadeInUp>
            <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('fondatrice_eyebrow')}</p>
            <h2 className="font-display mb-8" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              {t('fondatrice_title')}
            </h2>
            <blockquote
              className="text-lg italic leading-relaxed mb-8 max-w-2xl"
              style={{ color: 'var(--mw-ink)', fontSize: '20px' }}
            >
              "Je n'ai jamais étudié la maroquinerie. J'ai étudié le regard. Je viens d'une mère amoureuse d'art, des galeries d'Abidjan, des heures passées sur les sites de mode pendant mes études. MAWUYA, c'est cette éducation visuelle transformée en objets."
            </blockquote>
            <p className="text-base leading-relaxed" style={{ color: 'var(--mw-stone)' }}>
              Ama dessine seule chaque modèle. Elle choisit chaque cuir. Elle valide chaque pièce avant qu'elle ne quitte l'atelier. MAWUYA est sa maison, au sens strict.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Bloc 4 — Les modèles iconiques */}
      <section className="px-6 md:px-10 mb-32">
        <div className="max-w-screen-xl mx-auto">
          <FadeInUp>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
              Le Sac en V est né sur une plage.
            </h2>
            <p className="text-base leading-relaxed mb-4 max-w-2xl" style={{ color: 'var(--mw-stone)' }}>
              Un après-midi, assise face à la lagune, musique dans les oreilles, Ama dessine une forme en V. Quelques semaines plus tard, le Sac en V devient l'un des deux premiers modèles iconiques de la maison, avec le Sac Pyramid — pièce sculpturale qui définira longtemps la signature visuelle de MAWUYA.
            </p>
            <p className="text-base italic" style={{ color: 'var(--mw-stone)' }}>
              Deux modèles. Deux gestes. Le début d'un vocabulaire.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Bloc 5 — Le nom */}
      <section className="px-6 md:px-10 mb-32 py-24" style={{ borderTop: '1px solid var(--mw-line)', borderBottom: '1px solid var(--mw-line)' }}>
        <div className="max-w-screen-xl mx-auto">
          <FadeInUp>
            <p className="text-caps mb-4" style={{ color: 'var(--mw-stone)' }}>{t('nom_eyebrow')}</p>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}>
              {t('nom_title')}
            </h2>
            <p className="text-base leading-relaxed max-w-xl" style={{ color: 'var(--mw-stone)' }}>
              Un nom hérité d'Afrique de l'Ouest, porteur de mémoire. Celui d'une figure royale qui s'est battue pour les siens. Nous l'avons choisi parce qu'il porte ce que nous voulons fabriquer : des objets qui ont une présence, sans avoir besoin d'élever la voix.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Bloc 6 — Aujourd'hui */}
      <section className="px-6 md:px-10 mb-24">
        <div className="max-w-screen-xl mx-auto">
          <FadeInUp>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
              {t('aujourd_title')}
            </h2>
            <p className="text-base leading-relaxed mb-12 max-w-xl" style={{ color: 'var(--mw-stone)' }}>
              MAWUYA est officiellement constituée depuis février 2025. Notre atelier des Deux Plateaux produit une vingtaine de sacs par mois. Pas un de plus. Chaque pièce est dessinée à Abidjan, façonnée à Abidjan, et part vivre partout dans le monde.
            </p>
            <blockquote
              className="font-display italic mb-12"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--mw-stone)' }}
            >
              "Une maison ne se construit pas en saisons. Elle se construit en décennies."
              <br />
              <span className="text-base not-italic">— Ama Diallo</span>
            </blockquote>
            <Link href="/collection" className="link-underline font-display text-2xl" style={{ color: 'var(--mw-ink)' }}>
              {t('cta')}
            </Link>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
