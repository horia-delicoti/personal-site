---
title: Node.js
---

[Node.js](https://nodejs.org/en) is a cross-platform, open-source JavaScript runtime environment that executes JavaScript code outside of a web browser. Built on the V8 engine (from Chrome), Node.js enables server-side scripting, command-line tools, and scalable network applications.

---

## 🛠️ Installation & Version Management

- **Official Downloads:** [nodejs.org/en/download](https://nodejs.org/en/download)
- **Version Manager:** [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) is the recommended way to install and manage multiple Node.js versions.

```sh
# Install NVM (Linux/macOS)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install Node.js version 18
nvm install 18

# Use Node.js version 18
nvm use 18

# List installed versions
nvm ls

# Set default version
nvm alias default 18
```

**Installation Paths:**

- **Linux/macOS (NVM):**  
  Node binaries: `~/.nvm/versions/node/<version>/bin/node`  
  Global npm modules: `~/.nvm/versions/node/<version>/lib/node_modules/`
- **System-wide (apt, brew, pkg):**  
  Node: `/usr/bin/node` or `/usr/local/bin/node`  
  npm: `/usr/bin/npm` or `/usr/local/bin/npm`

---

## 📦 Package Managers

### npm

- [npm](https://www.npmjs.com/) is the default package manager for Node.js.
- Installs dependencies, manages scripts, handles versioning, and publishes packages.

```sh
npm init                # Create a new package.json
npm install <pkg>       # Install a package locally
npm install -g <pkg>    # Install a package globally
npm run <script>        # Run a script from package.json
npm update              # Update dependencies
npm uninstall <pkg>     # Remove a package
npm list -g --depth=0   # List globally installed packages
```

**Global modules path:**  

- Linux/macOS: `/usr/local/lib/node_modules/` or `~/.nvm/versions/node/<version>/lib/node_modules/`
- macOS (Homebrew): `/opt/homebrew/lib/node_modules/`

### pnpm

- [pnpm](https://pnpm.io/) is a fast, disk space-efficient alternative to npm and yarn.
- Uses a content-addressable store for node_modules, enabling faster installs and deduplication.

```sh
npm install -g pnpm         # Install pnpm globally
pnpm install                # Install dependencies
pnpm add <pkg>              # Add a package
pnpm remove <pkg>           # Remove a package
pnpm run <script>           # Run a script
```

### npx

- [npx](https://docs.npmjs.com/cli/v8/commands/npx) runs Node binaries from npm packages without installing them globally.

```sh
npx create-react-app myapp      # Run a package binary temporarily
npx eslint .                    # Run eslint without global install
```

---

## ⚙️ Node.js CLI & Environment

```sh
node -v                         # Show Node.js version
npm -v                          # Show npm version
which node                      # Show Node.js binary path
which npm                       # Show npm binary path
node script.js                  # Run a Node.js script
NODE_ENV=production node app.js # Set environment variable
```

- **REPL:** Run `node` with no arguments for an interactive shell.
- **Environment Variables:** Use `.env` files with [dotenv](https://www.npmjs.com/package/dotenv) or set variables inline.

---

## 📂 Project Structure & Files

- `package.json` — Project metadata, dependencies, scripts.
- `node_modules/` — Installed packages.
- `package-lock.json` or `pnpm-lock.yaml` — Dependency lock files.
- `.npmrc` — npm configuration file (registry, proxy, etc.).

---

## 🔍 Useful Node.js Commands

```sh
npm outdated                    # Check for outdated dependencies
npm audit                       # Security audit of dependencies
npm ci                          # Clean install from lockfile
npm cache clean --force         # Clear npm cache
pnpm prune                      # Remove extraneous packages
```

---

## 🧩 Node.js Internals & Technical Details

- **Single-threaded Event Loop:** Node.js uses a non-blocking, event-driven architecture for high concurrency.
- **Native Addons:** Write C/C++ modules using [node-gyp](https://github.com/nodejs/node-gyp).
- **Built-in Modules:** `fs`, `http`, `crypto`, `os`, `path`, etc.
- **CommonJS & ES Modules:** Supports both `require()` and `import` syntax.
- **Process Management:** Use [pm2](https://pm2.keymetrics.io/) or [forever](https://github.com/foreversd/forever) for production deployments.

---

## 📚 Useful Links

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Docs](https://docs.npmjs.com/)
- [pnpm Docs](https://pnpm.io/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs)

---
