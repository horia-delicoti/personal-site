---
title: Raspberry Pi
---

[Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/) is the latest generation of single-board computers from the Raspberry Pi Foundation, offering significant performance improvements, new hardware features, and enhanced I/O compared to previous models. It is designed for advanced DIY projects, edge computing, embedded systems, and even light desktop use.

---

## 🛠️ Hardware Overview

- **CPU:** Broadcom BCM2712, quad-core ARM Cortex-A76 @ 2.4GHz (64-bit, out-of-order execution)
- **GPU:** Broadcom VideoCore VII, supports OpenGL ES 3.1, Vulkan 1.2, 4Kp60 decode/encode
- **RAM:** 4GB or 8GB LPDDR4X-4267 SDRAM (soldered)
- **Storage:** microSD card slot (UHS-I), dual-lane PCIe 2.0 FPC connector (for NVMe SSDs via HAT), USB 3.0 boot
- **Networking:** Gigabit Ethernet (with PoE+ support via HAT), onboard Wi-Fi 802.11ac, Bluetooth 5.0
- **I/O:**
  - 40-pin GPIO header (backward compatible)
  - 2 × 4-lane MIPI camera/display connectors (CSI/DSI)
  - 2 × USB 3.0, 2 × USB 2.0
  - 2 × micro-HDMI (up to dual 4Kp60 output)
  - Real-Time Clock (RTC) with battery connector
  - Fan and power button headers
- **Power:** USB-C PD (Power Delivery) up to 5V/5A (25W), supports soft power-off/on

---

## 🧑‍💻 Operating Systems

- **Raspberry Pi OS (Debian-based, 64-bit recommended)**
- **Ubuntu 23.10+ (official support for Pi 5)**
- **Other Linux distros:** Kali, Arch Linux ARM, LibreELEC, Home Assistant OS, etc.
- **Custom OS images for IoT, robotics, and more**

---

## 📦 Boot Process & Storage

- **Bootloader:** EEPROM (upgradable, supports advanced boot modes)
- **Boot order:** Configurable (microSD, USB, PCIe NVMe, network)
- **NVMe Boot:** Native support via PCIe connector and official NVMe HAT
- **/boot/config.txt:** Hardware and kernel configuration (overclocking, display, GPIO, PCIe, etc.)

---

## ⚡ GPIO & Hardware Hacking

- **40-pin GPIO:** 3.3V logic, supports I2C, SPI, UART, PWM, PCM, and more
- **PCIe:** Attach NVMe SSDs or custom PCIe devices (via HAT)
- **Fan Header:** 4-pin PWM fan control (temperature-based)
- **RTC:** Real-Time Clock with battery backup for timekeeping
- **Libraries:** [RPi.GPIO](https://pypi.org/project/RPi.GPIO/), [gpiozero](https://gpiozero.readthedocs.io/), [pigpio](http://abyz.me.uk/rpi/pigpio/)

---

## 🖥️ Projects & Use Cases

- **Desktop Replacement:** Dual 4K displays, fast SSD storage, USB 3.0 peripherals
- **Edge AI/ML:** Accelerated inference with external PCIe AI accelerators
- **Media Centers:** 4K video playback, Kodi, Plex
- **IoT Gateways:** High-speed networking, NVMe storage for data logging
- **Robotics & Automation:** Real-time control, multiple camera inputs, GPIO expansion
- **Retro Gaming:** High-performance emulation with Vulkan support

---

## 🛠️ Essential Commands & Tools

```sh
# Update firmware and bootloader (Pi 5)
sudo rpi-eeprom-update
sudo raspi-config

# Check hardware info
cat /proc/cpuinfo
vcgencmd measure_temp
lsusb
lspci
i2cdetect -y 1

# PCIe/NVMe info
lsblk
sudo nvme list

# Control GPIO (Python)
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
GPIO.output(18, GPIO.HIGH)
```

---

## 📝 Tips & Geeky Details

- **Overclocking:** Supported via `/boot/config.txt` (e.g., `arm_freq=2700`), but requires adequate cooling and power supply.
- **NVMe SSD:** Use the official NVMe HAT for best compatibility and performance.
- **Fan Control:** Connect a PWM fan to the dedicated header for automatic cooling.
- **RTC:** Add a coin cell battery for persistent timekeeping.
- **PCIe Expansion:** Experimental support for custom PCIe devices (requires kernel/device tree tweaks).
- **Headless Setup:** Enable SSH by placing an empty `ssh` file in `/boot` on the SD card.
- **Thermal Management:** Use active cooling (fan, heatsink) for sustained high performance.

---

## 📚 Useful Links

- [Raspberry Pi 5 Product Page](https://www.raspberrypi.com/products/raspberry-pi-5/)
- [Official Documentation](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)
- [PiMyLifeUp: Raspberry Pi 5 Guides](https://pimylifeup.com/tag/raspberry-pi-5/)
- [pinout.xyz](https://pinout.xyz/)
- [Raspberry Pi Forums](https://forums.raspberrypi.com/)

---
