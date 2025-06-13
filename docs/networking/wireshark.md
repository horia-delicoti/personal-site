---
title: Wireshark
---

Wireshark is a powerful open-source network protocol analyzer used for capturing, inspecting, and analyzing network traffic in real time. It is widely used by network engineers, security professionals, and developers for troubleshooting, protocol analysis, and network forensics.

---

## 🌟 How Wireshark Works

Wireshark captures packets from a network interface and displays them in a detailed, human-readable format. It supports hundreds of protocols and allows users to filter, search, and inspect traffic at various layers of the OSI model.

**Basic Workflow:**

1. Select a network interface to capture traffic.
2. Start the capture and generate or observe network activity.
3. Use filters to focus on relevant packets (e.g., TCP, HTTP, DNS).
4. Inspect packet details, follow streams, and export data as needed.

---

## 📊 Example: Packet Flow Graph

```sh
[Your Device] <---> [Switch/Router] <---> [Internet]
        |                   |
   [Wireshark]         [Wireshark]
(Capturing traffic) (Capturing traffic)
```

Wireshark can capture traffic on any device/interface where it is installed and has the necessary permissions.

---

## 🛠️ Useful Wireshark Filters & Commands

- **Start a capture:**  
  Open Wireshark, select your network interface, and click "Start Capturing Packets".

- **Display only TCP traffic:**  

  ```sh
  tcp
  ```

- **Display only HTTP traffic:**  

  ```sh
  http
  ```

- **Filter by IP address:**  

  ```sh
  ip.addr == 192.168.1.10
  ```

- **Filter by port:**  

  ```sh
  tcp.port == 443
  ```

- **Follow a TCP stream:**  
  Right-click a packet and select "Follow" > "TCP Stream" to view the full conversation.

- **Export packets:**  
  File > Export Specified Packets

- **Save capture:**  
  File > Save As

---

## 📚 Useful Links

- [Wireshark User Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
- [Wireshark Display Filter Reference](https://wiki.wireshark.org/DisplayFilters)
- [Wireshark Sample Captures](https://wiki.wireshark.org/SampleCaptures)

---

## 📝 Notes

- Wireshark requires administrative/root privileges to capture on most interfaces.
- Use capture filters (set before starting capture) to limit the amount of data collected.
- Always have permission to capture network traffic, especially on networks you do not own.

---
