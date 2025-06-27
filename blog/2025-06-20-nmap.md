---
title: "Nmap: Network Scanning"
date: 2025-06-20
tags: [networking, security, pentesting, tools]
---

Nmap (Network Mapper) is a powerful open-source tool for network discovery, security auditing, and penetration testing. In this post, we'll explore advanced Nmap usage, practical commands, and real-world scenarios.
<!-- truncate -->
## 1. Basic Host Discovery

Scan a single host to check if it's up:

```sh
nmap -sn 192.168.1.10  # Ping scan (no port scan)
```

Scan an entire subnet:

```sh
nmap -sn 192.168.1.0/24  # Discover all live hosts in the subnet
```

## 2. Port Scanning Techniques

Scan the top 1000 TCP ports (default):

```sh
nmap 192.168.1.10
```

Scan all 65535 TCP ports:

```sh
nmap -p- 192.168.1.10  # Full port scan
```

Stealth SYN scan (default, requires root):

```sh
sudo nmap -sS 192.168.1.10  # Stealthy, less likely to be logged
```

UDP scan (slower, less reliable):

```sh
sudo nmap -sU 192.168.1.10  # Scan UDP ports
```

## 3. Service and Version Detection

Detect running services and versions:

```sh
nmap -sV 192.168.1.10  # Service/version detection
```

Aggressive scan (OS, version, script, traceroute):

```sh
nmap -A 192.168.1.10  # All-in-one scan
```

## 4. OS Detection

```sh
nmap -O 192.168.1.10  # Attempt to detect OS
```

## 5. Output Formats

Save results in different formats:

```sh
nmap -oN scan.txt 192.168.1.10    # Normal output
nmap -oX scan.xml 192.168.1.10    # XML output
nmap -oG scan.gnmap 192.168.1.10  # Grepable output
```

## 6. Scriptable Interaction (NSE)

Nmap Scripting Engine (NSE) automates tasks like vulnerability detection:

```sh
nmap --script vuln 192.168.1.10  # Run vulnerability scripts
nmap --script http-enum 192.168.1.10  # Enumerate web server directories
```

## 7. Firewall Evasion and Spoofing

Fragment packets to bypass simple firewalls:

```sh
sudo nmap -f 192.168.1.10
```

Spoof source IP (for research, not illegal use!):

```sh
sudo nmap -S 10.0.0.99 192.168.1.10
```

Randomize scan order:

```sh
nmap --randomize-hosts -p 80,443 192.168.1.0/24
```

## 8. Scan Multiple Targets

```sh
nmap -iL targets.txt  # Scan hosts listed in a file
```

## 9. Exclude Hosts

```sh
nmap 192.168.1.0/24 --exclude 192.168.1.1,192.168.1.2
```

## 10. Useful Tips

- Always scan with permission.
- Use `-T4` for faster scans, `-T0` for stealth.
- Combine options for tailored results.
- Read the [Nmap documentation](https://nmap.org/book/man.html) for more advanced features.

---

Nmap is an essential tool for network engineers, sysadmins, and security professionals. Mastering its options unlocks deep insights into your network's security posture.
