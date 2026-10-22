# Deploying ScaleChefs to Hostinger

This project builds with Next.js 16 and runs as a Node.js server app.
On Hostinger it needs to be deployed as a **Node.js app**, not uploaded as
plain static files — the contact form (`/api/contact`) is a server route.

---

## 1. What was fixed so the build works on Hostinger

| Problem on Hostinger | Fix |
| --- | --- |
| `FATAL: An unexpected Turbopack error occurred` / `TurbopackInternalError` while processing `app/globals.css` through PostCSS | `npm run build` now builds with **webpack** (`next build --webpack`), so Turbopack is never invoked in the production path. `next` was also bumped to the latest 16.2.x patch (`16.2.12`) and Tailwind to the latest 4.x (`4.3.3`), which contains the PostCSS toolchain fixes. `build:turbopack` is still available if you ever want to test Turbopack directly. |
| The Tailwind PostCSS plugins lived in `devDependencies`, so any install with `NODE_ENV=production` (common on shared hosting) dropped them and broke the CSS build | `tailwindcss`, `@tailwindcss/postcss` and `typescript` moved into `dependencies`. |
| `Unrecognized key(s) in object: 'eslint'` warning | Removed — Next.js 16 no longer runs ESLint during `next build` and dropped that option. Linting still works through `npm run lint`. |
| Next.js guessing the wrong workspace root when more than one lockfile exists | `turbopack.root` is pinned to the project directory in `next.config.ts`. |
| `metadataBase is not set` warning | Set in `app/layout.tsx`, driven by `NEXT_PUBLIC_SITE_URL`. |
| Node version mismatch | `engines.node` relaxed to `>=20.9.0` (Next.js 16's own requirement), so Node 20, 22 and 24 all pass. |

Nothing about the site's design, pages or components was changed.

---

## 2. Push to GitHub, then get it onto Hostinger

### Option A — pull the repo on the server (recommended)

1. Push the updated `main` branch to GitHub.
2. In hPanel → **Node.js** → your app → *Git / Deploy*, point it at
   `https://github.com/dbatra14/ScaleChef`, branch `main`.
3. Hit *Deploy*.

### Option B — upload the ZIP downloaded from GitHub

1. On GitHub, open the repo → **Code → Download ZIP**.
2. In hPanel → **File Manager**, upload the ZIP into the Node.js application
   root (the folder you set in the Node.js panel) and extract it there.
   Make sure the contents land directly in that folder, not one level deeper —
   the path `<app-root>/package.json` is what Hostinger expects.
3. In the Node.js panel run the install and build steps below.

---

## 3. Node.js app settings in hPanel

| Setting | Value |
| --- | --- |
| Node.js version | **20, 22 or 24** (anything ≥ 20.9). 22 is the safe default. |
| Application root | The folder holding `package.json` |
| Install command | `npm ci` (or `npm install`) |
| Build command | `npm run build` |
| Start / application startup | `npm run start` |

`next start` listens on the port Hostinger supplies through the `PORT`
environment variable, so no extra flag is needed.

---

## 4. Environment variables

Set these in hPanel → Node.js app → **Environment variables**
(or upload a `.env` file next to `package.json`; `.env` is never committed,
`.env.example` documents them and **is** committed).

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For the contact form | Delivers enquiries through Resend. Without it the site renders fine but `/api/contact` answers `503 "Email delivery is not configured yet."` |
| `CONTACT_TO_EMAIL` | No | Where enquiries go. Defaults to `growth.scalechefs@gmail.com`. |
| `CONTACT_FROM_EMAIL` | Recommended | Verified sender, e.g. `hello@yourdomain.com`. The default `onboarding@resend.dev` sandbox only delivers to the Resend account owner. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Absolute public URL, e.g. `https://scalechefs.com`. Used to build Open Graph / Twitter card image URLs. Defaults to `https://scalechefs.com`, so only set it if the domain differs. |
| `NEXT_PUBLIC_BASE_PATH` | Only if hosted under a subdirectory | e.g. `/scalechefs/`. Leave unset for a normal root-domain deployment. |

> ⚠️ `NEXT_PUBLIC_*` variables are baked in at **build** time. If you change
> one, rebuild the app afterwards.

---

## 5. Verify the deployment

```bash
# from the app root on the server
curl -I http://127.0.0.1:$PORT/          # expect 200
curl -I http://127.0.0.1:$PORT/portfolio  # expect 200
```

Then open the live domain: every page (home, about, services, portfolio,
contact) should render, the WhatsApp floating button should appear, and the
contact form should send when `RESEND_API_KEY` is set.

---

## 6. Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| `FATAL: An unexpected Turbopack error occurred` | Turbopack is not used by `npm run build` any more. Make sure the build command is `npm run build` (not `next build` directly, and not `build:turbopack`). |
| `Cannot find module '@tailwindcss/postcss'` during build | Dependencies were installed without dev packages. They now live in `dependencies`; re-run `npm ci` after pulling this update. |
| Build runs out of memory | Raise the Node heap for the build: `NODE_OPTIONS=--max-old-space-size=2048 npm run build` |
| Site loads but no CSS / unstyled | The `public/` folder or the `.next` build output was not uploaded, or the app root is wrong. |
| Contact form returns `503` | `RESEND_API_KEY` is not set on the server. |
| Contact form returns `502` | Resend rejected the send — usually `CONTACT_FROM_EMAIL` is not a domain verified in Resend. |
| `npm ci` complains the lockfile is out of sync | Run `npm install` locally and commit the refreshed `package-lock.json`. |
