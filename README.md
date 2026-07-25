# Proposition de site public Movenso

Cette proposition transforme le site en portail multi-page, avec une séparation claire entre découverte, application, packs, usage sur ordinateur et contribution communautaire.

## Pages principales

- `index.html` — accueil visuel et compréhension immédiate du produit
- `application.html` — parcours, fonctions et modes d’accès
- `packs.html` — catalogue filtrable des starter packs et packs communautaires
- `ordinateur.html` — version navigateur et perspective d’une version portable
- `communaute.html` — contribution, maintenance et règles de publication

## Pages secondaires

- `privacy-policy.html` — politique de confidentialité à finaliser avant publication
- `securite.html` — sécurité de pratique et responsabilité des contenus
- `mentions.html` — mentions éditoriales à compléter

## Contenu dynamique

- `site-config.js` centralise les liens Google Play, version web, versions APK et GitHub.
- `packs.js` contient le catalogue. Ajouter un pack consiste à ajouter une entrée dans ce tableau et déposer le fichier correspondant dans `packs/`.
- `site.js` gère la navigation mobile, la galerie d’images et le rendu du catalogue.

## Visuels

Les captures présentes dans `assets/screens/` ont été générées à partir de l’interface réelle de Movenso avec une bibliothèque de démonstration. Elles sont conçues pour présenter l’usage sans dépendre du contenu définitif des starter packs.

## Important

Cette archive ne contient pas les dossiers existants `app/` et `packs/`. Elle est conçue pour être déposée à la racine du dépôt public en conservant ces deux dossiers.
