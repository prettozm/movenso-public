(() => {
  "use strict";
  const config = window.MOVENSO_CONFIG || {};

  // Menu mobile
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.hidden = open;
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) { nav.hidden = true; menuButton.setAttribute("aria-expanded", "false"); }
    });
  }

  // Destinations centralisées (site-config.js)
  const setLink = (selector, url, fallbackLabel) => {
    document.querySelectorAll(selector).forEach((link) => {
      if (url) {
        link.href = url;
        link.removeAttribute("aria-disabled");
        link.classList.remove("is-disabled");
      } else {
        link.removeAttribute("href");
        link.setAttribute("aria-disabled", "true");
        link.classList.add("is-disabled");
        if (fallbackLabel) link.querySelector("[data-label]")?.replaceChildren(fallbackLabel);
      }
    });
  };
  setLink("[data-link='play']", config.playStoreUrl, "Bientôt sur Google Play");
  setLink("[data-link='web']", config.webAppUrl);
  setLink("[data-link='releases']", config.releasesUrl);
  setLink("[data-link='repository']", config.repositoryUrl);
  setLink("[data-link='propose-pack']", config.packProposalUrl);
  setLink("[data-link='issue']", config.issueUrl);

  // Catalogue de packs (texte, sans image)
  const list = document.querySelector("#pack-list");
  if (list) {
    const packs = Array.isArray(window.MOVENSO_PACKS) ? window.MOVENSO_PACKS : [];
    const search = document.querySelector("#pack-search");
    const discipline = document.querySelector("#pack-discipline");
    const count = document.querySelector("#pack-count");
    const empty = document.querySelector("#pack-empty");
    const esc = (v) => String(v ?? "")
      .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
    const norm = (v) => String(v || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    [...new Set(packs.map((p) => p.discipline).filter(Boolean))].sort().forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name; opt.textContent = name; discipline?.append(opt);
    });

    const render = () => {
      const query = norm(search?.value.trim());
      const selected = discipline?.value || "";
      const visible = packs.filter((p) => {
        const hay = norm([p.title, p.discipline, p.summary, p.maintainer, ...(p.features || [])].join(" "));
        return (!query || hay.includes(query)) && (!selected || p.discipline === selected);
      });
      list.innerHTML = visible.map((p) => `
        <article class="pack-card">
          <span class="pack-status">${esc(p.statusLabel)}</span>
          <p class="eyebrow">${esc(p.discipline)}</p>
          <h2>${esc(p.title)}</h2>
          <p class="muted">${esc(p.summary)}</p>
          <ul class="tag-list">${(p.features || []).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          <div class="pack-quick"><span><strong>${esc(p.itemCount)}</strong></span><span>v${esc(p.version)}</span><span>${esc(p.language)}</span></div>
          <div class="pack-actions">
            <a class="button button--primary" href="${esc(p.href)}" download="${esc(p.downloadName)}">Télécharger</a>
            <details class="pack-details">
              <summary>Détails du pack</summary>
              <dl>
                <div><dt>Maintenu par</dt><dd>${esc(p.maintainer)}</dd></div>
                <div><dt>Mise à jour</dt><dd>${esc(p.updatedAt)}</dd></div>
                <div><dt>Licence</dt><dd>${esc(p.license)}</dd></div>
              </dl>
              <p class="muted">${esc(p.note)}</p>
            </details>
          </div>
        </article>`).join("");
      if (empty) empty.hidden = visible.length > 0;
      if (count) count.textContent = visible.length === 1 ? "1 pack disponible" : `${visible.length} packs disponibles`;
    };
    search?.addEventListener("input", render);
    discipline?.addEventListener("change", render);
    render();
  }
})();
