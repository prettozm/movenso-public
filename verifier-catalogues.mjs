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
 *  - aucune SECONDE liste n'est réapparue ;
 *  - **le CONTENU de chaque conteneur correspond à ce que le catalogue annonce**
 *    (audit externe du 2026-08-21) : empreinte du fichier, manifeste interne
 *    ouvert et confronté à l'entrée, inventaire vérifié fichier par fichier.
 *
 * POURQUOI le contenu, et pas seulement les noms. Avant cette passe, la garde
 * vérifiait qu'un fichier ANNONCÉ est PRÉSENT — jamais qu'il est le bon.
 * Remplacer `packs/judo.movpack` par n'importe quel autre fichier du même nom
 * laissait le contrôle vert : un audit externe l'a relevé, et c'est exactement
 * le genre de propriété que ce projet préfère rendre impossible plutôt que
 * documenter. Le conteneur porte déjà tout ce qu'il faut pour le dire : son
 * manifeste déclare son identité, sa version éditoriale, son schéma, et
 * l'empreinte de chacun de ses fichiers.
 *
 * ZÉRO DÉPENDANCE, et c'est voulu : ce dépôt est une destination, pas un lieu
 * de travail — il n'a ni `package.json` ni `node_modules`, et lui en donner
 * pour lire un ZIP serait un coût de possession permanent. Le répertoire
 * central d'un ZIP se lit en une quarantaine de lignes, et `zlib` est dans
 * Node. « Non, quarante lignes suffisent. »
 */
import { readFile, access, readdir } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { inflateRawSync } from "node:zlib";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const sha256 = (octets) => createHash("sha256").update(octets).digest("hex");

/** Lit le répertoire central d'un ZIP et rend ses entrées, sans les
 *  décompresser. Volontairement minimal : pas de ZIP64 (les conteneurs
 *  publiés pèsent quelques Mo — la limite ~4 Go est une limite connue, D-166),
 *  pas de chiffrement, pas de descripteur de données. Tout ce qui sort de ce
 *  cadre lève, et un conteneur qui lève est un conteneur refusé. */
