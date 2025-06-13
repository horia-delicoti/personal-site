---
title: Dotfiles
---

Dotfiles are plain text configuration files in your home directory (usually starting with a dot, e.g., `.bashrc`, `.vimrc`, `.gitconfig`) that customize your Unix/Linux/macOS environment. Managing dotfiles allows you to personalize your shell, editor, tools, and workflows, and makes it easy to replicate your setup across machines.

---

## 🌟 Common Dotfiles

- `~/.bashrc`, `~/.zshrc` — Shell configuration (aliases, environment variables, prompt)
- `~/.vimrc`, `~/.config/nvim/init.vim` — Vim/Neovim editor settings
- `~/.gitconfig` — Git configuration
- `~/.tmux.conf` — tmux terminal multiplexer settings
- `~/.profile`, `~/.bash_profile`, `~/.bash_logout` — Shell session scripts
- `~/.inputrc` — Readline (command line editing) settings
- `~/.config/` — XDG-compliant configs for many modern apps

---

## 🛠️ Managing Dotfiles

- **Version Control:** Store your dotfiles in a [Git](https://git-scm.com/) repository for backup and syncing.
- **Symlinks:** Use symlinks to keep files in a central repo but link them to your home directory.
- **Dotfile Managers:** Tools like [chezmoi](https://www.chezmoi.io/), [yadm](https://yadm.io/), [dotbot](https://github.com/anishathalye/dotbot), and [rcm](https://github.com/thoughtbot/rcm) automate dotfile management.

---

## 📦 Example: Basic Dotfiles Repo

```sh
git init --bare $HOME/.dotfiles
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
dotfiles add .bashrc .vimrc .gitconfig
dotfiles commit -m "Add my dotfiles"
dotfiles push origin main
```

---

## 📚 Useful Links

- [GitHub: dotfiles topic](https://github.com/topics/dotfiles)
- [Awesome Dotfiles](https://github.com/webpro/awesome-dotfiles)
- [How to manage your dotfiles](https://www.atlassian.com/git/tutorials/dotfiles)
- [Dotfiles on Hacker News](https://news.ycombinator.com/item?id=11070797)

---

## 📝 Notes

- Always back up your dotfiles before making major changes.
- Use comments in your dotfiles to document customizations.
- Sharing your dotfiles can help others learn and improve their setups.

---
