---
title: System Hacking 💻
sidebar_position: 2
draft: true
---

We start by gathering information about the target system, such as its operating system, services running, and open ports. Use this to identify potential vulnerabilities that can be exploited.

```sh title="Run basic nmap scan."
nmap -sC -sV -oN initial <HOST_IP>
```

```sh title="Let's run a more aggressive scan with OS detection, version detection, script scanning, and traceroute."
nmap -T4 -A -p- -oN fullscan <HOST_IP>
```

```sh title="Treat host as online, scan all ports, run default scripts, detect service versions, timeout 4s, and save output to a file."
sudo nmap -Pn -p- -sC -sV -T4 -oN nmap-scan.txt <HOST_IP>
```

Scan for vulnerabilities using Nmap scripts:

```sh title="Use default vulnerabilities scripts agains known services."
nmap -p 80,443,21,22,445 --script vuln <HOST_IP>
```

```sh title="Scan for SSL/TLS ciphers for HTTPS services."
nmap --script ssl-enum-ciphers -p 443 <HOST_IP>
```
