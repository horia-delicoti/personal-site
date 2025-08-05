---
title: SSH
---

[SSH (Secure Shell)](https://www.ssh.com/academy/ssh) is a cryptographic network protocol for securely accessing and managing remote systems over an unsecured network. SSH provides encrypted communication, secure file transfer, and tunneling capabilities, making it a fundamental tool for system administrators and developers.

### Common SSH Commands

```sh
ssh user@host                   # Connect to a remote host
ssh -p 2222 user@host           # Connect using a custom port
ssh -i ~/.ssh/id_rsa user@host  # Use a specific private key
ssh -X user@host                # Enable X11 forwarding (GUI apps)
ssh -L 8080:localhost:80 user@host  # Local port forwarding
ssh -R 2222:localhost:22 user@host  # Remote port forwarding
ssh-copy-id user@host           # Copy your public key to the server for key-based login
```

### SSH Key Management

```sh
ssh-keygen                      # Generate a new SSH key pair
cat ~/.ssh/id_rsa.pub           # Show your public key
ssh-add ~/.ssh/id_rsa           # Add private key to SSH agent
eval "$(ssh-agent -s)"          # Start the SSH agent
```

### Secure File Transfer

```sh
scp file.txt user@host:/path/   # Copy file to remote host
scp user@host:/path/file.txt .  # Copy file from remote host
scp -r dir/ user@host:/path/    # Copy directory recursively
sftp user@host                  # Start interactive SFTP session
```

### ️ SSH Configuration

**Config file:** `~/.ssh/config`

```ssh
Host myserver
    HostName example.com
    User myuser
    Port 2222
    IdentityFile ~/.ssh/id_ed25519
    ForwardAgent yes
```

### Security Tips

- Use SSH keys instead of passwords for authentication.
- Disable root login via SSH (`PermitRootLogin no` in `/etc/ssh/sshd_config`).
- Change the default SSH port to reduce automated attacks.
- Use `Fail2Ban` or similar tools to block brute-force attempts.
- Regularly update OpenSSH and your system.

### Useful Links

- [SSH: The Secure Shell (O’Reilly)](https://docstore.mik.ua/orelly/networking_2ndEd/ssh/ch01_01.htm)
- [SSH Academy](https://www.ssh.com/academy)
- [OpenSSH Manual](https://man.openbsd.org/ssh)
- [SSH Config Examples](https://linux.die.net/man/5/ssh_config)

### Notes

- SSH is available by default on most Unix-like systems.
- Public keys are stored in `~/.ssh/authorized_keys` on the server.
- Use `ssh -v` for verbose/debug output if you have connection issues.
