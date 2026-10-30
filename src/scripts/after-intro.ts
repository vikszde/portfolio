// The home page can open with a full-screen logo intro (Intro.astro). While it
// plays, <html> has .is-intro and the page underneath holds still; when the
// logo starts its flight into the nav the intro fires "intro:handoff" and the
// page starts its own entrance. Pages without an intro run straight away.
export function afterIntro(run: () => void) {
  if (document.documentElement.classList.contains("is-intro")) {
    document.addEventListener("intro:handoff", () => run(), { once: true });
  } else {
    run();
  }
}
