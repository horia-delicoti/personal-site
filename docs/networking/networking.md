---
title: Networking
---

### OSI Model

The OSI Model breaks down network communication into seven layers. These layers are useful for identifying network issues and understanding how data travels through a network. Each layer serves a specific function, and they work together to enable communication between devices.

- [What is the OSI Model?](https://www.cloudflare.com/learning/network-layer/what-is-the-osi-model/)

| Layer Name  | Main Function | Example Protocols and Standards |
| ----------- | ------------- | ------------------------------- |
| **7. Application Layer** | Human-computer interaction layer, where applications can access the network services | HTTP, FTP, SMTP, DNS, IMAP |
| **6. Presentation Layer** | Ensures that data is in a usable format and is where data encryption occurs | JPEG, PNG, GIF, SSL/TLS, Unicode |
| **5. Session Layer** | Maintains connections and is responsible for controlling ports and sessions | NFS, RPC, PPTP |
| **4. Transport Layer** | Transmits data using transmissions protocols | TCP, UDP |
| **3. Network Layer** | Decides which physical path the data will take | IP, ICMP, IPSec, ARP |
| **2. Data Link Layer** | Defines the format of data on the network | Ethernet (802.3), WiFi (802.11) |
| **1. Physical Layer** | Transmits raw bit streams over a physical medium | Ethernet cables, fiber optics, radio waves (wireless signals) |

```sh title="Ping a host to check connectivity"
ping <HOST_IP>
ping -c 5 -i 0.2 <HOST_IP> # Ping with 5 packets, 0.2s interval
ping -s 1200 -M do -t 64 8.8.8.8 # Ping with 1200 bytes, don't fragment, TTL 64
```

```sh title="Traceroute to a host to find the path taken by packets"
traceroute <HOST_IP>
traceroute -I <HOST_IP> # Use ICMP instead of UDP
traceroute -T <HOST_IP> # Use TCP SYN packets
traceroute -p 80 <HOST_IP> # Specify port
```

```sh title="Whois lookup for domain information"
whois <DOMAIN>
```

```sh title="DNS lookup for domain name resolution"
dig <DOMAIN>
dig +short <DOMAIN> # Short output
dig <DOMAIN> @8.8.8.8 # Use specific DNS server
nslookup <DOMAIN> # Alternative DNS lookup
```

### Useful Links

- [OSI Model Explained](https://www.cloudflare.com/learning/network-layer/what-is-the-osi-model/)
- [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
- [Complete guide to the Ethernet Protocol](https://www.freecodecamp.org/news/the-complete-guide-to-the-ethernet-protocol/)
- [TryHackMe: Networkig Concepts](https://tryhackme.com/room/networkingconcepts)
