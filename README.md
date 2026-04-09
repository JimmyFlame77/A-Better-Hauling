# A Better Hauling Co. — Elizabeth, CO

Marketing site for **A Better Hauling Co.**, a dumpster rental and hauling services company serving Elizabeth, CO and the surrounding Elbert County area. Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

**Live site:** [https://jimmyflame77.github.io/A-Better-Hauling/](https://jimmyflame77.github.io/A-Better-Hauling/)
**Phone:** (303) 522-9020

---

## Architecture Overview

```
A-Better-Hauling/
├── _config.yml                    # Site config (url, baseurl, plugins)
├── _data/
│   ├── site.yml                   # Phone, email, company name, hours, Facebook
│   ├── navigation.yml             # Header/footer nav links
│   ├── pricing.yml                # All 7 dumpster sizes and pricing
│   ├── services.yml               # Service card definitions
│   └── service_areas.yml          # Cities served
├── _includes/
│   ├── head.html                  # <head> — meta, OG, Twitter, favicon, CSS, schema
│   ├── header.html                # Sticky header, logo, nav, phone, hamburger
│   └── footer.html                # Footer with links, contact info, copyright
├── _posts/                        # Blog articles (Markdown)
├── _layouts/
│   ├── default.html               # Base layout
│   └── post.html                  # Blog article layout
├── css/style.css                  # Global stylesheet
├── js/main.js                     # Shared JS (hamburger, scroll, fade-in, form)
├── images/                        # Logo and site images
├── index.html                     # Homepage
├── services.html                  # Services page
├── blog.html                      # Blog index (renders post cards)
├── robots.txt                     # Crawl directives + sitemap
├── Gemfile                        # GitHub Pages dependencies
└── .gitignore                     # Build artifacts excluded
```

---

## How to Update Things Globally

### Update company info (phone, email, hours)

Edit **`_data/site.yml`**. All pages, header, footer, and schema pull from this file.

```yaml
phone: "303-522-9020"
phone_formatted: "(303) 522-9020"
phone_link: "tel:3035229020"
email: "dispatch@abetterhauling.com"
hours: "Mon–Fri 7AM – 5PM"
```

### Update dumpster pricing

Edit **`_data/pricing.yml`**. All 7 sizes (10yd–40yd) with price, dimensions, rental days, tonnage, features. Any page displaying pricing pulls from this single file.

### Update services

Edit **`_data/services.yml`** for the service card definitions (title, icon, description, CTA).

### Update service areas

Edit **`_data/service_areas.yml`** to add or remove cities.

### Update navigation

Edit **`_data/navigation.yml`**. Header, mobile menu, and footer all use this data.

### Update header / footer

- **Header markup:** `_includes/header.html`
- **Footer markup:** `_includes/footer.html`

### Update shared CSS / JS

- **CSS:** `css/style.css`
- **JS:** `js/main.js` (hamburger, smooth scroll, fade-in animations, form validation)

### Update SEO / meta tags

- **Sitewide:** `_config.yml` and `_includes/head.html`
- **Per-page:** Front matter of each `.html` file
- **Schema:** LocalBusiness JSON-LD in `_includes/head.html`

---

## How to Write a Blog Post

### Create the file

Add a new Markdown file to `_posts/` using Jekyll's naming convention:

```
_posts/YYYY-MM-DD-your-post-slug.md
```

Example: `_posts/2026-05-01-spring-cleanup-dumpster-tips.md`

### Front matter template

```yaml
---
layout: post
title: "Your Post Title Here"
date: 2026-05-01
category: "Tips"
author: "A Better Hauling"
image: "/images/your-image.webp"
excerpt: "Short summary for the blog card (1-2 sentences)."
description: "SEO meta description (under 160 characters)."
---
```

| Field | Required | Notes |
|-------|----------|-------|
| `layout` | Yes | Always `post` |
| `title` | Yes | The article headline |
| `date` | Yes | Must match the filename date |
| `category` | No | Badge on the card (e.g., "Tips", "Guides") |
| `author` | No | Defaults to "A Better Hauling" |
| `image` | No | Path to hero/card image. Defaults to hero-bg.webp |
| `excerpt` | No | Card summary. Auto-generated if omitted |
| `description` | No | SEO meta description |

### Write content in Markdown

Use `##` for section headings. The article layout renders a cinematic hero image, title with yellow accent bar, prev/next navigation, and a CTA band.

### Publish

```bash
git add _posts/2026-05-01-spring-cleanup-dumpster-tips.md
git commit -m "New blog post: Spring cleanup dumpster tips"
git push origin main
```

### Note on blog URLs

Blog URLs include the category: `/guides/how-to-choose-the-right-dumpster-size.html`. If you rename a category, the URL changes. Keep categories consistent.

---

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Site at http://localhost:4000/A-Better-Hauling/
```

---

## Deployment

Auto-deploys via **GitHub Pages** on push to `main`.

When migrating to a custom domain:
1. Set custom domain in repo Settings → Pages
2. Change `baseurl` in `_config.yml` from `"/A-Better-Hauling"` to `""`
3. Update `url` in `_config.yml` to the production domain
4. Push changes

---

## Key Files Quick Reference

| I want to change...             | Edit this file                          |
|---------------------------------|-----------------------------------------|
| Company phone / email / hours   | `_data/site.yml`                        |
| Dumpster pricing                | `_data/pricing.yml`                     |
| Service cards                   | `_data/services.yml`                    |
| Service areas                   | `_data/service_areas.yml`               |
| Nav links                       | `_data/navigation.yml`                  |
| Header markup                   | `_includes/header.html`                 |
| Footer markup                   | `_includes/footer.html`                 |
| Global CSS                      | `css/style.css`                         |
| Shared JS                       | `js/main.js`                            |
| Homepage content                | `index.html`                            |
| Services page content           | `services.html`                         |
| Blog index                      | `blog.html`                             |
| Blog posts                      | `_posts/YYYY-MM-DD-slug.md`             |
| Blog post layout                | `_layouts/post.html`                    |
| SEO meta (sitewide)             | `_includes/head.html`, `_config.yml`    |
| SEO meta (per page)             | Front matter of each `.html` file       |
| Schema / structured data        | `_includes/head.html`                   |

---

## Tech Stack

- **Jekyll 3.10** (GitHub Pages compatible)
- **Vanilla JS** — no frameworks
- **GitHub Pages** for hosting and CI/CD
- **Google Fonts** — Bebas Neue + Barlow

---

## To Do

### Phase 2 — Page Builds
- [x] ~~Rebuild homepage with full content sections~~ — Done (hero, services, pricing, about, service area, contact, CTA)
- [x] ~~Rebuild services page~~ — Done (4 alternating service rows with images)
- [x] ~~Add contact form~~ — Done (section on homepage, visual only — backend TBD)
- [x] ~~Add hero images / site photos~~ — Done (all from current site, converted to WebP)
- [x] ~~Add OG share image~~ — Done (1200x630 WebP, 52KB, from hero-bg)
- [x] ~~Add canonical URLs to all pages~~ — Done
- [x] ~~Verify blog post meta descriptions under 160 chars~~ — Done

### Future
- [x] ~~Service area location pages~~ — Done (7 cities with localized content)
- [x] ~~Blog system~~ — Done (`_posts/`, `_layouts/post.html`, `blog.html`, 3 articles)
- [ ] Connect contact form to backend (Formspree or custom)
- [ ] Google Search Console + analytics
- [ ] Custom domain migration:
  1. Set custom domain in repo Settings → Pages
  2. Change `url` in `_config.yml` from `"https://jimmyflame77.github.io"` to `"https://yourdomain.com"`
  3. Change `baseurl` in `_config.yml` from `"/A-Better-Hauling"` to `""`
  4. Push changes — OG images, canonicals, sitemap, and all links auto-update
- [x] ~~Image optimization~~ — Done. All images WebP, logo.png → logo.webp, max compression (569KB total)

---

### Blog Dashboard Integration
The `_blog-config.json` file in the repo root enables this site in the [Proxy Blog Dashboard](https://dashboard.proxymarketing.ai). The dashboard auto-discovers any repo containing this file and adds it to the site selector. If you build a new Jekyll site and want it to appear in the dashboard, add a `_blog-config.json` to the repo root:

```json
{
  "postsPath": "_posts",
  "imagesPath": "images",
  "defaultAuthor": "Your Site Name",
  "categories": ["Tips", "Guides", "News"]
}
```

Adjust `imagesPath` to match your site's image directory and `categories` to match your content categories.

---

### BlogPosting Schema
Every blog post automatically includes `BlogPosting` JSON-LD structured data (schema.org). This is generated in `_layouts/post.html` using front matter fields (title, date, author, description, image). No manual setup needed — any post published through the Proxy Blog Dashboard or added to `_posts/` gets rich result eligibility in Google automatically. When building new sites with this framework, include the BlogPosting schema block in `_layouts/post.html` to maintain this behavior.
