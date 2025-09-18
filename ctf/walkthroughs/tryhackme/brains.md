---
title: "Brains"
subtitle: "The city forgot to close its gate."
date: 2025-09-15
tags: [tryhackme]
draft: true
---

This is a walkthrough for the TryHackMe room [Brains Room](https://tryhackme.com/room/brains). Let's exploit the server.
<!-- truncate -->

### Information Gathering

Start the machine and save IP address for the room.

```sh
export IP=10.10.80.234
```

Let's check if the machine responds to [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)).

```sh
└─$ ping $IP
PING 10.10.80.234 (10.10.80.234) 56(84) bytes of data.
64 bytes from 10.10.80.234: icmp_seq=1 ttl=63 time=23.5 ms
```

It is up. For initial access, the goal is to find open services that I can interact with (web, ftp, ssh, etc.)

Let's use [nmap](/docs/networking/nmap) to scan the target and gather some information about the services running on it.

```sh
└─$ nmap -sC -sV -oN nmap/initial $IP
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-09-16 15:45 BST
Nmap scan report for 10.10.80.234
Host is up (0.037s latency).
Not shown: 997 closed tcp ports (reset)
PORT      STATE SERVICE  VERSION
22/tcp    open  ssh      OpenSSH 8.2p1 Ubuntu 4ubuntu0.11 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 f9:6f:46:cc:1b:1e:3e:47:e0:2c:e1:df:cd:19:d1:43 (RSA)
|   256 6f:b4:fa:d9:a9:a9:0e:2e:27:e3:e4:bb:46:a7:e6:4d (ECDSA)
|_  256 bb:ba:b6:f0:63:d9:d4:b3:9a:9f:62:b2:e7:d8:b2:6d (ED25519)
80/tcp    open  http     Apache httpd 2.4.41 ((Ubuntu))
|_http-server-header: Apache/2.4.41 (Ubuntu)
|_http-title: Maintenance
50000/tcp open  ibm-db2?
| fingerprint-strings:
|   GetRequest:
|     HTTP/1.1 401
|     TeamCity-Node-Id: MAIN_SERVER
|     WWW-Authenticate: Basic realm="TeamCity"
|     WWW-Authenticate: Bearer realm="TeamCity"
|     Cache-Control: no-store
|     Content-Type: text/plain;charset=UTF-8
|     Date: Tue, 16 Sep 2025 14:45:20 GMT
|     Connection: close
|     Authentication required
|     login manually go to "/login.html" page
|   drda, ibm-db2, ibm-db2-das:
|     HTTP/1.1 400
|     Content-Type: text/html;charset=utf-8
|     Content-Language: en
|     Content-Length: 435
|     Date: Tue, 16 Sep 2025 14:45:20 GMT
|     Connection: close
|     <!doctype html><html lang="en"><head><title>HTTP Status 400
...
Nmap done: 1 IP address (1 host up) scanned in 16.02 seconds
```

We discovered 3 TCP ports open: 22, 80, and 50000.

Port 22/tcp is running OpenSSH 8.2p1 Ubuntu, fully legitimate and patched version. There is no "obvious" vulnerability to exploit here. No need to brute-force blindly, it's noisy. Let's look elsewhere for credentials.

Port 80/tcp is running Apache/2.4.41 (Ubuntu) with a maintenance page. No `robots.txt` file, no visible pages. This sometimes mean the developer/admin left the site live but partially disabled; could be a hint or leftover content.

Port 50000/tcp fingerprint suggest a TeamCity instance `(WWW-Authenticate: Basic realm="TeamCity")` or `IBM DB2` response.
TeamCity often has web login [/login.html](https://www.jetbrains.com/help/teamcity/super-user.html), REST APIs `(/app/rest/...)` and sometimes hardcoded passwords if misconfigured. This is interesting, let's dive in.

Now, let's see how can we interact with these services, what data can it reveal, and what credentials could it accept.

