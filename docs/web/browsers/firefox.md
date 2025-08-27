---
title: Firefox
---

[Firefox](https://www.mozilla.org/en-US/firefox/) is a free, open-source web browser developed by Mozilla. It is known for its focus on privacy, customizability, and adherence to open web standards. Firefox uses the Gecko rendering engine and supports a wide range of web technologies.

### Installation Paths

- **Ubuntu/Linux:**  
  - System install: `/usr/lib/firefox/`
  - User config: `~/.mozilla/firefox/`
  - Profile data: `~/.mozilla/firefox/<profile-id>.default-release/`
- **macOS:**  
  - App: `/Applications/Firefox.app`
  - User config: `~/Library/Application Support/Firefox/`
  - Profile data: `~/Library/Application Support/Firefox/Profiles/<profile-id>.default-release/`

### Main Processes

- `firefox` — Main browser process (UI, window management)
- `Web Content` — One or more processes for rendering web pages (tabs)
- `GPU Process` — Handles hardware-accelerated graphics
- `Extension Process` — Runs browser extensions
- `Plugin Process` — For legacy plugins (rarely used now)

You can view running processes with `ps aux | grep firefox` (Linux/macOS).

### Extensions & Add-ons

- Managed via [about:addons](about:addons) and installed from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/).
- [1Password](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/?src=search) — Password manager
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) — Ad blocker
- [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/) — Tab management
- [Wappalyzer](https://www.wappalyzer.com/) - Identifies technologies used on websites

### Useful Links

- [user.js](https://github.com/pyllyukko/user.js) — Firefox configuration hardening
- [Mozilla Developer Network: Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox)
- [Firefox Release Notes](https://www.mozilla.org/en-US/firefox/releases/)
- [about:config](about:config) — Advanced configuration
- [about:performance](about:performance) — View resource usage by tabs and extensions
