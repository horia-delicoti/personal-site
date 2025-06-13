---
title: Linux Command Cheat Sheet
---

A comprehensive reference for essential Linux commands, configuration files, and system administration tasks. Useful for beginners and experienced users alike.

---

## 📚 Useful Resources

- [cheat.sh](http://cheat.sh/)
- [tldr pages](https://tldr.sh/)
- [dev toolbox](https://www.devtoolbox.co/tools/diff-viewer)
- [crontab guru](https://crontab.guru/)

---

## 👤 User Management

**Important Files:**

```sh
/etc/default/useradd   # Default user creation settings
/etc/login.defs        # Login definitions
/etc/passwd            # User account details
/etc/group             # Group details
/etc/shadow            # Encrypted user passwords
/etc/sudoers           # Sudo permissions
/etc/skel              # Default files for new users
```

```sh
sudo adduser username         # Add a new user
sudo passwd -l 'username'     # Change a user's password
sudo userdel -r 'username'    # Remove a user and home dir
sudo usermod                  # Modify a user account
sudo deluser USER GROUPNAME   # Remove user from group
sudo groupadd GROUPNAME       # Add a new group
sudo groupmod                 # Modify a group
sudo groupdel                 # Delete a group
finger                        # Info about logged-in users
who                           # Show logged-in users
whoami                        # Show current user
id                            # Show user/group IDs
passwd                        # Change password
chage                         # Change password expiry
gpasswd                       # Administer group file
```

---

## 📁 Files, Directories, Links

```sh
ls -l                         # List files with permissions
chown user file               # Change file owner
chgrp group file              # Change file group
umask                         # Set default permissions mask
ln file newfile               # Create hard link
ln -sf file newfile           # Create soft (symbolic) link
pwd                           # Print working directory
mkdir dir                     # Create new directory
```

---

## 🔒 File Permissions & Search

```sh
getfacl file                  # Get file ACLs
setfacl                       # Set file ACLs
chmod <g or u>+s file         # Setuid/setgid bit
chmod +t file                 # Set sticky bit
lsattr                        # List file attributes
chattr                        # Change file attributes
find                          # Search for files
```

---

## 📄 File Content & Text Processing

```sh
cat file                      # Show file contents
head file                     # Show first lines
tail file                     # Show last lines
sed                           # Stream editor
awk                           # Pattern scanning/processing
grep pattern file             # Search for pattern
diff file1 file2              # Compare files
cut                           # Remove sections from lines
wc                            # Count lines/words/chars
sort                          # Sort lines in text files
```

---

## 📦 Archive, Compression, IO Redirection

```sh
tar                           # Archive files
gzip file                     # Compress file
tee file                      # Output to file and stdout
tr                            # Translate/replace characters
<, >, 1>, 2>, 2>&1            # Input/output redirection
```

---

## 🗂️ Git & SSL

```sh
git                           # Version control
openssl                       # Cryptography functions
```

---

## 🖥️ Boot, System Modes, Bootloaders

**Important Files:**
```sh
/etc/default/grub
/boot/grub/grub.cfg
/etc/fstab
```

```sh
shutdown                      # Shutdown/reboot system
grub2-install                  # Install GRUB
grub-mkconfig -o /boot/grub/grub.cfg   # Update GRUB config
systemctl get-default          # Get default boot target
systemctl set-default graphical.target  # Set boot to GUI
```

---

## ⚙️ Scripting, Services, Logs

**Important Files:**
```sh
/var/log/           # System logs directory
/var/log/syslog     # System activity (Debian/Ubuntu)
/var/log/messages   # System activity (CentOS)
/var/log/auth.log   # Security events (Debian/Ubuntu)
/var/log/secure     # Security events (CentOS)
/var/log/kern.log   # Kernel logs
/var/log/cron       # Cron job logs
```

```sh
./script.sh                        # Run a shell script
systemctl                          # Manage systemd services
journalctl                         # View systemd logs
dmesg                              # Kernel ring buffer
```

---

## 🖥️ Process & System Monitoring

**Important Files:**

```sh
/proc/<pid>/task
```

```sh
top                                # Real-time process monitor
uptime                             # System uptime/load
ps aux                             # List processes
pstree -aAp <pid>                  # Process tree
pgrep                              # Find processes
mpstat                             # CPU usage
iostat                             # I/O stats
kill                               # Terminate process
nice / renice                      # Set/change process priority
lsof                               # List open files
sleep                              # Delay execution
sar                                # System activity report
numastat                           # NUMA memory stats
strace                             # Trace system calls
```

---

## ⏰ Scheduling Tasks

**Important Files:**

```sh
/etc/crontab
/var/log/cron
```

```sh
crontab -e                         # Edit user crontab
anacron -n -f                      # Run all anacron jobs
at, batch, atq, atrm               # Manage scheduled jobs
```

---

## 📦 Software Management

**Important Files:**

```sh
/etc/apt/source.list
/etc/yum.repos.d/
/etc/yum.conf
```

```sh
dnf, yum                           # RPM package management
apt                                # Debian/Ubuntu package mgmt
dpkg --search /bin/ls              # Find package for file (Debian)
rpm -qf /bin/ls                    # Find package for file (RPM)
```

---

## 🛡️ Kernel, Security, Resource Limits

**Important Files:**
```sh
/etc/sysctl.conf
/etc/security/limits.conf
/etc/sudoers
```

```sh
ps auxZ                            # SELinux label of process
ls -Z                              # SELinux label for file
chcon -t                           # Change file security context
restorecon                         # Restore default SELinux labels
setenforce 0                       # Set SELinux to permissive
semanage user -l                   # List SELinux roles
sysctl -a                          # Kernel parameters
ulimit                             # User resource limits
visudo                             # Edit sudoers file safely
```

---

## 🐳 Containers & VMs

```sh
docker                             # Docker CLI
qemu                               # System emulation
virsh                              # Manage virtual machines
```

---

## 🖥️ Environment Profiles

**Important Files:**

```sh
/etc/environment
/etc/profile.d/welcome.sh
/etc/skel
~/.bashrc
```

```sh
env                                # Print environment variables
echo $VAR                          # Show variable value
set VAR=value                      # Set local variable
export VAR=value                   # Export variable globally
source /etc/environment            # Reload environment vars
```

---

## 💾 Partitions & Swap

**Important Files:**

```sh
/dev/
/proc/partitions
```

```sh
fdisk -l                           # List disks/partitions
cfdisk                             # Partition table editor
lsblk -f                           # List block devices
mkswap                             # Setup swap area
swapon, swapoff                    # Enable/disable swap
```

---

## 🗃️ Filesystems & Mounting

**Important Files:**

```sh
/etc/fstab
```

```sh
lshw -short -C disk                # List disk devices
hdparm -i /dev/sda                 # SATA disk details
blkid                              # Partition UUIDs/types
df -h                              # Disk usage
du -sh                             # Directory size
lsusb                              # USB devices
hdparm                             # SATA device info
mount                              # Mount filesystem
lspci                              # PCI devices
cryptsetup                         # Manage encrypted volumes
mkfs.ext4                          # Create ext4 filesystem
```

---

## 🗄️ LVM (Logical Volume Management)

```sh
pvs                                # Physical volumes info
vgs                                # Volume groups info
pvcreate                           # Init physical volume
pvremove                           # Remove LVM label
vgcreate                           # Create volume group
vgextend                           # Add PV to group
vgreduce                           # Remove PV from group
lvcreate                           # Create logical volume
lvresize                           # Resize logical volume
```

---

## 🌐 Networking & Services

**Important Files:**

```sh
/etc/hosts
/etc/resolve.conf
/etc/hostname
```

```sh
ip route / route -n                # Show routing table
hostnamectl                        # Set/query hostname
firewall-cmd                       # Firewall configuration
timedatectl                        # Time/date settings
ss -tunlp                          # List sockets/connections
ip                                 # Network interfaces/tunnels
ip route show                      # Show default gateway
```

---

## 🔥 Packet Filtering

```sh
ufw                                # Simple firewall
iptables                           # Advanced firewall/NAT
wireshark                           # Network traffic analyzer
```

---

## 🔑 SSH

**Important Files:**

```sh
/etc/ssh/ssh_config
/etc/ssh/sshd_config
```

```sh
ssh user@host                      # SSH remote login
```

---

## 🌍 DNS

**Important Files:**

```sh
/etc/named.conf
/var/named
```

```sh
dig domain.com                     # DNS query
host domain.com                    # Hostname lookup
nslookup domain.com                # DNS lookup
```

---

## 🖥️ Hardware Info

```sh
hwinfo --short                     # Probe hardware
lshw --short                       # List hardware
lspci                              # PCI devices
```

**CPU:**

```sh
cat /proc/cpuinfo                  # CPU info
cat /proc/version                  # Kernel version
lscpu                              # CPU architecture info
lshw -C cpu                        # CPU hardware info
```

**Memory:**

```sh
cat /proc/meminfo                  # Memory info
htop                               # Interactive process/memory
lshw -short -C memory              # Memory info
dmidecode -t memory | grep -i size # Show memory stick sizes
free -m                            # Show memory usage
```

---

## 🔗 More Links

- [Packages Search for Linux and Unix](https://pkgs.org/)
- [YUM command cheat sheet (PDF)](https://access.redhat.com/sites/default/files/attachments/rh_yum_cheatsheet_1214_jcs_print-1.pdf)
- [Ubuntu packages](https://packages.ubuntu.com/bionic/)
- [How To Delete A Repository And GPG Key In Ubuntu](https://www.ostechnix.com/how-to-delete-a-repository-and-gpg-key-in-ubuntu/)

---
