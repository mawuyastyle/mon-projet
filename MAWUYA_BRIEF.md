# MAWUYA — Brief de site web



> **À Claude Code** : ce fichier est le brief complet et autoritaire pour le site MAWUYA. Lis-le en entier avant de commencer. Suis-le à la lettre. Pose des questions si quelque chose est ambigu — n'invente jamais.



---



## 1. CONTEXTE & VISION



**MAWUYA** est une maison de maroquinerie contemporaine fondée à Abidjan en 2021 par **Ama Diallo**. Production artisanale limitée (~20 sacs/mois), positionnement luxe minimaliste contemporain.



**Tagline officielle** : *La créativité avec un brin d'audace.*

**Tagline English** : *Creativity, with a whisper of daring.*



**Positionnement** : Jacquemus + Bottega Veneta + identité ouest-africaine assumée mais SANS folklore visuel. Posture : *"Pas une marque africaine. Une maison contemporaine née à Abidjan."*



**Cible** : femmes 25-45 ans, Abidjan + diaspora africaine (France, US, UK). Bilingue FR/EN obligatoire.



---



## 2. STACK TECHNIQUE



- **Framework** : Next.js 15 (App Router) + TypeScript

- **Styling** : Tailwind CSS v4

- **Animations** : Framer Motion + GSAP (transitions cinématiques)

- **3D** : Three.js + React Three Fiber + Drei (rotation 360° des sacs héros)

- **CMS / E-commerce** : préparer le code pour intégration future Shopify Storefront API. Pour la V1, mettre des données produits en local dans un fichier `lib/products.ts`.

- **Paiements (V2)** : CinetPay (Wave + Orange Money + CB)

- **Internationalisation** : `next-intl` (FR par défaut, EN sélectionnable)

- **Hébergement cible** : Vercel

- **Polices** : Inter (sans serif moderne) + Editorial New / Migra pour les titres héro



---



## 3. DESIGN SYSTEM



### Couleurs

--mw-white: #FAFAF7;      /* fond principal — blanc cassé chaud */
--mw-ink: #0A0A0A;        /* texte principal */
--mw-stone: #6B6B66;      /* texte secondaire */
--mw-line: #E8E5DE;       /* lignes, séparateurs */
--mw-gold: #B8945F;       /* accent rare (poupée Akan) */

### Typographie



- **Display (titres héros)** : font sérif moderne "Editorial New" / "PP Editorial" — fallback : `'Times New Roman', serif`. Taille : `clamp(48px, 8vw, 120px)`. Letter-spacing serré (-0.02em).

- **Body / UI** : `'Inter', system-ui, sans-serif`. Taille de base : 16px.

- **Caps (labels, prix)** : Inter uppercase, letter-spacing 0.15em, taille 12-13px.



### Règles de design



- Espace blanc abondant

- Pas de bordures arrondies (sauf le sac 3D)

- Pas d'ombres, pas de gradients

- Animations subtiles : fade-in léger au scroll

- Mobile-first obligatoire

- Performance : LCP < 2.5s, JS < 200KB sur la home



---



## 4. ARCHITECTURE DU SITE  /                       Accueil

/collection             Toute la collection

/collection/[slug]      Fiche produit

/maison                 Notre histoire

/atelier                L'atelier

/journal                Journal index

/journal/[slug]         Article

/contact                Contact

/livraison              Livraison & retours

/entretien              Entretien du cuir

/cgv                    Conditions générales

/privacy                Politique de confidentialité

