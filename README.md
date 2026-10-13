# Bohdan Sydorenko | Senior QA Engineer (Full-Stack Testing)

Personal resume / portfolio website: minimal, typography-led, and ATS-friendly.

Contact: [bhdnsyd@gmail.com](mailto:bhdnsyd@gmail.com)

Live Demo: [bsydorenko.github.io](https://bsydorenko.github.io)

## Technologies Used

- HTML5 and CSS3
- Google Fonts (Geist, Geist Mono)
- GitHub Pages
- Jekyll support via `_config.yml`
- JSON-LD `ProfilePage` + `Person` structured data for SEO

## Project Structure

- `index.html` - Page structure, portfolio content, and structured data.
- `style.css` - "Quiet Editorial" design system: theme tokens, layout, responsive and print styles.
- `theme-toggle.js` - Theme toggle behavior and persistence logic.
- `_config.yml` - Jekyll configuration.
- `favicon.svg` - Site icon.
- `og-image.png` - Social sharing banner (1200x630 @2x).
- `Bohdan-Sydorenko-Resume.pdf` - Downloadable A4 PDF resume (text-based), linked as "Download PDF" on the page; regenerate after content changes.

## Local Development

```bash
npx serve
```

Then open `http://localhost:3000`.

## Features

- "Quiet Editorial" visual direction: neutral palette, one accent, Geist typography
- Single reading column in the DOM (section labels sit in a left gutter on desktop only)
- ATS-friendly structure: one `h1`, standard section names (Summary, Skills, Experience, Contact), plain-text contacts, lists instead of visual widgets
- Print stylesheet: "Print -> Save as PDF" produces a clean, text-based one-column resume
- Light/dark themes with no flash-of-wrong-theme (inline pre-paint theme)
- Accessible: skip link, focus states, `prefers-reduced-motion`
- Responsive layout for mobile, tablet, and desktop

## License

Open-source and reusable as a portfolio template.
