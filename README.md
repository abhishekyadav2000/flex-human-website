# Flex Human LLC — Corporate Website

Official marketing website for **Flex Human LLC**, built from the Flex Human Core Positioning document.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- TypeScript
- Tailwind CSS

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home hero, capabilities, products preview, industries, mission |
| `/about` | Mission, vision, research & innovation |
| `/solutions` | All 8 capability cards |
| `/products` | Prototype portfolio (FlexSkin™, FlexAssist™, etc.) |
| `/industries` | Industries served |
| `/careers` | Role categories, talent community form, social CTAs |
| `/contact` | Contact form with inquiry types |
| `/corporate-information` | Texas LLC registration, legal links |

## Local development

```bash
cd ~/Desktop/flex-human-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to GitHub

Create a **new** repository on GitHub (e.g. `flex-human-website`), then:

```bash
cd ~/Desktop/flex-human-website
git remote add origin https://github.com/abhishekyadav2000/flex-human-website.git
git add .
git commit -m "Initial Flex Human corporate website from core positioning doc"
git branch -M main
git push -u origin main
```

Recommended hosting: [Vercel](https://vercel.com) (connect the GitHub repo for automatic deploys to `www.iflexhuman.com`).

## Contact

- **Email:** admin@iflexhuman.com
- **Website:** https://www.iflexhuman.com

© 2026 Flex Human LLC. Registered in Texas, USA. Texas File Number: 806448689
