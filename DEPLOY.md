# Déploiement de la nouvelle page Movenso

Ce dossier contient uniquement les fichiers à ajouter ou remplacer à la racine du dépôt `prettozm/movenso-public`.

## Fichiers remplacés

- `index.html`
- `privacy-policy.html`

## Fichiers ajoutés

- `styles.css`
- `site.js`
- `packs.js`
- `assets/movenso-mark.svg`

## Fichiers et dossiers à conserver dans le dépôt

- `app/` : version navigateur actuelle de Movenso
- `packs/` : fichiers `.movpack`
- `LICENSE`
- `.nojekyll`

## Ajouter un pack

1. Déposer le fichier dans `packs/`.
2. Ajouter une entrée dans `packs.js`.
3. Vérifier le lien, la version, la date, le mainteneur et la licence.

Le catalogue se met à jour sans modification de `index.html`.

## Activer Google Play

Dans `index.html`, remplacer le bloc :

```html
<span class="button button--primary" aria-disabled="true">Bientôt disponible</span>
```

par un lien réel :

```html
<a class="button button--primary" href="URL_GOOGLE_PLAY">Installer depuis Google Play</a>
```

## Prévisualiser localement

Depuis le dossier :

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080/`.

Les liens vers `app/` et les fichiers de `packs/` fonctionneront uniquement si ces dossiers sont également présents.
