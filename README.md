# Falafel Restaurant

A modern restaurant menu website for **Falafel** — browse dishes, explore branches, and order with a clean, mobile-friendly experience.

**Live site:** [https://restaurant-website-menu-virid.vercel.app/](https://restaurant-website-menu-virid.vercel.app/)

## Scan to visit

Point your phone camera at the QR code below to open the live menu.

![QR code linking to the Falafel Restaurant website](docs/website-qr.png)

[https://restaurant-website-menu-virid.vercel.app/](https://restaurant-website-menu-virid.vercel.app/)

## Features

- Home page with hero, featured menu items, and branch locations
- Full menu page with category tabs, search, and infinite scroll
- Footer QR code for quick mobile access to the site
- Content powered by [Sanity](https://www.sanity.io/)

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Sanity](https://www.sanity.io/) + `next-sanity`
- [shadcn/ui](https://ui.shadcn.com/) components

## Getting started

### Prerequisites

- Node.js 20+
- npm
- A Sanity project with menu and branch content configured

### Install

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
SITE_URL=https://restaurant-website-menu-virid.vercel.app/
```

Add your Sanity credentials as required by the project (see `lib/sanity/`).

For client-side access to the site URL in components, use the `NEXT_PUBLIC_` prefix:

```env
NEXT_PUBLIC_SITE_URL=https://restaurant-website-menu-virid.vercel.app/
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project structure

```
app/              # Next.js App Router pages and layout
components/       # UI, sections (hero, menu, branches, footer), shared pieces
hooks/            # Menu search, categories, infinite scroll
lib/              # Sanity client, queries, helpers
public/images/    # Static images
docs/             # README assets (QR code image)
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | Run ESLint               |

## License

Private project.
