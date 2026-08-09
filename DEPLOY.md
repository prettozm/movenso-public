# Déploiement

1. Copier les fichiers à la racine de `movenso-public`.
2. Conserver les dossiers existants `app/` et `packs/`.
3. Renseigner l’URL Google Play dans `site-config.js` lorsque la fiche sera publiée.
4. Vérifier que le fichier du starter pack indiqué dans `packs.js` existe.

## Publier un pack

Un pack est décrit à **deux** endroits, qui doivent rester d'accord :

- `packs.js` — catalogue de la **page web** (`packs.html`) ;
- `packs/index.json` — catalogue lu par l'**application** (« Packs officiels »).

Mettre à jour les deux (`version`, `itemCount`, `summary`), puis contrôler :

```
node verifier-catalogues.mjs
```

Le 8 août 2026, cinq packs n'ont été publiés que dans `index.json` : la page
web a continué d'annoncer les anciennes versions tout en distribuant les
nouvelles. C'est ce que cette garde empêche de refaire silencieusement.
