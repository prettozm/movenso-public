/**
 * Garde du CATALOGUE UNIQUE (D-250 → D-252).
 *
 * Il n'existe qu'une liste des packs publiés : `packs/index.json`. La page web
 * (`packs.html` via `site.js`) et l'application (« Packs officiels ») la
 * lisent toutes les deux. Avant, il y en avait deux — `packs.js` pour la page,
 * `index.json` pour l'app — et elles ont divergé : la page a annoncé Judo
 * 0.6.0 et Jujitsu 0.1.0 pendant qu'elle distribuait les versions enrichies.
 *
 *   node verifier-catalogues.mjs
 *
 * Contrôle :
 *  - le catalogue est lisible, les ids sont uniques, les champs requis sont là ;
 *  - chaque `href` annoncé désigne un fichier réellement présent ;
 *  - chaque `.movpack` présent est réellement annoncé (l'oubli inverse) ;
 *  - aucune SECONDE liste n'est réapparue.
 */
import { readFile, access, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const ICI = dirname(fileURLToPath(import.meta.url));
const ecarts = [];

// Une seconde liste ne doit pas renaître : c'est la cause de D-250.
for (const orphelin of ["packs.js"]) {
  try {
    await access(join(ICI, orphelin));
    ecarts.push(`${orphelin} est de retour — il n'existe qu'un catalogue, packs/index.json (D-252). Deux listes finissent toujours par diverger.`);
  } catch { /* absent : c'est ce qu'on veut */ }
}

let catalogue = [];
try {
  catalogue = JSON.parse(await readFile(join(ICI, "packs", "index.json"), "utf8"));
  if (!Array.isArray(catalogue)) throw new Error("le catalogue n'est pas une liste");
} catch (e) {
  console.error(`verifier-catalogues : packs/index.json illisible — ${e.message}`);
  process.exit(1);
}

const REQUIS = ["id", "title", "version", "itemCount", "summary", "href", "downloadName"];
const vus = new Set();

for (const p of catalogue) {
  const nom = p?.id ?? "(entrée sans id)";
  for (const champ of REQUIS) {
    if (typeof p?.[champ] !== "string" || !p[champ].trim())
      ecarts.push(`${nom} — champ requis manquant ou vide : « ${champ} »`);
  }
  if (p?.id) {
    if (vus.has(p.id)) ecarts.push(`${p.id} — id en double : l'app installerait deux fois la même discipline`);
    vus.add(p.id);
  }
  if (p?.href) {
    try {
      await access(join(ICI, p.href));
    } catch {
      ecarts.push(`${nom} — le fichier annoncé est absent : ${p.href}`);
    }
  }
}

// L'oubli inverse : un pack déposé dans packs/ que personne n'annonce.
const annonces = new Set(catalogue.map((p) => basename(p?.href ?? "")));
for (const f of (await readdir(join(ICI, "packs"))).filter((f) => f.endsWith(".movpack"))) {
  if (!annonces.has(f)) ecarts.push(`packs/${f} est publié mais n'apparaît dans aucune entrée du catalogue`);
}

// CARTE D'IDENTITÉ DU DÉPLOIEMENT : `app/build.json` (D-265 → D-267).
//
// Le site distribue une application sous GPLv3 : le droit d'étudier et de
// modifier n'a de sens que si la source du binaire SERVI est là. Et il
// distribue des packs : encore faut-il que l'app déployée sache les lire.
// `build.json` dit les deux — quel commit, quelle source, quel schéma — et
// c'est ce qui permet de refuser une publication à moitié faite.
try {
  await access(join(ICI, "app"));
  let build = null;
  try {
    build = JSON.parse(await readFile(join(ICI, "app", "build.json"), "utf8"));
  } catch {
    ecarts.push("app/ est publié mais app/build.json est absent — on ne peut dire ni quelle source correspond au binaire servi (GPLv3), ni quel schéma il sait lire (D-267)");
  }
  if (build) {
    // 1. La source correspondante existe bel et bien.
    try {
      await access(join(ICI, "app", build.source));
    } catch {
      ecarts.push(`app/build.json annonce « ${build.source} » mais le fichier est absent — la source annoncée n'est pas là`);
    }
    // 2. Le BINAIRE DÉPLOYÉ dit le même commit que sa carte d'identité.
    //    Sans ce contrôle, `build.json` ne prouve rien : on peut déposer la
    //    source du commit N à côté du build du commit N-1 — c'est arrivé, le
    //    build de `app/` embarquant un SHA de la veille pendant que l'archive
    //    portait celui du jour. Le SHA est injecté au build (`__APP_COMMIT__`)
    //    et c'est celui que l'app affiche dans Plus › À propos : il suffit de
    //    le chercher dans les fichiers servis.
    let annonce = false;
    try {
      for (const f of await readdir(join(ICI, "app", "assets"))) {
        if (!f.endsWith(".js")) continue;
        if ((await readFile(join(ICI, "app", "assets", f), "utf8")).includes(build.commit)) { annonce = true; break; }
      }
    } catch { /* pas d'assets : le premier contrôle l'aura déjà dit */ }
    if (!annonce) {
      ecarts.push(
        `app/build.json annonce le commit ${build.commit} mais aucun fichier servi ne le porte`
        + ` — le build déployé vient d'un AUTRE commit que la source publiée (GPLv3). Rebâtir avant de déposer.`,
      );
    }

    // 3. L'app SAIT LIRE les packs qu'on publie devant elle. Publier des packs
    //    en schéma N+1 devant une app restée en schéma N rend le catalogue
    //    inutilisable : l'app refuse les packs qu'elle propose. C'est le seul
    //    écart de cette liste qui casse le produit pour de vrai.
    for (const p of catalogue) {
      if (typeof p?.versionSchema !== "number") {
        ecarts.push(`${p?.id} : le catalogue ne dit pas le schéma du pack — impossible de vérifier que l'app sait le lire (D-267)`);
      } else if (p.versionSchema > build.versionSchema) {
        ecarts.push(
          `${p.id} est en schéma ${p.versionSchema} alors que l'app publiée lit le schéma ${build.versionSchema}`
          + ` — elle REFUSERAIT ce pack. Déployer l'application AVANT ou AVEC les packs, jamais après.`,
        );
      }
    }
  }
} catch { /* pas d'app déployée ici : rien à accompagner */ }

if (ecarts.length) {
  console.error(`verifier-catalogues : ${ecarts.length} écart(s)\n`);
  for (const e of ecarts) console.error(`  ✕ ${e}`);
  process.exit(1);
}

console.log(`verifier-catalogues : catalogue unique valide — ${catalogue.length} packs annoncés, autant de fichiers présents, aucune seconde liste.`);
