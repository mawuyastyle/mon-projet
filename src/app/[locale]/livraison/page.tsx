import FadeInUp from '@/components/ui/FadeInUp';

export default function LivraisonPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto">
        <FadeInUp>
          <h1 className="font-display mb-16" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            Livraison & retours.
          </h1>
        </FadeInUp>

        {[
          {
            title: "Côte d'Ivoire.",
            body: 'À Abidjan : livraison le jour même si le sac est en stock.\nHors Abidjan : 1 à 3 jours ouvrés.\nFrais offerts dès 75 000 FCFA d\'achat.'
          },
          {
            title: 'International.',
            body: 'Diaspora et international : 5 à 7 jours ouvrés via DHL Express.\nFrais calculés au paiement selon destination.\nToutes les pièces sont envoyées dans un emballage MAWUYA signé.'
          },
          {
            title: 'Sur mesure.',
            body: 'Les pièces sur mesure ou éditions limitées : 10 à 21 jours ouvrés. Suivi de chaque étape.'
          },
          {
            title: 'Retours.',
            body: 'Pièces standards retournables sous 14 jours suivant la réception, intactes et dans leur emballage. Les pièces sur mesure ne sont pas reprises.'
          },
        ].map(({ title, body }, i) => (
          <FadeInUp key={title} delay={i * 100}>
            <div className="mb-12 pb-12" style={{ borderBottom: '1px solid var(--mw-line)' }}>
              <h2 className="font-display mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>{title}</h2>
              {body.split('\n').map((line, j) => (
                <p key={j} className="text-base leading-relaxed" style={{ color: 'var(--mw-stone)' }}>{line}</p>
              ))}
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
}
