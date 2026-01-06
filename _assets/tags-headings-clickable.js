(() => {
  function isTagsPage() {
    // MkDocs default: /tags/ (or /tags/index.html when built)
    const p = window.location.pathname || "";
    return /\/tags\/?$/.test(p) || /\/tags\/index\.html$/.test(p);
  }

  function makeTagHeadingsClickable() {
    if (!isTagsPage()) return;

    const headings = document.querySelectorAll(".md-typeset h2[id], .md-typeset h3[id]");
    for (const h of headings) {
      // Avoid double-binding.
      if (h.dataset.clickableTagHeading === "true") continue;
      h.dataset.clickableTagHeading = "true";

      h.style.cursor = "pointer";
      h.addEventListener("click", (e) => {
        // Don't hijack real links (e.g. permalink icons).
        if (e.target && e.target.closest && e.target.closest("a")) return;
        window.location.hash = `#${h.id}`;
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", makeTagHeadingsClickable);
  } else {
    makeTagHeadingsClickable();
  }
})();


