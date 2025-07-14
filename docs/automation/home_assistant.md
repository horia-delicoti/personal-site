---
title: Home Assistant
---

This is my personal setup for [Home Assistant](https://www.home-assistant.io/), that focuses on privacy, local control, and modern dashboard. I use [Zigbee](https://en.wikipedia.org/wiki/Zigbee) protocol for most of my devices, which allows for low-power, reliable communication without relying on cloud services.

## Getting Started

### Hardware

- [Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/) with 4GB is powerful for running Home Assistant.
- [Raspberry Pi Active Cooler](https://www.raspberrypi.com/products/active-cooler/) to prevent overheating.
- [Raspberry Pi Power Supply 27W USB-C](https://www.raspberrypi.com/products/power-supply/) for stable power and to power additional USB devices.
- [870 EVO SATA 2.5" SSD 250GB](https://www.samsung.com/uk/memory-storage/sata-ssd/870-evo-250gb-sata-3-2-5-ssd-mz-77e250b-eu/) for fast storage.
- [Conbee 3](https://phoscon.de/en/conbee3) or [Sonoff Zigbee 3.0](https://sonoff.tech/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p) for Zigbee integration with any USB extension cable.

#### [How to boot from SSD on Raspberry Pi 5](https://adam.ac/blog/raspberry-pi-home-assistant-from-sd-card-to-ssd/amp/)

1. Use [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to install bootloader (USB version) on SD card. This changes the booting order to boot from USB storage first.
2. Use Imager to install [Home Assistant OS](https://www.home-assistant.io/installation/raspberrypi) on the SSD.
3. Connect the SSD to the Raspberry Pi via USB and boot it up conected to ethernet cable.

### Software

- [Home Assistant Operation System](https://www.home-assistant.io/)
- [Home Assistant Community Store](https://www.hacs.xyz/)

### Dashboard

- [Lovelace](https://www.home-assistant.io/lovelace/) is the default dashboard for Home Assistant.
- [Lovelace Mushroom](https://github.com/piitaya/lovelace-mushroom) is a modern, customizable dashboard theme. I am using it for my Home Assistant dashboard.
- [Lovelace Minimalist](https://ui-lovelace-minimalist.github.io/UI/) is another popular theme for a clean, minimalistic look.

### Add-ons

- [Node-RED](https://nodered.org/) for visual automation.
- [Mosquitto](https://mosquitto.org/) for MQTT broker.
- [Advanced SSH & Web Terminal](https://github.com/hassio-addons/addon-ssh) for SSH access.
- [Let's Encrypt](https://letsencrypt.org/) for SSL certificates.
- [Studio Code Server](https://github.com/hassio-addons/addon-vscode) for code editing.

### Resources

- [Awesome Home Assistant](https://github.com/frenck/awesome-home-assistant)
- [Home Assistant GitHub](https://github.com/home-assistant/core)
- [Forum Home Assistant](https://community.home-assistant.io/)

## Useful Links

- [HACS (Community Store)](https://hacs.xyz/) - The Home Assistant Community Store for custom components, themes, and dashboards.
- [Awesome Home Assistant](https://www.awesome-ha.com/)
- [Matter Standard](https://csa-iot.org/all-solutions/matter/) - Next-gen open standard for smart home interoperability.

## Youtube Channels

- [Everything SmartHome](https://www.youtube.com/@EverythingSmartHome)

## Security & Best Practices

- Use SSL/TLS for remote access (`Let's Encrypt`, NGINX, or built-in).
- Enable multi-factor authentication (MFA).
- Restrict external access, use VPN or reverse proxy.
- Regularly update Home Assistant and add-ons.
- Backup configuration and snapshots.
