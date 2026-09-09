# Contenu extrait du site actuel — gites-nephelie.fr

Relevé effectué le 9 septembre 2026 directement sur le site en production (WordPress/Elementor/WooCommerce, thème Envo Royal), page par page, pour servir de matière première à la refonte. À utiliser avec le `CAHIER-DES-CHARGES` et `CLAUDE.md`.

> Ce document liste ce qui existe réellement aujourd'hui. Il ne préjuge pas du contenu final : les textes peuvent être enrichis (voir cahier des charges, section 6 et 8), mais rien ci-dessous ne doit être inventé ou déformé lors de la migration — c'est la référence de non-régression.

---

## Sitemap réel (Yoast), relevé le 9 septembre 2026

Sitemap index : `https://gites-nephelie.fr/sitemap_index.xml` → 4 sous-sitemaps (`page-sitemap.xml`, `product-sitemap.xml`, `shopengine-template-sitemap.xml`, `product_cat-sitemap.xml`).

`page-sitemap.xml` contient exactement 16 URLs :

| # | URL | Statut cible |
|---|---|---|
| 1 | `/` | Conserver (Accueil) |
| 2 | `/my-account/` | Doublon → rediriger vers `/mon-compte/`, noindex, hors sitemap |
| 3 | `/commander/` | Doublon boutique → rediriger vers `/boutique/` |
| 4 | `/mon-compte/` | Conserver comme URL canonique compte, noindex, hors sitemap |
| 5 | `/panier/` | Conserver comme URL canonique panier, noindex, hors sitemap |
| 6 | `/cart/` | Doublon → rediriger vers `/panier/` |
| 7 | `/shop/` | Doublon boutique → rediriger vers `/boutique/` |
| 8 | `/boutique/` | Conserver comme URL canonique boutique |
| 9 | `/categorie/` | À vérifier — page catégorie orpheline, probablement à retirer ou rediriger |
| 10 | `/checkout-2/` | Doublon → rediriger vers `/checkout/`, noindex, hors sitemap |
| 11 | `/la-boutique/` | Doublon boutique → rediriger vers `/boutique/` |
| 12 | `/nos-gites/` | Conserver |
| 13 | `/contact-2/` | Doublon → rediriger vers `/contact/` |
| 14 | `/contact/` | Conserver |
| 15 | `/a-propos/` | Conserver |
| 16 | `/reserver-un-logement/` | Conserver (URL canonique réservation — accessible aussi via `/reserver/`, à vérifier si c'est une redirection existante ou un doublon supplémentaire) |

**Résultat : 4 URLs pour la fonction boutique, 2 pour contact, 2 paires pour compte/panier/checkout.** Confirme le constat de l'audit SEO.

---

## Page d'accueil (`/`)

**Titre d'onglet observé :** « Accueil - Néphélie »

**Structure du contenu (dans l'ordre) :**

1. Hero : « BIENVENUE — Les Gîtes NEPHELIE — Gites 4 – 6 – 8 personnes à 2 minutes du Puy du Fou » + 3 boutons : Réserver / Commander / Discuter
2. Bloc « 01 Commande en ligne » : *« Le site de commande vous permet de réserver facilement vos produits locaux et petits-déjeuners. Un large choix vous attend : sandwichs, boissons fraîches, viennoiseries et plus encore. »* + lien « En savoir plus » **→ pointe vers `#` (lien mort, à corriger)**
3. Bloc « 02 Livraison au gîte » : *« Fini les files d'attente : tout ce que vous commandez est livré directement devant votre porte, à l'heure qui vous convient. »* + lien « En savoir plus » **→ `#` (lien mort)**
4. Bloc « 03 Producteurs locaux » : *« Nous collaborons avec les producteurs du coin pour vous proposer des produits frais, authentiques et savoureux, issus du terroir vendéen. »* + lien « En savoir plus » **→ `#` (lien mort)**
5. Bloc avis : « EXCELLENT — Basée sur 47 avis » (widget Booking.com, voir liste ci-dessous)
6. Accroche : « 4 gîtes de 2 à 8 personnes — livraison des commandes directement dans les gites »
7. Section « NOS PRODUITS ET SERVICES — Le meilleur de la vendée » : texte + tags (Barbecue, jeux de société, Pétanque, Vins & bières régionales, Sandwichs & petit-déj, Découverte du terroir) + lien « En savoir plus » **→ `#` (lien mort)**
8. 4 mini-blocs USP : « Accueil personnalisé », « Confort haut de gamme », « Évasion garantie », « Séjour 100% autonome » (textes ci-dessous)
9. Section « LA VENDÉE — Notre territoire à découvrir » + bouton « Découvrir la région » **→ `#` (lien mort)**
10. Section « CONTACT — Contactez nous » : adresse, téléphone, WhatsApp, email, Facebook

**Textes des 4 USP :**
- Accueil personnalisé — *« Une équipe disponible et à l'écoute pour répondre à tous vos besoins. »*
- Confort haut de gamme — *« Literie hôtelière, cuisine équipée, terrasse privative... rien ne manque. »*
- Évasion garantie — *« À 2 minutes du Puy du Fou, partez explorer la nature et l'histoire vendéenne. »*
- Séjour 100% autonome — *« Commandes en ligne, paiements sécurisés, livraisons au gîte : votre confort est notre priorité. »*

**Avis Booking.com affichés (extrait, chargés en JS — donc invisibles pour Google actuellement) :**

| Auteur | Date | Contenu |
|---|---|---|
| Sylvie | 13/07/2026 | « Parfait » |
| Brigitte | 11/07/2026 | note seule, sans commentaire |
| Cindy | 08/07/2026 | « Parfait si vous voulez être à 5 minutes du Puy Du Fou » — climatisation au top, jeux extérieurs (ping-pong, panier de basket, ballons, skate, trottinette), suggère un parasol/transat sur la terrasse |
| Maud | 06/07/2026 | note seule |
| Hanquez | 01/07/2026 | « très bon séjour dans un cadre correspondant à notre attente » — propreté, clim', équipement ménager, proximité Puy du Fou |
| Roland | 28/06/2026 | note seule |
| Franck | 25/06/2026 | « Super séjour » — emplacement, propreté, clim' en pleine canicule, propriétaire agréable |
| Elise | 24/06/2026 | bien optimisé, confortable malgré la canicule, literie parfaite |
| Christelle | 24/06/2026 | appartement neuf, bien isolé, bonne literie, bien équipé, très calme |

**Contact (footer/section contact) :**
- Adresse : *3 route saint michel mont-mercure 85590 Les Epesses*
- Téléphone : 06 78 55 24 29
- Email : contact@gites-nephelie.fr
- Liens : Facebook, WhatsApp

⚠️ **Incohérence relevée :** la page Réserver affiche l'adresse *« 5 Rte de Saint-Michel Mont Mercure, 85590 »* pour les 4 gîtes (widget de réservation), alors que la page d'accueil et la page Contact indiquent *« 3 route saint michel mont-mercure »*. À faire trancher par Nicolas avant la refonte — une seule adresse doit apparaître partout (cohérence NAP indispensable pour le SEO local et Google Business Profile).

---

## Page « Nos Gîtes » (`/nos-gites/`)

**Titre d'onglet observé :** « Nos Gîtes - Néphélie »
**Statut Yoast relevé dans la barre d'admin :** expression clé « Description des gîtes », score « OK »

**Contenu intégral :**

### Gîte A, B et D – Jusqu'à 6 personnes
Idéal pour : un couple avec enfants

Caractéristiques :
- 2 chambres (1 lit double + 2 lits simples)
- 1 canapé lit dans le salon
- Salon avec cuisine ouverte
- Salle de bain avec douche à l'italienne
- Terrasse privative avec barbecue
- Parking juste devant le gîte

*« Le bon équilibre entre confort, intimité et praticité. »*

### Gîte C – Jusqu'à 8 personnes
Idéal pour : les familles nombreuses ou deux couples

Caractéristiques :
- 2 chambres (2 lits doubles + 2 lits simples)
- 1 canapé lit
- Salon lumineux avec accès terrasse
- Cuisine moderne toute équipée
- Salle de bain et WC séparés
- Terrasse avec mobilier extérieur & barbecue

*« Parfait pour ceux qui veulent de l'espace sans compromis. »*

### Services inclus dans tous les gîtes
- Wi-Fi haut débit
- Barbecue privatif
- Jeux de société
- Linge de lit & serviettes (en option)
- Livraison de produits locaux à domicile

**Note structurelle :** le site décrit 2 typologies de gîte (6 pers. ×3 : A, B, D / 8 pers. ×1 : C) mais la page Réserver liste 4 fiches individuelles distinctes (Gîte A, B, C — et probablement D). **Recommandation pour la refonte : créer une fiche par gîte (4 fiches : A, B, C, D) plutôt que 2 fiches groupées**, pour donner à chaque gîte sa propre URL indexable — bien plus favorable au SEO local que la page groupée actuelle, et cohérent avec le widget de réservation qui traite déjà chaque gîte séparément.

---

## Page « Réserver un logement » (`/reserver-un-logement/`)

**Titre d'onglet observé :** « Réserver un logement »
**Statut Yoast :** expression clé principale **non définie**

**Contenu :** un widget de réservation (probablement issu du PMS/channel manager) titré « 4 logements disponibles », listant :
- NEPHELIE Gîte A — Logement entier · Les Epesses — 5 Rte de Saint-Michel Mont Mercure, 85590…
- NEPHELIE Gîte B — idem
- NEPHELIE Gîte C — idem
- (Gîte D, non visible sans défilement complet lors du relevé)

Chaque fiche affiche une photo de terrasse et des pictogrammes (climatisation, proximité Puy du Fou, barbecue, calme).

**Point d'attention refonte :** ce widget est probablement un iframe/script tiers du PMS. Vérifier avec le prestataire PMS choisi (Smoobu, Lodgify, Beds24, Elloha, Superhote…) s'il expose une API ou des données structurées, pour éviter de reproduire le problème des avis Booking (contenu invisible pour Google car uniquement en JS).

---

## Page « Contact » (`/contact/`)

**Titre d'onglet observé :** « Contact - Néphélie »
**Statut Yoast :** expression clé principale **non définie**

**Contenu :**
- Titre : « Contactez nous ! »
- Sous-titre : « Nous sommes là pour répondre à toutes vos questions »
- Formulaire (WPForms) : Nom* / Prénom / Nom / E-mail* / Commentaire ou message / bouton Envoyer
- Lien « Discuter sur WhatsApp »

**Doublon existant :** `/contact-2/` — à rediriger en 301 vers `/contact/` (voir cahier des charges section 10).

---

## Page « A propos » (`/a-propos/`)

**Titre d'onglet observé :** « A propos - Néphélie »
**Statut Yoast :** « À améliorer »

**Contenu intégral :**

**NOTRE PHILOSOPHIE**
*« Chez Néphélie, nous avons à cœur de proposer bien plus qu'un hébergement : une expérience de séjour unique, simple, pratique et chaleureuse. Situés à seulement 2 minutes du Puy du Fou, nos gîtes sont le point de départ idéal pour explorer la Vendée en toute sérénité. »*

**DES GÎTES CONÇUS POUR VOUS**
*« Nous avons imaginé chaque gîte comme nous aimerions nous-mêmes y séjourner : confort moderne, autonomie totale, cadre apaisant. Tout est pensé pour que vous puissiez profiter pleinement de vos vacances, sans stress ni contraintes. »*

Chaque gîte offre :
- Une cuisine équipée (réfrigérateur, plaques, four, vaisselle complète)
- Une literie de qualité hôtelière
- Une terrasse privative avec table, barbecue et mobilier d'extérieur
- Une décoration sobre, moderne et fonctionnelle
- Un accès Wi-Fi inclus et des jeux de société à disposition

---

## Page « La Boutique » (`/la-boutique/`)

**Titre d'onglet observé :** « La Boutique »
**Statut Yoast :** expression clé principale **non définie**

**Contenu :**
- Titre : « Commander aujourd'hui et livraison demain directement dans votre Gîte »
- Note : *« Si vous souhaitez autre chose envoyez un sms au 06 78 55 24 29 »*
- 4 catégories de produits (WooCommerce) :
  - Boissons (3 produits)
  - Plats Préparés (2 produits)
  - Produits du terroir (3 produits)
  - Sandwichs & Déjeuners (5 produits)
- Total : 13 produits référencés

**Doublons existants :** `/boutique/`, `/shop/`, `/commander/` — à fusionner en une seule URL canonique (voir cahier des charges section 10). Le détail des 13 fiches produits (nom, prix, description) n'a pas été extrait ici — à exporter directement depuis WooCommerce (Produits → Exporter) avant la migration pour ne perdre aucune fiche.

---

## Éléments transverses observés

- **Menu principal :** Accueil / Réserver / Nos Gîtes / Contact / A propos (+ icônes compte, recherche, panier)
- **Thème :** Envo Royal (Elementor), mention « Created with Envo Royal WordPress theme » en pied de page sur les pages secondaires
- **Panier :** un article présent lors du relevé (5,50 €) — état non significatif, lié à la session admin
- **Badge avis :** « EXCELLENT — Basée sur 47 avis » (widget Booking.com)

## Écarts à trancher avant de lancer le développement

1. Adresse du gîte : 3 route Saint-Michel-Mont-Mercure (accueil/contact) vs 5 Rte de Saint-Michel Mont Mercure (fiches réservation) — laquelle est correcte ?
2. Fiches gîtes : conserver 2 pages groupées (A/B/D et C) ou passer à 4 fiches individuelles (recommandé, voir plus haut) ?
3. Export complet des 13 fiches produits WooCommerce (textes, prix, photos) à fournir au développeur.
4. Confirmer si `/reserver/` est une redirection existante vers `/reserver-un-logement/` ou une URL supplémentaire à traiter.
5. Décider du sort de `/categorie/`, présente dans le sitemap sans page cœur de cible associée.
