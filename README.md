# Portfolio

Personal portfolio of Viktória Varga, product designer. Anime-inspired brutalism, built with [Astro](https://docs.astro.build) as a static site (no server).

## Requirements

Node **22.23.4** or newer (pinned in `.node-version`). With [fnm](https://github.com/Schniz/fnm), run `fnm use` in this folder.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the static site to `./dist/`          |
| `npm run preview` | Serve the built site locally                |

## Design tokens

`src/styles/tokens.css` mirrors the variables in the Figma file *Design system foundations*; every custom property uses the variable's Web code syntax name. Figma is the source of truth: change a value there first, then update the CSS.

- Light is the default. Dark follows the visitor's system setting, and `ThemeToggle` saves a manual choice as `data-theme` on `<html>`.
- Text styles are classes in `src/styles/typography.css` (`.text-display-l`, `.text-h2`, `.text-label-strong`, …).
- Fonts are self-hosted through Fontsource: Anton, Space Grotesk, JetBrains Mono, Noto Sans JP.

## Deploying

`.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `main`. GitHub Free only serves Pages from public repositories, so the workflow skips itself while the repo is private. When the repo goes public, set **Settings → Pages → Source** to **GitHub Actions**. The workflow passes the site URL and base path to the build, so internal links must start from `import.meta.env.BASE_URL`.
