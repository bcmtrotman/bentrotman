<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes for agents

- Read `docs/build-spec.md` before changing anything. It is the approved specification.
- No em dashes anywhere: copy, code comments, commit messages. `scripts/check.mjs` fails the build on them in content.
- The words "StoryVentures" and "Retailnomics" never appear on the site.
- The header clock is frozen at Sun 27 Apr 13:13/00. It is deliberate. Do not make it live.
- Two breakpoints only: default and `lg` (1024px). The Tailwind theme removes the others on purpose.
- Twelve components. Ask before adding a thirteenth.
- Nothing from the "what not to build" list in the spec, even if asked nicely.
