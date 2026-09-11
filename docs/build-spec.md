# bentrotman.com build specification

Status: Phase A approved 11 September 2026. Phase B proposed below. No code until Phase B is approved.

This document is the single handoff for the build. Part 1 restates the approved Phase A decisions and copy so the builder never has to read the chat. Part 2 is Phase B.

---

# PART 1: APPROVED (Phase A)

## 1.1 Strategy

bentrotman.com is where Ben Trotman's thinking gets filed. One reader: a mid-career parent in the UK or Australia who has run something, is fluent in commercial reality, and is bored of content that agrees with itself. A repository, filled a page at a time. Empty sections are part of the design.

The Ceefax idea does real work: instant recognition, a number and a timestamp on everything, a dry and slightly official tone, and a low cost of publishing (a four-line page still feels finished).

Emerson Growth: the site is upstream of it, not a funnel into it. One line on About, one page in BUILDING, a separate email for commercial enquiries. Nobody gets sold to.

Finn's Fizz: lives in BUILDING as a live father-and-son experiment. The wider kids-venture concept is never named. The working name StoryVentures never appears. The working name Retailnomics never appears; refer to "a working idea that asks what mechanism actually explains a retail outcome."

Private spine (never printed): every good story is a fight between two things that both matter; everyone is a little bit right and a little bit wrong all of the time. Public strapline: **A little bit right, a little bit wrong, all of the time.** Possible sign-off: *Go and find out.*

Twelve-month measures: 50 published pages, 1,000 unique visitors a month by month 12, returning-visitor share above 20%, five inbound conversations that name the site.

## 1.2 Information architecture and numbering

- Section = three digits, tens. URL `/130`.
- Page = section plus three-digit sequence. URL `/130/007`.
- Sequence is per section, chronological, zero-padded, starts at 001, never reused. Unpublished numbers stay dead.
- `/130/7` redirects to `/130/007`.
- New sections take the next free tens number after 199: 200, 210, 220. The 1xx block is fixed.
- Users never type numbers. Every number on screen is a link.

```
100  HOME               Masthead, strapline, headline, latest pages, section list, status line
110  ABOUT              Who, where the lens came from, why the site, why Ceefax
120  UK / AUSTRALIA     Noticing, not research
130  RETAIL & CONSUMER  Operator observations. Home of the working idea about mechanisms
140  PARENTING          Three boys. Noticing, never advising
150  BUILDING           Emerson Growth, Finn's Fizz, future projects
160  TECHNOLOGY & AI    Agents, local models, tools, what broke
170  EVERYTHING ELSE    Football, music, books, travel, cars, people
180  NOW                Three to five things, dated, rewritten monthly, no archive
190  INDEX              Every page. Filter by section and length. Sort by number or date
199  CONTACT            Form. Two addresses. Nothing clever
```

## 1.3 Homepage wireframe

Header row on every page. Clock is frozen: **Sun 27 Apr  13:13/00**. The `LAST UPDATED` status line is the only recency signal on the site.

Desktop (1024px and up):

```
P100  BENTROTMAN  100                              Sun 27 Apr  13:13/00
[CYAN BLOCK ] THE BEN TROTMAN INFORMATION SERVICE
A little bit right, a little bit wrong, all of the time.
──────────────────────────────────────────────────────────────────────
[HEADLINE: most recent published page title, large]          130/001
Summary line from front matter.                        ESSAY  11 SEP

──────────────────────────────────────────────────────────────────────
LATEST                                    │  SECTIONS
140/001  Title of page ............ SHORT │  110  ABOUT
150/001  Title of page ............ NOTE  │  120  UK / AUSTRALIA
170/001  Title of page ............ SHORT │  130  RETAIL & CONSUMER
120/001  Title of page ............ ESSAY │  140  PARENTING
                                          │  150  BUILDING
(up to 6, excluding the headline)         │  160  TECHNOLOGY & AI
                                          │  170  EVERYTHING ELSE
                                          │  180  NOW
                                          │  190  INDEX
                                          │  199  CONTACT
──────────────────────────────────────────────────────────────────────
[YELLOW BLOCK] 7 PAGES IN SERVICE   LAST UPDATED 11 SEP 2026
110 ABOUT   190 INDEX   199 CONTACT      Inspired by Ceefax, 1974 to 2012. Not the BBC.
```

