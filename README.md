# ScaleChefs Homepage

The responsive ScaleChefs homepage prototype, built with Next.js 16, React 19, TypeScript and Tailwind CSS v4.

## Run locally

Install [Node.js 20.9 or newer](https://nodejs.org/) (22 recommended), then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Production check

```bash
npm run build
```

## Deploying to Hostinger

See [HOSTINGER.md](./HOSTINGER.md) for the full walkthrough — Node.js version,
build/start commands, environment variables and a troubleshooting table.

Quick summary:

| Setting | Value |
| --- | --- |
| Node.js version | 20, 22 or 24 (≥ 20.9) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Start command | `npm run start` |

The production build uses `next build --webpack` on purpose: it sidesteps the
Turbopack PostCSS panic that broke shared-hosting builds. Copy
[`.env.example`](./.env.example) to `.env` (or set the variables in the
Hostinger panel) to enable the contact form and correct social-preview URLs.

## Main files

- `app/page.tsx` — page content and mobile-menu interaction
- `app/globals.css` — visual design, colors, animation and responsive layout
- `app/layout.tsx` — website title, description, icon and social-sharing metadata
- `public/og.png` — social-sharing preview image
- `public/favicon.ico` — browser icon

## Upload to GitHub

1. Create a new empty repository on GitHub.
2. Extract the downloaded ZIP.
3. Upload all extracted files and folders to the repository, including `.openai` and `.gitignore`.
4. Commit the files.

Alternatively, from the extracted project folder:

```bash
git init
git add .
git commit -m "Add ScaleChefs homepage"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the final URL with your own GitHub repository URL.

## Brand colors

- Near black: `#1D1D1F`
- White: `#FFFFFF`
- Light grey: `#F5F5F7`
- ScaleChefs orange: `#FF6B35`

## Fonts

The design loads Inter, Manrope and Mukta from Google Fonts.
