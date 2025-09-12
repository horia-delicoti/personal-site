---
title: WPScan
---

[WPScan](https://wpscan.com/wordpress-cli-scanner/) ([GitHub](https://github.com/wpscanteam/wpscan)) is a [WordPress](https://wordpress.org/) security scanner to test the security of their WordPress websites.

```sh
wpscan --url http://$IP --enumerate u,p,t --api-token $WPSCAN_API_TOKEN --format json --output report.json
```
