---
title: Raspberry Pi
---

[Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/) is the latest generation of single-board computers from the Raspberry Pi Foundation, offering significant performance improvements, new hardware features, and enhanced I/O compared to previous models. It is designed for advanced DIY projects, edge computing, embedded systems, and even light desktop use.

- **Libraries:** [RPi.GPIO](https://pypi.org/project/RPi.GPIO/), [gpiozero](https://gpiozero.readthedocs.io/), [pigpio](http://abyz.me.uk/rpi/pigpio/)

### Projects & Use Cases

- **Desktop Replacement:** Dual 4K displays, fast SSD storage, USB 3.0 peripherals
- **Edge AI/ML:** Accelerated inference with external PCIe AI accelerators
- **Media Centers:** 4K video playback, Kodi, Plex
- **IoT Gateways:** High-speed networking, NVMe storage for data logging
- **Robotics & Automation:** Real-time control, multiple camera inputs, GPIO expansion
- **Retro Gaming:** High-performance emulation with Vulkan support

### Essential Commands & Tools

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

### Tips & Geeky Details

- **Overclocking:** Supported via `/boot/config.txt` (e.g., `arm_freq=2700`), but requires adequate cooling and power supply.
- **NVMe SSD:** Use the official NVMe HAT for best compatibility and performance.
- **Fan Control:** Connect a PWM fan to the dedicated header for automatic cooling.
- **RTC:** Add a coin cell battery for persistent timekeeping.
- **PCIe Expansion:** Experimental support for custom PCIe devices (requires kernel/device tree tweaks).
- **Headless Setup:** Enable SSH by placing an empty `ssh` file in `/boot` on the SD card.
- **Thermal Management:** Use active cooling (fan, heatsink) for sustained high performance.

### Useful Links

- [Raspberry Pi 5 Product Page](https://www.raspberrypi.com/products/raspberry-pi-5/)
- [Official Documentation](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)
- [PiMyLifeUp: Raspberry Pi 5 Guides](https://pimylifeup.com/tag/raspberry-pi-5/)
- [pinout.xyz](https://pinout.xyz/)
- [Raspberry Pi Forums](https://forums.raspberrypi.com/)
- [Awesome Raspberry Pi](https://github.com/thibmaek/awesome-raspberry-pi)
- [PiAwesome](https://www.piawesome.com/)
- [The Pi Hut](https://thepihut.com/)
- [Shop Pimoroni](https://shop.pimoroni.com/)
- [Adafruit Raspberry Pi Learning System](https://learn.adafruit.com/category/raspberry-pi)
