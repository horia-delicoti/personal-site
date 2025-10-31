[![🚀 Deploy](https://github.com/horia-delicoti/personal-site/actions/workflows/deploy.yml/badge.svg)][workflow_deploy]
[![🚚 Release](https://github.com/horia-delicoti/personal-site/actions/workflows/release.yml/badge.svg)][workflow_release]
[![🏷️ Tag](https://github.com/horia-delicoti/personal-site/actions/workflows/tag.yml/badge.svg)][workflow_tag]
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)][mit]
[![Made with Docusaurus](https://img.shields.io/badge/Made%20with-Docusaurus-blue.svg)][docusaurus]

<h1 align="center">💫 My Website</h1>
<p align="center">
<a href="https://github.com/horia-delicoti/personal-site"><img src="./images/website-logo.png" width="48"/></a><br>
<i>My website where I share blog posts, CTF writeups, and a wiki</i>
<br />
<i>Built with <a href="https://docusaurus.io/">Docusaurus</a></i>
<br />
<b> 🔗 <a href="https://horia.delicoti.com"><code>horia.delicoti.com</code></a></b> <br />
</p>

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

## Resources

- [personal-website](https://github.com/topics/personal-website)

---

## 📚 References

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [GitHub Pages Deployment Guide](https://docusaurus.io/docs/deployment)
- [React Documentation](https://react.dev/)
- [Meta Knowledge](https://github.com/RichardLitt/meta-knowledge)

---

## 📝 TODO

- [ ] Automatically check if links are still valid
- [ ] Add search engine
- [ ] Add more blog posts and technical articles
- [☑️] Set up automated deployment (CI/CD)
- [☑️] Add dark/light theme toggle
- [ ] Collect site analytics

---

[workflow_tag]: https://github.com/horia-delicoti/personal-site/actions/workflows/tag.yml
[workflow_release]: https://github.com/horia-delicoti/personal-site/actions/workflows/release.yml
[workflow_deploy]: https://github.com/horia-delicoti/personal-site/actions/workflows/deploy.yml
[docusaurus]: https://docusaurus.io/
[mit]: https://opensource.org/licenses/MIT
