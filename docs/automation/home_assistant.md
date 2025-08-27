---
title: Home Assistant
---

This is my personal setup for [Home Assistant](https://www.home-assistant.io/), that focuses on privacy, local control, and modern dashboard. I use [Zigbee](https://en.wikipedia.org/wiki/Zigbee) protocol for most of my devices, which allows for low-power, reliable communication without relying on cloud services.

### Hardware

- [Raspberry Pi 5 (4GB)](https://www.raspberrypi.com/products/raspberry-pi-5/) is powerful for running Home Assistant.
- [Raspberry Pi Active Cooler](https://www.raspberrypi.com/products/active-cooler/) to prevent overheating.
- [Raspberry Pi Power Supply 27W USB-C](https://www.raspberrypi.com/products/power-supply/) for stable power and to power additional USB devices.
- [870 EVO SATA 2.5" SSD 250GB](https://www.samsung.com/uk/memory-storage/sata-ssd/870-evo-250gb-sata-3-2-5-ssd-mz-77e250b-eu/) with [SSD to USB 3.0 Cable](https://thepihut.com/products/ssd-to-usb-3-0-cable-for-raspberry-pi) or
- [NVMe SSD Base with M.2 Slot](https://shop.pimoroni.com/products/nvme-base?variant=41219587178579) for fast storage and booting.
- [Conbee 2](https://phoscon.de/en/conbee2), [Sonoff Zigbee 3.0](https://sonoff.tech/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p) or [Connect ZBT-1](https://www.home-assistant.io/connectzbt1/) for Zigbee integration with any USB extension cable with [ZHA](https://www.home-assistant.io/integrations/zha/).

### Boot from SSD

1. Use [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to install bootloader (USB version) on SD card. This changes the booting order to boot from USB storage first.
2. Use Imager to install [Home Assistant OS](https://www.home-assistant.io/installation/raspberrypi) on the SSD.
3. Connect the SSD to the Raspberry Pi via USB and boot it up conected to ethernet cable.

### Install Software

- [Home Assistant Operation System Installation](https://www.home-assistant.io/installation/) ([GitHub](https://github.com/home-assistant/home-assistant.io))
- [Home Assistant Community Store](https://www.hacs.xyz/) ([GitHub](https://github.com/hacs/integration))

### HACS (Home Assistant Community Store)

- [Lovelace Mushroom](https://github.com/piitaya/lovelace-mushroom)
- [Octopus Energy Rates Card](https://github.com/lozzd/octopus-energy-rates-card)

### Integrations

- [Zigbee Home Automation (ZHA)](https://www.home-assistant.io/integrations/zha/) for Zigbee devices.
- [Octopus Energy](https://bottlecapdave.github.io/HomeAssistant-OctopusEnergy/)

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

### Useful Links

- [Home Assistant Supervisor](https://github.com/home-assistant/supervisor)
- [HACS (Community Store)](https://hacs.xyz/) - The Home Assistant Community Store for custom components, themes, and dashboards.
- [Awesome Home Assistant](https://www.awesome-ha.com/)
- [Matter Standard](https://csa-iot.org/all-solutions/matter/) - Next-gen open standard for smart home interoperability.

### Devices

- [Philip Hue Strip Light](https://www.philips-hue.com/en-gb/products/smart-light-strips) - Smart lighting system.

> Philips Hue can be integrated with Home Assistant via Zigbee.
To reset Hue Strip Light, turn it on for 5 second and off for 5 second x 5 times until it flashes.

- [Aqara Temperature and Humidity Sensor](https://www.aqara.com/eu/product/temperature-humidity-sensor/)

### Youtube Channels

- [Everything SmartHome](https://www.youtube.com/@EverythingSmartHome)

### Security & Best Practices

- Use SSL/TLS for remote access (`Let's Encrypt`, NGINX, or built-in).
- Enable multi-factor authentication (MFA).
- Restrict external access, use VPN or reverse proxy.
- Regularly update Home Assistant and add-ons.
- Backup configuration and snapshots.

### Links

- [How to boot from SD card to SSD](https://adam.ac/blog/raspberry-pi-home-assistant-from-sd-card-to-ssd/amp/)
