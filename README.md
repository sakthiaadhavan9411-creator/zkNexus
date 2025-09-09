<div align="center">
<h1>zkNexus</h1>
<p>Zero-config Vite + React demo showcasing a simple multi-step UX, prepared for GitHub Pages.</p>
</div>

## Features

- React 19 + Vite 6
- Single-file UI in `index.tsx` with step-by-step demo flow
- Zero server dependencies; fully static build
- GitHub Pages deployment via Actions

## Quickstart

Prerequisites: Node.js 18+ (tested with Node 22)

1) Install dependencies
```bash
npm install
```

2) Run locally (Vite dev server)
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`.

3) Production build
```bash
npm run build
```
Output is written to `dist/`.

4) Preview the production build
```bash
npm run preview
```

## Deploy to GitHub Pages

This repo is configured to deploy from GitHub Actions on pushes to `main`.

- Base path is set in `vite.config.ts` as `base: '/zkNexus/'`.
- Workflow: `.github/workflows/deploy.yml`

Steps:
1) Push to `main`:
```bash
git add .
git commit -m "chore: deploy"
git push
```
2) In GitHub → Settings → Pages: set Source = GitHub Actions.
3) Watch the Actions tab for the “Deploy Vite app to GitHub Pages” run.

When complete, your site is served from:
```
https://sakthiaadhavan9411-creator.github.io/zkNexus/
```

## Troubleshooting

- Blank page on Pages: ensure `base` in `vite.config.ts` matches your repo name (`/zkNexus/`).
- Rollup optional deps on Windows: if you see errors about `@rollup/rollup-win32-x64-msvc`, run `rm -rf node_modules package-lock.json` and `npm install` again.
- PowerShell execution policy blocking `npm`: use `npm.cmd` instead of `npm`.

## Tech Stack

- Vite • React • TypeScript

## License

MIT © 2025
