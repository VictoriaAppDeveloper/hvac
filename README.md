# FlowHVAC — Landing Page

One-page marketing site for an HVAC business management SaaS product. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Frontend-only — no database or custom backend.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

The contact section posts to [Web3Forms](https://web3forms.com) (free, no backend required).

1. Get a free access key at https://web3forms.com
2. Copy `.env.example` to `.env.local`
3. Set `NEXT_PUBLIC_WEB3FORMS_KEY` to your key

Without a key the form will submit and show an error message, but the UI remains fully testable.

## Project structure

- `app/page.tsx` — all page sections, data-driven (features, steps, pricing, testimonials arrays)
- `components/Header.tsx` — sticky nav + mobile menu (client component)
- `components/ContactForm.tsx` — contact form with submit state (client component)
- `components/DashboardMockup.tsx` — CSS/SVG-only dashboard mockups (no image assets needed)
- `app/privacy`, `app/terms` — placeholder legal pages

## Deploy

Optimized for one-click deploy to [Vercel](https://vercel.com/new) or Netlify. Remember to set `NEXT_PUBLIC_WEB3FORMS_KEY` in the hosting provider's environment variables.
