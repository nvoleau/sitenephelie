# CLAUDE.md — Refonte gites-nephelie.fr

Ce fichier guide Claude Code sur ce dépôt. Objectif du projet : reconstruire le site vitrine des Gîtes Néphélie (actuellement WordPress/Elementor/WooCommerce sur IONOS) en Next.js déployé sur Vercel, pour corriger les problèmes de performance et de SEO identifiés dans l'audit du 9 septembre 2026, sans perdre le contenu ni le référencement existants.

Documents de référence à lire avant toute action, dans cet ordre :
1. `CAHIER-DES-CHARGES-REFONTE-VERCEL.docx` (ou son équivalent texte) — objectifs, exigences, procédure de migration complète.
2. `CONTENU-SITE-ACTUEL.md` — relevé exhaustif du contenu réel du site en production (textes, sitemap, URLs, incohérences à faire trancher). C'est la source de vérité pour ne rien inventer.

## Qui est le client

SAS Néphélie — 4 gîtes (2 à 8 personnes) à 2 minutes du Puy du Fou, Les Epesses (Vendée). Nicolas est co-gérant (50/50). Le site actuel intègre une boutique WooCommerce (petits-déjeuners/produits locaux livrés au gîte), un widget d'avis Booking.com (47 avis, « Excellent »), un widget de réservation par PMS (**Superhote — retenu par Nicolas le 09/09/2026**), et des liens WhatsApp/Facebook.

## Règle absolue : ne pas inventer de contenu

Le site actuel contient des textes, des adresses, des caractéristiques de gîtes et des avis clients réels. `CONTENU-SITE-ACTUEL.md` en contient le relevé exact. Toute page reconstruite doit reprendre ce contenu tel quel (éventuellement enrichi en longueur pour le SEO, jamais inventé ou déformé sur les faits : capacités, équipements, adresse, coordonnées). En cas de doute ou d'information manquante (ex. fiches produits boutique, adresse exacte — deux versions différentes ont été relevées, voir section « Écarts à trancher » du fichier de contenu), **demander à Nicolas plutôt que de supposer**.

## Stack technique cible

