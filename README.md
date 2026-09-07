# ScaleChef Homepage

The responsive ScaleChef homepage prototype, built with React, TypeScript, CSS, Vinext and Vite.

## Run locally

Install [Node.js 22.13 or newer](https://nodejs.org/), then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Production check

```bash
npm run build
```

## Main files

- `app/page.tsx` — page content and mobile-menu interaction
- `app/globals.css` — visual design, colors, animation and responsive layout
- `app/layout.tsx` — website title, description, icon and social-sharing metadata
- `public/og.png` — social-sharing preview image
- `public/favicon.svg` — browser icon

## Upload to GitHub

1. Create a new empty repository on GitHub.
2. Extract the downloaded ZIP.
3. Upload all extracted files and folders to the repository, including `.openai` and `.gitignore`.
4. Commit the files.

Alternatively, from the extracted project folder:

```bash
git init
git add .
git commit -m "Add ScaleChef homepage"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the final URL with your own GitHub repository URL.

## Brand colors

- Near black: `#1D1D1F`
- White: `#FFFFFF`
- Light grey: `#F5F5F7`
- ScaleChef orange: `#FF6B35`

## Fonts

The design loads Inter, Manrope and Mukta from Google Fonts.