Mobile (under 1024px): same elements, single column, in this order: header row, masthead block, strapline, headline, LATEST (3 rows), SECTIONS (full list), status block, footer.

## 1.4 Core copy

### 100 HOME (static)

Masthead block: `THE BEN TROTMAN INFORMATION SERVICE`
Strapline (white, under the block): `A little bit right, a little bit wrong, all of the time.`

Zero-page state:

```
NO PAGES IN SERVICE.
FIRST TRANSMISSION EXPECTED OCT 2026.
110 ABOUT and 180 NOW are live.
```

### 110 ABOUT

Header: `P110  BENTROTMAN  110` with green block `110 ABOUT`.

I'm Ben. I live in Hitchin, Hertfordshire with my three boys and I've spent about half my adult life in Australia and half in the UK. I still don't know which one is home, probably it's both. I love music, football, Rik Mayall, learning about all of this tech stuff and absolutely love retail and consumer products that make a dent in the world.

I have spent twenty years inside supermarkets and consumer businesses: Woolworths and Coles in Australia and Dixons & Tesco in the UK plus a fair go in consulting where I got to help out Morrisons, Burberry, Argos amongst others. That is a long time watching very capable people make decisions with incomplete information, under pressure, with a story already written about why 'it' would work.

Most of the interesting things I know came from noticing when the story and the numbers disagreed, and going to find out which one was lying. Turns out, everyone is a little bit right and a little bit wrong all the time. Perspective is a funny old thing.

That's the thinking that this site is built on. I don't expect anyone to like it.

I'm suspicious of received explanations, I like going to the place and checking, and I'd rather be wrong in public than vague in private.

I started Emerson Growth, a commercial growth and equity advisory firm for consumer brands and retailers. If that's why you're here, [emersongrowth.com] is the door.

Alongside that I build things. AI agents, local models, a fizzy drink with my eldest, and a working idea that asks what mechanism actually explains a retail outcome. Some of it will become pages here. Some of it will die. Both are fine by me.

Why it looks like this. Ceefax was the BBC's teletext service, 1974 to 2012: numbered pages, black screen, block colour, a clock in the corner, and a tone that told you the news without asking how you felt about it. I grew up with it. Everything here has a page number. You never have to type one. The service is not affiliated with the BBC, who would probably rather I didn't do this. If you're from the BBC and it annoys you, let me know.

Arsenal. Lots of music, most genres, no loyalty. LinkedIn is [link] if you need it.

Go and find out.

### 180 NOW

Header: `P180  BENTROTMAN  180` with yellow block `180 NOW`.
Sub-line: `UPDATED 11 SEP 2026. Rewritten roughly monthly. Old versions are not kept.`

**Importing a car from Australia to the UK.** A 2008 Golf GTI, Sydney to Hitchin, because I couldn't bring myself to sell it. The DVLA rejected the first application. I learned that putting the £55 registration fee and £410 road tax on one cheque confuses a government ledger, that a "date of manufacture" letter is not a specification, and that the Australian government will confirm your car isn't stolen for a small fee. Resubmitted with a nine-item evidence pack. A page is coming, mostly as a public service.

**Building Finn's Fizz with my son.** A fizzy drink is the excuse. The real product is a boy who believes he can make things. Twenty-minute sessions, something tangible every time, he leads, I fetch. Five flavours scored by three brothers; lemon, lime and mint won. The first trial was going to be kiwi and mango until the mango failed quality control and we had an emergency pivot. If it stops being fun, it fails.