- **Framework :** Next.js (App Router), déployé sur **Vercel**. Implémenté en **Next.js 16 + React 19** (pas Next 14 comme envisagé au départ) : `npm audit` a remonté sur la 14.x plusieurs failles dont une critique (RCE) sans correctif disponible sur cette branche — ne pas revenir en arrière sans revérifier `npm audit`.
- **Rendu :** SSG pour les pages de contenu (Accueil, Nos Gîtes, A propos, Découvrir la région) ; ISR si le contenu doit être mis à jour sans redéploiement.
- **Images :** composant `next/image` obligatoire (traite le point d'audit « images non optimisées, ~99 Kio d'économie » + `width`/`height` explicites partout pour CLS = 0).
- **Polices :** `next/font`, auto-hébergées (traite le point d'audit « chargement des polices, ~160 ms »).
- **CMS :** **MDX versionné dans le code — retenu par Nicolas le 09/09/2026** pour cette première version (contenu éditorial dans `/content/*.mdx`, données structurées répétées comme les gîtes/avis dans `/lib/data/*.ts`). Un CMS headless (Sanity/Contentful) pourra être ajouté plus tard si le volume d'édition l'exige — ne pas migrer sans nouvelle décision explicite de Nicolas.
- **Boutique :** ne pas porter WooCommerce tel quel. Évaluer une solution e-commerce headless compatible Next.js (Shopify headless, Snipcart…) ou conserver WooCommerce sur un sous-domaine dédié avec un seul lien propre — voir cahier des charges section 5.3. **Hors périmètre de la version actuellement développée** (voir section « État d'avancement » plus bas).
- **Réservation :** PMS retenu — **Superhote**. Intégration par iframes cross-origin fournies par Nicolas (`components/SuperhoteWidget.tsx`, IDs dans `lib/superhote.ts`) : widget de recherche par dates (`/rentals-search`) et widget de liste + réservation (`/rentals`), tous deux sur `/reserver-un-logement/`. Ces iframes ne sont pas rendues côté serveur — leur contenu reste invisible pour Google, comme redouté plus bas pour les avis Booking. Mitigation appliquée : une liste des 4 gîtes en texte réel, rendue côté serveur, reste au-dessus des widgets sur cette page pour garder du contenu indexable.
- **Domaine :** `gites-nephelie.fr` conservé, DNS à repointer vers Vercel en fin de projet (jamais en cours de développement).

## État d'avancement (09/09/2026)

Première version du site codée, hors boutique (exclusion demandée explicitement par Nicolas pour cette itération). `npm run build` passe, toutes les pages listées ci-dessous sont en SSG, sitemap et redirection testés.

**Construit :**
- Pages : `/`, `/nos-gites/` (+ 4 fiches `/nos-gites/gite-a|b|c|d/`), `/reserver-un-logement/` (avec les 2 widgets Superhote), `/a-propos/`, `/contact/` (avec formulaire), `/decouvrir-la-region/` (nouvelle), `/services/` (nouvelle).
- Avis Booking rendus côté serveur avec JSON-LD `Review` (sans `reviewRating`, voir « Questions encore ouvertes »).
- `trailingSlash: true` dans `next.config.mjs` pour préserver exactement les URLs historiques.
- next-sitemap configuré et généré (11 URLs, 0 doublon), `robots.txt` généré.

**Non construit / hors périmètre pour l'instant :**
- Boutique et tout ce qui en dépend : `/boutique/`, `/mon-compte/`, `/panier/`, `/checkout/`, les 4 redirections boutique/compte associées.
- Les 3 blocs boutique de l'ancien accueil (« Commande en ligne », « Livraison au gîte », « Producteurs locaux ») ne sont pas repris sur le nouvel accueil — seul le 4ᵉ bloc USP les mentionne encore en texte (pas de lien mort créé).
- Vraies photos, note chiffrée des avis, backend du formulaire de contact — voir « Questions encore ouvertes » plus bas.

## Exigences non négociables (issues de l'audit du 9 septembre 2026)

| Exigence | Cible | Pourquoi |
|---|---|---|
| Lighthouse Performance mobile | ≥ 95/100, LCP < 2,5 s | Le site actuel est à 60/100, LCP 9,5 s |
| Lighthouse Accessibilité | 100/100 | Contrastes insuffisants relevés (93/100 actuellement) |
| Une expression clé + title/H1 localisés (Puy du Fou / Vendée / Les Epesses) | 100 % des pages indexables | 4 pages sur 6 n'ont aujourd'hui aucun mot-clé cible |
| Sitemap XML | 0 doublon d'URL | 4 URLs boutique, 2 contact, 2 compte/panier/checkout aujourd'hui — voir `CONTENU-SITE-ACTUEL.md` |
| Liens internes | 0 lien vers `#` | 3 boutons « En savoir plus » de l'accueil sont actuellement morts |
| Avis clients | Rendus côté serveur + schema.org `Review`/`AggregateRating` | Actuellement injectés en JS pur → invisibles pour Google, aucun rich snippet étoile |
| next-sitemap ou équivalent | Génération auto, exclusion des URLs utilitaires (panier/compte/checkout) | — |

## Plan de redirection 301 à implémenter (source : sitemap réel relevé, voir `CONTENU-SITE-ACTUEL.md`)

```
/la-boutique/  -> /boutique/   (301)
/shop/         -> /boutique/   (301)
/commander/    -> /boutique/   (301)
/contact-2/    -> /contact/    (301)
/my-account/   -> /mon-compte/ (301, noindex, hors sitemap)
/cart/         -> /panier/     (301, noindex, hors sitemap)
/checkout-2/   -> /checkout/   (301, noindex, hors sitemap)
```

**État d'implémentation (09/09/2026) :** seule `/contact-2/ -> /contact/` est active dans `next.config.mjs` (testée : 308, destination correcte). Les redirections liées à la boutique/compte/panier/checkout sont préparées en commentaire dans le même fichier, à activer seulement quand ces pages existeront réellement — rediriger vers une page inexistante serait pire que l'URL en doublon actuelle.

Ne jamais changer les slugs des pages « cœur de cible » (`/`, `/nos-gites/`, `/reserver-un-logement/`, `/contact/`, `/a-propos/`, `/boutique/`) sans redirection : ce sont les URLs qui portent le référencement acquis.

## Arborescence cible (voir cahier des charges section 4)

- `/` — Accueil
- `/nos-gites/` — **4 fiches individuelles retenues** (Gîte A, B, C, D), décision de Nicolas du 09/09/2026 — meilleur pour le SEO local. Implémenté en route dynamique `app/nos-gites/[slug]/page.tsx` + `generateStaticParams` (SSG), données dans `lib/data/gites.ts`
- `/reserver-un-logement/` — widgets de réservation Superhote (recherche + liste), implémenté
- `/boutique/` — commande produits locaux
- `/a-propos/`
- `/contact/`
- Nouvelle page « Découvrir la région » — reçoit le lien actuellement mort depuis l'accueil
- Nouvelle page ou section « Services » (barbecue, jeux de société, pétanque…) — reçoit un autre lien mort
- `/mon-compte/`, `/panier/`, `/checkout/` — fonctionnels mais `noindex` et hors sitemap

## Convention de travail

- Toujours vérifier le rendu Lighthouse mobile sur `Accueil`, `Nos Gîtes` et `Réserver` avant de considérer une étape terminée (voir critères de recette du cahier des charges, section 14).
- Ne jamais committer de redirection sans l'avoir testée (code 301, destination correcte).
- Toute donnée structurée schema.org doit être validée avec l'outil de test des résultats enrichis de Google avant merge.
- Ne pas toucher aux enregistrements MX du domaine lors de la bascule DNS finale — uniquement les enregistrements A/CNAME du site (voir cahier des charges section 11.4).
- La bascule DNS en production ne se fait qu'après validation explicite de Nicolas, un jour de faible trafic.

## Questions tranchées par Nicolas le 09/09/2026

1. **Adresse :** « 5 Rte de Saint-Michel Mont Mercure, 85590 Les Epesses » — c'est la version affichée sur la page Réserver (widget PMS) qui est correcte, pas celle de l'ancien accueil/contact (« 3 route... », obsolète). Source unique dans `lib/site-config.ts` (`siteConfig.address`) — ne jamais dupliquer cette valeur ailleurs, toujours importer depuis ce fichier.
2. **Fiches gîtes :** 4 fiches individuelles (Gîte A, B, C, D), pas 2 pages groupées. Voir `lib/data/gites.ts`.
3. **CMS :** MDX versionné dans le code pour cette version (hors boutique). Voir `/content/*.mdx`.
4. **PMS :** Superhote. Voir `lib/superhote.ts` et `components/SuperhoteWidget.tsx`.

## Questions tranchées par Nicolas le 16/09/2026

1. **Distance au Puy du Fou :** « 8 minutes ». Le handoff de design Néphélie (maquette hi-fi appliquée cette même date, voir `git log`) affichait « 8 minutes » alors que le dépôt et les meta SEO disaient jusqu'ici « 2 minutes » (valeur tranchée le 09/09/2026) — la description du projet en tête de ce fichier garde « 2 minutes » comme trace historique de cette ancienne décision, volontairement non modifiée. Nicolas a tranché en faveur de la nouvelle valeur « 8 minutes ». Appliqué dans `lib/site-config.ts`, `lib/data/usp.ts`, `lib/data/stats.ts`, `app/page.tsx`, `app/nos-gites/[slug]/page.tsx` et les fichiers `content/*.mdx` concernés (accueil, nos-gites, reserver, decouvrir-la-region, a-propos, contact, services).
2. **Tarifs :** masqués entièrement pour cette version (`lib/pricing.ts`, `showPrices = false`) — aucun prix public n'existe encore dans le dépôt, voir « Questions encore ouvertes » point 5 ci-dessous.
3. **Système visuel :** maquette hi-fi « Néphélie » appliquée (palette ink/paper/bocage/terre, polices Cormorant Garamond + Jost, remplace Fraunces/Inter). Tokens dans `tailwind.config.ts` et `app/globals.css`.

## Questions encore ouvertes (ne pas deviner)

1. Export complet des 13 fiches produits WooCommerce (texte, prix, photos) — à fournir avant de construire la boutique (hors périmètre pour l'instant).
2. Note moyenne chiffrée exacte des avis Booking.com (ex. 9,6/10) — Nicolas ne l'avait pas sous la main le 09/09/2026. Sans ce chiffre, le schema.org `Review` reste volontairement sans `reviewRating` (voir `lib/data/reviews.ts`) — ne pas en inventer un.
3. ~~Vraies photos des gîtes~~ — récupérées le 09/09/2026 directement depuis `https://gites-nephelie.fr/` (accueil, `/nos-gites/`, `/a-propos/`) et stockées dans `public/images/site/` + `lib/data/site-images.ts`. Ce sont des photos génériques (terrasses/extérieurs), pas identifiées par lettre de gîte — l'ancien site ne les associe pas non plus à un gîte précis. L'attribution d'une photo à chaque fiche A/B/C/D dans `giteCardImage` est arbitraire (pour varier visuellement), pas une affirmation factuelle sur "la" photo de ce gîte. Si Nicolas fournit des photos identifiées par gîte, remplacer `lib/data/site-images.ts` en conséquence.
4. Solution d'envoi du formulaire de contact (aucun backend/service tiers choisi) — `components/ContactForm.tsx` utilise un `mailto:` de secours en attendant un arbitrage.
5. Tarifs par nuit des gîtes (aucun prix public confirmé) — voir `lib/pricing.ts` (`showPrices = false`). La maquette Néphélie affichait des « à partir de X € / nuit » d'exemple, volontairement omis partout dans le site tant que Nicolas ne fournit pas de vrais tarifs.
6. Horaires d'arrivée/départ précis (ex. « arrivées de 16h à 20h ») — ne figurent dans aucune donnée du dépôt ; omis de la page Contact et du rail Réserver plutôt qu'inventés.
7. « Ménage inclus » — mentionné dans la maquette Néphélie pour le rail de la fiche gîte mais absent de `lib/data/gites.ts` ; omis tant que non confirmé.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
