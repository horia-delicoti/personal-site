---
title: Nmap
---

Nmap (Network Mapper) is a powerful open-source tool for network discovery, security auditing, and vulnerability scanning. It is widely used by network administrators and security professionals to map networks, discover hosts and services, and identify potential security risks.

---

## 🌟 Key Features

- Host discovery (find live devices on a network)
- Port scanning (identify open ports and services)
- Service and version detection
- OS detection and fingerprinting
- Scriptable interaction with the target (Nmap Scripting Engine)
- Output in multiple formats (plain text, XML, grepable, etc.)

---

## 📚 Useful Links

- [The Official Nmap Project Guide to Network Discovery and Security Scanning](https://nmap.org/book/toc.html)
- [Nmap Reference Guide](https://nmap.org/book/man.html)
- [Nmap Cheat Sheet](https://github.com/trimstray/the-book-of-secret-knowledge#nmap)

---

## 🛠️ Useful Nmap Commands

```sh
nmap <target>                        # Basic scan (default 1000 ports)
nmap -sS <target>                    # TCP SYN (stealth) scan
nmap -sT <target>                    # TCP connect scan
nmap -sU <target>                    # UDP scan
nmap -p 80,443 <target>              # Scan specific ports
nmap -p- <target>                    # Scan all 65535 ports
nmap -A <target>                     # Enable OS detection, version detection, script scanning, and traceroute
nmap -O <target>                     # OS detection only
nmap -sV <target>                    # Service/version detection
nmap -sC <target>                    # Run default scripts
nmap -T4 <target>                    # Faster scan (aggressive timing)
nmap -Pn <target>                    # Skip host discovery (treat all hosts as online)
nmap --script vuln <target>          # Run vulnerability scripts
nmap -oN <file> <target>             # Output scan to file (normal format)
nmap -oX <file> <target>             # Output scan to file (XML format)
nmap -iL <list.txt>                  # Scan targets from a file
```

**Example:**

```sh
nmap -sC -sV -oN scan.txt 192.168.1.1
# -sC: Run default scripts
# -sV: Probe open ports to determine service/version info
# -oN: Output scan to file

nmap -sC -sV -oN <file> <IP>
#               -> Output scan to file
#          -> Probe open ports to determine service/version info
#       -> Script scan

nmap -A -T4 <IP>
# -A   -> Enable OS detection, version detection, script scanning, and traceroute
# -T4  -> Aggressive timing for faster scan

nmap -p- -sS -T4 <IP>
# -p-  -> Scan all 65535 ports
# -sS  -> TCP SYN (stealth) scan
# -T4  -> Faster scan

nmap -sU -sS -p 1-1000 <IP>
# -sU  -> UDP scan
# -sS  -> TCP SYN scan
# -p   -> Scan ports 1-1000

nmap --script vuln <IP>
# --script vuln -> Run vulnerability detection scripts

nmap -O --osscan-guess <IP>
# -O            -> OS detection
# --osscan-guess -> Guess OS more aggressively

nmap -iL targets.txt -oA scan_results
# -iL targets.txt -> Scan list of targets from file
# -oA scan_results -> Output in all formats (normal, XML, grepable)

nmap -Pn -sV --top-ports 100 <IP>
# -Pn         -> Treat all hosts as online (skip host discovery)
# -sV         -> Service/version detection
# --top-ports 100 -> Scan top 100 most common ports
```

---

## 📝 Notes

- Always have permission before scanning networks you do not own.
- Nmap is available on Linux, macOS, and Windows.
- The Nmap Scripting Engine (NSE) allows for advanced and automated scans.

---
