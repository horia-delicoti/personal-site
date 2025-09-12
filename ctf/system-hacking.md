---
title: System Hacking 💻
sidebar_position: 2
---

We start by gathering information about the target system, such as its operating system, services running, and open ports. Use this to identify potential vulnerabilities that can be exploited.

## Identify target

### [Nmap](/docs/networking/nmap) Scanning

```sh title="Focus on most used service ports. Scan specific ports quickly and 'stealthy'"
nmap -sS -p 21,22,80,443 <IP>
```

```sh title="Scan only the top used ports only (fast scan)"
nmap --top-ports 100 -T4 <HOST_IP>
```

```sh title="Aggressive scan with OS detection, version detection, script scanning, and traceroute"
nmap -sS -A -p- -T4 --script=vuln -oN full-scan <IP>
```

```sh title="Treat host as online, scan all ports, run default scripts, detect service versions, timeout 4s, and save output to a file"
nmap -vv -Pn -p- -sC -sV -T4 -oN complete-scan <HOST_IP>
```

```sh title="No scan is truly undetectable, but these options reduce the chance of triggering IDS/IPS alerts"
nmap -sS -T0 --randomize-hosts --data-length 50 <TARGET_IP>
# A stealthy scan, paranoid timing(less likely to be detected), randomize order, and add random data to packet to evade detection
```

Scan for vulnerabilities using [NSE scripts](/docs/networking/nmap#nse-scripts-to-detect-vulnerabilities):

```sh title="Aggressive script scan, identify services/version info, output scan to file"
nmap -sC -sV -oN initial <HOST_IP>
```

```sh title="Use default 'vuln' category scripts agains known services"
nmap -p 80,443,21,22,445 --script vuln <HOST_IP>
```

```sh title="List web directories and files"
nmap -p 80,443 --script http-enum <HOST_IP>
```

```sh title="Scan for SSL/TLS ciphers for HTTPS services"
nmap -p 443 --script ssl-enum-ciphers <HOST_IP>
```

### [Netdiscover](/docs/networking/netdiscover) Scanning

```sh title="Active ARP reconnaissance tool to discover live hosts in a local network"
netdiscover -i eth0 -r 10.0.0/24
```

### [Hydra](/docs/security/tools/hydra) Brute Force Login

```sh title="Brute force SSH login"
hydra -l <username> -P <full path to pass> <HOST_IP> -t 4 ssh
```

```sh title="Brute force HTTP login"
hydra -l <username> -P rockyou.txt <HOST_IP> http-post-form "<path>:username=^USER^&password=^PASS^:<invalid response>"
```

## Web reconnaissance

If Ports **[80 (HTTP)](https://www.cbtnuggets.com/common-ports/what-is-port-80)** or **[443 (HTTPS)](https://www.sectigo.com/resource-library/what-is-port-443)** are open, it usually suggests the presence of a [web service](https://en.wikipedia.org/wiki/Web_service). Let's try to find flags, discover directories and identify version-specific vulnerabilities.

```sh title="Check for hidden files (robots.txt)"
curl http://<HOST_IP>/robots.txt
```

```sh title="Identify the Web Server and Version"
curl -I <HOST_IP>
```

:::info
Look at the `Server:` header to identify the web server.
:::

If Port **80** is Closed but Expected to be Open, this might indicate:

- [Intrusion Detection System (IDS)](https://en.wikipedia.org/wiki/Intrusion_detection_system) active
- [Port knocking](https://medium.com/@reotmani/port-knocking-dbe6d8aaeb9) mechanism in place

```sh title="Example output"
nmap -p 80 <HOST_IP>

PORT     STATE  SERVICE
80/tcp   closed http
```

```sh title="Rescan with a delay. Sometimes Port availability changes after time"
sleep 10 & nmap -p 80 <HOST_IP>
```

```sh title="Use TCP connect scan to bypass SYN scan restriction. SYN Scans (-sS) may be blocked or filtered by firewall, while -sT (full TCP handshake) can bypass it in some setups"
nmap -sT -p 80 <HOST_IP>
```

:::info
Each **[CMS](https://en.wikipedia.org/wiki/Content_management_system)** ([WordPress](https://wordpress.org/), [Joomla](https://www.joomla.org/), [Drupal](https://new.drupal.org/home)) has **[know vulnerabilities](https://agilitycms.com/blog/cms-security-vulnerabilities)** and **[common misconfigurations](https://medium.com/@sriharanmahimala125/common-vulnerabilities-in-wordpress-sites-10157635c3a4)**.

**[Frameworks](https://en.wikipedia.org/wiki/Category:Web_frameworks)** (developer toolkit to build apps like [Django](https://www.djangoproject.com/), [Rails](https://rubyonrails.org/), [Laravel](https://laravel.com/)) have distinct attack surfaces, e.g. Django apps often leak `/admin/` panel or Laravel apps might expose `.env` config files.

Let's use [whatweb](/docs/security/tools/whatweb) or wappalyzer to analyze [HTTP responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status), [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers), [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies), and [HTML code](https://www.w3schools.com/html/html_basic.asp) to guess:

- If the target is running WordPress (CMS) → Try [wpscan](https://github.com/wpscanteam/wpscan)
- If the target is running Django (framework) → Look for Django debug mode, admin panel
- If the target is running React.js (frontend) → Might indicate a modern SPA with a backend API to target

:::

### [WhatWeb](/docs/security/tools/whatweb) Scanning

```sh title="Identify websites, recognises web technologies including CMS and frameworks"
whatweb -v -a 2 --log whatweb.txt <HOST_IP>
```

```sh title="To enumerate web services and endpoints"
nmap -sV -p- --script=http-vuln* -oN nmap_http <HOST_IP>
```

### [Gobuster](/docs/security/tools/gobuster) Scanning

```sh title="To find directories/files"
gobuster dir -u <HOST_IP> -w /usr/share/wordlists/dirb/common.txt
```

### [WPscan](/docs/security/tools/wpscan) Scanning

```sh title="if WhatWeb reports WordPress"
wpscan --url <HOST_IP> --enumerate p,t,u --disable-tls-checks --format json --output wpscan.json
```

### [Nikto](/docs/security/tools/nikto) Scanning

```sh title="Web scanner to find various vulnerabilities in web servers"
nikto -h <HOST_IP> -p 80,443 -output nikto_scan.txt
```
