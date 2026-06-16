# Elmwood Christian Academy — Website

The official website for **Elmwood Christian Academy**, a Christ-centered, college-preparatory school in Brighton, Colorado (preschool through 12th grade, established 1973). Formerly *Elmwood Baptist Academy* — this site reflects the new name and a refreshed, collegiate design that keeps the school's crimson crest.

---

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` under `@theme inline`. There is **no** `tailwind.config.ts`; do not create one.
- Fonts: **Cormorant Garamond** (elegant serif headings) + **Source Sans 3** (body), loaded in `src/app/layout.tsx`.

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home — hero, mission, the four distinctives, academics preview, CTA |
| `/about` | `src/app/about/page.tsx` | Story since 1973, mission, beliefs, accreditation |
| `/academics` | `src/app/academics/page.tsx` | Mastery approach + grade levels (Early Enrichment → Grade 12) |
| `/admissions` | `src/app/admissions/page.tsx` | Enroll steps, tuition request, contact + map |

Shared pieces: `Navbar`, `Footer`, `Wordmark` (crest + "ELMWOOD / Christian Academy"), `SubpageHero`, `AnimateOnScroll`.

## Brand

- **Crimson** `#8b2233` (primary) · deep crimson `#4f121d` · **charcoal/ink** `#201d1b` · warm **stone** neutrals `#f4f1ea` / paper `#fcfbf8`.
- The crest is `public/brand/crest.png`. App icons (`favicon.ico`, `apple-touch-icon.png`, `icon-192/512.png`) are generated from it.

---

## How to make edits (for the office staff + ChatGPT)

Everything you'll want to change is **wording, times, and contact details** — the design takes care of itself.

Common changes and where they live:

1. **Phone number** (`303.659.3818`) — `src/components/Navbar.tsx`, `src/components/Footer.tsx`, and `src/app/admissions/page.tsx`.
2. **Email** (`office@elmwoodchristianacademy.org`) — `Footer.tsx` and `admissions/page.tsx`.
3. **Address** (`13100 E 144th Ave, Brighton, CO 80601`) — `Footer.tsx` and `admissions/page.tsx` (the map embed uses the address in its URL).
4. **Office hours** — `Footer.tsx` and `admissions/page.tsx`.
5. **Domain** — when the real domain is set, replace `https://www.elmwoodchristianacademy.org` in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts`.
6. **Tuition** — the Admissions page invites families to *request* tuition info by email. Add real figures there when ready.
7. **Photos** — drop images into `public/` and add real `og-image.jpg` (1200×630) for nice link previews. Real campus/classroom photos in the home hero and section bands would elevate the site further.
8. **Wording** — for any text tweak, change the smallest exact phrase; don't rewrite whole files.

---

## Online enrollment application

`/admissions/apply` is a multi-step application that mirrors Elmwood's paper
enrollment packet. On submit it builds a PDF (server-side, `pdf-lib`) and:

- always returns the PDF for the family to download, and
- emails it to the office **if** email is configured (via [Resend](https://resend.com)).

Form/PDF fields live in one place: `src/lib/enrollment.ts`. The API route is
`src/app/api/enroll/route.ts`.

**To turn on automatic emailing**, set these env vars in Vercel (Project →
Settings → Environment Variables), then redeploy:

| Variable | Required | Default | Notes |
|----------|----------|---------|-------|
| `RESEND_API_KEY` | yes (for email) | — | From resend.com. Until set, the form still works and the parent downloads the PDF. |
| `ENROLL_TO` | no | `office@elmwoodchristianacademy.org` | Where applications are sent. |
| `ENROLL_FROM` | no | `Elmwood Admissions <onboarding@resend.dev>` | Use a verified-domain sender once the domain is set up in Resend (the `onboarding@resend.dev` test sender only delivers to your own Resend account email). |

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Notes for AI editors (Claude / ChatGPT)

- **Next.js 16** — APIs may differ from older training data. See `AGENTS.md`.
- Page components are **server components**; only `Navbar` and `AnimateOnScroll` are `"use client"`.
- Colors are Tailwind tokens from `globals.css` (e.g. `bg-crimson`, `text-ink`, `bg-stone`, `border-line`). Use those, not raw hex.
- Headings use `font-serif` (Cormorant). Small uppercase labels use the `.eyebrow` class. The thin crimson accent is the `.rule` class.
- For ANY change to an existing file, replace the smallest exact string you can. Don't add new abstractions to make it "fancier."
