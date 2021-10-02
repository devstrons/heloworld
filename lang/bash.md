---
lang: Bash
syntax: bash
title: De-facto shell lang
author: tusqasi
---

```bash
echo Hello world
```

## What is bash?
Bash is a command interpreter, like the python interpreter, but with functions
related to system operation. Bash typically runs in a text window where the user types commands that cause actions. Bash can also read and execute commands from a file, called a shell script. Like most Unix shells, it supports filename globbing (wildcard matching), piping, here documents, command substitution, variables, and control structures for condition-testing and iteration. The keywords, syntax, dynamically scoped variables and other basic features of the language are all copied from sh. Other features, e.g., history, are copied from csh and ksh. Bash is a POSIX-compliant shell, but with a number of extensions.

The shell's name is an acronym for Bourne Again Shell, a pun on the name of the Bourne shell that it replaces and the notion of being "born again".


## Why use bash?
When you have to automate a build task for a project you can
write a simple bash script to do it for you. This saved time
for you.  

It is present in almost all linux servers and computer, and macos computers.  
It can be accessed in windows by using git-bash or by installing a sub-system for windows, commonly called as "Windows subsystem for Linux"  

You are not limited to doing devops operations with bash. You can automate things on your computer!
Like:  
- Create a backup and upload to a off-site backup location
- Customize application behavior.
- Doing complex text processing with tools like `awk`, `sed`, `ed`
- Findin files and text in files with `find`, `grep`  
  
I have a function made with bash which lets me search and play youtube videos in vlc media player!

## Setting up bash development environment
Windows:  
This an official [guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to go you started with `wsl`, Windows subsystem for Linux

Linux/macos/bsd:  
It is already there in every system, if not, install with following commands.

Macos
```md
brew install bash
```

Debian/Ubuntun  
```md
sudo apt install bash
```

Arch  
```md
sudo pacman -Syu bash
```

## Some Cool projects in bash
Here is a non-exhaustive list of cool projects made with bash:
[todo.sh](https://github.com/todotxt/todo.txt-cli) a simple todo tracker  
[bocker](https://github.com/p8952/bocker) Docker written in 100 lines of bash  
[mkdkr](https://github.com/rosineygp/mkdkr) mkdkr = Makefile + Docker  
## Conclusion  
In the end bash is an excellent tool for getting mundane, repetitive tasks, long running tasks with ease. Even after the introduction of orchestration and CI/CD tooling like kubernetes, Bash still exists. Giving a clue to how useful is the old but gold tool 
