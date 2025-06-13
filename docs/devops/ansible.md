---
title: Ansible
---

Ansible is an open source automation platform that helps with configuration management, application deployment, and task automation. It uses simple, human-readable YAML files (playbooks) to describe automation jobs, making it easy to manage infrastructure as code.

---

## 🌟 Key Features

- **Agentless:** No need to install agents on managed nodes; uses SSH.
- **Idempotent:** Ensures tasks produce the same result, even if run multiple times.
- **Extensible:** Supports modules for various tasks (e.g., package management, cloud provisioning).
- **Declarative:** Define the desired state of your systems.
- **Scalable:** Manage a few servers or thousands with the same approach.

---

## 🚀 Common Use Cases

- Server provisioning and configuration
- Application deployment
- Continuous integration and delivery (CI/CD)
- Cloud resource orchestration
- Security automation and compliance

---

## 📚 Resources

- [Official Documentation](https://docs.ansible.com/ansible/latest/index.html)
- [Ansible for DevOps by Jeff Geerling](https://cloud.delicoti.com/d/f/o444VDABw5cbJMBcs9u7BKLgymDjkFGy)
- [Ansible 101 with Jeff Geerling (YouTube)](https://www.youtube.com/playlist?list=PL2_OBreMn7FqZkvMYt6ATmgC0KAGGJNAN)
- [An Ansible2 Tutorial](https://serversforhackers.com/c/an-ansible2-tutorial)
- [Awesome Ansible (GitHub)](https://github.com/KeyboardInterrupt/awesome-ansible)
- [Ansible Molecule (Testing)](https://molecule.readthedocs.io/en/latest/)

---

## ⚡ Ad-Hoc Commands

Ad-hoc commands let you run simple tasks without writing a playbook. Examples:

```sh
# Ping all nodes (default inventory)
ansible all -m ping

# Ping all nodes (specify inventory)
ansible all -i "/vagrant/data/hosts" -m ping

# Gather facts
ansible -i inventory <hostname or hostgroup> -m setup

# Specify host and user
ansible ip-192-168-100-11.local -m ping -u vagrant

# Execute a shell command
ansible all -a "/bin/echo hello"
ansible all -a "uptime"

# Use the shell module
ansible all -m shell -a "pwd"
ansible all -m shell -a 'echo $HOME'

# Update and upgrade packages (Debian/Ubuntu)
ansible all -m apt -a "update_cache=yes upgrade=dist" --become

# Install a package
ansible all -m apt -a "name=tree state=present" --become
```

---

## 📝 Notes

- Ansible playbooks are written in YAML and describe the desired state of your infrastructure.
- Inventories define which hosts Ansible manages.
- Use roles and variables to organize complex automation tasks.
- Ansible is widely used in DevOps for its simplicity and power.

---
