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

// La SOURCE correspondante doit accompagner le binaire (S4.7/D-265). Le site
// distribue une application sous GPLv3 : le droit d'étudier et de modifier n'a
// de sens que si la source du binaire SERVI est là. `app/source/COMMIT` dit
// quel commit est déployé ; l'archive qui porte ce commit doit exister.
try {
  await access(join(ICI, "app"));
  let commit = null;
  try {
    commit = (await readFile(join(ICI, "app", "source", "COMMIT"), "utf8")).trim();
  } catch {
    ecarts.push("app/ est publié mais app/source/COMMIT est absent — impossible de dire quelle source correspond au binaire servi (GPLv3, S4.7)");
  }
  if (commit) {
    try {
      await access(join(ICI, "app", "source", `movenso-source-${commit}.tar.gz`));
    } catch {
      ecarts.push(`app/source/COMMIT annonce « ${commit} » mais movenso-source-${commit}.tar.gz est absent — la source annoncée n'est pas là`);
    }
  }
} catch { /* pas d'app déployée ici : rien à accompagner */ }

if (ecarts.length) {
  console.error(`verifier-catalogues : ${ecarts.length} écart(s)\n`);
  for (const e of ecarts) console.error(`  ✕ ${e}`);
  process.exit(1);
}

console.log(`verifier-catalogues : catalogue unique valide — ${catalogue.length} packs annoncés, autant de fichiers présents, aucune seconde liste.`);
