(() => {
  "use strict";

  const packs = Array.isArray(window.MOVENSO_PACKS) ? window.MOVENSO_PACKS : [];
  const list = document.querySelector("#pack-list");
  const empty = document.querySelector("#pack-empty");
  const search = document.querySelector("#pack-search");
  const discipline = document.querySelector("#pack-discipline");
  const count = document.querySelector("#pack-count");

  if (!list || !empty || !search || !discipline || !count) return;

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const normalize = (value) => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const disciplines = [...new Set(packs.map((pack) => pack.discipline).filter(Boolean))].sort();
  for (const name of disciplines) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    discipline.append(option);
  }

  function render() {
    const query = normalize(search.value.trim());
    const selectedDiscipline = discipline.value;

    const visible = packs.filter((pack) => {
      const haystack = normalize([
        pack.title,
        pack.discipline,
        pack.summary,
        pack.maintainer,
        ...(pack.features || [])
      ].join(" "));
      return (!query || haystack.includes(query)) &&
        (!selectedDiscipline || pack.discipline === selectedDiscipline);
    });

    list.innerHTML = visible.map((pack) => `
      <article class="pack-card">
        <div class="pack-card__topline">
          <span class="status status--${escapeHtml(pack.type)}">${escapeHtml(pack.statusLabel)}</span>
          <span class="pack-card__version">v${escapeHtml(pack.version)}</span>
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(pack.discipline)}</p>
          <h3>${escapeHtml(pack.title)}</h3>
          <p class="pack-card__summary">${escapeHtml(pack.summary)}</p>
        </div>
        <ul class="feature-tags" aria-label="Contenu du pack">
          ${(pack.features || []).map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}
        </ul>
        <dl class="pack-meta">
          <div><dt>Contenu</dt><dd>${escapeHtml(pack.itemCount)}</dd></div>
          <div><dt>Maintenu par</dt><dd>${escapeHtml(pack.maintainer)}</dd></div>
          <div><dt>Mise à jour</dt><dd>${escapeHtml(pack.updatedAt)}</dd></div>
          <div><dt>Licence</dt><dd>${escapeHtml(pack.license)}</dd></div>
        </dl>
        <div class="pack-card__actions">
          <a class="button button--primary" href="${escapeHtml(pack.href)}" download="${escapeHtml(pack.downloadName)}">
            Télécharger le pack
          </a>
          <span class="file-type">.movpack</span>
        </div>
      </article>
    `).join("");

    empty.hidden = visible.length !== 0;
    count.textContent = visible.length === 1 ? "1 pack disponible" : `${visible.length} packs disponibles`;
  }

  search.addEventListener("input", render);
  discipline.addEventListener("change", render);
  render();
})();
