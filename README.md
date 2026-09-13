# Portfolio

My personal site. Live at **[maisha-portfolio-nine.vercel.app](https://maisha-portfolio-nine.vercel.app)**.

It covers my production work as the in-house developer at CellsTech for Armani Group, earlier full stack work at Inkphase, published computer vision research, and selected personal projects.

## Sections

The page is a single scrolling document: About, Experience, Selected Work, Research, Capabilities, Competitions, Volunteering, and Contact. Professional work is listed separately from personal and research projects, so it stays clear what was delivered inside a team and what I own independently.

## Built with

Next.js (App Router) and TypeScript, styled with Tailwind, with Spline for the 3D scene and Web3Forms handling contact submissions. Deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/             routes, layout, and OG image generation
components/      one component per page section
data/projects.ts project content, edited here rather than in markup
public/          images, icons, and resume PDF
```

Project entries live in `data/projects.ts`, so adding work means editing that file rather than touching component markup.
