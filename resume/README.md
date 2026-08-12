# Resume source

`Maisha_Rahman_Resume.tex` is the LaTeX source for the CV linked from the portfolio.

The original Overleaf project was lost; this file was reconstructed from the compiled PDF, so
it renders an equivalent document rather than being the byte-identical original source.

## Compiling

**Overleaf (easiest)**
1. New Project → Blank Project
2. Replace the contents of `main.tex` with `Maisha_Rahman_Resume.tex`
3. Set the compiler to **pdfLaTeX** (Menu → Compiler) — it is the default
4. Recompile, then Download PDF

**Locally** (needs a TeX distribution — MiKTeX on Windows, TeX Live elsewhere)

```bash
pdflatex Maisha_Rahman_Resume.tex
```

Run it twice if the page count changes, so the page numbers settle.

## Publishing an updated PDF to the site

The portfolio links `public/Maisha_Rahman_Fullstack_Dev_Resume.pdf` from both the hero button and
the navbar. Replace that file with the newly compiled PDF, keeping the **exact same filename**, or
the links break.

## Notes

- Base size is **10pt**, matching the original's density (~115 characters per line).
- Typeface is **Bitstream Charter** via `\usepackage{charter}`, verified against the original
  with `pdffonts` (it embeds `CharterBT-Roman/Bold/Italic` plus `CMSY10/CMSY9` for symbols).
  Do not substitute `mathdesign` or `XCharter` — those replace the math fonts too, which
  changes the `|` separators and `•` bullets away from Computer Modern.
- Colours are defined once at the top: `navy` (headings), `linkblue` (links), `midgray`
  (dates, tech stacks, parentheticals).
- Use `\cvsection{...}`, not `\section{...}`. It reserves vertical space so a heading is
  never stranded at the foot of a page with its content pushed overleaf.
- `\role`, `\project`, and `\projectnolink` build on `\tworow`, which uses `tabular*`
  rather than `\hfill`. That guarantees the right-aligned meta (dates, tech stack, year)
  stays on one line instead of wrapping with the year orphaned below.
- With both jobs listed the document runs to two pages. To pull it back to one, cut the
  `Multi-tenant AI Chatbot` project entry — that work is already covered by the Inkphase
  experience bullets.
