---
title: System Hacking 💻
sidebar_position: 2
draft: true
---

We start by gathering information about the target system, such as its operating system, services running, and open ports. Use this to identify potential vulnerabilities that can be exploited.

### Nmap Scanning

Check [nmap wiki](/docs/networking/nmap) for more details.

```sh title="Discover live hosts in a network."
nmap -sn 10.0.0/24
```

```sh title="Run basic nmap scan, discover open ports, and identify services."
nmap -sC -sV -oN initial <HOST_IP>
```

```sh title="Let's run a more aggressive scan with OS detection, version detection, script scanning, and traceroute."
nmap -sS -T4 -A -p- -oN full-scan <HOST_IP>
```

```sh title="Treat host as online, scan all ports, run default scripts, detect service versions, timeout 4s, and save output to a file."
nmap -vv -Pn -p- -sC -sV -T4 -oN complete-scan <HOST_IP>
```

Scan for vulnerabilities using [Nmap scripts](https://nmap.org/nsedoc/scripts/):

```sh title="Use default "vuln" category scripts agains known services."
nmap -p 80,443,21,22,445 --script vuln <HOST_IP>
```

```sh title="Try brute force login on exposed FTP service."
nmap -p 21 --script ftp-brute <HOST_IP>
```

```sh title="List web directories and files."
nmap -p 80,443 --script http-enum <HOST_IP>
```

```sh title="Scan for SSL/TLS ciphers for HTTPS services."
nmap -p 443 --script ssl-enum-ciphers <HOST_IP>
```

### [Netdiscover](https://www.kali.org/tools/netdiscover/) Scanning

Active/passive ARP reconnaissance tool to discover live hosts in a network. It is useful for identifying devices on a local network, especially when you do not have access to the DHCP server.

```sh
netdiscover -i eth0 -r 10.0.0/24
```

```sh title="Identify your network interface."
ifconfig
# or
ip addr
```

Netdiscover works only on local networks. It cannot discover hosts outside of your subnet.

### [Nikto](/docs/security/tools/nikto) Scanning

Scan for web vulnerabilities using Nikto, a powerful web scanner that tests for various vulnerabilities in web servers.

```sh
nikto -h <HOST_IP> -p 80,443
```

### [Hydra](/docs/security/tools/hydra) Brute Force Login

```sh title="Brute force SSH login."
hydra -l <username> -P <full path to pass> <HOST_IP> -t 4 ssh
```

```sh title="Brute force HTTP login."
hydra -l <username> -P rockyou.txt <HOST_IP> http-post-form "<path>:username=^USER^&password=^PASS^:<invalid response>"
```
