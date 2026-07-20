# DexCo Website

Multi-page React site for Dexterity Corporation (DexCo), built with Vite + React Router + Tailwind CSS.

- **Pages:** Home, Services, Why DexCo, Contact (real routing, real URLs — not a single scrolling page)
- **Popups:** each service on the Services page opens an animated modal with full details
- **Design:** navy/copper "circuit board" theme — services are laid out like PCB components (U1–U5) connected by a trace line

## Run it locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy to GitHub Pages (automatic)

This repo already includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`. All you need to do:

1. Create a new GitHub repo, e.g. `dexco-website`.
2. Push this whole folder:
   ```
   git init
   git add .
   git commit -m "DexCo website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/dexco-website.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages** → under "Build and deployment," set **Source: GitHub Actions**.
4. Push again (or re-run the workflow from the **Actions** tab) — the site builds and deploys automatically.
5. Your site goes live at:
   `https://<your-username>.github.io/dexco-website/`

After the first setup, every future `git push` to `main` redeploys the site automatically — no manual build step needed.

## Custom domain (optional, later)

If you buy a domain (e.g. `dexco.co` or `dexco.dev`):
1. In repo **Settings → Pages**, enter the custom domain under "Custom domain" — this creates a `CNAME` file for you automatically.
2. Point your domain's DNS to GitHub Pages (A records to GitHub's IPs, or a CNAME record to `<your-username>.github.io`).
3. Enable "Enforce HTTPS" once DNS propagates.

## Editing content later

- **Services (text, items, popup detail):** `src/data/services.js` — one file, used by both the Services page and the popup modals.
- **Home page copy:** `src/pages/Home.jsx`
- **Why DexCo page:** `src/pages/WhyDexco.jsx`
- **Contact info / phone number:** `src/pages/Contact.jsx`
- **Colors:** `tailwind.config.js` under `theme.extend.colors` (e.g. `copper`, `ink`, `teal`) — change once, updates everywhere.
- **Fonts:** loaded via Google Fonts in `src/index.css` (Space Grotesk, Inter, IBM Plex Mono).

## Tech stack

- [Vite](https://vite.dev) — build tool
- [React](https://react.dev) + [React Router](https://reactrouter.com) — pages/routing
- [Tailwind CSS](https://tailwindcss.com) — styling
