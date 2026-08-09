/**
 * Garde : les DEUX catalogues doivent décrire les mêmes packs.
 *
 * `packs.js` sert la page web (packs.html) ; `packs/index.json` sert l'écran
 * « Packs officiels » de l'application. Ils décrivent les mêmes fichiers.
 * Le 8 août 2026, cinq packs ont été publiés en ne mettant à jour que
 * `index.json` : la page annonçait Judo 0.6.0 / Jujitsu 0.1.0 tout en
 * distribuant les versions enrichies. Rien ne le disait.
 *
 *   node verifier-catalogues.mjs
 *
 * Contrôle : même ensemble d'ids, mêmes version / itemCount / summary / href,
 * et un fichier de pack réellement présent derrière chaque href.
 */
import { readFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ICI = dirname(fileURLToPath(import.meta.url));
const ecarts = [];

// packs.js déclare `window.MOVENSO_PACKS = [...]` — on l'évalue avec un
// `window` factice plutôt que de le parser à l'expression régulière.
const source = await readFile(join(ICI, "packs.js"), "utf8");
const window = {};
new Function("window", source)(window);
const web = window.MOVENSO_PACKS ?? [];

const app = JSON.parse(await readFile(join(ICI, "packs", "index.json"), "utf8"));

const idsWeb = web.map((p) => p.id).sort();
const idsApp = app.map((p) => p.id).sort();
if (idsWeb.join("|") !== idsApp.join("|"))
  ecarts.push(`les deux catalogues ne listent pas les mêmes packs :\n    packs.js        : ${idsWeb.join(", ")}\n    packs/index.json: ${idsApp.join(", ")}`);

for (const p of web) {
  const q = app.find((x) => x.id === p.id);
  if (!q) continue; // déjà signalé par l'écart d'ensemble
  for (const champ of ["version", "itemCount", "summary", "href"]) {
    if (p[champ] !== q[champ])
      ecarts.push(`${p.id} — « ${champ} » diffère :\n    packs.js        : ${JSON.stringify(p[champ])}\n    packs/index.json: ${JSON.stringify(q[champ])}`);
  }
  try {
    await access(join(ICI, p.href));
  } catch {
    ecarts.push(`${p.id} — le fichier annoncé est absent : ${p.href}`);
  }
}

if (ecarts.length) {
  console.error(`verifier-catalogues : ${ecarts.length} écart(s) entre packs.js et packs/index.json\n`);
  for (const e of ecarts) console.error(`  ✕ ${e}`);
  console.error("\nToute publication de pack met à jour LES DEUX catalogues.");
  process.exit(1);
}

console.log(`verifier-catalogues : ${web.length} packs, les deux catalogues concordent (version, compteurs, résumé, fichier présent).`);
