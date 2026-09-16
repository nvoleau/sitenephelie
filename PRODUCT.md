# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Familles (couples avec enfants, familles nombreuses, duos de couples) venues visiter le Puy du Fou et séjournant en Vendée à proximité, aux Epesses. Elles cherchent un hébergement autonome (cuisine équipée) plutôt qu'une chambre d'hôtes, pour un séjour court (week-end / vacances scolaires) centré sur le parc et la région.

## Product Purpose

Les Gîtes Néphélie proposent 4 gîtes indépendants (2 à 8 personnes) à 2 minutes du Puy du Fou, aux Epesses (Vendée), en location de courte durée. Le site vitrine doit présenter l'offre, donner confiance (avis clients, contenu réel) et convertir vers la réservation (widget PMS Superhote), sans dépendre de WordPress/Elementor/WooCommerce dont les performances et le SEO sont en cause (audit du 9 septembre 2026). Succès = pages indexées avec mot-clé local, Lighthouse mobile ≥ 95, réservations initiées via le widget Superhote sans perte du référencement acquis sur les URLs historiques.

## Positioning

Proximité immédiate du Puy du Fou (2 minutes), avec un niveau de confort et d'autonomie qu'une simple chambre d'hôtes ou un hôtel ne propose pas : gîtes indépendants et climatisés, terrasse privative avec barbecue, équipements de loisirs sur place (pétanque/molkky, ballon de foot, panier de basket, jeux de société), parking dédié, et un service de livraison de produits locaux au gîte (circuit court). Preuve sociale forte : 47 avis Booking.com classés « Excellent ».

## Operating Context

- Réservation via widgets PMS Superhote (iframes cross-origin, non indexables) sur `/reserver-un-logement/` — une liste texte des 4 gîtes rendue côté serveur reste au-dessus pour garder du contenu indexable par Google.
- Contact possible par formulaire (backend non arbitré, secours `mailto:`), téléphone, WhatsApp, Facebook.
- Contenu éditorial en MDX versionné dans le code (`/content/*.mdx`), données structurées (gîtes, avis, services) dans `/lib/data/*.ts`.
- Boutique de produits locaux (petits-déjeuners, produits du terroir livrés au gîte) hors périmètre de la version actuelle — dépend d'un export des fiches produits WooCommerce non encore fourni.
- Domaine `gites-nephelie.fr` conservé ; bascule DNS finale uniquement après validation explicite de Nicolas, un jour de faible trafic.

## Capabilities and Constraints

- 4 gîtes individuels avec fiches propres (`/nos-gites/gite-a|b|c|d/`) : gîtes A, B, D = 6 personnes (2 chambres : 1 lit double + 2 lits simples, canapé-lit, salon/cuisine ouverte, terrasse privative + barbecue) ; gîte C = 8 personnes (2 chambres à 2 lits doubles + 2 lits simples, canapé-lit, cuisine équipée, salle de bain et WC séparés).
- Équipements confirmés sur site le 15/09/2026, à recouper avec `lib/data/gites.ts` / `lib/data/services.ts` (climatisation et jeux extérieurs n'y figurent pas encore) : logement climatisé, jeux type panier de basket, pétanque/molkky, ballon de foot, parking dédié.
- Adresse unique de référence : `lib/site-config.ts` (`siteConfig.address`), 5 Rte de Saint-Michel Mont Mercure, 85590 Les Epesses — ne jamais dupliquer ailleurs.
- Aucune note moyenne chiffrée confirmée pour les avis Booking.com : ne pas ajouter de `reviewRating`/`aggregateRating` tant que Nicolas ne l'a pas validée.
- Pas de solution d'envoi de formulaire de contact arbitrée à ce stade.
- Photos actuelles génériques (terrasses/extérieurs), non identifiées par gîte — l'attribution par fiche est arbitraire en attendant des photos identifiées.
- Boutique et comptes/panier/checkout hors périmètre de cette version.

## Brand Commitments

- Nom : « Les Gîtes Néphélie ».
- Ton : confort haut de gamme, séjour 100 % autonome, ancrage local (Vendée, produits du terroir).
- Coordonnées (NAP) uniques dans `lib/site-config.ts` : téléphone 06 78 55 24 29, email contact@gites-nephelie.fr, WhatsApp, Facebook, fiche Google Business Profile.

## Evidence on Hand

- `CONTENU-SITE-ACTUEL.md` : relevé exhaustif du contenu réel du site actuel (textes, sitemap, URLs, écarts à trancher) — source de vérité, ne rien inventer au-delà.
- 47 avis Booking.com, label « Excellent », sans note moyenne chiffrée confirmée.
- Photos génériques récupérées le 09/09/2026 depuis le site en production, stockées dans `public/images/site/` (`lib/data/site-images.ts`).
- Pas de fiches produits boutique disponibles (13 produits WooCommerce à exporter, non fournis).

## Product Principles

1. Ne jamais inventer de fait produit (capacités, équipements, adresse, avis) : en cas de doute, demander à Nicolas plutôt que supposer.
2. Préserver le référencement acquis : ne jamais changer une URL cœur de cible sans redirection 301 testée.
3. Le contenu réel doit primer sur le widget : toute page dépendant d'un composant non indexable (iframe Superhote) garde du contenu texte serveur équivalent au-dessus.
4. Autonomie et proximité du Puy du Fou sont les deux axes de différenciation à mettre en avant avant tout argument secondaire.

## Accessibility & Inclusion

Aucun besoin utilisateur spécifique identifié au-delà de la conformité standard : cible Lighthouse Accessibilité 100/100 (contrastes, etc.), issue de l'audit du 9 septembre 2026.
