---
title: Nikto
description: A web server scanner that tests for various vulnerabilities in web servers.
---

[Nikto](https://github.com/sullo/nikto), a powerful web server scanner, to scan for vulnerabilities by testing against thousands of known issues. It is particularly effective at detecting outdated software, insecure configurations, and common [CVEs](https://www.cve.org/).

```sh
nikto -h https://<HOST_IP> -p 8080 -output nikto_scan.txt -useproxy http://127.0.0.1:8080
# -h https... - Detects SSL-specific vulnerabilities
# -p 8080     - Often CTFs don't run on standard ports
# -useproxy   - Intercept and analyze requests manually
# -output     - Save output to file for reporting
```

:::info
Use Nikto findings to feed into further attacks with tools like [gobuster](/docs/security/tools/gobuster), [wpscan](/docs/security/tools/wpscan) or custom scripts.
:::

:::warning
Nikto generates a lot of noise and is easily detected. Do not use it in stealth or red team operations unless explicitly permitted.
:::

### Links

- [Nikto](https://github.com/sullo/nikto) - web server scanner
