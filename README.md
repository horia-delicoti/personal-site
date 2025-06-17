# Personal Website

This is the source code for my personal website, built with [Docusaurus 3](https://docusaurus.io/).  
The site serves as a portfolio, blog, and technical wiki where I document projects, share knowledge, and braindump ideas.

---

## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/horia-delicoti/personal-site.git
cd personal-site
npm install
```

---

## 🧑‍💻 Local Development

Start the local development server:

```bash
npm start
```

- The site will be available at [http://localhost:3000](http://localhost:3000)
- Hot-reloads on file changes (Markdown, React, CSS)
- Use this mode for editing docs, blog posts, or customizing the theme

---

## 🏗️ Build

Generate a static production build:

```bash
npm run build
```

- Outputs static files to the `build/` directory
- Optimizes assets, minifies JS/CSS, and generates a sitemap

---

## 🚢 Deployment

Deploy to GitHub Pages (requires repo setup):

```bash
GIT_USER=<your-github-username> npm run deploy
```

Or deploy the contents of the `build/` directory to any static hosting provider (Netlify, Vercel, Cloudflare Pages, S3, etc).

---

## 🗂️ Project Structure

```sh
personal-site/
├── blog/                # Blog posts (Markdown)
├── docs/                # Wiki & documentation (Markdown)
├── src/                 # React components, pages, and styles
├── static/              # Static assets (images, files, etc)
├── docusaurus.config.js # Docusaurus site configuration
├── sidebars.js          # Sidebar structure for docs
└── package.json         # NPM scripts and dependencies
```

---

## 📝 Notes

- All content is written in Markdown for easy editing and version control.
- Custom React components are used for the homepage and special widgets.
- The site is designed for technical users and is fully open source.

---

## 📚 References

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [GitHub Pages Deployment Guide](https://docusaurus.io/docs/deployment)
- [React Documentation](https://react.dev/)
- [Meta Knowledge](https://github.com/RichardLitt/meta-knowledge)
- [Nikiv](https://nikiv.dev/) - My blog is inspired from here. Check it out

---

## 📝 TODO

- [ ] Automatically check if links are still valid
- [ ] Add search engine
- [ ] Add more blog posts and technical articles
- [☑️] Set up automated deployment (CI/CD)
- [☑️] Add dark/light theme toggle
- [ ] Collect site analytics

---
