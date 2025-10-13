---
title: DNS
---

[Domain Name System (DNS)](https://en.wikipedia.org/wiki/Domain_Name_System) is responsible for properly mapping a [domain name](https://en.wikipedia.org/wiki/Domain_name) to an [IP address](https://en.wikipedia.org/wiki/IP_address). It operates at [Application Layer (Layer 7)](/docs/networking#osi-model). DNS traffic uses UDP (port 53) by default and TCP (port 53) as a default fallback.

### List of [DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types)

- **A** (Address) record: Maps a domain to an IPv4 address.
- **AAAA** record: Maps a domain to an IPv6 address.
- [**CNAME** (Canonical Name) record](https://en.wikipedia.org/wiki/CNAME_record): Maps a domain to another domain (alias).
- [**MX** (Mail Exchange) record](https://en.wikipedia.org/wiki/MX_record): Specifies mail servers for a domain.

```sh title="Example DNS records"
| NAME            |    TYPE    |     VALUE        |
|-----------------|------------|------------------|
| foo.example.com |     A      | 192.0.2.23       |
| baz.example.com |   AAAA     | 2001:db8::1      |
| bar.example.com |   CNAME    | foo.example.com  |
| example.com     |    MX      | mail.example.com |
```

### Commands

```sh title="Simple DNS lookup utility"
host <DOMAIN> 8.8.8.8
host <IP>
```

```sh title="DNS lookup for domain name resolution"
dig <DOMAIN>
dig +short <DOMAIN> # Short output
dig <DOMAIN> @8.8.8.8 # Use specific DNS server
```

```sh title="Query DNS records for a domain"
nslookup <DOMAIN> # Alternative DNS lookup
```

```sh title="Whois lookup for domain information"
whois example.com
whois 8.8.8.8
```

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

### Security Topics

- **DNS over TLS:** Encrypts DNS queries for privacy ([Cloudflare guide](https://www.cloudflare.com/learning/dns/dns-over-tls/))
- **DNS Cache Poisoning:** Attack that corrupts DNS cache, redirecting traffic ([Cloudflare guide](https://www.cloudflare.com/learning/dns/dns-cache-poisoning/))
- **DNS Spoofing:** Faking DNS responses to redirect users ([Wikipedia](https://en.wikipedia.org/wiki/DNS_spoofing))
- **DNS Hijacking:** Redirecting DNS queries to malicious servers ([Wikipedia](https://en.wikipedia.org/wiki/DNS_hijacking))

### Useful Links

- [What is DNS? How DNS works?](https://www.cloudflare.com/learning/dns/what-is-dns/) - Cloudflare article explaining DNS basics
- [Build your own DNS server](https://opensource.com/article/17/4/build-your-own-name-server)
- [What is 1.1.1.1](https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/)
- [Quad9 DNS for high privacy](https://quad9.net/)
- [How to secure DNS requests to upstream DNS](https://medium.com/@life-is-short-so-enjoy-it/homelab-adguard-how-to-secure-dns-requests-to-upstream-dns-10c5ee6a392e)
- [What is DNS](https://www.youtube.com/watch?v=NiQTs9DbtW4&t=106s) - Youtube video on how DNS works by NetworkChuck
- [WHOIS Data and Accuracy](https://www.icann.org/resources/pages/whois-data-accuracy-2017-06-20-en) - Information about the accuracy of WHOIS data provided by ICANN (Internet Corporation for Assigned Names and Numbers)

### Notes

- DNS is critical for internet usability and security.
- Using secure DNS (like DNS over TLS or DNS over HTTPS) helps protect privacy.
- Public DNS providers (Cloudflare 1.1.1.1, Google 8.8.8.8, Quad9) offer alternatives to ISP DNS.