/en/*                   Versions anglaises ---



## 5. PAGE D'ACCUEIL



### Hero (plein écran)



**Gauche (60% desktop)** : sac 3D qui tourne automatiquement.

- Trois sacs en rotation toutes les 5 secondes : Pyramid → En V → Nafi

- V1 : séquence de 36 photos par sac (rotation Canvas)

- Frames dans `/public/3d/pyramid/`, `/public/3d/v/`, `/public/3d/nafi/`

- Fond transparent, drag possible



**Droite (40% desktop)** :



Titre H1 (font display, 80-120px) :

**Pas une marque africaine.**

**Une maison contemporaine née à Abidjan.**



Sous-titre (Inter caps, 13px, letter-spacing 0.15em) :

MAWUYA — MAROQUINERIE — ABIDJAN — 2021



Boutons :

[ Découvrir la collection ] ( Notre histoire → )



**Mobile** : sac 3D en haut (carré), texte en dessous.



### Section 2 — Pièces signatures



Eyebrow : LES SIGNATURES

H2 : *Trois formes. Trois caractères.*



Grille 3 colonnes :



**PYRAMID** — Une présence avant les mots. — À partir de 98 000 FCFA — > Voir le modèle



**EN V** — L'élégance dans sa forme la plus graphique. — À partir de 88 000 FCFA — > Voir le modèle



**NAFI** — La douceur d'une forme, la force d'une présence. — Nouvelle collection — > Voir le modèle



### Section 3 — Manifeste émotionnel



Pleine largeur, fond blanc cassé, énorme respiration.



Texte centré (display, 64-96px) :

**Des pièces que l'on garde.**

**Des pièces que l'on transmet.**



Paragraphe (Inter, 18px, max-width 580px, centré) :

Chaque sac MAWUYA est pensé pour vivre longtemps. Pour traverser les saisons sans en suivre aucune. Pour devenir, avec le temps, l'objet qu'on confie à celles qui viennent après nous.



### Section 4 — L'atelier



Image gauche (60%), texte droite (40%).



Eyebrow : L'ATELIER

H2 (display, 48px) : **Pensé, dessiné et façonné à Abidjan.**



Notre atelier des Deux Plateaux est le cœur de la maison. Chaque pièce y est imaginée par Ama Diallo, fondatrice, puis confiée à nos artisans partenaires. Vingt sacs sortent chaque mois. Pas un de plus.



> Visiter l'atelier



### Section 5 — Nouvelle collection



Eyebrow : 2026

H2 : *Nouvelle collection.*



Grille 2x3 ou 3x2 de 6 sacs récents :

- Nafi

- Pyramid édition limitée

- Cuvée (sac champagne)

- En V mini

- Spéciale

- Sac Wax



Hover : scale 1.02 + révélation nom + prix.



Bouton centré : **Voir toute la collection →**



### Section 6 — Le journal



Eyebrow : LE JOURNAL

H2 : *Histoires, savoir-faire, regards.*



3 cards :

1. **L'histoire d'un sac né sur une plage** — Comment le Sac en V est devenu iconique.

2. **Vingt sacs par mois. Pourquoi ?** — Notre choix d'une production limitée.

3. **Ce que cachent nos détails dorés** — La poupée Akan, signature discrète de la maison.



### Section 7 — Newsletter



H2 centré : **Restez proches.**

P : Quatre lettres par an. Aucune publicité. Juste les nouveautés, les éditions limitées et les rendez-vous privés à l'atelier.



[ Champ email ] [ S'inscrire ]



### Section 8 — Footer COLONNE 1 MAWUYA La créativité avec un brin d'audace. Atelier — Abidjan, Côte d'Ivoire contact@mawuya.com +225 07 48 06 32 55

COLONNE 2 Maison Notre histoire L'atelier Le journal Contact

COLONNE 3 Service Livraison Entretien du cuir Conditions de vente Politique de confidentialité

BAS Icônes Instagram (@ma.wuya) + TikTok (@mawuyaa) © 2026 MAWUYA. Tous droits réservés. [ FR | EN ]
## 6. PAGE "NOTRE MAISON" — CONTENU EXACT

URL : `/maison` (et `/en/the-house`)

### Bloc 1 — Ouverture

H1 (display, 96px) :
**Une maison**
**née d'un geste.**

P (Inter, 19px, max-width 640px) :
En 2021, dans un appartement d'Abidjan, une jeune femme décore une pochette noire avec des cauris et des poids baoulés. Elle ne connaît rien à la maroquinerie. Elle ne sait pas encore que ce geste deviendra une maison.

### Bloc 2 — Le déclic

Image + texte à droite.

Eyebrow : 2021
H2 : **Le premier sac.**

Pendant le confinement, Ama Diallo, formée à la mode et passionnée d'art depuis l'enfance grâce à sa mère, transforme une pochette en pièce ornée. Elle la montre. On lui en demande une. Puis deux. Puis dix.

À ses débuts, MAWUYA c'est des pochettes vendues entre 15 000 et 30 000 FCFA, et des colliers en cauri. Le bouche-à-oreille fait le reste. Une marque est née sans plan marketing, sans levée de fonds, sans précédent dans la famille. Juste un œil, et beaucoup de patience.

### Bloc 3 — La fondatrice

Eyebrow : LA FONDATRICE
H2 : **Ama Diallo.**

"Je n'ai jamais étudié la maroquinerie. J'ai étudié le regard. Je viens d'une mère amoureuse d'art, des galeries d'Abidjan, des heures passées sur les sites de mode pendant mes études. MAWUYA, c'est cette éducation visuelle transformée en objets."

Ama dessine seule chaque modèle. Elle choisit chaque cuir. Elle valide chaque pièce avant qu'elle ne quitte l'atelier. MAWUYA est sa maison, au sens strict.

### Bloc 4 — Les modèles iconiques

H2 : **Le Sac en V est né sur une plage.**

Un après-midi, assise face à la lagune, musique dans les oreilles, Ama dessine une forme en V. Quelques semaines plus tard, le Sac en V devient l'un des deux premiers modèles iconiques de la maison, avec le Sac Pyramid — pièce sculpturale qui définira longtemps la signature visuelle de MAWUYA.

P italique gris : *Deux modèles. Deux gestes. Le début d'un vocabulaire.*

### Bloc 5 — Le nom

Eyebrow : LE NOM
H2 : **MAWUYA.**

Un nom hérité d'Afrique de l'Ouest, porteur de mémoire. Celui d'une figure royale qui s'est battue pour les siens. Nous l'avons choisi parce qu'il porte ce que nous voulons fabriquer : des objets qui ont une présence, sans avoir besoin d'élever la voix.

### Bloc 6 — Aujourd'hui

H2 : **Aujourd'hui.**

MAWUYA est officiellement constituée depuis février 2025. Notre atelier des Deux Plateaux produit une vingtaine de sacs par mois. Pas un de plus. Chaque pièce est dessinée à Abidjan, façonnée à Abidjan, et part vivre partout dans le monde.

Citation (italique, display, 36px) :
*"Une maison ne se construit pas en saisons. Elle se construit en décennies."*
— Ama Diallo

### Bloc 7 — CTA

H3 : **Découvrir la collection →**

---

## 7. PAGE "ATELIER"

URL : `/atelier`

H1 : **L'atelier.**

P : À Abidjan, dans le quartier des Deux Plateaux, se trouve le cœur de MAWUYA. Notre atelier est petit. Volontairement. Vingt pièces y sortent chaque mois. Pas un sac n'en part sans avoir été examiné, touché, validé par Ama.

[ Image : atelier ]

H2 : **Le geste avant l'échelle.**

P : La maroquinerie est un art lent. Chaque sac MAWUYA passe par une dizaine d'étapes — choix du cuir, traçage, découpe, assemblage, couture, finition, contrôle. Nous travaillons avec un cercle restreint d'artisans partenaires, formés au geste précis que demande chaque modèle.

P : Nous refusons la production de masse. Nous refusons la sortie de modèles à chaque saison. Notre rythme est celui d'une maison de couture, pas d'une marque de mode.

H2 : **Les matières.**

P : Nos cuirs sont sélectionnés un par un. Cuir lisse, cuir grainé, simili premium, python (sur certaines éditions limitées), autruche (collection Nafi). Le wax intervient sur des pièces plus expressives, choisies pour leur capacité à dialoguer avec le cuir sans le contredire.

H2 : **Visite privée.**

P : L'atelier ouvre ses portes sur rendez-vous, pour les clientes qui souhaitent commander une pièce sur mesure, voir les coulisses, ou simplement comprendre ce qui distingue MAWUYA.

[ Bouton ] **Prendre rendez-vous →** (lien WhatsApp)

---

## 8. PAGE "COLLECTION"

URL : `/collection`

H1 : **Collection.**

Filtres :
- Tous
- Pièces signatures
- Nouvelle collection
- Cuvée
- Petite maroquinerie
- Éditions limitées

Grille 3 colonnes desktop / 2 colonnes mobile.

### Données produits — fichier `/lib/products.ts`

```typescript
export const products = [
  {
    slug: 'pyramid',
    name: 'Pyramid',
    tagline: 'Une présence avant les mots.',
    description: 'Le sac Pyramid est l\'une des pièces les plus identitaires de MAWUYA. Sa silhouette triangulaire sculpturale en fait un sac immédiatement reconnaissable — pensé pour les femmes qui aiment les accessoires forts, élégants et lisibles.',
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
    images: ['/products/pyramid-1.jpg', '/products/pyramid-2.jpg']
  },
  {
    slug: 'en-v',
    name: 'En V',
    tagline: 'L\'élégance dans sa forme la plus graphique.',
    description: 'Le sac En V incarne l\'élégance graphique de la maison. Sa construction en V donne une impression de mouvement, de tension contenue, d\'élégance précise. Dessiné par Ama Diallo sur une plage d\'Abidjan, il est devenu, avec le Pyramid, l\'un des deux modèles qui ont défini MAWUYA.',
    details: [
      'Construction en V architecturale',
      'Cuir structuré',
      'Plusieurs coloris selon les arrivages',
      'Détails poupée Akan ou pois baoulé sur certaines versions',
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
    tagline: 'La douceur d\'une forme, la force d\'une présence.',
    description: 'Le sac Nafi appartient à la nouvelle collection MAWUYA. Sa forme ronde sculpturale, son cuir autruche texturé en ivoire crème et son fermoir Akan doré en font une pièce plus douce, plus précieuse, plus habillée.',
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
    images: ['/products/nafi-1.jpg', '/products/nafi-2.jpg']
  },
  {
    slug: 'cuvee',
    name: 'Cuvée',
    tagline: 'L\'art d\'offrir avec caractère.',
    description: 'MAWUYA Cuvée transforme l\'art d\'offrir une bouteille. Conçu pour accueillir un vin ou un champagne, il fait du cadeau lui-même un geste de style. Idéal pour un dîner, un anniversaire, une célébration, un cadeau d\'entreprise.',
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
    images: ['/products/cuvee-1.jpg', '/products/cuvee-2.jpg']
  },
  {
    slug: 'wax',
    name: 'Wax',
    tagline: 'Une touche de caractère, une allure qui se remarque.',
    description: 'Le sac Wax associe cuir premium et tissu wax sélectionné. Pièce expressive, pensée pour celles qui aiment les accessoires lumineux sans renoncer à la rigueur de la maison.',
    details: [
      'Cuir + tissu wax',
      'Coloris : marron ou rose',
      'Édition limitée selon les arrivages'
    ],
    variants: [
      { name: 'Wax', price: 48000, color: 'Marron ou Rose' }
    ],
    category: 'nouvelle-collection',
    images: ['/products/wax-1.jpg']
  },
  {
    slug: 'speciale',
    name: 'Spéciale',
    tagline: 'Une création rare, pensée pour marquer les regards.',
    description: 'La pièce Spéciale est une création capsule MAWUYA. Conçue en série très limitée, elle s\'adresse aux clientes qui cherchent l\'exception sans excès.',
    details: [
      'Pièce capsule',
      'Numérotée ou série très limitée',
      'Finitions premium'
    ],
    variants: [
      { name: 'Spéciale', price: 125000, color: 'À déterminer' }
    ],
    category: 'edition-limitee',
    images: ['/products/speciale-1.jpg']
  },
  {
    slug: 'athiena',
    name: 'Athiena',
    tagline: 'Une élégance douce, pensée pour durer.',
    description: 'Le sac Athiena est un modèle féminin structuré, conçu pour devenir un compagnon du quotidien sans jamais paraître trop ordinaire.',
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
    tagline: 'Une silhouette douce, une présence affirmée.',
    description: 'Le sac Danca existe en deux formats — Grand et Mini — pour celles qui aiment choisir entre l\'affirmation et la discrétion.',
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
    images: ['/products/danca-1.jpg']
  },
  {
    slug: 'pochette-bandouliere',
    name: 'Pochette bandoulière',
    tagline: 'L\'essentiel, avec caractère.',
    description: 'La pochette bandoulière MAWUYA accompagne les essentiels avec élégance. Compacte, pratique et raffinée, elle est idéale pour les sorties et les femmes qui aiment les accessoires simples mais distinctifs.',
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
    tagline: 'Le détail qui accompagne vos essentiels.',
    description: 'La petite pochette MAWUYA est la première porte d\'entrée dans la maison. Format compact, finitions soignées, idéale en cadeau ou en complément d\'un sac.',
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
```

---

## 9. FICHE PRODUIT

URL : `/collection/[slug]`

Layout 2 colonnes desktop, 1 colonne mobile.

**GAUCHE** :
- Image principale carrée (1:1)
- Vignettes cliquables en-dessous
- Sacs héros : option "Voir en rotation 360°"

**DROITE** :
- Eyebrow : nom collection en caps (SIGNATURE, NOUVELLE COLLECTION...)
- H1 : Nom du sac (display, 48px)
- Tagline italique
- Prix (Inter, 24px, gras)
- Sélecteur variante (couleur/format)
- Bouton principal : [ AJOUTER AU PANIER ] noir plein, full-width
- Bouton secondaire : [ Commander sur WhatsApp ] bordure noire, lien WhatsApp pré-rempli
- Accordéons : Description / Détails & matières / Livraison / Entretien
- Mentions sous le pliage : *Fait à la main à Abidjan · Production limitée · Délai 5 à 10 jours ouvrés*

### Lien WhatsApp pré-rempli

```javascript
const whatsappLink = (productName, price) =>
  `https://wa.me/2250748063255?text=${encodeURIComponent(
    `Bonjour MAWUYA, je suis intéressée par le sac ${productName} (${price.toLocaleString('fr-FR')} FCFA). Pouvez-vous m'en dire plus ?`
  )}`;
```

---

## 10. PAGE CONTACT

URL : `/contact`

H1 : **Contact.**

P intro : Pour toute question, commande sur mesure, demande presse ou simplement pour échanger : nous répondons personnellement.

**LAYOUT 2 COLONNES** :

GAUCHE :
- ATELIER : MAWUYA — Abidjan, Côte d'Ivoire / Sur rendez-vous uniquement
- EMAIL : contact@mawuya.com
- WHATSAPP : +225 07 48 06 32 55 / [ Écrire sur WhatsApp → ]
- SUIVRE LA MAISON : Instagram @ma.wuya / TikTok @mawuyaa

DROITE — Formulaire :
- Nom*
- Email*
- Sujet (dropdown : Commande / Sur mesure / Presse / Autre)
- Message*
- [ Envoyer ]

Sous formulaire : *Nous répondons sous 48 heures ouvrées.*

---

## 11. PAGE LIVRAISON

URL : `/livraison`

H1 : **Livraison & retours.**

H2 : **Côte d'Ivoire.**
À Abidjan : livraison le jour même si le sac est en stock.
Hors Abidjan : 1 à 3 jours ouvrés.
Frais offerts dès 75 000 FCFA d'achat.

H2 : **International.**
Diaspora et international : 5 à 7 jours ouvrés via DHL Express.
Frais calculés au paiement selon destination.
Toutes les pièces sont envoyées dans un emballage MAWUYA signé.

H2 : **Sur mesure.**
Les pièces sur mesure ou éditions limitées : 10 à 21 jours ouvrés. Suivi de chaque étape.

H2 : **Retours.**
Pièces standards retournables sous 14 jours suivant la réception, intactes et dans leur emballage. Les pièces sur mesure ne sont pas reprises.

---

## 12. PAGE ENTRETIEN

URL : `/entretien`

H1 : **L'entretien du cuir.**

P intro : Un sac MAWUYA est conçu pour durer des décennies. Quelques gestes simples suffisent à préserver sa beauté.

H2 : **Au quotidien.**
- Éviter exposition prolongée au soleil et à l'humidité
- Ranger dans sa pochette d'origine
- Remplir légèrement pour garder la forme

H2 : **Nettoyage.**
- Cuir lisse : chiffon doux et sec. Tâches : coton humide légèrement savonneux.
- Cuir grainé : brossage doux à la brosse en crin.
- Cuir python / autruche : professionnel uniquement.

H2 : **Patine.**
Le cuir vit. Avec le temps, il développe une patine qui lui appartient. C'est ce qui transforme un sac neuf en un sac qui est à vous.

## 13. NAVIGATION & UI

### Header (sticky, fond blanc cassé avec léger flou au scroll) 

GAUCHE : Logo MAWUYA (display, 22px, letter-spacing 0.2em)
Sous le logo, en très petit (10px italique gris) : "La créativité avec un brin d'audace."
CENTRE (desktop) : Collection | Maison | Atelier | Journal | Contact
DROITE :

Sélecteur langue [FR | EN]
Icône recherche
Icône panier avec compteur

Mobile : menu hamburger qui ouvre un overlay plein écran blanc cassé.

### Curseur / micro-interactions

- Curseur custom desktop (point noir 8px qui s'agrandit en cercle 32px sur les liens)
- Tous les liens : underline qui se dessine en 200ms au hover
- Boutons noirs : inversion couleur au hover (blanc sur noir → noir sur blanc)
- Respecter `prefers-reduced-motion`

---

## 14. INTERNATIONALISATION

Configurer `next-intl` avec :
- `fr` (par défaut) → URLs `/`
- `en` → URLs `/en/`

Tous les textes dans `/messages/fr.json` et `/messages/en.json`.
Sélecteur dans le header.

### Traductions clés FR → EN

| FR | EN |
|---|---|
| La créativité avec un brin d'audace | Creativity, with a whisper of daring |
| Pas une marque africaine. Une maison contemporaine née à Abidjan. | Not an African brand. A contemporary house, born in Abidjan. |
| Trois formes. Trois caractères. | Three forms. Three characters. |
| Des pièces que l'on garde. Des pièces que l'on transmet. | Pieces to keep. Pieces to pass on. |
| Une présence avant les mots. | A presence, before any word. |
| L'élégance dans sa forme la plus graphique. | Elegance in its most graphic form. |
| La douceur d'une forme, la force d'une présence. | The softness of a shape, the strength of a presence. |
| Découvrir la collection | Explore the collection |
| Notre histoire | Our story |
| Visiter l'atelier | Inside the atelier |
| Restez proches. | Stay close. |
| Voir le modèle | View piece |
| Ajouter au panier | Add to bag |
| Commander sur WhatsApp | Order via WhatsApp |
| Collection | Collection |
| Maison | The House |
| Atelier | Atelier |
| Journal | Journal |
| Contact | Contact |
| Livraison & retours | Shipping & returns |
| L'entretien du cuir | Leather care |
| Une maison née d'un geste. | A house born from a gesture. |
| Le premier sac. | The first bag. |
| La fondatrice. | The founder. |
| Le Sac en V est né sur une plage. | The V Bag was born on a beach. |
| Aujourd'hui. | Today. |
| Pensé, dessiné et façonné à Abidjan. | Imagined, drawn and crafted in Abidjan. |
| Prendre rendez-vous | Book a visit |

---

## 15. SEO & MÉTADONNÉES

Pour chaque page :
- `<title>` unique
- `<meta name="description">` unique (150-160 caractères)
- Open Graph (og:image, og:title, og:description)
- Schema.org : `Organization` sur la home, `Product` sur les fiches
- `lang="fr"` ou `lang="en"`

### Méta home FR
```html
<title>MAWUYA — Maison de maroquinerie contemporaine. Abidjan.</title>
<meta name="description" content="Sacs faits à Abidjan, portés partout. Pyramid, En V, Nafi : des pièces conçues pour durer. Production limitée à 20 sacs par mois.">
```

### Méta home EN
```html
<title>MAWUYA — Contemporary leather house. Abidjan.</title>
<meta name="description" content="Bags made in Abidjan, worn everywhere. Pyramid, V, Nafi: pieces built to last. Twenty bags a month. Not one more.">
```

### Méta page Maison FR
```html
<title>Notre histoire — MAWUYA</title>
<meta name="description" content="Comment MAWUYA est née d'un geste, en 2021, dans un appartement d'Abidjan. L'histoire d'une fondatrice, d'un sac et d'une maison.">
```

### Méta fiche produit (exemple Pyramid)
```html
<title>Sac Pyramid — MAWUYA</title>
<meta name="description" content="Le sac Pyramid : silhouette triangulaire sculpturale, signature de la maison MAWUYA. Fait à la main à Abidjan. À partir de 98 000 FCFA.">
```

---

## 16. PERFORMANCE & ACCESSIBILITÉ

- Images : `next/image` partout, formats AVIF + WebP, lazy-load par défaut
- Polices : `next/font` avec `display: swap`
- Score Lighthouse cible : **95+** sur les 4 catégories
- Contraste AA minimum
- Labels ARIA sur tous les boutons icônes
- Navigation au clavier complète
- Focus visible
- Respecter `prefers-reduced-motion`

---

## 17. PHASE 2 — À PRÉVOIR

À NE PAS coder maintenant. Le code de la V1 doit juste être prêt à les recevoir.

- Intégration **Shopify Storefront API** (panier + checkout réel)
- Intégration **CinetPay** (Wave + Orange Money + CB)
- Vrais modèles 3D (Three.js avec .glb) au lieu des séquences PNG
- Compte client (commandes, adresses)
- Newsletter intégrée (Resend ou ConvertKit)
- Carte interactive de l'atelier
- Blog/journal éditable via CMS (Sanity ou Contentful)

---

## 18. ORDRE DE CODAGE RECOMMANDÉ

1. Setup Next.js 15 + TypeScript + Tailwind v4 + next-intl + Framer Motion
2. Design system global (variables CSS, polices, layout de base)
3. Layout global (header sticky avec tagline, footer, switcher langue)
4. Page d'accueil (sans 3D au début — placeholder image carré)
5. Page Collection (avec données locales du products.ts)
6. Fiche produit (avec accordéons et bouton WhatsApp)
7. Page Maison (Notre histoire)
8. Page Atelier
9. Pages Contact + Livraison + Entretien
10. Composant 3D Carousel (séquence PNG des 3 sacs héros)
11. Newsletter (intégration Resend en V1)
12. SEO complet + OG images
13. Polish animations + responsive QA

---

## 19. CONSIGNES À CLAUDE CODE

- **Respecte le contenu exact** ci-dessus. Ne le réécris pas.
- **N'invente PAS de pages, sections ou fonctionnalités** non décrites ici. Demande d'abord à Ama.
- **Pas de Lorem Ipsum** : utiliser le vrai contenu MAWUYA ou laisser une zone commentée.
- **Mobile-first** dans chaque composant. Le mobile est prioritaire.
- **Commits granulaires** : un commit par fonctionnalité (ex : "feat: add hero 3D carousel").
- **Pose des questions** quand un détail manque (image, police exacte, etc.) au lieu d'inventer.
- **Performance d'abord** : pas de librairies lourdes inutiles.
- **À la fin de chaque grande étape, demander validation à Ama** avant de continuer.

---

## 20. CONTACTS POUR DÉPLOIEMENT

- **Repo GitHub** : à connecter à Vercel
- **Domaine cible** : mawuya.com (à vérifier disponibilité — sinon mawuya.ci)
- **Email pro** : contact@mawuya.com (à créer via OVH ou Google Workspace)
- **Hébergement images** : Cloudinary ou Vercel Blob

---

**Fin du brief.**

Pour toute question : ouvrir une issue dans le repo ou contacter directement Ama Diallo, fondatrice MAWUYA.