**A client engagement I can't describe.** No name, no sector, no problem statement. What I can say: the business is choosing between [protecting what works and growing past it], the people on each side are both right, and the job is to sit in the middle of that and be useful. This is the only kind of work I find interesting. *[Ben: swap the bracketed tension for the real one.]*

### 199 CONTACT

Header: `P199  BENTROTMAN  199` with red block `199 CONTACT`.

Arguments, corrections and coffee: use the form. It lands in my inbox and I read all of it. I reply to most of it.

Commercial enquiries, Emerson Growth work, anything with a budget attached: ben@emersongrowth.com.

Fields: Name, Email, Message. Button: `TRANSMIT`.
Success: `MESSAGE RECEIVED 13:13. NO FURTHER ACTION REQUIRED.`
Failure: `TRANSMISSION FAILED. TRY AGAIN OR EMAIL ben@emersongrowth.com.`

### Empty states

Template (date is one config value):

```
P140  BENTROTMAN  140                              Sun 27 Apr  13:13/00
[BLOCK] 140 PARENTING

PAGE 140 NOT YET IN SERVICE.
FIRST TRANSMISSION EXPECTED OCT 2026.

Three boys. What I'm noticing, not what you should do.

While you wait:  110 ABOUT   180 NOW   100 HOME
```

Section lines:

- 120: Two countries, one confused resident. Contrasts, not conclusions.
- 130: Twenty years in supermarkets. Margins, mechanisms, and why the obvious answer is usually somebody's marketing.
- 140: Three boys. What I'm noticing, not what you should do.
- 150: Businesses, products, experiments. Including the ones that don't work.
- 160: Agents, local models, tools. What worked, what broke, what I'd skip.
- 170: Football, music, books, cars, people. No sub-structure. Deliberately.

INDEX empty: `INDEX EMPTY. 0 PAGES IN SERVICE. THIS IS TEMPORARY.`
Sections with one page: drop the NOT YET IN SERVICE block, list the page, add `MORE PAGES EXPECTED` beneath.
404: `P404  BENTROTMAN  404` then `THIS PAGE IS NOT IN SERVICE.` and the while-you-wait line.

## 1.5 Launch content list

