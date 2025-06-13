---
title: Home Assistant
---

**Home automation** is the integration of smart devices, sensors, and software to automate and remotely control household systems such as lighting, climate, security, entertainment, and appliances. At the heart of many DIY smart homes is [Home Assistant](https://www.home-assistant.io/), an open-source platform designed for privacy, flexibility, and local control.

---

## 🛠️ Home Assistant: Technical Overview

- **Core:** Written in Python 3, runs as a single process with async I/O for high concurrency.
- **Architecture:** Modular, with a core event bus, state machine, and YAML/GUI configuration.
- **Integrations:** 2500+ integrations for devices and services (Zigbee, Z-Wave, MQTT, REST, Modbus, etc.).
- **Automations:** YAML or UI-based, using triggers, conditions, and actions. Supports Jinja2 templating.
- **Add-ons:** Supervisor-managed Docker containers for extra services (e.g., Node-RED, Mosquitto, MariaDB).
- **Frontend:** React-based Lovelace UI, customizable dashboards, themes, and custom cards (via HACS).
- **APIs:** REST, WebSocket, MQTT, and native mobile app APIs.
- **Persistence:** Uses SQLite by default, supports MariaDB/MySQL/PostgreSQL for larger installs.
- **Security:** Local-first, supports SSL, user authentication, and granular permissions.

---

## 🚀 Getting Started

- [Install Home Assistant OS on Raspberry Pi](https://www.home-assistant.io/installation/raspberrypi) or x86, NUC, VM, Docker, or supervised install.
- Add Zigbee/Z-Wave/MQTT controllers (e.g., [Conbee 2](https://phoscon.de/en/conbee2)) for device integration.
- [Install HACS](https://hacs.xyz/docs/setup/prerequisites) for custom components, dashboards, and themes.

---

## 📦 Key Components

- **Integrations:** Device and service connectors (Philips Hue, Sonos, Shelly, Tasmota, Zigbee2MQTT, etc.).
- **Automations & Scripts:**  
  - **Triggers:** Time, state, event, webhook, MQTT, etc.
  - **Conditions:** State, numeric, template, sun, zone, etc.
  - **Actions:** Service calls, notifications, scenes, scripts, delays, templates.
- **Entities:** Core abstraction for devices (sensors, switches, lights, covers, etc.).
- **Areas:** Logical grouping of devices (rooms, zones).
- **Scenes:** Predefined states for multiple devices (e.g., "Movie Night").
- **Dashboards:** Lovelace UI, custom cards, mobile-friendly, multi-user.

---

## 🧩 Advanced Integrations

- **Zigbee:** Zigbee2MQTT, ZHA (Zigbee Home Automation), Conbee II, CC2531/CC2652, Sonoff Zigbee Dongle.
- **Z-Wave:** Z-Wave JS, Aeotec/Zooz USB sticks.
- **MQTT:** Mosquitto broker, device discovery, automation triggers.
- **Matter:** Next-gen open standard for smart home interoperability.
- **Voice Assistants:** Google Assistant, Alexa, HomeKit, Rhasspy, Almond.
- **Cameras:** RTSP, ONVIF, Wyze, Frigate (AI object detection).
- **Presence Detection:** Wi-Fi, Bluetooth, GPS, router integration, ESPHome.

---

## ⚙️ Configuration & Customization

- **YAML Files:**  
  - `configuration.yaml` — main config
  - `automations.yaml`, `scripts.yaml`, `scenes.yaml`, `secrets.yaml`
- **UI Editor:** Visual configuration for automations, dashboards, integrations.
- **Custom Components:** Extend with Python, install via HACS or manually.
- **Themes:** Lovelace themes, custom CSS, dark/light modes.

---

## 🏠 Example Automation (YAML)

```yaml
automation:
  - alias: "Turn on lights at sunset"
    trigger:
      - platform: sun
        event: sunset
    action:
      - service: light.turn_on
        target:
          entity_id: light.living_room
```

---

## 🖥️ Ecosystem & Add-ons

- **Supervisor:** Manages add-ons, updates, backups, and system health (Home Assistant OS/Supervised).
- **Popular Add-ons:**  
  - [Node-RED](https://nodered.org/) — Visual automation editor  
  - [Mosquitto](https://mosquitto.org/) — MQTT broker  
  - [MariaDB](https://mariadb.org/) — Database backend  
  - [ESPHome](https://esphome.io/) — Firmware for ESP8266/ESP32 devices  
  - [Samba](https://www.samba.org/) — File sharing  
  - [NGINX Proxy Manager](https://nginxproxymanager.com/) — SSL, reverse proxy

---

## 🛡️ Security & Best Practices

- Use SSL/TLS for remote access (`Let's Encrypt`, NGINX, or built-in).
- Enable multi-factor authentication (MFA).
- Restrict external access, use VPN or reverse proxy.
- Regularly update Home Assistant and add-ons.
- Backup configuration and snapshots.

---

## 🖧 Networking & Integrations

- **Protocols:** Zigbee, Z-Wave, MQTT, REST, WebSocket, Modbus, DLNA, UPnP, HomeKit, Matter.
- **NAS Integration:** Synology, QNAP, SMB/NFS shares, Docker deployments.
- **Unifi Integration:** Network presence, device tracking, site-to-site VPN.

---

## 🛠️ Useful Commands

```sh
# Home Assistant CLI (hassio)
hassio dns info
hassio supervisor logs
ha core restart
ha host reboot
```

---

## 📚 Useful Links

- [Home Assistant Docs](https://www.home-assistant.io/docs/)
- [Home Assistant GitHub](https://github.com/home-assistant/core)
- [HACS (Community Store)](https://hacs.xyz/)
- [Awesome Home Assistant](https://www.awesome-ha.com/)
- [Matter Standard](https://csa-iot.org/all-solutions/matter/)
- [Home Assistant Forums](https://community.home-assistant.io/)
- [pinout.xyz](https://pinout.xyz/) (for GPIO pinouts)
- [ESPHome](https://esphome.io/)

---

## 📝 Notes

- Home Assistant is highly extensible and supports local control for privacy and reliability.
- YAML configuration is powerful but can be complex for large setups—use the UI editor where possible.
- The ecosystem is rapidly evolving; always check compatibility before major upgrades.

---
