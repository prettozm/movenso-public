(() => {
  "use strict";
  const config = window.MOVENSO_CONFIG || {};
  document.querySelectorAll("[data-year]").forEach((node) => node.textContent = new Date().getFullYear());

  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.hidden = open;
      document.body.classList.toggle("menu-open", !open);
    });
  }

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

  const dialog = document.querySelector("#image-dialog");
  if (dialog) {
    const image = dialog.querySelector("img");
    const caption = dialog.querySelector("[data-dialog-caption]");
    document.querySelectorAll("[data-lightbox]").forEach((button) => {
      button.addEventListener("click", () => {
        const source = button.querySelector("img");
        if (!source) return;
        image.src = source.currentSrc || source.src;
        image.alt = source.alt;
        caption.textContent = button.dataset.caption || source.alt;
        dialog.showModal();
      });
    });
    dialog.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    });
  }

  const list = document.querySelector("#pack-list");
  if (list) {
    const packs = Array.isArray(window.MOVENSO_PACKS) ? window.MOVENSO_PACKS : [];
    const search = document.querySelector("#pack-search");
    const discipline = document.querySelector("#pack-discipline");
    const count = document.querySelector("#pack-count");
    const empty = document.querySelector("#pack-empty");
    const escapeHtml = (value) => String(value ?? "")
      .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
    const normalize = (value) => String(value || "").normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "").toLowerCase();

    [...new Set(packs.map((pack) => pack.discipline).filter(Boolean))].sort().forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      discipline?.append(option);
    });

    const render = () => {
      const query = normalize(search?.value.trim());
      const selected = discipline?.value || "";
      const visible = packs.filter((pack) => {
        const haystack = normalize([pack.title, pack.discipline, pack.summary, pack.maintainer, ...(pack.features || [])].join(" "));
        return (!query || haystack.includes(query)) && (!selected || pack.discipline === selected);
      });
      list.innerHTML = visible.map((pack) => `
        <article class="pack-card">
          <div class="pack-card__visual">
            <img src="${escapeHtml(pack.image)}" alt="" loading="lazy">
            <span class="pack-status pack-status--${escapeHtml(pack.type)}">${escapeHtml(pack.statusLabel)}</span>
          </div>
          <div class="pack-card__body">
            <p class="eyebrow">${escapeHtml(pack.discipline)}</p>
            <h2>${escapeHtml(pack.title)}</h2>
            <p>${escapeHtml(pack.summary)}</p>
            <ul class="tag-list">${(pack.features || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            <div class="pack-quick">
              <span><strong>${escapeHtml(pack.itemCount)}</strong></span>
              <span>v${escapeHtml(pack.version)}</span>
              <span>${escapeHtml(pack.language)}</span>
            </div>
            <div class="pack-actions">
              <a class="button button--primary" href="${escapeHtml(pack.href)}" download="${escapeHtml(pack.downloadName)}">Télécharger</a>
              <details class="pack-details">
                <summary>Détails du pack</summary>
                <dl>
                  <div><dt>Maintenu par</dt><dd>${escapeHtml(pack.maintainer)}</dd></div>
                  <div><dt>Mise à jour</dt><dd>${escapeHtml(pack.updatedAt)}</dd></div>
                  <div><dt>Licence</dt><dd>${escapeHtml(pack.license)}</dd></div>
                </dl>
                <p>${escapeHtml(pack.note)}</p>
              </details>
            </div>
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