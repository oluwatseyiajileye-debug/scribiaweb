# SCRIBIA Writing Services — Website

Marketing website for SCRIBIA Writing Services, a Nigerian academic and
professional writing consultancy. Built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Editing content

Almost all editable content lives in `data/*.ts` — no component code needs
to change to update copy, prices, or listings:

- `data/site.ts` — phone numbers, email, WhatsApp number, LinkedIn, address
- `data/services.ts` — Academic Writing / Research Support / Professional Writing listings
- `data/software.ts` — data analysis tools and descriptions
- `data/pricing.ts` — **quotation calculator prices**. Every figure is a
  placeholder marked `PLACEHOLDER` — replace with real rates whenever ready.
- `data/testimonials.ts` — sample testimonials (replace with real, consented feedback)
- `data/portfolio.ts` — sample project categories (no client names, by design)
- `data/faq.ts` — FAQ content

## Logo

The brand mark lives at `public/logo.png` (also copied to `app/icon.png`
for the favicon). Replace both files with a new export if the logo changes.

## Lead capture

Contact and quotation forms currently submit via a pre-filled WhatsApp
message (`lib/whatsapp.ts`) — there is no backend or email service wired up
yet, by design, to avoid requiring API keys before launch.

## Future expansion

The site is structured so the following can be added later without
reworking existing pages:

- **Client dashboard / order tracking** — add an `app/dashboard/` route
  group with its own layout; pair with an auth solution (e.g. NextAuth).
- **Admin dashboard** — `app/admin/` route group, likely gated behind auth
  and reading/writing the same shape as `data/*.ts` (or a database once one
  is introduced).
- **Secure file uploads** — an `app/api/uploads/route.ts` handler backed by
  a storage provider (e.g. Vercel Blob, S3, Cloudinary).
- **Online payments** — Paystack or Flutterwave are the natural fit for a
  Nigerian business; would live behind `app/api/payments/`.
- **Blog** — `app/blog/[slug]/page.tsx` with MDX or a headless CMS.
- **AI-powered quotation system** — the quotation logic already lives in
  one file (`data/pricing.ts` + `components/pricing/QuoteForm.tsx`); an
  AI-assisted estimator could replace the calculation function without
  touching the form UI.

Because content is centralized in `data/*.ts`, any of the above can later
read from a CMS or database instead without changing the page components.

## Deployment

Designed for [Vercel](https://vercel.com/new). Connect the repository and
deploy — no environment variables are required for the current feature set.
