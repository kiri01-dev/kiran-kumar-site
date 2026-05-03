# CLAUDE.md — Kiran Kumar Personal Website

## Project Overview
Personal branding and executive portfolio site for Kiran Kumar.  
Domain: `kiran-kumar.co` | Hosting: Vercel | Stack: Next.js + TypeScript

Full requirements, design decisions, and content plan are in `REQUIREMENTS.md`.

---

## Who This Site Is For
Kiran Kumar is a senior marketing/growth executive targeting CMO, CPO, Chief Growth Officer, and Board of Director roles in retail, grocery, eCommerce, MarTech SaaS, and AdTech. The site is actively marketed by a talent agency. Every design and content decision should reflect **executive gravitas and credibility** — not startup energy.

---

## Tech Stack
- **Framework:** Next.js 14+ with TypeScript and App Router
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (free tier)
- **Domain:** kiran-kumar.co (Namecheap registrar)
- **Analytics:** Vercel Analytics
- **No CMS** — content is static, updated by editing source files

---

## Site Structure
Single-page scrolling layout with anchor navigation:
1. Hero
2. About
3. Impact (metric callouts)
4. Experience
5. Expertise (skill pillars)
6. Board & Advisory
7. Recognition (press logos)
8. Education
9. Contact

See `REQUIREMENTS.md` Section 4 for full section specs.

---

## Design Rules
- **Style:** Light/clean — white background, spacious, minimal
- **Typography:** Serif for name/headline, sans-serif for body
- **No animations, no carousels, no stock photos**
- **Mobile-first** — fully responsive
- **Target Lighthouse score:** 90+
- Tone: confident, understated executive — think partner page at McKinsey, not a startup landing page

---

## Content Files
| File | Purpose |
|---|---|
| `content/press-links.md` | Press recognition links (USA Today, Forbes, Newsweek) |
| `content/assets/` | Headshot and any other image assets |
| `Kiran Kumar 2026 Resume.pdf` | Source of truth for experience and metrics |
| `Profile.pdf` | LinkedIn export — supplementary reference |

---

## Key Positioning Facts (do not alter without review)
- Headline: "Full-Stack Growth Executive"
- Arc: IIT Madras → UT Austin MS EE → Berkeley Haas MBA → Broadcom → Safeway/Albertsons → Petco → World Market → XVector Labs
- Signature metrics: $800M loyalty program, 700 bps retention lift, $100M+ margin improvement, 1M→10M+ loyalty customers
- Press: USA Today, Forbes, Newsweek recognition (World Market CX, 2023–2025)

---

## What NOT to Include
- Publications and patents (semiconductor era — irrelevant to target audience)
- PDF resume download link
- Blog section
- Contact form (email link is sufficient)

---

## Updating the Site
Kiran does not write code. All updates are made by Claude.  
When making content updates:
1. Edit the relevant component or data file
2. Verify it looks correct on mobile and desktop
3. Commit and push — Vercel auto-deploys on push to main

---

## Open Items Before Launch
- [ ] Register kiran-kumar.co on Namecheap
- [ ] Add press links to `content/press-links.md`
- [ ] Upload headshot to `content/assets/headshot.jpg`
- [ ] Draft and approve About section copy
- [ ] Connect kiran-kumar.co domain in Vercel dashboard
