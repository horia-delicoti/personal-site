---
title: Docusaurus
---

[Docusaurus](https://docusaurus.io/) is an open-source static site generator designed for building documentation websites quickly and efficiently. Developed by Facebook, Docusaurus leverages React, Markdown, and modern web tooling to provide a robust, extensible platform for technical documentation and content-driven sites.

---

## 🛠️ Technical Overview

- **Framework:** Built on [React](https://react.dev/), supports React components in Markdown via MDX.
- **Content Source:** Uses Markdown (`.md`/`.mdx`) files for docs, blogs, and pages.
- **Static Generation:** Generates static HTML, CSS, and JS files for fast, secure deployment.
- **Theming:** Highly customizable via React components, CSS, and [Infima](https://infima.dev/) (default CSS framework).
- **Plugin System:** Extensible with official and community plugins (search, analytics, sitemap, etc.).
- **Localization:** Built-in support for i18n and multi-language sites.
- **Versioning:** Native documentation versioning for managing multiple product releases.
- **Live Reload:** Hot reloading for docs and site changes during development.

---

## 📦 Installation & Project Structure

```sh
npx create-docusaurus@latest my-website classic
cd my-website
npm run start
```

**Directory Structure:**

```sh
my-website/
├── docs/                # Markdown/MDX documentation files
├── blog/                # Blog posts (Markdown/MDX)
├── src/                 # Custom React components, pages, CSS
├── static/              # Static assets (images, files)
├── docusaurus.config.js # Main site configuration (JavaScript)
├── sidebars.js          # Sidebar navigation structure
├── package.json         # Node.js dependencies and scripts
└── build/               # Generated static site output
```

---

## ⚙️ Configuration

- **docusaurus.config.js:** Main config file (site metadata, theme, plugins, navbar, footer, etc.)
- **sidebars.js:** Controls sidebar structure for docs.
- **Environment Variables:** Use `.env` files for custom settings.

Example (`docusaurus.config.js`):

```js
module.exports = {
  title: 'My Docs',
  url: 'https://example.com',
  baseUrl: '/',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};
```

---

## 📝 Content Authoring

- **Docs:** Place Markdown/MDX files in `docs/`. Supports front matter for metadata.
- **Blog:** Place posts in `blog/`.
- **Pages:** Add React or MDX files to `src/pages/` for custom routes.
- **MDX:** Use React components directly in Markdown for interactive docs.

---

## 🧩 Plugins & Themes

- **Official Plugins:** Algolia search, Google Analytics, sitemap, PWA, etc.
- **Custom Plugins:** Create plugins for custom content types, data sources, or integrations.
- **Themes:** Use or extend built-in themes, or build your own with React and Infima.

---

## 🚀 Build & Deployment

```sh
npm run build         # Generate static site in /build
npm run serve         # Serve the static site locally
```

- Deploy to any static host: GitHub Pages, Netlify, Vercel, S3, Cloudflare Pages, etc.
- Supports CI/CD workflows for automated deployment.

---

## 📚 Useful Links

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)
- [Docusaurus Plugins](https://docusaurus.io/docs/plugins)
- [Docusaurus Themes](https://docusaurus.io/docs/themes)
- [MDX Docs](https://mdxjs.com/)

---
