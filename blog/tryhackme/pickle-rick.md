---
title: "Pickle Rick: THM Walkthrough"
subtitle: "A Rick and Morty CTF. Help turn Rick back into a human!"
date: 2025-06-27
tags: [tryhackme]
---

This is a walkthrough for the TryHackMe room [Pickle Rick Room](https://tryhackme.com/room/picklerick). Let's help Rick find the ingredients he needs to make his serum and turn back into a human.

> Listen Morty... I need your help, I've turned myself into a pickle again and this time I can't change back!
<!-- truncate -->

### Information Gathering

Start the machine and save IP address for the room.

```sh
export IP=10.10.94.57
```

Let's use [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)) to check if the machine is reachable.

```sh
ping $IP
64 bytes from 10.10.94.57: icmp_seq=0 ttl=63 time=20.627 ms
64 bytes from 10.10.94.57: icmp_seq=1 ttl=63 time=18.233 ms
```

Let's use [nmap](/docs/networking/nmap) to scan the target and gather some information about the services running on it.

```sh
nmap -sC -sV -oN nmap/initial $IP
#     |   |  |-> Output scan results to nmap/initial
#     |   |-> Enable service version detection
#     |-> Enable default scripts
Nmap scan report for 10.10.94.57
Host is up (0.021s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.11 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 98:64:da:21:ba:77:9b:dc:5a:ae:52:c6:9e:65:4b:b3 (RSA)
|   256 a4:7e:60:96:71:ee:b3:85:6b:d0:40:18:a3:e0:97:17 (ECDSA)
|_  256 ac:fe:8e:3c:42:23:35:23:8f:17:ae:1f:b9:49:a4:d5 (ED25519)
80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
|_http-title: Rick is sup4r cool
|_http-server-header: Apache/2.4.41 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

The Nmap scan revealed two open ports: [22 (SSH)](https://www.ssh.com/academy/ssh/port) and [80 (HTTP)](https://sslinsights.com/what-is-port-80/). The HTTP service is running Apache [httpd 2.4.41](https://httpd.apache.org/) on [Ubuntu](https://ubuntu.com/).
Let's check the web service in http://10.10.94.57 by opening a browser and navigating to the target IP address.

![Web Page Output](/img/tryhackme/pickle-rick/web.png)

Let's check the [source code](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) of the web page to see if there are any clues or hints.

![Web Source Output](/img/tryhackme/pickle-rick/source.png)

Here we can see that the source code contains a comment with a hint about the first ingredient Rick needs to make his serum.

```js
    Note to self, remember username!

    Username: R1ckRul3s
```

So we have a username: `R1ckRul3s`. Is it for SSH? what about the password?
Let's keep looking for more clues on the web page.

Let's check for the existence of a **[robots.txt](https://www.cloudflare.com/learning/bots/what-is-robots-txt/)** file.

```sh
curl $IP/robots.txt

Wubbalubbadubdub
```

Is this a password? Let's try it with the username we found earlier.

```sh
ssh R1ckRul3s@$IP
R1ckRul3s@10.10.94.57: Permission denied (publickey).
```

It seems that the SSH service is not allowing password authentication. This happens when SSH server **/etc/ssh/sshd_config** file is configured like this:

```sh
PasswordAuthentication no
PubkeyAuthentication yes
```

so we need to find another way to authenticate.

I can also see a **/assets/** directory in the source code. Let's check it out for any files that might contain more information.

<img src="/img/tryhackme/pickle-rick/assets.png" alt="Web Assets Output" width="400"/>

It seems that there are some files of CSS, JS code, few images and gifs in the **/assets/** directory, but nothing that stands out.

If [SSH](https://www.ssh.com/academy/ssh/protocol) is not allowing password authentication, we can try to find a way to exploit the web service to find a login page.
Let's use [Nikto](https://github.com/sullo/nikto) to scan the web service for vulnerabilities.

```sh
nikto -h $IP -o nikto/nikto.log
- Nikto v2.5.0
---------------------------------------------------------------------------
+ Target IP:          10.10.94.57
+ Target Hostname:    10.10.94.57
+ Target Port:        80
+ Start Time:         2025-06-27 11:09:10 (GMT1)
---------------------------------------------------------------------------
+ Server: Apache/2.4.41 (Ubuntu)
+ /: The anti-clickjacking X-Frame-Options header is not present. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
+ /: The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type. See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ Apache/2.4.41 appears to be outdated (current is at least 2.4.57). Apache 2.2.34 is the EOL for the 2.x branch.
+ /: Server may leak inodes via ETags, header found with file /, inode: 426, size: 5818ccf125686, mtime: gzip. See: http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2003-1418
+ /login.php: Cookie PHPSESSID created without the httponly flag. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
+ OPTIONS: Allowed HTTP Methods: POST, OPTIONS, HEAD, GET .
+ /login.php: Admin login page/section found.
+ 8073 requests: 0 error(s) and 7 item(s) reported on remote host
+ End Time:           2025-06-27 11:12:56 (GMT1) (226 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested
```

The Nikto scan revealed that there is an admin login page at **/login.php**. Let's check it out.

<img src="/img/tryhackme/pickle-rick/login.png" alt="Web Login" width="600"/>

I tried to access the login page, and entered the username `R1ckRul3s` and the password `Wubbalubbadubdub`, and it worked!
I was able to log in to the admin panel.

<img src="/img/tryhackme/pickle-rick/command_ls.png" alt="Web Command LS" width="600"/>

I can see that there is a command line interface in the admin panel, and I can run commands on the server. After running the `ls` command, I can see **Sup3rS3cretPickl3Ingred.txt** file in the current directory. If I run the `cat` command on it, I cannot access the contents of the file.

<img src="/img/tryhackme/pickle-rick/command_cat_disable.png" alt="Web Command Cat Disabled" width="600"/>

But running the command `less Sup3rS3cretPickl3Ingred.txt` works, and I can see the contents of the file. And it contains the first ingredient Rick needs to make his serum.

*Side note: You can also access http://10.10.94.57/Sup3rS3cretPickl3Ingred.txt to see the contents of the file.*

```sh
mr. meeseek hair
```

Running `less clue.txt` in the command line interface outputs:

```sh
Look around the file system for the other ingredient.
```

Checking **/portal.php** page source, I found a [Base64](https://en.wikipedia.org/wiki/Base64) encoded string but looks like a rabbit hole.

```sh
echo 'Vm1wR1UxTnRWa2RUV0d4VFlrZFNjRlV3V2t0alJsWnlWbXQwVkUxV1duaFZNakExVkcxS1NHVkliRmhoTVhCb1ZsWmFWMVpWTVVWaGVqQT0=' | base64 -d | base64 -d | base64 -d | base64 -d | base64 -d | base64 -d | base64 -d

rabbit hole
```

Let's check the source code all pages for any other clues or hints. Running `grep -R .` on the web directory will help us find any other files that might contain clues.

<img src="/img/tryhackme/pickle-rick/command_grep.png" alt="Web Grep Output" width="600"/>

Checking the page source of **/portal.php**, I get the list of blacklisted commands.

```sh
portal.php:      // Cant use cat
portal.php:      $cmds = array("cat", "head", "more", "tail", "nano", "vim", "vi");
```

Let's list the priviliges of the user.

<img src="/img/tryhackme/pickle-rick/command_sudo.png" alt="Web Command Sudo Output" width="600"/>

You can run **sudo** commands as user `R1ckRul3s`!!
Let's check what else is there.

<img src="/img/tryhackme/pickle-rick/command_ls_root.png" alt="Web Command LS Root Output" width="600"/>

On closer inspection, I found the second ingredient Rick needs in the **/home/rick/second ingredients** file.

<img src="/img/tryhackme/pickle-rick/ingredient_2.png" alt="Web Command Ingredient 2 Output" width="600"/>

Found the third ingredient in the **/root/3rd.txt** file.

<img src="/img/tryhackme/pickle-rick/ingredient_3.png" alt="Web Command Ingredient 3 Output" width="600"/>

We finally have all the ingredients Rick needs to make his serum. We transformed Rick back into a human from a pickle!

<img src="/img/tryhackme/pickle-rick/final.jpeg" alt="Web Final" width="300"/>

### Conclusion

This was a fun CTF challenge that required us to gather information about the target, exploit the web service to gain access to the admin panel,
and then use the command line interface to find the ingredients Rick needs to make his serum. We were able to turn Rick back into a human from a pickle!
