# Bohdan Sydorenko | Senior QA Engineer (Full-Stack Testing)

Personal portfolio website with resume-focused content and a QA-first presentation style.

Live Demo: [bsydorenko.github.io](https://bsydorenko.github.io)

## Technologies Used

- HTML5 and CSS3
- Google Fonts (Bricolage Grotesque, IBM Plex Sans, JetBrains Mono)
- GitHub Pages
- Jekyll support via `_config.yml`
- JSON-LD `Person` structured data for SEO

## Project Structure

- `index.html` - Page structure, portfolio content, and structured data.
- `style.css` - "Green Build" design system: theme tokens, layout, animation, responsive styling.
- `theme-toggle.js` - Theme toggle behavior and persistence logic.
- `_config.yml` - Jekyll configuration.
- `favicon.svg` - Site icon.
- `og-image.png` - Social sharing banner (1200x630 @2x).

## Local Development

```bash
npx serve
```

Then open `http://localhost:3000`.

## Features

- "Green Build" visual direction — the page reads as a passing test report
- Hero status panel with a passing-suite summary (`BUILD: PASSING`)
- Coverage report for testing domains and proficiency levels
- Dedicated AI-Assisted Testing block (Claude Code, AI workflows)
- Experience presented as a timeline
- Light/dark themes with no flash-of-wrong-theme (inline pre-paint theme)
- Accessible: skip link, focus states, `prefers-reduced-motion`
- Responsive layout for mobile, tablet, and desktop

## License

Open-source and reusable as a portfolio template.
