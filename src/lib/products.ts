export type ProductVariant = {
  name: string;
  price: number;
  color: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  variants: ProductVariant[];
  hero?: boolean;
  category: 'signature' | 'nouvelle-collection' | 'cuvee' | 'edition-limitee' | 'petite-maroquinerie' | 'collection';
  images: string[];
};

export const products: Product[] = [
  {
    slug: 'pyramid',
    name: 'Pyramid',
    tagline: "Une présence avant les mots.",
    description: "Le sac Pyramid est l'une des pièces les plus identitaires de MAWUYA. Sa silhouette triangulaire sculpturale en fait un sac immédiatement reconnaissable — pensé pour les femmes qui aiment les accessoires forts, élégants et lisibles.",
    details: [
      'Forme pyramidale structurée',
      'Cuir lisse ou grainé selon le modèle',
      'Poupée Akan dorée ou chaîne dorée signature',
      'Doublure tissée intérieure',
      'Format moyen, port main ou épaule'
    ],
    variants: [
      { name: 'Pyramid', price: 98000, color: 'Noir' },
      { name: 'Grand Pyramid', price: 155000, color: 'Noir' },
      { name: 'Pyramid édition limitée', price: 165000, color: 'Multiple' },
      { name: 'Pyramid python', price: 135000, color: 'Jaune' },
      { name: 'Pyramid burgundy', price: 78000, color: 'Burgundy' }
    ],
    hero: true,
    category: 'signature',
    images: ['/products/pyramid-1.jpg', '/products/pyramid-2.jpg', '/products/pyramid-3.jpg']
  },
  {
    slug: 'en-v',
    name: 'En V',
    tagline: "L'élégance dans sa forme la plus graphique.",
    description: "Le sac En V incarne l'élégance graphique de la maison. Sa construction en V donne une impression de mouvement, de tension contenue, d'élégance précise. Dessiné par Ama Diallo sur une plage d'Abidjan, il est devenu, avec le Pyramid, l'un des deux modèles qui ont défini MAWUYA.",
    details: [
      'Construction en V architecturale',
      'Cuir structuré',
      'Plusieurs coloris selon les arrivages',
      "Détails poupée Akan ou pois baoulé sur certaines versions",
      'Existe en version mini'
    ],
    variants: [
      { name: 'En V', price: 88000, color: 'Plusieurs coloris' },
      { name: 'En V mini', price: 68000, color: 'Vert clair' }
    ],
    hero: true,
    category: 'signature',
    images: ['/products/v-1.jpg', '/products/v-2.jpg']
  },
  {
    slug: 'nafi',
    name: 'Nafi',
    tagline: "La douceur d'une forme, la force d'une présence.",
    description: "Le sac Nafi appartient à la nouvelle collection MAWUYA. Sa forme ronde sculpturale, son cuir autruche texturé en ivoire crème et son fermoir Akan doré en font une pièce plus douce, plus précieuse, plus habillée.",
    details: [
      'Cuir autruche texturé',
      'Coloris ivoire / crème',
      'Forme ronde sculpturale',
      'Fermoir Akan signature doré',
      'Poignée intégrée minimaliste',
      'Foulard décoratif selon le modèle'
    ],
    variants: [
      { name: 'Nafi', price: 145000, color: 'Ivoire crème' }
    ],
    hero: true,
    category: 'nouvelle-collection',
    images: ['/products/nafi-1.jpg', '/products/nafi-2.jpg', '/products/nafi-3.jpg', '/products/nafi-4.jpg']
  },
  {
    slug: 'cuvee',
    name: 'Cuvée',
    tagline: "L'art d'offrir avec caractère.",
    description: "MAWUYA Cuvée transforme l'art d'offrir une bouteille. Conçu pour accueillir un vin ou un champagne, il fait du cadeau lui-même un geste de style. Idéal pour un dîner, un anniversaire, une célébration, un cadeau d'entreprise.",
    details: [
      'Simili cuir premium',
      'Coloris : rouge profond ou noir intense',
      'Effet crocodile sur certains modèles',
      'Poupée Akan signature dorée',
      'Compatible bouteilles 75cl'
    ],
    variants: [
      { name: 'Cuvée', price: 55000, color: 'Rouge ou Noir' }
    ],
    category: 'cuvee',
    images: ['/products/cuvee-1.jpg', '/products/cuvee-2.jpg', '/products/cuvee-3.jpg']
  },
  {
    slug: 'wax',
    name: 'Wax',
    tagline: "Une touche de caractère, une allure qui se remarque.",
    description: "Le sac Wax associe cuir premium et tissu wax sélectionné. Pièce expressive, pensée pour celles qui aiment les accessoires lumineux sans renoncer à la rigueur de la maison.",
    details: [
      'Cuir + tissu wax',
      'Coloris : marron ou rose',
      'Édition limitée selon les arrivages'
    ],
    variants: [
      { name: 'Wax', price: 48000, color: 'Marron ou Rose' }
    ],
    category: 'nouvelle-collection',
    images: ['/products/wax-1.jpg', '/products/wax-2.jpg']
  },
  {
    slug: 'speciale',
    name: 'Spéciale',
    tagline: "Une création rare, pensée pour marquer les regards.",
    description: "La pièce Spéciale est une création capsule MAWUYA. Conçue en série très limitée, elle s'adresse aux clientes qui cherchent l'exception sans excès.",
    details: [
      'Pièce capsule',
      'Numérotée ou série très limitée',
      'Finitions premium'
    ],
    variants: [
      { name: 'Spéciale', price: 125000, color: 'À déterminer' }
    ],
    category: 'edition-limitee',
    images: ['/products/speciale-1.jpg', '/products/speciale-2.jpg']
  },
  {
    slug: 'athiena',
    name: 'Athiena',
    tagline: "Une élégance douce, pensée pour durer.",
    description: "Le sac Athiena est un modèle féminin structuré, conçu pour devenir un compagnon du quotidien sans jamais paraître trop ordinaire.",
    details: [
      'Format moyen',
      'Cuir structuré',
      'Détails dorés signature'
    ],
    variants: [
      { name: 'Athiena', price: 78000, color: 'Noir' }
    ],
    category: 'collection',
    images: ['/products/athiena-1.jpg']
  },
  {
    slug: 'danca',
    name: 'Danca',
    tagline: "Une silhouette douce, une présence affirmée.",
    description: "Le sac Danca existe en deux formats — Grand et Mini — pour celles qui aiment choisir entre l'affirmation et la discrétion.",
    details: [
      'Grand format ou format mini',
      'Cuir lisse',
      'Détails dorés signature'
    ],
    variants: [
      { name: 'Danca Grand', price: 82000, color: 'Noir' },
      { name: 'Danca Mini', price: 58000, color: 'Noir' }
    ],
    category: 'collection',
    images: ['/products/danca-1.jpg', '/products/danca-2.jpg']
  },
  {
    slug: 'pochette-bandouliere',
    name: 'Pochette bandoulière',
    tagline: "L'essentiel, avec caractère.",
    description: "La pochette bandoulière MAWUYA accompagne les essentiels avec élégance. Compacte, pratique et raffinée, elle est idéale pour les sorties et les femmes qui aiment les accessoires simples mais distinctifs.",
    details: [
      'Format compact',
      'Bandoulière réglable',
      'Coloris : bleu ou marron'
    ],
    variants: [
      { name: 'Pochette bandoulière', price: 38000, color: 'Bleu ou Marron' }
    ],
    category: 'petite-maroquinerie',
    images: ['/products/pochette-1.jpg']
  },
  {
    slug: 'petite-pochette',
    name: 'Petite pochette',
    tagline: "Le détail qui accompagne vos essentiels.",
    description: "La petite pochette MAWUYA est la première porte d'entrée dans la maison. Format compact, finitions soignées, idéale en cadeau ou en complément d'un sac.",
    details: [
      'Format mini',
      'Cuir lisse',
      'Plusieurs coloris'
    ],
    variants: [
      { name: 'Petite pochette', price: 22000, color: 'Plusieurs coloris' }
    ],
    category: 'petite-maroquinerie',
    images: ['/products/petite-pochette-1.jpg']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getHeroProducts(): Product[] {
  return products.filter(p => p.hero);
}

export function whatsappLink(productName: string, price: number): string {
  return `https://wa.me/2250748063255?text=${encodeURIComponent(
    `Bonjour MAWUYA, je suis intéressée par le sac ${productName} (${price.toLocaleString('fr-FR')} FCFA). Pouvez-vous m'en dire plus ?`
  )}`;
}
