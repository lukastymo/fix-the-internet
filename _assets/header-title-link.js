(() => {
  function makeHeaderTitleClickable() {
    // Material renders the site title text as plain text; this makes it behave like "home".
    const title = document.querySelector(".md-header__title");
    if (!title) return;

    // Prefer the header's existing "home" link (usually the logo button).
    const homeLink =
      document.querySelector("a.md-header__button.md-logo") ||
      document.querySelector('a.md-nav__link[href="./"]') ||
      document.querySelector('a.md-nav__link[href="."]');

    if (!homeLink || !homeLink.href) return;

    title.style.cursor = "pointer";
    title.setAttribute("role", "link");
    title.setAttribute("tabindex", "0");
    title.setAttribute("aria-label", "Go to homepage");

    const goHome = () => (window.location.href = homeLink.href);

    title.addEventListener("click", (e) => {
      // Avoid interfering with clicks on other interactive elements inside the header.
      if (e.target && e.target.closest && e.target.closest("a, button, input, label")) return;
      goHome();
    });

    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goHome();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", makeHeaderTitleClickable);
  } else {
    makeHeaderTitleClickable();
  }
})();


