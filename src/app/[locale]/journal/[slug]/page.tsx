import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import FadeInUp from '@/components/ui/FadeInUp';

type Article = {
  slug: string;
  title: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  paragraphs: string[];
  paragraphsEn: string[];
};

const articles: Article[] = [
  {
    slug: 'sac-ne-sur-une-plage',
    title: "L'histoire d'un sac né sur une plage",
    titleEn: 'The story of a bag born on a beach',
    descFr: 'Comment le Sac en V est devenu iconique.',
    descEn: 'How the V Bag became iconic.',
    paragraphs: [
      "C'était un matin d'août, sur la plage de Grand-Bassam. Ama Diallo avait apporté un carnet et un stylo, sans intention particulière — juste l'envie de dessiner face à la lagune. Le V s'est imposé naturellement, presque dicté par la ligne d'horizon où le ciel rencontre l'eau. Une forme simple, évidente, que l'on ne questionne pas. Ce jour-là, le Sac en V n'était encore qu'un trait sur du papier.",
      "De retour à Abidjan, Ama a passé trois semaines à affiner la silhouette. La forme en V posait un défi technique : comment maintenir la structure sans rigidifier le cuir, comment laisser le sac vivre tout en gardant son caractère graphique ? La réponse est venue d'une tresse intérieure — invisible, cousue à la main — qui donne au fond du sac sa tenue sans en trahir la souplesse.",
      "Aujourd'hui, le Sac en V est la signature la plus reconnaissable de la maison. Il traverse les saisons sans en suivre aucune. Chaque couleur, chaque cuir sélectionné pour ce modèle vient rappeler cette matinée à Grand-Bassam, ce moment où une forme simple est devenue une promesse.",
    ],
    paragraphsEn: [
      "It was an August morning on the beach at Grand-Bassam. Ama Diallo had brought a notebook and a pen, with no particular intention — just the desire to draw facing the lagoon. The V imposed itself naturally, almost dictated by the horizon line where sky meets water. A simple, obvious form that one does not question. That day, the V Bag was still just a stroke on paper.",
      "Back in Abidjan, Ama spent three weeks refining the silhouette. The V shape posed a technical challenge: how to maintain structure without stiffening the leather, how to let the bag live while keeping its graphic character? The answer came from an inner braid — invisible, hand-sewn — that gives the bag's base its shape without betraying its softness.",
      "Today, the V Bag is the house's most recognizable signature. It crosses seasons without following any. Each colour, each leather selected for this model recalls that morning in Grand-Bassam, when a simple form became a promise.",
    ],
  },
  {
    slug: 'vingt-sacs-par-mois',
    title: 'Vingt sacs par mois. Pourquoi ?',
    titleEn: 'Twenty bags a month. Why?',
    descFr: "Notre choix d'une production limitée.",
    descEn: 'Our choice of limited production.',
    paragraphs: [
      "Vingt sacs. C'est le chiffre que nous avons choisi dès le premier jour, et auquel nous n'avons jamais dérogé. Pas parce que nous ne pourrions pas produire davantage — nous le pourrions. Mais parce que nous ne le voulons pas. Chaque sac MAWUYA passe entre les mains de plusieurs artisans, chacun responsable d'une étape précise. Cette chaîne humaine ne peut pas être accélérée sans être dégradée.",
      "La mode contemporaine nous a habitués à l'abondance : des nouvelles collections à chaque saison, des modèles qui se succèdent sans qu'on ait eu le temps de les connaître vraiment. Nous avons fait le choix inverse. Nos modèles restent au catalogue jusqu'à ce qu'ils aient dit tout ce qu'ils avaient à dire. Certains durent trois ans, d'autres davantage. La rareté n'est pas chez nous un argument marketing — c'est une conséquence naturelle de notre façon de travailler.",
      "Ce que vingt sacs par mois signifie concrètement : chaque cliente qui reçoit un MAWUYA tient entre ses mains quelque chose que peu de personnes possèdent. Et surtout, quelque chose qui a été fait avec une attention totale, sans la pression du volume. C'est une forme de respect — pour le travail, pour le cuir, pour celle qui portera le sac.",
    ],
    paragraphsEn: [
      "Twenty bags. That is the number we chose from day one, and from which we have never deviated. Not because we could not produce more — we could. But because we do not want to. Each MAWUYA bag passes through the hands of several craftspeople, each responsible for a precise step. This human chain cannot be accelerated without being degraded.",
      "Contemporary fashion has accustomed us to abundance: new collections every season, models succeeding one another before we have had time to truly know them. We made the opposite choice. Our models remain in the catalogue until they have said everything they had to say. Some last three years, others longer. Rarity is not a marketing argument for us — it is a natural consequence of how we work.",
      "What twenty bags a month means in concrete terms: every customer who receives a MAWUYA holds in her hands something that very few people own. And above all, something that was made with complete attention, without the pressure of volume. It is a form of respect — for the work, for the leather, for the person who will carry the bag.",
    ],
  },
  {
    slug: 'details-dores',
    title: 'Ce que cachent nos détails dorés',
    titleEn: 'What our golden details conceal',
    descFr: 'La poupée Akan, signature discrète de la maison.',
    descEn: "The Akan doll, the house's discreet signature.",
    paragraphs: [
      "Sur chaque sac MAWUYA, dissimulée dans la doublure ou gravée sur un rivet intérieur, se trouve une petite figurine : une poupée Akan stylisée, à peine plus grande qu'une pièce de monnaie. La poupée Akan — appelée Akua'ba dans la culture Ashanti — est un symbole de féminité, de fertilité et de beauté idéale. Ama l'a choisie non pas pour son sens traditionnel littéral, mais pour ce qu'elle représente : la transmission, le fait de porter quelque chose de plus grand que soi.",
      "L'intégration de ce détail a demandé presque un an de travail. Il fallait trouver un artisan capable de graver la silhouette sur du métal doré à une échelle aussi petite, sans perdre les proportions caractéristiques de la poupée. Après plusieurs essais infructueux, Ama a trouvé un bijoutier du quartier Adjamé, dont le père et le grand-père étaient eux aussi bijoutiers. C'est lui qui frappe chaque pièce à la main, une par une.",
      "La plupart des femmes qui portent un MAWUYA ne savent pas que ce détail existe. Celles qui le découvrent — souvent en passant la main à l'intérieur du sac — ont souvent la même réaction : un sourire, un instant de surprise, puis une forme d'attachement supplémentaire pour l'objet. Ce secret partagé est peut-être la chose dont Ama est la plus fière dans toute la collection.",
    ],
    paragraphsEn: [
      "On every MAWUYA bag, hidden in the lining or engraved on an interior rivet, sits a small figurine: a stylised Akan doll, barely larger than a coin. The Akan doll — known as Akua'ba in Ashanti culture — is a symbol of femininity, fertility and ideal beauty. Ama chose it not for its literal traditional meaning, but for what it represents: transmission, the act of carrying something greater than oneself.",
      "Integrating this detail took almost a year of work. It required finding an artisan capable of engraving the silhouette on gold-coloured metal at such a small scale, without losing the doll's characteristic proportions. After several unsuccessful attempts, Ama found a jeweller from the Adjamé district, whose father and grandfather were also jewellers. He strikes each piece by hand, one by one.",
      "Most women who carry a MAWUYA don't know this detail exists. Those who discover it — often by running their hand inside the bag — tend to have the same reaction: a smile, a moment of surprise, then a deeper attachment to the object. This shared secret is perhaps the thing Ama is most proud of in the entire collection.",
    ],
  },
];

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return {};
  const isFr = locale === 'fr';
  return {
    title: `${isFr ? article.title : article.titleEn} — MAWUYA`,
    description: isFr ? article.descFr : article.descEn,
    openGraph: {
      title: `${isFr ? article.title : article.titleEn} — MAWUYA`,
      description: isFr ? article.descFr : article.descEn,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug, locale } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const isFr = locale === 'fr';
  const title = isFr ? article.title : article.titleEn;
  const paragraphs = isFr ? article.paragraphs : article.paragraphsEn;

  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <FadeInUp>
          <Link
            href="/journal"
            className="text-caps text-[11px] link-underline mb-12 inline-block"
            style={{ color: 'var(--mw-stone)' }}
          >
            ← Journal
          </Link>

          <h1
            className="font-display mb-12 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {title}
          </h1>
        </FadeInUp>

        <FadeInUp delay={80}>
          <div
            className="w-full aspect-[16/9] mb-14"
            style={{ backgroundColor: 'var(--mw-line)' }}
          />
        </FadeInUp>

        <FadeInUp delay={160}>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: 'var(--mw-stone)' }}
              >
                {p}
              </p>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={240}>
          <div className="mt-16 pt-10" style={{ borderTop: '1px solid var(--mw-line)' }}>
            <Link
              href="/journal"
              className="text-caps text-[11px] link-underline"
              style={{ color: 'var(--mw-ink)' }}
            >
              ← Journal
            </Link>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
