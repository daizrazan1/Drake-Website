# Drake Fan Site

A PHP-based fan site for Drake, deployed as a Progressive Web App. The site catalogues his discography (albums + singles), the OVO Sound roster, an interactive song recommender, and a "My Music" section with downloadable original tracks made by the site owner. The current era teases Drake's 2026 album _Iceman_.

# User Preferences

Preferred communication style: Simple, everyday language.

# Visual Identity

The site uses a deliberately lo-fi, photocopied-zine / VHS aesthetic:

- **Background**: pale teal (`#b5ddd4`) with subtle radial vignette
- **Primary text**: wide-spaced white serif (Cormorant Garamond)
- **Chromatic fringing**: cyan + magenta RGB-shift `text-shadow` on all headings, animated on key titles (`.chromatic-strong`)
- **Overlays**: full-viewport CSS scanlines + SVG fractal-noise grain
- **Cards**: warm paper (`#f4eedc`) with hard 3px ink-dark borders and offset VHS shadows
- **Buttons**: dark ink fill, chromatic text, lift-on-hover
- **Marquee**: animated "ICEMAN · COMING SOON" strip framing the hero on the home page

All design tokens live in `:root` at the top of `css/modern-styles.css`.

# System Architecture

## Tech Stack
- **PHP 8.2** built-in dev server (`php -S 0.0.0.0:5000`)
- Static HTML rendered server-side from PHP, no framework
- Vanilla JS for interactivity (search, filters, recommender, like counts in localStorage)
- PWA: `manifest.json` + `sw.js` (cache version `drake-site-v4`)

## Pages
- **index.php** — Iceman coming-soon marquee hero, "My Music" download grid (4 track cards pointing at `music/track-0X.mp3`), and explore cards linking to the rest of the site.
- **about.php** — Drake biography: Beginnings → Rise → Iceman Era → Discography list → By the Numbers.
- **albums.php** — Reads `data.json`, loops through ~19 albums into a grid. Each card shows cover art (Wikipedia URLs mapped in PHP), tracklist toggle, and a localStorage-backed like button.
- **singles.php** — JS-rendered grid of ~65 singles with text search and era filter (4 eras). Streaming links to Spotify / YouTube / Apple Music.
- **ovo.php** — OVO Sound roster (9 artists) with PHP-driven cards and toggleable top-songs lists.
- **song-recommender.php** — 4-question form (vibe / feature / era / length) → JS picks a song from a curated table, links out to streaming services.

## Data
- **data.json** — Drake's full discography (albums, release years, song lists). Used by `albums.php`.
- **count.json** + **updateLikes.php** — Legacy server-side like counter. Albums page now uses localStorage instead, but the files are kept for backward compatibility.

## Music Downloads
- The home page expects audio files at `music/track-01.mp3` through `music/track-04.mp3`. A `music/README.txt` documents this for the site owner.

## Removed
The previous build had a Song Creator and Song Guesser page; both were removed along with their JS, the legacy 245KB `styles.css`, an old `Drake-Website/` duplicate folder, `signup.html`, `fav-song-gen.html`, and an upload zip.

# External Dependencies

- **Google Fonts**: Cormorant Garamond + EB Garamond
- **Bootstrap Icons 1.11.3** (icon font only — no Bootstrap CSS/JS)
- **Wikipedia / public CDNs**: album cover art and OVO artist photos

# Deployment

Deployed to Vercel and synced to GitHub repo `daizrazan1/Drake-Website`. Replit `[deployment]` is configured for Cloud Run with `php -S 0.0.0.0:8000 -t .`.
