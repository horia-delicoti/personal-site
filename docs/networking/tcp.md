---
title: TCP
description: TCP (Transmission Control Protocol) is a core protocol of the Internet Protocol Suite.
---

[TCP (Transmission Control Protocol)](https://datatracker.ietf.org/doc/html/rfc9293) operates at the **Transport Layer (Layer 4)** of the OSI model, providing end-to-end communication services for applications. It works closely with the Internet Protocol (IP), which operates at the Network Layer (Layer 3).

### The TCP 3-Way Handshake

The 3-way handshake is the process used by TCP to establish a reliable connection between a client and a server:

1. **SYN:** The client sends a SYN (synchronize) packet to the server to initiate a connection.
2. **SYN-ACK:** The server responds with a SYN-ACK (synchronize-acknowledge) packet.
3. **ACK:** The client sends an ACK (acknowledge) packet back to the server, completing the handshake.

```sh
Client                Server
  |      SYN      --->|
  |<--- SYN-ACK       |
  |      ACK      --->|
  |     HTTP Req  --->|
```

To do:
- add photo of wireshark capture of TCP handshake

This process ensures both sides are ready to transmit data and agree on initial sequence numbers.

### Capturing TCP Traffic: tcpdump & Wireshark

### tcpdump

`tcpdump` is a command-line packet analyzer useful for capturing and inspecting TCP traffic.

```sh
sudo tcpdump tcp
# Capture all TCP packets

sudo tcpdump -i eth0 port 80
# Capture TCP traffic on interface eth0, port 80 (HTTP)

sudo tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'
# Capture only TCP SYN packets (start of handshake)

sudo tcpdump -w capture.pcap
# Write captured packets to a file for later analysis
```

### Wireshark

[Wireshark](https://www.wireshark.org/) is a graphical network protocol analyzer, ideal for deep inspection and visualization.

- **Start a capture:** Open Wireshark, select your network interface, and click "Start Capturing Packets".
- **Filter TCP traffic:**  
  Enter `tcp` in the filter bar to show only TCP packets.
- **Filter by port:**  
  `tcp.port == 443` (shows only TCP packets on port 443)
- **Follow a TCP stream:**  
  Right-click a packet and select "Follow" > "TCP Stream" to see the full conversation.

### Recommended Books & Resources

- [TCP/IP Illustrated, Volume 1: The Protocols by W. Richard Stevens](https://www.amazon.com/TCP-Illustrated-Protocols-Addison-Wesley-Professional/dp/0201633469) – A classic, in-depth guide to TCP/IP networking.
- [Transmission Control Protocol (RFC 9293)](https://datatracker.ietf.org/doc/html/rfc9293)
- [Computer Networking: A Top-Down Approach](https://www.amazon.com/Computer-Networking-Top-Down-Approach-7th/dp/0133594149)
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)

### Useful Tools & Links

- [tcpdump](https://github.com/the-tcpdump-group/tcpdump) – Powerful command-line packet analyzer ([Web](https://www.tcpdump.org/)) ([Tutorial with examples](https://danielmiessler.com/study/tcpdump/))
- [Wireshark](https://www.wireshark.org/) – Graphical network protocol analyzer ([User Guide](https://www.wireshark.org/docs/wsug_html_chunked/))
- [What I learned attempting the TCP Reset attack](https://squidarth.com/article/networking/2020/05/03/tcp-resets.html)
- [Transmission Control Protocol (RFC 9293)](https://datatracker.ietf.org/doc/html/rfc9293)

### Notes

- TCP ensures reliable, in-order delivery of data using sequence numbers, acknowledgments, and retransmissions.
- Other transport protocols like UDP offer faster, connectionless communication but without reliability guarantees.
- Understanding TCP is essential for network troubleshooting, performance tuning, and cybersecurity.

### References

- [RFC 9293 - Transmission Control Protocol](https://datatracker.ietf.org/doc/html/rfc9293)
