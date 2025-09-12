---
title: WhatWeb
---

[WhatWeb](https://www.kali.org/tools/whatweb/) identifies websites, recognises web technologies including [content management systems (CMS)](https://en.wikipedia.org/wiki/Content_management_system), blogging platforms, [statistic/analytics packages](https://en.wikipedia.org/wiki/Comparison_of_statistical_packages),
[JavaScript libraries](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries), [web servers](https://en.wikipedia.org/wiki/Comparison_of_web_server_software), and [embedded devices](https://www.coderus.com/examples-of-embedded-systems/).

WhatWeb has over 900 plugins, each to recognise something different. It also identifies version numbers, email addresses, account IDs, web framework modules, SQL errors, and more.

```sh
whatweb -v -a 3 <HOST_IP>
# -v: Verbose ouput
# -a: Aggression level 
```

```sh title="Use custom User-Agent to simulate a browser and bypass simple filters"
whatweb --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" --log whatweb_output.txt <HOST_IP>
# --user-agent: Use user-agent to simulate a browser
# --log: Output everything in a file
```

### Aggression level

The aggression level controls the trade-off between speed/stealth and reliability.
Higher levels do more intrusive checks and may make additional requests (noisy).

```sh
--aggression -a=LEVEL
  Set the aggression level. Default: 1.

1. Stealthy       Makes one HTTP request per target and also follows redirects.
2. Aggressive     If a level 1 plugin is matched, additional requests will be made.
3. Heavy          Makes a lot of HTTP requests per target.  URLs  from  all  plugins  are  attempted.
```

### Links

- [WhatWeb: Kali Documentation](https://www.kali.org/tools/whatweb/) ([Web](https://morningstarsecurity.com/research/whatweb)) ([GitHub](https://github.com/urbanadventurer/WhatWeb))