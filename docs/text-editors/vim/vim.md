---
title: Vim
---

[Vim](https://www.vim.org/) is a highly configurable, efficient, and powerful text editor built to enable fast text editing. It is an improved version of the classic vi editor, available on almost every Unix-like system. Vim is popular among developers and system administrators for its keyboard-driven workflow, extensibility, and support for scripting.

---

## 🌟 Key Features

- **Modal Editing:** Vim has different modes (Normal, Insert, Visual, Command) for efficient text manipulation.
- **Keyboard-Centric:** Most actions are performed via keyboard shortcuts, minimizing mouse use.
- **Extensible:** Supports plugins, custom key mappings, and scripting (Vimscript, Lua, Python).
- **Ubiquitous:** Available on Linux, macOS, Windows, and even embedded systems.
- **Lightweight:** Fast startup and low resource usage.

---

## 🛠️ Common Commands

```sh
vim file.txt         # Open file.txt in Vim
i                    # Switch to Insert mode
Esc                  # Return to Normal mode
:w                   # Save file
:q                   # Quit Vim
:wq                  # Save and quit
:q!                  # Quit without saving
dd                   # Delete (cut) current line
yy                   # Copy (yank) current line
p                    # Paste below
u                    # Undo
Ctrl+r               # Redo
/word                # Search for 'word'
:n                   # Go to next search result
:%s/foo/bar/g        # Replace all 'foo' with 'bar'
:help                # Open Vim help
```

---

## 📦 Plugins & Customization

- **[vim-plug](https://github.com/junegunn/vim-plug):** Minimalist plugin manager.
- **[Vundle](https://github.com/VundleVim/Vundle.vim):** Popular Vim plugin manager.
- **[NERDTree](https://github.com/preservim/nerdtree):** File explorer.
- **[fzf.vim](https://github.com/junegunn/fzf.vim):** Fuzzy file finder.
- **[vim-airline](https://github.com/vim-airline/vim-airline):** Status/tabline.
- **[coc.nvim](https://github.com/neoclide/coc.nvim):** Intellisense engine for Vim.

---

## 📚 Useful Links

- [Vim Cheat Sheet](https://vim.rtorr.com/)
- [Vim Adventures (game)](https://vim-adventures.com/)
- [Open Vim Tutorial](https://openvim.com/)
- [Vimcasts (video tutorials)](http://vimcasts.org/)
- [Awesome Vim](https://github.com/akrawchyk/awesome-vim)

---

## 📝 Notes

- Vim has a steep learning curve, but mastering it can greatly improve productivity.
- Configuration is typically stored in `~/.vimrc`.
- Neovim is a modern fork of Vim with additional features and improvements.

---
