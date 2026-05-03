# How to Edit Your Website

## The only file you need to edit for content changes

**`src/data/content.ts`**

This file controls everything visible on the site — text, metrics, job titles, press links, education. Nothing else needs to be touched for content updates.

---

## Steps

1. Open `src/data/content.ts` in VS Code
2. Find the section you want to change (clearly labeled)
3. Edit the text **inside the quotes only**
4. Save with **Ctrl+S**
5. The site at `http://localhost:3000` updates automatically

---

## Sections in the file

| Section | What it controls |
|---|---|
| `person` | Name, headline, tagline, email, LinkedIn, contact blurb |
| `about` | The paragraph in the About section |
| `metrics` | The 6 large impact numbers |
| `experience` | Job roles, companies, bullet points |
| `expertise` | The 6 skill cards |
| `advisory` | Board and advisory roles |
| `recognition` | Press links (Newsweek, Forbes, USA Today) |
| `education` | Degrees and institutions |

---

## Safe to change

- Any text between `"quotes"`
- To add a new item: copy an existing `{ ... }` block, paste it below, edit the values
- To remove an item: delete the entire `{ ... },` block

## Do NOT touch

- Curly braces `{ }`
- Square brackets `[ ]`
- Commas between items
- The words `export const`, `=`, `:` at the start of lines

---

## If something breaks

Press **Ctrl+Z** repeatedly to undo until the file looks correct again.  
Or ask Claude to fix it — just describe what you were trying to change.

---

## To preview the site locally

1. Open a terminal in VS Code (`Terminal → New Terminal`)
2. Run: `npm run dev`
3. Open your browser to `http://localhost:3000`

---

## To deploy changes to the live site

After editing content, ask Claude:  
> *"Deploy the latest changes to kiran-kumar.co"*
