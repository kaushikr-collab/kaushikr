# Ragunathan Lab Website — Handoff for Claude Design

Paste this into a Claude Design (claude.ai) conversation for context if you want to
continue iterating on the visual design there. The live, deployed code is the
source of truth — this doc just summarizes it so Design can pick up from the
current state instead of the original prototype.

## Links
- **Live site:** https://kaushikr-collab.github.io/kaushikr
- **GitHub repo:** https://github.com/kaushikr-collab/kaushikr
- **Local working copy:** `~/Documents/ragunathan-lab-site/`

## File structure
```
index.html          — homepage (hero, research, methods, people, publications, join, contact)
news.html           — news/timeline page, year-grouped
chromatin-101.html  — "Learn" primer page with reading-progress bar
script.js           — shared JS: nav-shrink, scroll-reveal, mobile hamburger,
                       reading-progress bar, archive/alumni toggles
favicon.svg          — red ink-circle mark
assets/              — local images (8 team/PI photos as .webp, 1 hero watercolor jpg)
```
No build step — plain HTML/CSS/JS, deployed via GitHub Pages directly from `main`.

## Design system
- **Headings:** Crimson Pro (serif), weights 400–600, used for all titles/names.
- **Body/UI text:** Inter (sans), light weight (300–500), generous letter-spacing
  on small uppercase labels (nav, eyebrows, badges).
- **Background:** parchment/cream (`#f6f1e7` family), archival-catalog feel.
- **Accent color:** `--beni: #ad3535` (muted cinnabar red) — used for the "Join"
  nav link, dividers, hover states, category badges.
- **Photo treatment:** grayscale + contrast filter at rest, full color + slight
  scale-up on hover (`.member-photo img`, `.pi-photo img`).
- **Motif:** ink-brush SVG dividers between sections; an `#ink` SVG filter gives
  hand-drawn texture to brush strokes.

## Key interactive patterns (already built, don't need redesigning)
- Scroll-reveal: elements with `[data-reveal]` fade/slide in via IntersectionObserver,
  staggered by sibling index (capped at 160ms), 0.4s transition.
- Collapsible sections via a generalized `.archive-toggle` pattern (button +
  `aria-controls` + `aria-expanded`), reused for: pre-prints archive, "Earlier
  work · 2010–2017" publications, and the alumni roster.
- Publication entries: title is the only link (PubMed or DOI, opens new tab,
  underline-on-hover sized to text not the full row), full citation string
  includes `vol(issue):pages. doi: ... PMID: ...`, abstract behind a native
  `<details>/<summary>` toggle.
- Mobile nav (≤640px): hamburger morphs to X, opens an opaque full-width
  dropdown, closes on link click — shared across all 3 pages via `script.js`.

## Known open/skipped items (not yet addressed)
- All 6 homepage "Research" cards still show a placeholder "figure · to be
  added" box instead of real figures/diagrams — deliberately left as-is for now.
- No `og:image` for social link previews (Slack/iMessage will show text-only
  card; Twitter-specific tags were removed entirely as not worth maintaining).

## Recent changes (most recent session)
- Localized all 8 member/PI photos from the old Squarespace CDN into `assets/`.
- Removed Twitter Card meta tags (kept Open Graph tags).
- Consolidated mobile-nav + reading-progress JS into the shared `script.js`
  (was duplicated inline on `news.html` and `chromatin-101.html`).
- Added full citations (DOI + PMID) to all 19 published papers.
- Added expand/collapse toggle for "Earlier work · 2010–2017" publications.
- Removed standalone "DOI" button; publication titles are now the only link.
- Various motion/hover polish: shorter scroll-reveal transitions, removed an
  awkward hover-lift on Research cards, fixed title-underline width on hover.
