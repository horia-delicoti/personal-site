---
title: Hugo
---

[Hugo](https://gohugo.io/) is a fast, open-source static site generator written in Go. It builds websites from Markdown and template files, producing static HTML, CSS, and JS assets that can be deployed anywhere. Hugo is known for its speed, flexibility, and robust content management features.

---

## 🛠️ Technical Overview

- **Written in:** Go (Golang)
- **Build Speed:** Can generate thousands of pages in seconds.
- **Content Structure:** Uses a content directory (usually `content/`) with Markdown files and front matter (YAML, TOML, or JSON).
- **Templates:** Uses Go’s `text/template` and `html/template` engines for layouts and partials.
- **Taxonomies:** Built-in support for tags, categories, and custom taxonomies.
- **Data Files:** Supports YAML, TOML, and JSON data files for dynamic content.
- **Shortcodes:** Custom reusable snippets for embedding content or logic in Markdown.
- **Multilingual:** Native support for multi-language sites.
- **Asset Pipeline:** Built-in image processing, SCSS/SASS compilation, minification, and fingerprinting.

---

## 📦 Installation

```sh
# macOS (Homebrew)
brew install hugo

# Linux (Snap)
sudo snap install hugo

# Download binary
https://github.com/gohugoio/hugo/releases
```

**Binary location:**

- Homebrew: `/usr/local/bin/hugo` or `/opt/homebrew/bin/hugo`
- Snap: `/snap/bin/hugo`

---

## 🗂️ Project Structure

```sh
my-site/
├── archetypes/        # Archetype templates for new content
├── content/           # Markdown content files
├── data/              # Data files (YAML, TOML, JSON)
├── layouts/           # Templates and partials
├── static/            # Static assets (images, CSS, JS)
├── themes/            # Themes (can be Git submodules)
├── config.toml        # Site configuration (TOML/YAML/JSON)
└── resources/         # Generated assets (images, CSS, etc.)
```

---

## ⚙️ Common Commands

```sh
hugo new site mysite                 # Create a new Hugo site
hugo new posts/my-first-post.md      # Create a new content file
hugo server -D                       # Start local server with drafts
hugo                                 # Build the site (output to ./public)
hugo --minify                        # Build and minify output
hugo --themesDir ../themes           # Specify themes directory
```

---

## 📝 Configuration

- Main config file: `config.toml`, `config.yaml`, or `config.json`
- Set baseURL, language, theme, taxonomies, params, menus, etc.
- Example (`config.toml`):

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "My Hugo Site"
theme = "ananke"
paginate = 10
```

---

## 🧩 Templates & Shortcodes

- **Layouts:** `layouts/_default/single.html`, `layouts/_default/list.html`
- **Partials:** Reusable template snippets (`layouts/partials/`)
- **Shortcodes:** Place in `layouts/shortcodes/`, used in Markdown as `{{< myshortcode >}}`
- **Variables:** `.Site`, `.Page`, `.Params`, `.Content`, etc.

---

## 🚀 Deployment

- Output is static HTML in the `public/` directory.
- Can be deployed to any static host: GitHub Pages, Netlify, Vercel, S3, Cloudflare Pages, etc.
- Supports custom deployment scripts and CI/CD pipelines.

---

## 📚 Useful Links

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Themes](https://themes.gohugo.io/)
- [Hugo Pipes (asset pipeline)](https://gohugo.io/hugo-pipes/)
- [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/)
- [Hugo Templates](https://gohugo.io/templates/)

---
