# Déploiement

1. Copier les fichiers à la racine de `movenso-public`.
2. Conserver les dossiers existants `app/` et `packs/`.
3. Renseigner l’URL Google Play dans `site-config.js` lorsque la fiche sera publiée.
4. Vérifier le catalogue : `node verifier-catalogues.mjs` (voir « Publier un pack »).

## Publier l'application

Le site distribue une application sous **GPL v3** : sa **source correspondante**
doit l'accompagner, sinon la licence n'est pas respectée. Déployer `app/`, c'est
donc déposer deux choses :

1. le build (`dist/` de l'artefact CI du commit) dans `app/` ;
2. la source de **ce commit précis** :

```
node tools/source-du-build.mjs --vers ../movenso-public
```

Le fichier porte le SHA que l'application affiche dans **Plus › À propos** :
n'importe qui peut ainsi vérifier que la source proposée est celle du binaire
servi. `verifier-catalogues.mjs` refuse un `app/` publié sans sa source.

## Publier un pack

Il n'existe **qu'un seul catalogue** : `packs/index.json`. La page web
(`packs.html`) et l'application (« Packs officiels ») le lisent toutes les
deux. Publier un pack, c'est donc :

1. déposer le `.movpack` dans `packs/` ;
2. mettre à jour son entrée dans `packs/index.json` (`version`, `updatedAt`,
   `itemCount`, `summary`) ;
3. contrôler :

```
node verifier-catalogues.mjs
```

La garde vérifie les champs requis, l'unicité des ids, qu'aucun fichier
annoncé ne manque, qu'aucun fichier publié n'est oublié — et qu'aucune
**seconde liste** n'est réapparue.

Historique : jusqu'au 2026-08-09 il y avait deux listes, `packs.js` pour la
page et `packs/index.json` pour l'app. Cinq packs n'ont été publiés que dans
la seconde : la page a continué d'annoncer les anciennes versions tout en
distribuant les nouvelles. Les deux listes n'en font plus qu'une.
