---
title: FTP
description: FTP (File Transfer Protocol) is a standard network protocol used to transfer files from one host to another over a TCP-based network.
---

[FTP (File Transfer Protocol)](https://en.wikipedia.org/wiki/File_Transfer_Protocol) is a standard [network protocol](https://www.cloudflare.com/learning/network-layer/what-is-a-protocol/) used to transfer files from one host to another over a TCP-based network. It is commonly used for uploading and downloading files to and from servers.

FTP uses TCP port 21 for control commands and port 20 for data transfer in active mode. In passive mode, the server opens a random port for data transfer, which the client connects to.

### FTP Commands

```sh title="Connect to an FTP server"
ftp <HOST_IP> <PORT>
```

```sh title="FTP commands list"
cd     # change directory
ls     # list content of remote directory
get    # receive file
dir    # change directory
status # show current status
```

```sh title="Use FTP to connect to a server and download a file"
└─$ ftp 10.10.141.196
Connected to 10.10.141.196.
220 (vsFTPd 3.0.5)
Name (10.10.141.196:user): user
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
229 Entering Extended Passive Mode (|||55327|)
150 Here comes the directory listing.
-rw-r--r--    1 0        0            1480 Jun 27  2024 coffee.txt
-rw-r--r--    1 0        0              14 Jun 27  2024 flag.txt
-rw-r--r--    1 0        0            1595 Jun 27  2024 tea.txt
226 Directory send OK.
ftp> get flag.txt
local: flag.txt remote: flag.txt
229 Entering Extended Passive Mode (|||62597|)
150 Opening BINARY mode data connection for flag.txt (14 bytes).
100% |**********************************************************|    14       23.77 KiB/s    00:00 ETA
226 Transfer complete.
14 bytes received in 00:00 (0.66 KiB/s)
ftp> exit
221 Goodbye.
```

### Links

- [FTP commands for linux](https://www.solarwinds.com/serv-u/tutorials/ftp-commands-for-linux-unix)
- [Go FTP Server](https://github.com/fclairamb/ftpserver) - Go based autonomous FTP server with SFTP, S3, Dropbox, and Google Drive connectors
