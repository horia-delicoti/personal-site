---
title: System Hacking 💻
sidebar_position: 2
---

We start by gathering information about the target system, such as its operating system, services running, and open ports. Use this to identify potential vulnerabilities that can be exploited.

### [Nmap](/docs/networking/nmap) Scanning

```sh title="Discover live hosts in a network. Use this to quickly find which machines are up"
nmap -sn 10.0.0/24
```

```sh title="Run basic nmap scan, discover open ports, and identify services"
nmap -sC -sV -oN initial <HOST_IP>
```

```sh title="Let's run a more aggressive scan with OS detection, version detection, script scanning, and traceroute"
nmap -sS -T4 -A -p- -oN full-scan <HOST_IP>
```

```sh title="Treat host as online, scan all ports, run default scripts, detect service versions, timeout 4s, and save output to a file"
nmap -vv -Pn -p- -sC -sV -T4 -oN complete-scan <HOST_IP>
```

```sh title="No scan is truly undetectable, but these options reduce the chance of triggering IDS/IPS alerts"
nmap -sS -T0 --randomize-hosts --data-length 50 <TARGET_IP>
# A stealthy scan, paranoid timing(less likely to be detected), randomize order, and add random data to packet to evade detection
```

Scan for vulnerabilities using [NSE scripts](/docs/networking/nmap#nse-scripts-to-detect-vulnerabilities):

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

### [Nikto](/docs/security/tools/nikto) Scanning

```sh title="Web scanner for various vulnerabilities in web servers"
nikto -h <HOST_IP> -p 80,443 -output nikto_scan.txt
```

### [Hydra](/docs/security/tools/hydra) Brute Force Login

```sh title="Brute force SSH login"
hydra -l <username> -P <full path to pass> <HOST_IP> -t 4 ssh
```

```sh title="Brute force HTTP login"
hydra -l <username> -P rockyou.txt <HOST_IP> http-post-form "<path>:username=^USER^&password=^PASS^:<invalid response>"
```
