# Déploiement sur GitHub Pages

## 1. Préserver les contenus existants

Conserver impérativement :

- `app/` — version navigateur de Movenso ;
- `packs/` — fichiers `.movpack` téléchargeables.

Copier ensuite le contenu de cette proposition à la racine du dépôt `movenso-public`.

## 2. Configurer les destinations

Modifier `site-config.js` :

```js
window.MOVENSO_CONFIG = {
  playStoreUrl: "URL_GOOGLE_PLAY",
  webAppUrl: "app/",
  releasesUrl: "https://github.com/prettozm/movenso-public/releases",
  repositoryUrl: "https://github.com/prettozm/movenso-public",
  packProposalUrl: "https://github.com/prettozm/movenso-public/issues/new?title=Proposition+de+pack+Movenso",
  issueUrl: "https://github.com/prettozm/movenso-public/issues/new"
};
```

Tant que `playStoreUrl` reste vide, les boutons Google Play affichent « Bientôt sur Google Play » et sont désactivés.

## 3. Ajouter un pack

1. Déposer le fichier dans `packs/`.
2. Ajouter son illustration dans `assets/` si nécessaire.
3. Ajouter une entrée dans `packs.js`.
4. Renseigner l’auteur, la version, la date, la licence et le statut.

Exemple :

```js
{
  id: "karate-shotokan-1",
  title: "Karaté — Shotokan",
  discipline: "Karaté",
  summary: "Pack de démarrage à personnaliser.",
  type: "community",
  statusLabel: "Pack communautaire",
  version: "1.0.0",
  updatedAt: "25 juillet 2026",
  itemCount: "40 techniques",
  language: "Français",
  maintainer: "Nom du mainteneur",
  license: "Licence déclarée",
  features: ["Techniques", "Niveaux"],
  image: "assets/pack-karate.svg",
  href: "packs/karate-shotokan-1.movpack",
  downloadName: "karate-shotokan-1.movpack",
  note: "Contenu publié sous la responsabilité de son auteur."
}
```

## 4. Publier l’APK alternative

Google Play reste le canal Android officiel. La copie signée et versionnée peut être jointe à une GitHub Release. Le lien « Télécharger l’APK signée » pointe vers la page des releases, afin d’éviter de figer une URL à chaque version.

Pour chaque release, publier au minimum :

- numéro de version ;
- date ;
- fichier APK signé ;
- empreinte SHA-256 ;
- notes de version ;
- indication qu’il s’agit de la copie de la version Google Play correspondante.

## 5. Vérifier les pages légales

Avant publication Google Play, compléter dans `privacy-policy.html` et `mentions.html` :

- identité de l’éditeur ;
- responsable de publication ;
- adresse de contact ;
- éventuelles informations d’immatriculation ;
- politique réellement retenue pour les journaux, diagnostics et services externes.

Ces pages sont des propositions éditoriales, pas une validation juridique.

## 6. Tester localement

Depuis la racine du site :

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080/`.

Éviter le simple double-clic sur `index.html` pour la recette de la version navigateur : certaines fonctions web dépendent d’un contexte HTTP ou HTTPS.

## 7. Déployer

Après validation :

```bash
git add .
git commit -m "Refonte du portail public Movenso"
git push
```

GitHub Pages republiera le site selon la configuration actuelle du dépôt.
