import { getTranslations } from 'next-intl/server';
import FadeInUp from '@/components/ui/FadeInUp';

export default async function AtelierPage() {
  const t = await getTranslations('atelier_page');

  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <h1 className="font-display mb-8" style={{ fontSize: 'clamp(48px, 7vw, 104px)' }}>
            {t('title')}
          </h1>
        </FadeInUp>

        <FadeInUp delay={100}>
          <p className="text-lg leading-relaxed mb-16 max-w-2xl" style={{ color: 'var(--mw-stone)' }}>
            À Abidjan, dans le quartier des Deux Plateaux, se trouve le cœur de MAWUYA. Notre atelier est petit. Volontairement. Vingt pièces y sortent chaque mois. Pas un sac n'en part sans avoir été examiné, touché, validé par Ama.
          </p>
        </FadeInUp>

        <div className="w-full aspect-[16/9] mb-24" style={{ backgroundColor: 'var(--mw-line)' }} />

        <FadeInUp>
          <h2 className="font-display mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            Le geste avant l'échelle.
          </h2>
          <p className="text-base leading-relaxed mb-4 max-w-2xl" style={{ color: 'var(--mw-stone)' }}>
            La maroquinerie est un art lent. Chaque sac MAWUYA passe par une dizaine d'étapes — choix du cuir, traçage, découpe, assemblage, couture, finition, contrôle. Nous travaillons avec un cercle restreint d'artisans partenaires, formés au geste précis que demande chaque modèle.
          </p>
          <p className="text-base leading-relaxed mb-24" style={{ color: 'var(--mw-stone)' }}>
            Nous refusons la production de masse. Nous refusons la sortie de modèles à chaque saison. Notre rythme est celui d'une maison de couture, pas d'une marque de mode.
          </p>
        </FadeInUp>

        <FadeInUp delay={100}>
          <h2 className="font-display mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            Les matières.
          </h2>
          <p className="text-base leading-relaxed mb-24" style={{ color: 'var(--mw-stone)', maxWidth: '680px' }}>
            Nos cuirs sont sélectionnés un par un. Cuir lisse, cuir grainé, simili premium, python (sur certaines éditions limitées), autruche (collection Nafi). Le wax intervient sur des pièces plus expressives, choisies pour leur capacité à dialoguer avec le cuir sans le contredire.
          </p>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="py-16 px-10 md:px-16" style={{ backgroundColor: 'var(--mw-line)' }}>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
              Visite privée.
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--mw-stone)' }}>
              L'atelier ouvre ses portes sur rendez-vous, pour les clientes qui souhaitent commander une pièce sur mesure, voir les coulisses, ou simplement comprendre ce qui distingue MAWUYA.
            </p>
            <a
              href="https://wa.me/2250748063255?text=Bonjour%20MAWUYA%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20visiter%20l%27atelier."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 text-caps text-[12px] text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--mw-ink)' }}
            >
              {t('cta')}
            </a>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