- **130/001 Twenty years of watching smart people lose to the obvious answer** (essay, About-length). Where the lens came from without stating it. Three moments inside supermarkets where the accepted story and the numbers disagreed, what happened when I went and looked, and why I've never trusted a consensus since.
- **120/001 Australia pays you properly and then charges you for it** (note). Wages, rent, coffee, childcare. The UK is cheaper and poorer; Australia is richer and more expensive. Which one you prefer says more about you than the countries.
- **120/002 The two words that don't translate** (short). "Mate" and "sorry". One is inclusion, one is territory. A field guide from someone who has got both wrong in both places.
- **120/003 Same supermarket, different country, different animal** (note). Why a Woolworths in Sydney and a Tesco in Stevenage look identical and behave nothing alike.
- **130/002 Private label is a hostage negotiation** (essay). Retailers need the brand for traffic; brands need the shelf for survival. Both are right to be scared.
- **130/003 The loyalty card knows. The buyer decides.** (note). Part of a working idea about mechanisms. Data has never once made a category decision; a person did, with the data as cover.
- **140/001 Letting him lose** (short). A board game, a boy, and the moment I realised protecting him and preparing him were the same instinct pointing in opposite directions.
- **140/002 Fair isn't equal, and three boys already know it** (note). What "fair" turned out to mean and why the boys understood it before I did.
- **150/001 Finn's Fizz: the mango failed quality control** (note). What we're actually building (it isn't a drink), the rules, the scoring, the pivot, and what a market stall teaches that a spreadsheet can't.
- **150/002 Starting an advisory firm when everyone said advisory was over** (note). Why Emerson Growth exists. The one page on the site that talks about the day job.
- **160/001 I ran a local model for a month to stop trusting the cloud** (note). Convenience versus control. What a local LLM can and can't do in 2026, and where I gave up and paid the subscription.
- **160/002 Agents don't need to be smart. They need to be boring.** (short). Every agent that worked was dull. Every one that impressed people broke.
- **170/001 Importing a car from Australia: the DVLA and the £465 cheque** (essay). The rejection, the three reasons, the nine-item evidence pack, and what a paper form teaches you about how institutions read.
- **170/002 Arsenal and the problem with being nearly right** (short). Conviction versus evidence, in football form.

Launch with at least one page that picks a side hard, so the strapline reads as a stance rather than an excuse.

---

# PART 2: PROPOSED (Phase B)

## 2.1 Visual system

### Principle

Ceefax was a 40 by 24 character grid on a black screen with eight colours and no typography choices. The site keeps the parts that carry information (numbers, blocks, status lines, the header row) and drops the parts that were hardware limitations (fixed grid, all-mono, double-height, flashing). Boldness is spent in one place: the header row and block headings. Everything else is quiet.

### Typography

Ranked:

1. **IBM Plex Mono for chrome, IBM Plex Sans for body.** Chosen. Same superfamily, so the two faces share proportions and x-height and never fight. Plex Mono has strong capitals and tabular figures, which is what a Ceefax header row needs. Plex Sans has slightly sturdier strokes than most sans faces, which matters on pure black where thin type sparkles. Both free, self-hosted via `next/font/google`, zero layout shift, no third-party request.
2. JetBrains Mono plus Atkinson Hyperlegible. Very readable, but two unrelated families and Atkinson's quirky glyphs pull attention from the words.
3. All monospace. Rejected. A 1,500-word essay in mono on a phone is a punishment.

Chrome = header row, block headings, page numbers, nav, status lines, LATEST and INDEX rows, footer. Chrome is upper case (this is a Ceefax choice, not a default), letter-spacing 0.02em.
Body = everything inside a page. Sentence case, left aligned, never justified, never coloured.

Type scale (mobile / desktop, px, line-height):

| Token | Use | Mobile | Desktop | LH |
|---|---|---|---|---|
| chrome-xs | footer, timestamps, length tags | 12 | 13 | 1.4 |
| chrome | header row, nav, list rows, status | 14 | 15 | 1.5 |
| block | block headings (section, masthead) | 16 | 18 | 1.3 |
| body | page text | 17 | 18 | 1.65 |
| body-lg | page title on a page | 24 | 28 | 1.2 |
| headline | homepage headline | 26 | 34 | 1.15 |

Body measure: max 66ch (about 640px at 18px). Chrome container: max 960px. Headings inside body text: Plex Sans 600, 20/22px, no colour. Quotes: Plex Sans italic, cyan left border 2px. Code: Plex Mono 15px, white on `#111` only inside body, never elsewhere (tinted black is banned in chrome).

### Colour tokens

Pure teletext values. The screen was pure black and the colours were saturated; don't soften them.

| Token | Hex | Allowed as |
|---|---|---|
| `--bg` | #000000 | background, always |
| `--fg` | #FFFFFF | body, chrome, text on red/blue blocks |
| `--fg-dim` | #A6A6A6 | summaries, timestamps, length tags |
| `--cyan` | #00FFFF | block fill (black text), link text |
| `--yellow` | #FFFF00 | block fill (black text), status-line text |
| `--green` | #00FF00 | block fill (black text), "in service" text |
| `--red` | #FF0000 | block fill (white text), error text, contact |
| `--blue` | #0000FF | block fill (white text) only, never text |

Rules:
- Cyan, yellow, green blocks carry black text. Red and blue blocks carry white text. Contrast on all of these is AA or better.
- Blue is never used as text (2.4:1 on black). Red text only for errors, and only in chrome sizes 14px and up.
- Body text is white. Links in body are cyan with an underline on hover and focus. Visited links stay cyan.
- Magenta is dropped. Five accents are enough and magenta on black is ugly.
- Focus ring: 2px solid yellow, offset 2px. Reduced-motion is respected but there is nothing to reduce.

Block colour per section lives in the sections config. Defaults: 100 cyan, 110 green, 120 cyan, 130 yellow, 140 green, 150 red, 160 blue, 170 cyan, 180 yellow, 190 blue, 199 red. New sections inherit the next colour in the cycle cyan, yellow, green, blue, red.

### Grid and spacing

- 4px base. Scale: 4, 8, 12, 16, 24, 32, 48, 64.
- Container: full width to 960px, centred. Padding 16px mobile, 32px desktop.
- Vertical rhythm: 24px between chrome blocks, 32px between body sections, 48px before the footer.
- Horizontal rules: 1px white at 40% opacity. Used only between the header area, the body, and the footer. Not between list rows.
- No cards, no borders on content, no border radius anywhere, no shadows.
- List rows (LATEST, INDEX, section pages): one line each. `number  title  length` with dot leaders on desktop, wrapped title on mobile with number and length on their own line beneath.

### Navigation pattern

- Header row on every page: `P{n}  BENTROTMAN  {n}` left, `Sun 27 Apr  13:13/00` right. On mobile the seconds are dropped.
- Under the header on every non-home page: `100 HOME   190 INDEX   199 CONTACT` plus the current section number and name. Plain text links, no menu, no hamburger.
- On a page: footer nav shows `PREV 130/006  Title` and `NEXT 130/008  Title` within the section by number, plus `BACK TO 130 RETAIL & CONSUMER`.
- On a section page: list of pages newest first, then the empty-state line if under three pages.
- Nothing is sticky. Nothing animates except link underline and focus ring, 100ms.

### Breakpoints

Two layouts only:
- Default (under 1024px): single column.
- `lg` (1024px and up): homepage becomes two columns (LATEST left, SECTIONS right); everything else stays single column with a wider chrome container. Body measure never exceeds 66ch regardless.

Tailwind's `sm` and `md` are not used. If a third breakpoint feels necessary, the design has gone wrong.

### Ceefax conventions: kept and dropped

Kept: header row with page number, service name, day, date, clock; three-digit page numbers; block-colour headings; pure black background; the five accents; upper-case chrome; status messages; text-only next/back navigation; page-not-in-service messages; the frozen clock.

Dropped, and why: the 40 by 24 fixed grid (breaks on phones); double-height text (novelty); mosaic block graphics (novelty, unreadable); flashing and reveal (banned by brief); rolling sub-pages `1/4` (a page is a page); a keypad or remote metaphor (users never type numbers); monospace body (readability); magenta (ugly); CRT scanlines, static, curvature (banned by brief); a live clock (it's frozen on purpose).

## 2.2 Content model and front matter

One content type: a page. Length is metadata.

```yaml
---
title: "Private label is a hostage negotiation"
date: 2026-10-04
updated:                       # optional, shown as UPDATED on the page if present
section: retail                # uk-aus | retail | parenting | building | tech | other
length: essay                  # short | note | essay
summary: "Retailers need the brand for traffic. Brands need the shelf to survive. Both are right to be scared."
tags: [private-label, margin]
status: draft                  # draft | published
page: "130/002"                # written by the script; validated against folder and filename
---
```

Rules:
- Files are `.md` by default. `.mdx` is allowed when a page needs a component; nothing in V1 needs one.
- Folder = section: `content/130-retail/`. Filename = sequence plus a human slug: `002-private-label-hostage.md`. The URL uses only the numbers; the slug is for Ben's file browser.
- `page` must equal `{folder number}/{filename prefix}`. The check script fails the build if it doesn't.
- `status: draft` pages are rendered in `npm run dev` and excluded from production builds. Drafts can be committed and pushed safely.
- `length` is Ben's call. The check script warns (does not fail) when word count is outside the band: short 50 to 300, note 300 to 1,000, essay 1,000 plus.
- `summary` is required for `published`. It is the only copy on HOME and INDEX besides the title.
- `tags` are stored and shown on the page as plain text. No tag pages in V1.
- ABOUT, NOW and CONTACT copy live as Markdown too: `content/pages/110-about.md`, `content/pages/180-now.md`, `content/pages/199-contact.md`. Same editing workflow, same front matter minus `section`, `length`, `page`.

Sections config (single source of truth for the app and the script):

```json
{
  "uk-aus":    { "number": 120, "name": "UK / AUSTRALIA",    "block": "cyan",   "tagline": "Two countries, one confused resident. Contrasts, not conclusions." },
  "retail":    { "number": 130, "name": "RETAIL & CONSUMER", "block": "yellow", "tagline": "Twenty years in supermarkets. Margins, mechanisms, and why the obvious answer is usually somebody's marketing." },
  "parenting": { "number": 140, "name": "PARENTING",         "block": "green",  "tagline": "Three boys. What I'm noticing, not what you should do." },
  "building":  { "number": 150, "name": "BUILDING",          "block": "red",    "tagline": "Businesses, products, experiments. Including the ones that don't work." },
  "tech":      { "number": 160, "name": "TECHNOLOGY & AI",   "block": "blue",   "tagline": "Agents, local models, tools. What worked, what broke, what I'd skip." },
  "other":     { "number": 170, "name": "EVERYTHING ELSE",   "block": "cyan",   "tagline": "Football, music, books, cars, people. No sub-structure. Deliberately." }
}
```

`site.json` holds the rest: `expectedTransmission: "OCT 2026"`, `frozenClock: "Sun 27 Apr  13:13/00"` (with a comment in the loader explaining the date so nobody fixes it), `contactTo`, `commercialEmail`.

Adding a section: one line in `sections.json`, one folder. Nothing else.

## 2.3 Publishing workflow

Target: under two minutes of admin before writing. Measured: about 40 seconds.

Steps:
1. `npm run new` (20 seconds). Pick a section from the list, type the title, pick a length. The script creates the file in the right folder with the next number and full front matter, and prints the path.
2. Write. Any editor.
3. Fill `summary`, set `status: published` (15 seconds).
4. `npm run ship` (10 seconds of typing, then walk away). Runs the check script, commits with the page number as the message, pushes. Vercel builds and deploys in about a minute.

There is no step 5.

### scripts/new-page.mjs

Node only, no dependencies.

```js
#!/usr/bin/env node
import { readdirSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const sections = JSON.parse(readFileSync("content/sections.json", "utf8"));
const rl = createInterface({ input, output });

const list = Object.entries(sections);
list.forEach(([slug, s], i) => console.log(`${i + 1}  ${s.number}  ${s.name}`));
const pick = Number(await rl.question("\nSection: "));
const [slug, section] = list[pick - 1] ?? [];
if (!section) { console.error("No such section."); process.exit(1); }

const title = (await rl.question("Title: ")).trim();
const length = (await rl.question("Length [short/note/essay] (note): ")).trim() || "note";
rl.close();

const dir = `content/${section.number}-${slug}`;
mkdirSync(dir, { recursive: true });
const used = readdirSync(dir).map(f => parseInt(f.slice(0, 3), 10)).filter(Number.isInteger);
const next = String((used.length ? Math.max(...used) : 0) + 1).padStart(3, "0");
const fileSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
const path = `${dir}/${next}-${fileSlug}.md`;
const today = new Date().toISOString().slice(0, 10);

writeFileSync(path, `---
title: "${title.replace(/"/g, '\\"')}"
date: ${today}
section: ${slug}
length: ${length}
summary: ""
tags: []
status: draft
page: "${section.number}/${next}"
---

