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
├── _layouts/
│   └── default.html               # Base layout
├── css/style.css                  # Global stylesheet
├── js/main.js                     # Shared JS (hamburger, scroll, fade-in, form)
├── images/                        # Logo and site images
├── index.html                     # Homepage
├── services.html                  # Services page
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
- [ ] Rebuild homepage with full content sections (hero, services, pricing, about, service area, contact, CTA)
- [ ] Rebuild services page with detailed service descriptions
- [ ] Add contact form (section or standalone page)
- [ ] Add hero image / site photos
- [ ] Add OG share image (1200x630)

### Future
- [ ] Service area location pages
- [ ] Blog system (`_posts/`, `_layouts/post.html`, `blog.html`)
- [ ] Connect contact form to backend (Formspree or custom)
- [ ] Google Search Console + analytics
- [ ] Custom domain migration
- [ ] Image optimization (WebP conversion)
