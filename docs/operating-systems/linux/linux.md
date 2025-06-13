---
title: Linux
---

Linux is a family of open-source Unix-like operating systems based on the Linux kernel, created by Linus Torvalds in 1991. It powers everything from smartphones and servers to supercomputers and embedded devices. Known for its stability, flexibility, and security, Linux is widely used by developers, system administrators, and enterprises around the world.

---

## 🌟 Key Concepts

- **Kernel:** The core of the operating system, managing hardware, processes, memory, and system calls.
- **Distributions (Distros):** Variants of Linux packaged with different software and tools (e.g., Ubuntu, Fedora, Debian, Arch, CentOS).
- **Shell:** Command-line interface for interacting with the system (e.g., bash, zsh).
- **Package Manager:** Tool for installing, updating, and removing software (e.g., apt, yum, pacman).
- **Filesystem Hierarchy:** Standard directory structure for Linux systems.

---

## 📚 Recommended Resources

- [Linux (GitHub)](https://github.com/torvalds/linux)
- [The Linux Programming Interface](https://man7.org/tlpi/)
- [Linux system administration essentials LFS207](https://training.linuxfoundation.org/training/linux-system-administration-essentials-lfs207/)
- [Kernel newbies](https://kernelnewbies.org/)
- [The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/)
- [Filesystem Hierarchy Standard document](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.pdf)
- [Linux inside](https://0xax.gitbooks.io/linux-insides/content/index.html)
- [Test your sysadmin skills](https://github.com/trimstray/test-your-sysadmin-skills)
- [apt](https://yoshuawuyts.gitbooks.io/knowledge/content/bin/apt.html)

---

## 🛠️ Common Commands

```sh
uname -a            # Show system information
lsb_release -a      # Show distribution-specific info
ls /                # List files in root directory
cd /path/to/dir     # Change directory
pwd                 # Print working directory
cp src dest         # Copy files or directories
mv src dest         # Move or rename files/directories
rm file             # Remove files
mkdir dir           # Create a new directory
ps aux              # Show running processes
top                 # Real-time process monitoring
df -h               # Show disk usage
du -sh *            # Show size of files/folders
free -h             # Show memory usage
chmod +x file       # Make file executable
chown user:group file # Change file owner/group
sudo command        # Run command as superuser
apt update && apt upgrade # Update/upgrade packages (Debian/Ubuntu)
```

---

## 📝 Notes

- Linux is highly customizable and can be tailored for desktops, servers, or embedded systems.
- Most Linux distributions are free and open-source.
- The Linux community is large and supportive—forums, wikis, and documentation are widely available.

---