`);
console.log(`\nCreated ${path}\nPage ${section.number}/${next}. Go and find out.`);
```

### scripts/check.mjs

Runs on `prebuild` and inside `ship`. Fails the build on:
- duplicate `page` values
- `page` not matching folder number and filename prefix
- `status` not in draft/published
- `length` not in short/note/essay
- `published` with empty `summary`
- banned strings anywhere in content: `StoryVentures`, `Retailnomics`, and the em dash character

Warns on: word count outside the length band; `published` page with `date` in the future.

### package.json scripts

```json
{
  "new":   "node scripts/new-page.mjs",
  "check": "node scripts/check.mjs",
  "ship":  "node scripts/check.mjs && git add -A && git commit -m \"$(node scripts/last-page.mjs)\" && git push",
  "prebuild": "node scripts/check.mjs"
}
```

`last-page.mjs` prints the `page` value of the most recently modified content file, so commit messages read `130/002`. If nothing content-related changed it prints `site`.

## 2.4 Build specification

### Stack

- Next.js 15, App Router, TypeScript. Static generation for every page. One route handler (contact).
- Tailwind CSS v4 with the tokens above defined as CSS variables in `globals.css`. No component library.
- Content: `gray-matter` for front matter, `next-mdx-remote` (RSC) with `remark-gfm` for rendering. Handles `.md` and `.mdx` identically.
- Fonts: `next/font/google` for IBM Plex Mono and IBM Plex Sans, `display: swap`, weights 400 and 600 only.
- Analytics, ranked:
  1. **Vercel Web Analytics.** One component, cookieless, no banner, free on the Hobby plan. Chosen for V1.
  2. Plausible. Better reports, £9 a month, also cookieless. Move here if Vercel's reporting annoys.
  Flag: neither tool measures returning visitors without a cookie, which neither sets. The 20% returning-visitor target as written is not measurable on this stack. Proxy for V1: share of direct and bookmark traffic. Revisit at month three.
