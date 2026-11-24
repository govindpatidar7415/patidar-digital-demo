# Patidar Digital Solutions — Demo Website

A responsive React + Vite agency website created as a practice project before connecting Sanity CMS.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
src/
  components/
    Header.jsx
    SectionHeading.jsx
    Footer.jsx
  data/
    siteData.js
  App.jsx
  main.jsx
  styles.css
```

## Where to edit content
Edit `src/data/siteData.js` to change company details, services, projects and testimonials.

## Next step: connect Sanity
This project intentionally has no admin panel or backend yet. The next stage is to:
1. Create Sanity schemas for company details, services, projects and testimonials.
2. Add the Sanity client to this React app.
3. Replace local mock data imports with content fetched from Sanity.

## Demo notes
- The contact form is UI-only and displays a demo alert.
- Portfolio images use remote Unsplash image URLs.
- Company, projects and testimonials are fictional sample content.
