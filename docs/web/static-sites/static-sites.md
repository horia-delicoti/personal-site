---
title: Static Sites
---

**Static sites** are websites composed of fixed HTML, CSS, and JavaScript files that are generated ahead of time and served directly to clients, without requiring server-side processing on each request. They are built using static site generators (SSGs) such as Hugo, Jekyll, Eleventy, and Docusaurus.

---

## 🛠️ Technical Overview

- **Build Process:** Source content (Markdown, YAML, JSON, images) is compiled into static assets by an SSG. The output is a directory of HTML, CSS, JS, and media files.
- **Hosting:** Can be served from any HTTP server (Nginx, Apache, Caddy) or CDN (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
- **No Server-Side Code:** All dynamic behavior is handled client-side (JavaScript, APIs) or at build time (data fetching, templating).
- **Version Control:** Content and code are typically managed in Git repositories, enabling CI/CD workflows and atomic deploys.
- **Atomic Deploys:** Entire site is rebuilt and deployed as a unit, reducing risk of partial updates or inconsistent state.

---

## ⚡ Why Static Sites Are Better

- **Performance:**  
  - No server-side rendering or database queries at request time.
  - Assets can be cached aggressively at the CDN edge, resulting in sub-100ms TTFB globally.
  - Minimal runtime dependencies—just a web server or CDN.

- **Security:**  
  - No server-side code or database to exploit.
  - Attack surface is drastically reduced (no SQL injection, no server-side RCE).
  - HTTPS and HTTP headers can be enforced at the CDN or server level.

- **Scalability:**  
  - Static files scale linearly—serving 1 or 1 million users is the same for a CDN.
  - No backend bottlenecks or scaling infrastructure required.

- **Reliability:**  
  - Fewer moving parts mean fewer points of failure.
  - Sites remain available even if the origin server is down (CDN cache).

- **Cost:**  
  - Can be hosted for free or at very low cost (GitHub Pages, Netlify, Cloudflare).
  - No need for backend servers, databases, or complex infrastructure.

- **DevOps & CI/CD:**  
  - Easy to automate builds and deploys with Git hooks, CI pipelines.
  - Rollbacks are trivial—just redeploy a previous build.

---

## 🧩 Technical Features

- **Templating:** SSGs use template engines (Go templates, Liquid, Nunjucks, JSX/MDX) for reusable layouts and partials.
- **Content Sourcing:** Markdown, YAML, TOML, JSON, headless CMS APIs, or local files.
- **Asset Pipeline:** Image optimization, CSS/JS minification, fingerprinting, and bundling at build time.
- **Incremental Builds:** Some SSGs (e.g., Gatsby, Next.js static export) support partial rebuilds for large sites.
- **Plugins & Extensions:** Extend build process with custom scripts, data sources, or transformations.

---

## 🛡️ Limitations & Workarounds

- **Dynamic Content:**  
  - Handled via client-side JavaScript (fetching from APIs, headless CMS, serverless functions).
  - Forms, comments, search, and authentication require third-party services or custom JS.
- **Build Time:**  
  - Large sites with thousands of pages can have long build times (mitigated by incremental builds or caching).
- **Personalization:**  
  - No per-user server-side rendering; must use client-side logic for personalization.

---

## 🛠️ Example: Hugo Build & Deploy

```sh
# Build static site
hugo --minify

# Output in ./public directory
# Deploy to Netlify, Vercel, or upload to S3/Cloudflare
```

---

## 📚 Useful Links

- [Jamstack Architecture](https://jamstack.org/)
- [Hugo](https://gohugo.io/)
- [Jekyll](https://jekyllrb.com/)
- [Eleventy](https://www.11ty.dev/)
- [Docusaurus](https://docusaurus.io/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

---