- Hosting: Vercel Hobby. GitHub repo, push to `main` deploys. Preview deployments on branches include drafts (set `NEXT_PUBLIC_SHOW_DRAFTS=1` on preview only).
- Domain: bentrotman.com on Vercel DNS, www redirects to apex.

### Contact form

Ranked:
1. **Route handler plus Resend.** `POST /api/contact` validates, checks a honeypot field, sends to the address in `CONTACT_TO` via Resend's free tier (3,000 a month, needs a verified sending domain, which Vercel DNS makes a ten-minute job). Two env vars. Chosen.
2. Formspree free tier. Zero code, but their branding on the confirmation and a 50-a-month cap.
3. `mailto:`. Rejected: prints the gmail address, which was the thing to avoid.

Spam: honeypot field plus Vercel's rate limiting on the route. No CAPTCHA.

### Routes

```
/                      app/page.tsx                    100 HOME
/110                   app/110/page.tsx                ABOUT (from content/pages/110-about.md)
/180                   app/180/page.tsx                NOW
/190                   app/190/page.tsx                INDEX (client filter component)
/199                   app/199/page.tsx                CONTACT
/[section]             app/[section]/page.tsx          120 to 170, generateStaticParams from sections.json
/[section]/[seq]       app/[section]/[seq]/page.tsx    a page
/api/contact           app/api/contact/route.ts        POST only
/sitemap.xml           app/sitemap.ts
/robots.txt            app/robots.ts
not-found              app/not-found.tsx               404 in idiom
```

