---
title: Firefox
---

[Firefox](https://www.mozilla.org/en-US/firefox/) is a free, open-source web browser developed by Mozilla. It is known for its focus on privacy, customizability, and adherence to open web standards. Firefox uses the Gecko rendering engine and supports a wide range of web technologies.

---

## 🛠️ Technical Overview

- **Rendering Engine:** Gecko (written in C++ and Rust), responsible for parsing HTML, CSS, and JavaScript, and rendering web pages.
- **JavaScript Engine:** SpiderMonkey, compiles and executes JavaScript code.
- **Multi-Process Architecture:** Uses separate processes for the browser UI, web content (tabs), GPU acceleration, and extensions for improved stability and security.
- **Sandboxing:** Isolates web content and extensions to limit the impact of security vulnerabilities.
- **HTTPS:** Uses [NSS (Network Security Services)](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS) for TLS/SSL, supports HSTS, OCSP, and certificate pinning.
- **DNS:** Performs DNS lookups using the system resolver or, optionally, DNS-over-HTTPS (DoH) for privacy.
- **Extensions:** Supports WebExtensions API, allowing add-ons for customization, privacy, and productivity.
- **Memory Usage:** Each tab and extension may run in its own process. RAM usage depends on the number of tabs, extensions, and the complexity of loaded pages. Firefox aggressively caches and preloads resources for performance, which can increase memory usage.

---

## 📦 Installation Paths

- **Ubuntu/Linux:**  
  - System install: `/usr/lib/firefox/`
  - User config: `~/.mozilla/firefox/`
  - Profile data: `~/.mozilla/firefox/<profile-id>.default-release/`
- **macOS:**  
  - App: `/Applications/Firefox.app`
  - User config: `~/Library/Application Support/Firefox/`
  - Profile data: `~/Library/Application Support/Firefox/Profiles/<profile-id>.default-release/`

---

## ⚙️ Main Processes

- `firefox` — Main browser process (UI, window management)
- `Web Content` — One or more processes for rendering web pages (tabs)
- `GPU Process` — Handles hardware-accelerated graphics
- `Extension Process` — Runs browser extensions
- `Plugin Process` — For legacy plugins (rarely used now)

You can view running processes with `ps aux | grep firefox` (Linux/macOS).

---

## 🔒 HTTPS & Security

- Firefox automatically upgrades to HTTPS when possible (HTTPS-Only Mode).
- Validates certificates using built-in root store and OCSP.
- Supports DNS-over-HTTPS (DoH) for encrypted DNS queries.
- Implements tracking protection and anti-fingerprinting features.

---

## 🌐 How Firefox Renders Pages

1. **DNS Lookup:** Resolves domain to IP (system resolver or DoH).
2. **TLS Handshake:** Establishes secure connection if HTTPS.
3. **HTTP Request:** Sends request for web content.
4. **Parsing:** Gecko parses HTML, CSS, and builds the DOM and CSSOM.
5. **JavaScript Execution:** SpiderMonkey runs scripts, modifies DOM.
6. **Layout & Painting:** Gecko computes layout, paints pixels to the screen.
7. **Compositing:** GPU process may accelerate rendering and animations.

---

## 🧩 Extensions & Add-ons

- Managed via [about:addons](about:addons).
- Installed from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/).
- Use the WebExtensions API (compatible with Chrome/Edge extensions).
- Example add-ons:
  - [1Password](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/?src=search) — Password manager
  - [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) — Ad blocker
  - [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/) — Tab management

---

## 📚 Useful Links

- [user.js](https://github.com/pyllyukko/user.js) — Firefox configuration hardening
- [Mozilla Developer Network: Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox)
- [Firefox Release Notes](https://www.mozilla.org/en-US/firefox/releases/)
- [about:config](about:config) — Advanced configuration

---

## 📝 Notes

- Firefox is open source and respects user privacy by default.
- Profiles allow separate user environments and settings.
- You can run multiple profiles with `firefox -P`.

---
