# Navnoor Mann Portfolio Website

Production-ready React + Vite portfolio site that deploys cleanly on Vercel.

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build for production

```bash
pnpm build
pnpm preview
```

## Deploy to Vercel (important)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Keep **Root Directory** as `.` (repo root).
4. Vercel will use `vercel.json` automatically:
   - `pnpm install --no-frozen-lockfile`
   - `pnpm build`
   - output directory `dist`
   - SPA rewrite to `/index.html` (prevents 404 on client-side routes)

If you previously deployed with wrong settings, re-deploy after confirming Root Directory and build/output values above.

## Edit content

- `client/src/pages/Home.tsx` (hero, projects, contact)
- `client/src/index.css` (global styles, fonts)

## Tech stack

- React 19
- Vite
- Tailwind CSS
- Wouter
- Lucide React
