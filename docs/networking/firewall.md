---
title: Firewall
---

Firewalls are security devices or software that monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as a barrier between a trusted internal network and untrusted external networks, such as the internet.

```sh title="Drop incoming traffic with TCP Reset. This is useful to prevent connections to a specific port, e.g. when someone uses 'nmap -sS' to scan for open ports."
iptables -I INPUT -p tcp --dport <port> -j REJECT --reject-with tcp-reset
```