`next.config.ts` redirects: `/:section(\\d{3})/:seq(\\d{1,2})` to zero-padded; `/www.` to apex.

### Metadata

- `<title>`: `{page number}  {title}  BENTROTMAN` for pages, `BENTROTMAN  {number}  {section}` for sections.
- Description: `summary`.
- One static OG image (`public/og.png`, 1200 by 630, the header row and masthead on black). No per-page OG generation.
- Canonical set on every page.

### File structure

```
bentrotman/
  app/
    layout.tsx              fonts, HeaderRow, Footer, Analytics
    page.tsx                HOME
    globals.css             tokens, Tailwind
    not-found.tsx
    110/page.tsx
    180/page.tsx
    190/page.tsx
    199/page.tsx
    [section]/page.tsx
    [section]/[seq]/page.tsx
    api/contact/route.ts
    sitemap.ts
    robots.ts
  components/
    HeaderRow.tsx           P-number, service name, frozen clock
    Block.tsx               colour block heading
    StatusLine.tsx          yellow status text
    Nav.tsx                 100 HOME  190 INDEX  199 CONTACT + current section
    PageRow.tsx             number  title  length
    PageList.tsx            list of PageRow, newest first
    EmptyState.tsx          not-in-service message
    Prose.tsx               body typography wrapper
    PagerNav.tsx            prev / next / back within a section
    ContactForm.tsx         client component
    IndexFilter.tsx         client component, section and length filter, sort toggle
  lib/
    content.ts              loadAllPages, loadSection, loadPage, prevNext, counts
    sections.ts             typed access to sections.json and site.json
    dates.ts                11 SEP 2026 formatting
  content/
    sections.json
    site.json
    pages/
      110-about.md
      180-now.md
      199-contact.md
    120-uk-aus/
    130-retail/
    140-parenting/
    150-building/
    160-tech/
    170-other/
  scripts/
    new-page.mjs
    check.mjs
    last-page.mjs
  public/
    og.png
    favicon.svg             a yellow block with 100 in black
  next.config.ts
  tailwind.config.ts       (or CSS-first config in v4)
  package.json
  README.md                 the four publishing steps, nothing else
```

