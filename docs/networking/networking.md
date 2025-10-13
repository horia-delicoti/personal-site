---
title: Networking
---

[A broad intro to networking](https://drewdevault.com/2016/12/06/A-broad-intro-to-networking.html) and [everything I know about networking](https://tomaka.medium.com/everything-i-know-about-networking-8796e4f5846d) are great resources for networking.

[Computer Networks: A System Approach](https://book.systemsapproach.org/) and [Computer Networks by Tanenbaum](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Computer%20Networks.pdf) are great books for in depth study. [Protohackers](https://protohackers.com/) has nice nice real network servers challenges.

[Trippy](https://github.com/fujiapple852/trippy) and [Sniffnet](https://github.com/GyulyVGC/sniffnet) are good ways to monitor your network traffic.

### OSI Model

The OSI Model breaks down network communication into seven layers. These layers are useful for identifying network issues and understanding how data travels through a network. Each layer serves a specific function, and they work together to enable communication between devices.

- [What is the OSI Model?](https://www.cloudflare.com/learning/network-layer/what-is-the-osi-model/)

| Layer Name  | Main Function | Example Protocols and Standards |
| ----------- | ------------- | ------------------------------- |
| **7. Application Layer** | Human-computer interaction layer, where applications can access the network services | [HTTP](/docs/networking/http), FTP, SMTP, [DNS](/docs/networking/dns), IMAP |
| **6. Presentation Layer** | Ensures that data is in a usable format and is where data encryption occurs | JPEG, PNG, GIF, [SSL/TLS](/docs/networking/ssl), Unicode |
| **5. Session Layer** | Maintains connections and is responsible for controlling ports and sessions | NFS, RPC, PPTP |
| **4. Transport Layer** | Transmits data using transmissions protocols | [TCP](/docs/networking/tcp), UDP |
| **3. Network Layer** | Decides which physical path the data will take | IP, [ICMP](/docs/networking#icmp), IPSec, ARP |
| **2. Data Link Layer** | Defines the format of data on the network | Ethernet (802.3), WiFi (802.11) |
| **1. Physical Layer** | Transmits raw bit streams over a physical medium | Ethernet cables, fiber optics, radio waves (wireless signals) |

### IP Address and Subnets

```sh title="Looking up your network configuration"
ifconfig
ip addr show

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.10  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::f816:3eff:fe21:57cf  prefixlen 64  scopeid 0x20<link>
        ether fa:16:3e:21:57:cf  txqueuelen 1000  (Ethernet)
        RX packets 234567  bytes 34567890 (34.5 MB)
        TX packets 123456  bytes 12345678 (12.3 MB)
```

```sh title="What makes an IP address?"
# IP address has four octets (total 32 bits). Being 8 bits, an octet
# allows us to represent a decimal number between 0 - 255.

Octet:     #1     #2     #3     #4
        +------+------+------+------+
IP:       192  .  168 .   1  .   1
Range:   0-255   0-255  0-255  0-255
```

There two types of IP address:

- Public Address
- Private Address

[RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) defines the following three ranges of private IP addresses:

```sh title="Three ranges of private IP address"
10.0.0.0    - 10.255.255.255  (10/8)
172.16.0.0  - 172.31.255.255  (172.16/12)
192.168.0.0 - 192.168.255.255 (192.168/16)
```

:::info
`127.0.0.1` is localhost
:::

### ARP

[Address Resolution Protocol (ARP)](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) makes it possible to find the [MAC address](https://en.wikipedia.org/wiki/MAC_address) of another device on the Ethernet.

```sh title="ARP capture using tshark"
tshark -r arp.pcapng -Nn
# Device 02:1a:7c:3f:91:aa (IP 10.0.0.42) asking who has 10.0.0.1.
1 0.000000000 02:1a:7c:3f:91:aa → ff:ff:ff:ff:ff:ff ARP 42 Who has 10.0.0.1? Tell 10.0.0.42
# Device b8:27:eb:45:9c:10 responding that it owns 10.0.0.1.
2 0.001234567 b8:27:eb:45:9c:10 → 02:1a:7c:3f:91:aa ARP 42 10.0.0.1 is at b8:27:eb:45:9c:10
```

### ICMP

[Internet Control Message Protocol (ICMP)](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) is mainly use for network diagnostics and error reporting. Two popular commands rely on ICMP:

- **`ping`**: uses ICMP to test connectivity to a target system. It can be used to learn that the target is alive and its reply can reach that system.

:::info
Several things might prevent a reply. In addition to the target system being offline or shut down, a [firewall](/docs/networking/firewall) along the path may also block packets required for `ping` to work.
:::

```sh title="Ping output command"
ping -c 1 8.8.8.8

PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=117 time=9.653 ms

--- 8.8.8.8 ping statistics ---
1 packets transmitted, 1 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 9.653/9.653/9.653/0.000 ms
```

- **`traceroute`**: uses ICMP to discover every router between our system and a target system.

The Internet protocol has a field called [Time-to-Live (TTL)](https://www.cloudflare.com/learning/cdn/glossary/time-to-live-ttl/) that indicates the maximum number of routers a packet can travel through before it is dropped. The router decrements the packet’s TTL by one before it sends it across. When the TTL reaches zero, the router drops the packet and sends an ICMP Time Exceeded message (ICMP Type 11). (In this context, “time” is measured in the number of routers, not seconds.)

```sh title="Traceroute output command"
traceroute to 8.8.8.8 (8.8.8.8), 30 hops max, 60 byte packets
 1  192.168.1.1 (192.168.1.1)  1.123 ms  0.876 ms  0.765 ms
 2  10.20.0.1 (10.20.0.1)  8.234 ms  8.121 ms  8.045 ms
 3  172.16.12.1 (172.16.12.1)  12.543 ms  12.456 ms  12.389 ms
 4  203.0.113.5 (203.0.113.5)  20.765 ms  20.612 ms  20.432 ms
 5  8.8.8.8 (8.8.8.8)  25.874 ms  25.763 ms  25.643 ms
```

### Routing

Routing algorithms that determine the best path to connect users and servers across networks:

- **[OSPF (Open Shortest Path First)](https://en.wikipedia.org/wiki/Open_Shortest_Path_First)**: A link-state protocol that finds the shortest path by building a full map of the network.
- **[EIGRP (Enhanced Interior Gateway Routing Protocol)](https://en.wikipedia.org/wiki/Enhanced_Interior_Gateway_Routing_Protocol)**: A Cisco protocol that balances speed and efficiency by using multiple routing metrics.
- **[BGP (Border Gateway Protocol)](https://www.cloudflare.com/learning/security/glossary/what-is-bgp/)**: The main Internet routing protocol that connects different networks (ASes) globally.
- **[RIP (Routing Information Protocol)](https://en.wikipedia.org/wiki/Routing_Information_Protocol)**: A simple, distance-vector protocol that selects routes based on hop count.

### NAT

The idea behind [Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) lies in using **one** [public IP address](https://wiki.teltonika-networks.com/view/Private_and_Public_IP_Addresses) to provide Internet access to **many private IP addresses**.

### Courses

- [CS144: Introduction to Computer Networks](https://cs144.github.io/)

### Books

- [Computer Networks: A System Approach](https://book.systemsapproach.org/)
- [Computer Networks by Tanenbaum](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Computer%20Networks.pdf)

### Links

- [OSI Model Explained](https://www.cloudflare.com/learning/network-layer/what-is-the-osi-model/)
- [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
- [Complete guide to the Ethernet Protocol](https://www.freecodecamp.org/news/the-complete-guide-to-the-ethernet-protocol/)
- [TryHackMe: Networkig Concepts](https://tryhackme.com/module/networking)
- [Explained from first principles: Internet](https://explained-from-first-principles.com/internet/)
