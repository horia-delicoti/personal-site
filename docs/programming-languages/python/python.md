---
title: Python
---

[Python](https://www.python.org/) is a powerful, high-level, open-source programming language known for its readability, versatility, and large ecosystem. It is widely used in web development, data science, automation, scripting, machine learning, and more.

---

## 📚 Documentation & Cheatsheets

- [Python Official Docs](https://docs.python.org/3/)
- [Python cheatsheet 1 (PDF)](https://perso.limsi.fr/pointal/_media/python:cours:mementopython3-english.pdf)
- [Python Cheatsheet 2](https://www.pythoncheatsheet.org/)
- [Hitchhiker’s Guide to Python](https://docs.python-guide.org/)
- [Learn Python in Y Minutes](https://learnxinyminutes.com/docs/python/)
- [Real Python](https://realpython.com/)

---

## 🛠️ Common Commands

```sh
python --version                # Show Python version
python3 --version               # Show Python 3 version
which python3                   # Show Python 3 binary location
pip --version                   # Show pip version
pip list                        # List installed packages
pip install <package>           # Install a package
pip uninstall <package>         # Uninstall a package
python                          # Start Python REPL
python script.py                # Run a Python script
python -m venv venv             # Create a virtual environment
source venv/bin/activate        # Activate virtualenv (Linux/macOS)
venv\Scripts\activate           # Activate virtualenv (Windows)
deactivate                      # Deactivate virtualenv
```

---

## 🗂️ Where is Python Installed?

- On macOS (Homebrew): `/usr/local/bin/python3`
- On Linux: `/usr/bin/python3` or `/usr/local/bin/python3`
- On Windows: `C:\Users\<User>\AppData\Local\Programs\Python\Python3x\python.exe`

Installed packages are typically in:

- `/usr/local/lib/python3.x/site-packages` (macOS/Linux)
- `C:\Users\<User>\AppData\Local\Programs\Python\Python3x\Lib\site-packages` (Windows)

---

## 🐍 Virtual Environments

Virtual environments allow you to manage dependencies for different projects separately.

```sh
pip3 install virtualenv
virtualenv -p python3 <env-path>   # Create a new virtualenv
source <env-path>/bin/activate     # Activate (Linux/macOS)
<env-path>\Scripts\activate        # Activate (Windows)
deactivate                         # Deactivate
```

---

## 📦 Packages & Tools

- [PyPI - Python Package Index](https://pypi.org/)
- [pip](https://pip.pypa.io/en/stable/) - Package installer
- [virtualenv](https://virtualenv.pypa.io/en/stable/) - Isolated environments
- [PipX](https://pipx.pypa.io/stable/) - Run Python applications in isolated environments
- [Ruff](https://github.com/astral-sh/ruff), [Pylint](https://pypi.org/project/pylint/) - Code analysis/formatting

---

## 🧑‍💻 Learning & Practice

- [Python Roadmap](https://roadmap.sh/python)
- [Hack in science](https://www.hackinscience.org/exercises/)
- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/dashboard)
- [Learn and Master Python in a Month](https://medium.com/@jhankar.mahbub/learn-and-master-python-in-a-month-b1acc94d5f32)
- [Geek for Geeks - DSA](https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm)
- [Python Certification](https://www.guru99.com/python-programming-certification.html#3)

---

## 📖 Books

- [Free Python books](https://github.com/pamoroso/free-python-books)
- [Best books for learning Python](https://realpython.com/best-python-books/#best-books-for-learning-python)
- [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)
- [Dive Into Python 3](https://diveintopython3.net/index.html)
- [Python for System Administrators](https://python-for-system-administrators.readthedocs.io/en/latest/index.html)
- [Inside The Python Virtual Machine](https://leanpub.com/insidethepythonvirtualmachine/read)
- [Problem Solving with Algorithms and Data Structures using Python](http://www.openbookproject.net/books/pythonds/)

---

## 🎓 Courses

- [100 Days Of Code in Python Course](https://training.talkpython.fm/courses/explore_100days_in_python/100-days-of-code-in-python)
- [100 Days of DSA in Python Code](https://www.linkedin.com/pulse/100-days-dsa-python-code-comprehensive-guide-kumar-vishwakarma-bvnsc/)
- [Python and Django Full Stack Web Developer Bootcamp](https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/)
- [The Complete Python 3 Course: Beginner to Advanced!](https://www.udemy.com/course/python-complete/)
- [2022 Complete Python Bootcamp From Zero to Hero in Python]
- [100 Days of Code: The Complete Python Pro Bootcamp for 2022]

---

## 💡 Projects & Ideas

- [57 Fun (and Unique) Python Project Ideas](https://www.dataquest.io/blog/python-projects-for-beginners/)
- [Python projects you can build](https://realpython.com/tutorials/projects/)
- [Python Projects](https://www.geeksforgeeks.org/python-projects-beginner-to-advanced/)
- [Ideas for Python Projects](http://pythonpracticeprojects.com/)
- [Python Project Beginner](https://github.com/topics/python-project-beginner)
- [Top 30 github python projects](https://towardsdatascience.com/top-30-github-python-projects-at-the-beginning-of-2022-86b1e3dad1a)

---

## 📝 Interview Prep

- Cracking the Coding Interview
- Elements of Programming Interview in Python

---

## 🐞 Common Issues & Troubleshooting

- **pip not found:**  
  Make sure Python and pip are added to your PATH.
- **ModuleNotFoundError:**  
  Check if the package is installed in the correct environment.
- **Permission denied:**  
  Use `pip install --user <package>` or run with `sudo` if needed.
- **Version conflicts:**  
  Use virtual environments to isolate dependencies.
- **Python 2 vs 3:**  
  Always use `python3` and `pip3` for modern projects.

---

## 🧰 Useful Tools

- [Memray](https://github.com/bloomberg/memray) - Python memory profiler
- [Awesome Python](https://github.com/vinta/awesome-python)
- [What Can I Do With Python?](https://realpython.com/what-can-i-do-with-python/#python-in-the-real-world)
- [Data Structures and Algorithms in Python](https://jovian.ai/learn/data-structures-and-algorithms-in-python)
- [Official Style Guide for Python (PEP8)](https://peps.python.org/pep-0008/)
- [30 Python Language Features and Tricks](https://sahandsaba.com/thirty-python-language-features-and-tricks-you-may-not-know.html)

---

## 📝 Notes

- Python is cross-platform and runs on Windows, macOS, and Linux.
- Use virtual environments for each project to avoid dependency conflicts.
- The Python community is large and supportive—use forums, Stack Overflow, and GitHub for help.

---
