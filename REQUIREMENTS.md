# Personal Website — Requirements Document
**Client:** Kiran Kumar, MBA, MS  
**Domain:** kiran-kumar.co  
**Last Updated:** 2026-05-02  

---

## 1. Purpose & Audience

A premium personal branding and executive portfolio site. Primary users are:
- Executive search firms and recruiting agencies
- Board nominating committees and chairs
- Chief Executive Officers and hiring executives
- Potential advisory/board role sponsors

The site will be actively marketed by a talent agency to position Kiran for **senior executive and board roles**.

---

## 2. Target Roles

- Chief Marketing Officer (CMO)
- Chief Product Officer (CPO)
- Chief Growth / Chief Commercial Officer (CGO/CCO)
- SVP / VP equivalents in the above functions
- Board of Directors roles

**Target Industries:** Retail, Grocery, eCommerce, Consumer Products, MarTech SaaS, AdTech

---

## 3. Core Positioning

### Hero Headline
> "Full-Stack Growth Executive"

### Sub-tagline (draft)
> IIT → Berkeley Haas. Engineer, financial analyst, loyalty architect. Built the data, platforms, and teams behind $100M+ growth outcomes at Safeway, Albertsons, Petco, and World Market.

### Key differentiators
1. Rare arc: IIT Madras (Engineering) → UT Austin (MS EE) → Berkeley Haas (MBA)
2. Cross-functional depth: semiconductor engineer → CFO support → loyalty/marketing VP
3. Applied AI/ML to loyalty and personalization before it became standard practice
4. Led programs at scale: $30B revenue base, 30M+ member loyalty programs, $30M budgets
5. Currently active: Partner at XVector Labs (Agentic AI startup), Advisor at Berkeley SkyDeck

---

## 4. Site Architecture

**Single-page scrolling layout** with sticky navigation anchors. No separate pages.

| # | Section | Content Summary |
|---|---|---|
| 1 | **Hero** | Name, headline, sub-tagline, headshot, CTA (Contact / LinkedIn) |
| 2 | **About** | 3–4 sentence narrative — the IIT → Haas → executive arc |
| 3 | **Impact** | 6 signature metrics as bold visual callouts |
| 4 | **Experience** | Timeline of key roles, 2–3 highlights each |
| 5 | **Expertise** | Skill pillars as visual cards |
| 6 | **Board & Advisory** | Current advisory roles with brief context |
| 7 | **Recognition** | Press logos (USA Today, Forbes, Newsweek) with links |
| 8 | **Education** | IIT Madras · UT Austin · Berkeley Haas |
| 9 | **Contact** | Email, LinkedIn button, agency CTA |

---

## 5. Signature Impact Metrics

To be featured prominently in the Impact section:

| Metric | Context |
|---|---|
| $800M loyalty program | World Market Rewards, 30M+ members |
| 700 bps retention increase | World Market, to 80% retention |
| $100M+ gross margin improvement | Safeway FP&A |
| 1M → 10M+ loyalty customers | Albertsons "just for U" platform |
| $50M+ annual CPG brand funding | Albertsons retail media network |
| $20M+ incremental revenue | Petco CRM campaigns |
| $12M+ revenue, 14x ROAS | Petco cart abandonment program |
| 200M+ annual website visits | Albertsons digital platforms |

*(Use 6 of the strongest for the visual callout section — the rest can appear in Experience)*

---

## 6. Expertise Pillars (Skill Cards)

1. Loyalty & CRM
2. MarTech & AI/ML Personalization
3. Customer Analytics & Insights
4. eCommerce & Digital Growth
5. P&L & Budget Leadership
6. Team Building & Mentorship

---

## 7. Board & Advisory Section

| Role | Organization | Context |
|---|---|---|
| Partner | XVector Labs Inc. | Agentic AI startup — app dev, marketing, training |
| Advisor / Selection Committee | Berkeley SkyDeck (UC Berkeley) | Startup incubator — Haas + Engineering + Research |
| Product Advisor | CX Score | Retail CX personalization |
| Advisory Board | Marigold | MarTech/CRM platform |
| Advisor | Radiance Labs | AI-driven conversational commerce |

---

## 8. Education

| Degree | Institution |
|---|---|
| MBA, Finance & General Management | UC Berkeley, Haas School of Business |
| M.S., Electrical Engineering | The University of Texas at Austin |
| BTech (B.S.), Electronics & Communication | Indian Institute of Technology, Madras |

---

## 9. Design Specifications

| Parameter | Decision |
|---|---|
| Style | Light / clean — white background, spacious layout |
| Typography | Clean serif for name/headline, sans-serif for body |
| Accent color | TBD — suggest single warm accent (navy or slate blue) |
| Tone | Executive gravitas — minimal, confident, no animations or carousels |
| No-goes | No stock photos, no blog, no PDF resume download, no publications/patents |
| Headshot | Professional photo — temporary asset available, new headshot coming |

---

## 10. Technical Specifications

| Parameter | Decision |
|---|---|
| Framework | Next.js + TypeScript |
| Hosting | Vercel (free tier) |
| Domain | kiran-kumar.co (register on Namecheap) |
| CMS | None — static content, updated via Claude |
| Analytics | Add Vercel Analytics or Google Analytics (lightweight) |
| Performance | Target Lighthouse score 90+ |
| Mobile | Fully responsive — mobile-first design |

---

## 11. Content Assets

| Asset | Status |
|---|---|
| Resume | ✅ Available — `Kiran Kumar 2026 Resume.pdf` |
| LinkedIn profile | ✅ Available — `Profile.pdf` |
| Headshot | ⏳ Temporary available, professional headshot coming |
| Press links | ⏳ Paste into `content/press-links.md` |
| About narrative copy | ⏳ To be drafted (Claude will draft, Kiran to approve) |

---

## 12. Press & Recognition

Recognition received for World Market's customer experience program:
- USA Today ranking (2023–2025)
- Forbes ranking (2023–2025)  
- Newsweek ranking (2023–2025)

Links to be added to `content/press-links.md`.

---

## 13. Out of Scope (v1)

- Blog or thought leadership section
- Publications / patents listing (semiconductor era — not relevant to target audience)
- PDF resume download
- Contact form (email link sufficient)
- Multi-language support

---

## 14. Open Items

- [ ] Register `kiran-kumar.co` on Namecheap
- [ ] Add press links to `content/press-links.md`
- [ ] Upload professional headshot to `content/assets/`
- [ ] Approve About section narrative draft
- [ ] Select accent color from design mockup
- [ ] Connect domain to Vercel after deployment
