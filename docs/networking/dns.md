---
title: DNS
---

The Domain Name System (DNS) is a fundamental component of the internet that translates human-readable domain names (like `example.com`) into IP addresses that computers use to identify each other on the network. DNS acts as the "phonebook" of the internet, enabling users to access websites and services using easy-to-remember names instead of numerical IP addresses.

---

## 🧩 How DNS Works

1. **User Request:** You enter a domain name in your browser.
2. **DNS Resolver:** The request goes to a DNS resolver, which queries DNS servers to find the corresponding IP address.
3. **Root, TLD, and Authoritative Servers:** The resolver may contact root servers, top-level domain (TLD) servers, and authoritative servers to resolve the name.
4. **Response:** The IP address is returned to your device, which then connects to the website.

---

## 🛠️ Common DNS Commands

```sh
nslookup           # Query DNS records for a domain
traceroute         # Trace the path packets take to a destination
dig                # Flexible DNS lookup utility
whois              # Lookup domain registration info
host               # Simple DNS lookup utility
```

---

## 🔒 Security Topics

- **DNS over TLS:** Encrypts DNS queries for privacy ([Cloudflare guide](https://www.cloudflare.com/learning/dns/dns-over-tls/))
- **DNS Cache Poisoning:** Attack that corrupts DNS cache, redirecting traffic ([Cloudflare guide](https://www.cloudflare.com/learning/dns/dns-cache-poisoning/))
- **DNS Spoofing:** Faking DNS responses to redirect users ([Wikipedia](https://en.wikipedia.org/wiki/DNS_spoofing))
- **DNS Hijacking:** Redirecting DNS queries to malicious servers ([Wikipedia](https://en.wikipedia.org/wiki/DNS_hijacking))

---

## 📚 Useful Links

- [Build your own DNS server](https://opensource.com/article/17/4/build-your-own-name-server)
- [What is 1.1.1.1](https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/)
- [Quad9 DNS for high privacy](https://quad9.net/)
- [How to secure DNS requests to upstream DNS](https://medium.com/@life-is-short-so-enjoy-it/homelab-adguard-how-to-secure-dns-requests-to-upstream-dns-10c5ee6a392e)

---

## 📝 Notes

- DNS is critical for internet usability and security.
- Using secure DNS (like DNS over TLS or DNS over HTTPS) helps protect privacy.
- Public DNS providers (Cloudflare 1.1.1.1, Google 8.8.8.8, Quad9) offer alternatives to ISP DNS.

---
