---
title: Vagrant
---

[Vagrant](https://www.vagrantup.com/) is an open-source tool for building and managing virtualized development environments. It provides a simple and consistent workflow for creating reproducible and portable environments, making it easier for developers to work on projects across different operating systems.

---

## 🌟 Key Features

- **Reproducibility:** Define environments as code using a `Vagrantfile`.
- **Portability:** Works with multiple providers (VirtualBox, VMware, Hyper-V, Docker).
- **Provisioning:** Supports shell scripts, Ansible, Chef, Puppet, and more for automated setup.
- **Isolation:** Each project can have its own isolated environment.
- **Community:** Large ecosystem of pre-built boxes and plugins.

---

## 🚀 Common Commands

- `vagrant init` — Initialize a new Vagrant environment.
- `vagrant up` — Start and provision the environment.
- `vagrant halt` — Stop the running machine.
- `vagrant destroy` — Remove the environment.
- `vagrant ssh` — SSH into the running machine.

---

## 📚 Useful Links

- [Vagrant](https://www.vagrantup.com/) - Development Environments Made Easy
- [Vagrant GitHub](https://github.com/hashicorp/vagrant)
- [Vagrant CLI autocompletion](https://www.vagrantup.com/docs/cli)
- [vagrant-disksize](https://github.com/sprotheroe/vagrant-disksize) - A Vagrant plugin to resize disks in VirtualBox
- [Vagrant Boxes](https://app.vagrantup.com/boxes/search) - Pre-built base images

---

## 📝 Notes

- Vagrant is ideal for development and testing, not for production.
- The `Vagrantfile` is the core configuration file for defining environments.
- Plugins extend Vagrant’s functionality (e.g., for disk resizing, synced folders, etc.).

---
