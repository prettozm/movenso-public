# Déploiement

Ce dépôt est une **destination** : on n'y développe pas, on y dépose un build
déjà vérifié. Les conditions de publication (quand on va direct sur `main`,
quand on passe par une PR) vivent dans `CLAUDE.md` du dépôt `movenso`,
section « Deux dépôts, deux régimes » — un seul lieu, pas deux. Ce fichier-ci
ne dit que les **gestes**.

Le contrôle, dans tous les cas, est le même et se passe **après** dépôt :

```
node verifier-catalogues.mjs
```

## Publier l'application

Le site distribue une application sous **GPL v3** : sa **source correspondante**
doit l'accompagner, sinon la licence n'est pas respectée. Déployer `app/`, c'est
donc déposer deux choses :

1. le build (`dist/` de l'artefact CI du commit) dans `app/` ;
2. la source de **ce commit précis**, depuis `movenso` :

```
npm run deposer -- --vers ../movenso-public
```

Ce geste dépose **application, packs et source ensemble** (D-267), rejoue
`verifier:release` **avant**, et la garde du site **après**.

La commande dépose l'archive `app/source/movenso-source-<sha>.tar.gz` et écrit
la **carte d'identité du déploiement**, `app/build.json` : version, commit,
`versionSchema`, `versionMovpack`, nom de l'archive. Elle **refuse un dépôt
sale** — une source qui ne correspond à aucun commit n'est pas une source
correspondante.

Le SHA est celui que l'application affiche dans **Plus › À propos** :
n'importe qui peut ainsi vérifier que la source proposée est celle du binaire
servi.

## Publier un pack

Il n'existe **qu'un seul catalogue** : `packs/index.json`. La page web
(`packs.html`) et l'application (« Packs officiels ») le lisent toutes les
deux. Il n'est **pas écrit à la main** : la chaîne de publication de `movenso`
construit les conteneurs, les **relit**, et en dérive les compteurs et le
catalogue :

```
npm run publier                          # produit dans dist-publication/
npm run verifier:release                 # tout est-il cohérent ?
npm run deposer -- --vers ../movenso-public   # le seul geste qui écrit ici
```

## Ce que la garde refuse

- un champ requis manquant, un id en double ;
- un fichier annoncé absent — ou un `.movpack` publié que personne n'annonce ;
- le retour d'une **seconde liste** (`packs.js`) ;
- un `app/` publié sans `build.json`, ou dont la source annoncée est absente ;
- **un pack en schéma N+1 devant une application restée en schéma N.** C'est le
  seul écart qui casse le produit pour de vrai : l'application refuserait les
  packs qu'elle propose elle-même. Déployer l'application **avant ou avec** les
  packs, jamais après.

Historique : jusqu'au 2026-08-09 il y avait deux listes, `packs.js` pour la
page et `packs/index.json` pour l'app. Cinq packs n'ont été publiés que dans
la seconde : la page a continué d'annoncer les anciennes versions tout en
distribuant les nouvelles. Les deux listes n'en font plus qu'une.
