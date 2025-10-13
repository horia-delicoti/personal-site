---
title: Telnet
subtitle: A simple command-line tool for remote communication.
---

[Telnet](https://en.wikipedia.org/wiki/Telnet) is a network protocol for remote terminal connection. Although initially it was used for remote administration, we can use telnet to connect to any server listening on a TCP port number.

### Commands

```sh title="Use telnet to connect to http server and fetch a web page"
$ telnet <HOST_IP> 80  # open session to port 80
Trying 10.10.141.196...
Connected to 10.10.141.196.
Escape character is '^]'.
GET /flag.html HTTP/1.1  # send HTTP request. Type each line and press Enter
Host: anything # host header is required by HTTP/1.1. Press Enter twice after the last line.

HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 123

<html>...
<!-- flag content here -->
</html>
```