function lireZip(chemin) {
  const buf = readFileSync(chemin);
  let eocd = -1;
  for (let i = buf.length - 22; i >= 0 && i > buf.length - 65_557; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error("pas un ZIP (fin de répertoire central introuvable)");
  const nb = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  const entrees = new Map();
  for (let n = 0; n < nb; n++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error("répertoire central corrompu");
    const methode = buf.readUInt16LE(p + 10);
    const tailleCompressee = buf.readUInt32LE(p + 20);
    const lNom = buf.readUInt16LE(p + 28);
    const debutLocal = buf.readUInt32LE(p + 42);
    const nom = buf.toString("utf8", p + 46, p + 46 + lNom);
    // L'en-tête LOCAL redonne les longueurs de nom et d'extra, qui peuvent
    // différer de celles du répertoire central : c'est lui qui situe les octets.
    if (buf.readUInt32LE(debutLocal) !== 0x04034b50) throw new Error(`en-tête local absent pour ${nom}`);
    const debut = debutLocal + 30 + buf.readUInt16LE(debutLocal + 26) + buf.readUInt16LE(debutLocal + 28);
    entrees.set(nom, { methode, brut: buf.subarray(debut, debut + tailleCompressee) });
    p += 46 + lNom + buf.readUInt16LE(p + 30) + buf.readUInt16LE(p + 32);
  }
  return { entrees, octets: buf };
}

function contenuZip(e, nom) {
  if (e.methode === 0) return e.brut;
  if (e.methode === 8) return inflateRawSync(e.brut);
  throw new Error(`${nom} : méthode de compression ${e.methode} non gérée`);
}

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
    // FORME du lien, pas seulement son existence (§23 de l'audit du
    // 2026-08-21). `site.js` échappe le HTML de cette valeur mais ne dit rien
    // de son SCHÉMA : une entrée pointant `javascript:…`, `//ailleurs/x` ou
    // `../../etc` traverserait. Le catalogue est sous notre contrôle et la CSP
    // du site est stricte, donc le risque est faible — mais c'est la même
    // frontière hostile que l'app applique à ses imports, et la nommer coûte
    // trois lignes. Un pack se télécharge depuis `packs/<nom sûr>.movpack`.
    if (!/^packs\/[a-z0-9][a-z0-9-]*\.movpack$/.test(p.href))
      ecarts.push(`${nom} — href « ${p.href} » : un pack se sert depuis packs/<nom-sûr>.movpack, jamais une URL ni un chemin relatif`);
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
let build = null;
try {
  await access(join(ICI, "app"));
  try {
    build = JSON.parse(await readFile(join(ICI, "app", "build.json"), "utf8"));
  } catch {
    ecarts.push("app/ est publié mais app/build.json est absent — on ne peut dire ni quelle source correspond au binaire servi (GPLv3), ni quel schéma il sait lire (D-267)");
  }
  if (build) {
    // 0. La carte d'identité est LISIBLE. `versionMovpack: null` est passé
    //    ici sans un mot (D-285) : la constante avait déménagé dans le dépôt
    //    de travail (D-274), l'outil de dépôt écrivait `Number(undefined)` →
    //    null, et cette garde vérifiait tout — sauf la valeur. Une carte
    //    illisible ne prouve rien : elle se refuse, elle ne s'interprète pas.
    for (const champ of ["versionSchema", "versionMovpack"]) {
      if (!Number.isInteger(build[champ]) || build[champ] < 1) {
        ecarts.push(
          `app/build.json : ${champ} vaut ${JSON.stringify(build[champ])} — carte d'identité illisible,`
          + ` rien ne dit plus ce que l'app déployée sait lire (D-285). Rebâtir et redéposer.`,
        );
      }
    }
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

// LE CONTENU DE CHAQUE CONTENEUR (audit externe du 2026-08-21).
//
// Le catalogue annonçait une identité, une version éditoriale et un schéma que
// PERSONNE ne confrontait au fichier servi. Le manifeste interne les déclare :
// on l'ouvre et on compare. Puis on vérifie l'inventaire — taille et empreinte
// de chaque fichier déclaré, et aucun fichier non déclaré — exactement ce que
// fait l'application à l'import (lot 8B §15). Ce que la page publique promet
// est désormais tenu par la même mesure que ce que l'app accepte.
for (const p of catalogue) {
  if (!p?.href || !/^packs\/[a-z0-9][a-z0-9-]*\.movpack$/.test(p.href)) continue; // déjà signalé plus haut
  const nom = p.id ?? p.href;
  let zip;
  try {
    zip = lireZip(join(ICI, p.href));
  } catch (e) {
    ecarts.push(`${nom} — ${p.href} n'est pas un conteneur lisible : ${e.message}`);
    continue;
  }

  // Empreinte du conteneur ENTIER, quand le catalogue l'annonce. C'est le seul
  // contrôle qui attrape un fichier remplacé par une AUTRE version cohérente
  // du même pack, ou tronqué en chemin — les contrôles internes, eux, ne
  // savent dire que « ce conteneur est cohérent avec lui-même ».
  const empreinte = sha256(zip.octets);
  if (typeof p.sha256 !== "string" || !/^[0-9a-f]{64}$/.test(p.sha256)) {
    ecarts.push(`${nom} — le catalogue n'annonce pas l'empreinte du conteneur (« sha256 »). Celle du fichier servi : ${empreinte}`);
  } else if (p.sha256 !== empreinte) {
    ecarts.push(`${nom} — ${p.href} ne porte PAS l'empreinte annoncée : catalogue ${p.sha256}, fichier ${empreinte}`);
  }

  const brutManifeste = zip.entrees.get("manifeste.json");
  if (!brutManifeste) {
    ecarts.push(`${nom} — ${p.href} n'a pas de manifeste.json : ce n'est pas un .movpack`);
    continue;
  }
  let m;
  try {
    m = JSON.parse(Buffer.from(contenuZip(brutManifeste, "manifeste.json")).toString("utf8"));
  } catch (e) {
    ecarts.push(`${nom} — manifeste.json illisible : ${e.message}`);
    continue;
  }

  // IDENTITÉ : ce que le catalogue dit du pack doit être ce que le pack dit
  // de lui-même. `packId` est la clé d'idempotence au réimport (D-015) : une
  // divergence ici ferait installer un pack en croyant en mettre un autre à
  // jour — ou l'inverse, le doublonner (l'incident D-247).
  if (m.format !== "movpack") ecarts.push(`${nom} — manifeste : format « ${m.format} » au lieu de « movpack »`);
  if (m.portee !== "discipline") ecarts.push(`${nom} — manifeste : portée « ${m.portee} » — on ne publie que des packs de discipline, pas une sauvegarde`);
  if (p.packId !== undefined && m.id !== p.packId)
    ecarts.push(`${nom} — identité DIVERGENTE : catalogue « ${p.packId} », conteneur « ${m.id} » (D-015/D-247 : la clé d'idempotence au réimport)`);
  if (p.versionEditoriale !== undefined && m.versionEditoriale !== p.versionEditoriale)
    ecarts.push(`${nom} — version éditoriale divergente : catalogue ${p.versionEditoriale}, conteneur ${m.versionEditoriale} (l'app dirait « à jour » à tort, D-307)`);
  if (m.versionSchema !== p.versionSchema)
    ecarts.push(`${nom} — schéma divergent : catalogue ${p.versionSchema}, conteneur ${m.versionSchema}`);
  if (build && Number.isInteger(build.versionMovpack) && Number.isInteger(m.version) && m.version > build.versionMovpack)
    ecarts.push(
      `${nom} — conteneur en version movpack ${m.version} alors que l'app publiée lit ${build.versionMovpack}`
      + ` — elle REFUSERAIT ce pack. Déployer l'application AVANT ou AVEC les packs.`,
    );

  // INVENTAIRE : taille et empreinte de chaque fichier déclaré, plus l'absence
  // de passager clandestin. `manifeste.json` ne s'inventorie pas lui-même.
  if (!Array.isArray(m.fichiers) || m.fichiers.length === 0) {
    ecarts.push(`${nom} — manifeste sans inventaire « fichiers » : rien ne permet de vérifier l'intégrité interne`);
    continue;
  }
  const declares = new Set(["manifeste.json"]);
  for (const f of m.fichiers) {
    declares.add(f?.chemin);
    const e = zip.entrees.get(f?.chemin);
    if (!e) {
      ecarts.push(`${nom} — l'inventaire déclare « ${f?.chemin} », absent du conteneur`);
      continue;
    }
    let octets;
    try {
      octets = contenuZip(e, f.chemin);
    } catch (err) {
      ecarts.push(`${nom} — « ${f.chemin} » indécompressable : ${err.message}`);
      continue;
    }
    if (octets.length !== f.taille)
      ecarts.push(`${nom} — « ${f.chemin} » : ${octets.length} octets, l'inventaire en annonce ${f.taille}`);
    const reel = sha256(octets);
    if (reel !== f.sha256)
      ecarts.push(`${nom} — « ${f.chemin} » : empreinte ${reel}, l'inventaire annonce ${f.sha256}`);
  }
  for (const chemin of zip.entrees.keys()) {
    if (!declares.has(chemin))
      ecarts.push(`${nom} — « ${chemin} » est dans le conteneur mais n'est déclaré par aucun inventaire`);
  }
}

// L'ARCHIVE DE SOURCE : son empreinte, quand `build.json` l'annonce. Rien
// DANS un tar.gz ne déclare son propre condensat — contrairement à un
// `.movpack`, qui porte son manifeste : c'est le seul endroit de cette garde
// où un champ nouveau était indispensable, pas un confort.
if (build?.source) {
  try {
    const octets = readFileSync(join(ICI, "app", build.source));
    const empreinte = sha256(octets);
    if (typeof build.sourceSha256 !== "string" || !/^[0-9a-f]{64}$/.test(build.sourceSha256)) {
      ecarts.push(`app/build.json n'annonce pas l'empreinte de sa source (« sourceSha256 »). Celle du fichier servi : ${empreinte}`);
    } else if (build.sourceSha256 !== empreinte) {
      ecarts.push(
        `app/build.json : la source servie ne porte PAS l'empreinte annoncée — annoncée ${build.sourceSha256},`
        + ` réelle ${empreinte}. La source correspondante (GPLv3) n'est pas celle qui est promise.`,
      );
    }
  } catch { /* absence déjà signalée plus haut */ }
}

if (ecarts.length) {
  console.error(`verifier-catalogues : ${ecarts.length} écart(s)\n`);
  for (const e of ecarts) console.error(`  ✕ ${e}`);
  process.exit(1);
}

console.log(
  `verifier-catalogues : ${catalogue.length} packs annoncés, autant de fichiers présents, aucune seconde liste ;`
  + " chaque conteneur ouvert — empreinte, identité, version éditoriale, schéma et inventaire fichier par fichier ;"
  + " source correspondante vérifiée à l'empreinte.",
);
