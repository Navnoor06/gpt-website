# Navnoor Mann Portfolio Website

Production-ready React + Vite portfolio site that deploys cleanly on Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel (important)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Keep **Root Directory** as `.` (repo root).
4. Vercel will use `vercel.json` automatically:
   - `npm install`
   - `npm run build`
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


## How to add media to projects

Edit `client/src/pages/Home.tsx` and replace the media placeholders inside each project card.

### Option 1: Use local files (recommended)
1. Put files in `client/public/projects/<project-name>/`
2. Replace a placeholder with:

```tsx
<img
  src="/projects/robotic-arm/image1.jpg"
  alt="Robotic arm prototype"
  className="w-full h-full object-cover rounded-lg"
  loading="lazy"
/>
```

### Option 2: Use YouTube

```tsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Project video"
  className="w-full h-full rounded-lg"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Option 3: Use Google Drive

```tsx
<img
  src="https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
  alt="Project media"
  className="w-full h-full object-cover rounded-lg"
/>
```

Tip: keep image names lowercase and use absolute paths starting with `/` for files in `public/`.
