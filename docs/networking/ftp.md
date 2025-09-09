---
title: FTP
description: FTP (File Transfer Protocol) is a standard network protocol used to transfer files from one host to another over a TCP-based network.
---

[FTP (File Transfer Protocol)](https://en.wikipedia.org/wiki/File_Transfer_Protocol) is a standard [network protocol](https://www.cloudflare.com/learning/network-layer/what-is-a-protocol/) used to transfer files from one host to another over a TCP-based network. It is commonly used for uploading and downloading files to and from servers.

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

### Links

- [FTP commands for linux](https://www.solarwinds.com/serv-u/tutorials/ftp-commands-for-linux-unix)
- [Go FTP Server](https://github.com/fclairamb/ftpserver) - Go based autonomous FTP server with SFTP, S3, Dropbox, and Google Drive connectors
