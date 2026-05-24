import FadeInUp from '@/components/ui/FadeInUp';

export default function EntretienPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto">
        <FadeInUp>
          <h1 className="font-display mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            L'entretien du cuir.
          </h1>
          <p className="text-lg mb-16" style={{ color: 'var(--mw-stone)' }}>
            Un sac MAWUYA est conçu pour durer des décennies. Quelques gestes simples suffisent à préserver sa beauté.
          </p>
        </FadeInUp>

        {[
          {
            title: 'Au quotidien.',
            items: [
              'Éviter exposition prolongée au soleil et à l\'humidité',
              'Ranger dans sa pochette d\'origine',
              'Remplir légèrement pour garder la forme',
            ]
          },
          {
            title: 'Nettoyage.',
            items: [
              'Cuir lisse : chiffon doux et sec. Tâches : coton humide légèrement savonneux.',
              'Cuir grainé : brossage doux à la brosse en crin.',
              'Cuir python / autruche : professionnel uniquement.',
            ]
          },
          {
            title: 'Patine.',
            items: [
              'Le cuir vit. Avec le temps, il développe une patine qui lui appartient. C\'est ce qui transforme un sac neuf en un sac qui est à vous.',
            ]
          },
        ].map(({ title, items }, i) => (
          <FadeInUp key={title} delay={i * 100}>
            <div className="mb-12 pb-12" style={{ borderBottom: '1px solid var(--mw-line)' }}>
              <h2 className="font-display mb-4" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>{title}</h2>
              <ul className="space-y-2">
                {items.map((item, j) => (
                  <li key={j} className="text-base" style={{ color: 'var(--mw-stone)' }}>— {item}</li>
                ))}
              </ul>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
}