Twelve components. If the build wants a thirteenth, ask why.

### Quality floor

- Lighthouse 100 on performance and accessibility for a page and for HOME.
- Every interactive element keyboard-reachable with the yellow focus ring visible.
- No layout shift on font load.
- Works with JavaScript disabled except the INDEX filter and the contact form (which falls back to a `mailto:` on the Emerson address).
- Zero third-party requests other than Vercel Analytics and the contact route.

### Build sequence (for Claude Code)

1. Scaffold Next.js plus Tailwind, tokens, fonts, HeaderRow, Block, layout. Screenshot on mobile and desktop.
2. Content loader, sections config, check script, new-page script. Create one dummy page per section, run `npm run check`.
3. Section page, page page, PagerNav, EmptyState. Screenshot a section with zero, one and three pages.
4. HOME with real copy. INDEX with filter. Screenshot.
5. ABOUT, NOW, CONTACT from Markdown. Contact route with Resend. Test a send.
6. Metadata, sitemap, robots, 404, OG image, redirects.
7. Delete dummy pages. Deploy. Point domain.

## 2.5 What not to build in V1

From the brief:
- Newsletter or email capture
- RSS
- Comments
- Search (INDEX is enough)
- CMS or admin UI
- Dark/light toggle
- Related posts, recommendations, tag pages beyond the INDEX filter
- Any Emerson Growth service page or CTA
- Social share buttons
- Animations beyond hover and focus states

Added, because Ben will be tempted:
- A custom teletext font (Bedstead, MODE7). It reads as a costume, and it fails the readability rule.
- Mosaic block-graphic illustrations or a Ceefax-style weather map. Same reason.
- Per-page OG image generation. One static image is fine until month six.
- Reading-time badges. The length tag already does this.
- View counters, likes, reactions. Vanity, and they need state.
- Series or collections. If three pages belong together, link them in the text.
- A "start here" page. HOME and ABOUT are that.
- Footnotes plugin, image galleries, lightboxes. Images inline, full width, captioned in chrome-xs. That's all.
- A UK/Australia toggle, localisation, or spelling switch. Pick British spelling and stop.
- Draft preview links shared with other people. Preview deployments on Vercel already do this.
- More scripts. `new`, `check`, `ship`. If a fourth appears, it's procrastination.
- Restyling Emerson Growth to match. Different site, different job.
- Sound. Ceefax was silent.

---

**No code or implementation will begin until Ben explicitly approves this proposal.**
