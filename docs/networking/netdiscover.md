---
title: Netdiscover
description: Discover live hosts in a network using Netdiscover, a tool for active/passive AR
---

[Netdiscover](https://www.kali.org/tools/netdiscover/) is an active/passive [ARP](/docs/networking/#arp) reconnaissance tool to discover live hosts in a network. It is useful for identifying devices on a local network, especially when you do not have access to the DHCP server. This is useful for stealth reconnaissance in CTFs.

```sh title="Identify your network interface"
ifconfig
# or
ip addr
```

```sh title="Discover live hosts in a network"
netdiscover -i <INTERFACE>
```

```sh title="Use '-r' to scan a specific subnet range for faster results"
netdiscover -i eth0 -r 10.10.0.0/24
```

```sh title="Example Output"
Currently scanning: 192.168.1.0/16   |   Screen View: Unique Hosts

 2 Captured ARP Req/Rep packets, from 2 hosts.   Total size: 120
 _____________________________________________________________________________
   IP            At MAC Address     Count  Len   MAC Vendor
 -----------------------------------------------------------------------------
 192.168.1.1     00:11:22:33:44:55    10   600   Cisco Systems
 192.168.1.10    66:77:88:99:AA:BB     5   300   Hewlett Packard
 192.168.1.20    CC:DD:EE:FF:00:11     2   120   Raspberry Pi Foundation
 192.168.1.50    22:33:44:55:66:77     1    60   Dell Inc.
 -----------------------------------------------------------------------------
```

:::tip
Netdiscover works only on local networks. It cannot discover hosts outside of your subnet.
:::

### Links

- [Netdiscover Kali tools](https://www.kali.org/tools/netdiscover/) - Official Kali Linux page for Netdiscover.
- [Netdiscover GitHub Repository](https://github.com/netdiscover-scanner/netdiscover) - Source code and documentation for Netdiscover.
