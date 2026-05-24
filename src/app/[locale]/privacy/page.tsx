import type { Metadata } from 'next';
import FadeInUp from '@/components/ui/FadeInUp';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — MAWUYA',
  description: "Politique de confidentialité de la maison MAWUYA. Collecte, traitement et protection de vos données personnelles.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto">
        <FadeInUp>
          <h1 className="font-display mb-10" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
            Politique de confidentialité.
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--mw-stone)' }}>
            La politique de confidentialité sera disponible prochainement. Pour toute question relative à vos données, contactez-nous à contact@mawuya.com.
          </p>
        </FadeInUp>
      </div>
    </div>
  );
}
