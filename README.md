# bentrotman.com

The Ben Trotman Information Service. Ceefax visual language, modern website behaviour.

## Publishing a page

1. `npm run new` and answer three questions. It creates the file with the next page number.
2. Write.
3. Fill `summary`, set `status: published`.
4. `npm run ship`. Checks, commits with the page number, pushes. Vercel deploys.

That's it.

## Everything else

- `npm run dev` to see the site locally, drafts included.
- `npm run check` to validate content without shipping. It also runs before every build.
- To put a page in the BEST PAGES block on the front page, set `featured: true` in its front matter. Up to 12 show.
- ABOUT, NOW and CONTACT copy live in `content/pages/`. Same workflow, no page number.
- New section: add one line to `content/sections.json` and create the folder `content/<number>-<slug>/`.
- Launch date and frozen clock: `content/site.json`.
- Contact form needs `RESEND_API_KEY` and `CONTACT_TO` on Vercel. See `.env.example`.
- The header clock is frozen on purpose. Leave it.

Full specification: `docs/build-spec.md`.
