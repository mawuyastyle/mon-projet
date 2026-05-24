import type { Metadata } from 'next';
import FadeInUp from '@/components/ui/FadeInUp';

export const metadata: Metadata = {
  title: 'Conditions générales de vente — MAWUYA',
  description: 'Conditions générales de vente de la maison MAWUYA. Commandes, livraison, retours et remboursements.',
};

export default function CGVPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto">
        <FadeInUp>
          <h1 className="font-display mb-10" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
            Conditions générales de vente.
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--mw-stone)' }}>
            Les conditions générales de vente seront disponibles prochainement. Pour toute question, contactez-nous à contact@mawuya.com.
          </p>
        </FadeInUp>
      </div>
    </div>
  );
}
