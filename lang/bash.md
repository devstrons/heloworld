---
lang: Bash
syntax: bash
title: De-facto shell language
author: tusqasi
---

```bash
echo Hello world
```

## 📚 What is Bash?

bash is a command interpreter, like the python interpreter, but with functions
related to system operation. bash typically runs in a text window where the user types command that cause actions. bash can also read and execute commands from a file, called a shell script. Like most Unix shells, it supports filename globbing (wildcard matching), piping, here documents, command substitution, variables, and control structures for condition-testing and iteration. The keywords, syntax, dynamically scoped variables, and other basic features of the language are all copied from sh. Other features, e.g., history, are copied from csh and ksh. bash is a POSIX-compliant shell, but with a number of extensions. The shell's name is an acronym for Bourne Again Shell, a pun on the name of the Bourne shell that it replaces and the notion of being "born again".

## 🤔 Why use Bash?

When you have to automate a build task for a project you can
write a simple bash script to do it for you. This saved time
for you. 
It is present in almost all linux servers and computer, and macos computers.  
It can be accessed in windows by using git-bash or by installing a sub-system for windows, commonly called as "Windows subsystem for Linux"   

You are not limited to doing DevOps operations with bash.\
You can automate things on your computer!

You can do some of the following stuff:

- Create a backup and upload to a off-site backup location 
- Customize application behavior.    
- Doing complex text processing with tools like `awk`, `sed`, `ed` 
- Find files and text in files with `find`, `grep`  
  
### 📝 Things needed to get started with Bash   

You can use any text editor to write bash scripts.    

You should know your way around these programs:

- vim, nano (editing files)  
- grep, find (find files, and text in files)  
- cat, echo (printing files and text to screen)  

I recommend learning these programs because when you are writing Bash scripts you will need to use these often, and you might not have access to GUI programs like VSCode. Having a working knowledge of the above tools is a plus in itself.  

## 🛠️ Setting up Bash development environment

Windows 🪟:  
This is an official [guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to go you started with `wsl`: Windows subsystem for Linux

Follow along for a overview of the process

Run these commands in PowerShell:

1. Enable the Windows Subsystem for Linux:  

    ```powershell
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart  
    ```

2. Enable Virtual Machine feature:  

    ```powershell
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart  
    ```

3. Download and Install this update:  

    Download this [WSL 2 Update](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) and install to update wsl to version 2

4. Set WSL 2 as your default version:  

    ```powershell
    wsl --set-default-version 2  
    ```

5. Install Ubuntu from microsoft store:  

    Go get [Ubuntu](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q) from the microsoft store.
   

6. Set up password  

    The first time you launch a newly installed Linux distribution, a console window will open and you'll be asked to wait for a minute or two for files to de-compress and be stored on your PC. All future launches should take less than a second.

    You will then need to create a user account and password for your new Linux distribution.

🍎 macOS

```sh
brew install bash
```

🐧 Debian/Ubuntu

```sh
sudo apt install bash
```

🐧 Arch 

```sh
sudo pacman -Syu bash
```
### 🏃‍♂️ Bash scripts  

Put this script in a file named `test.sh`  

```sh
#!/bin/bash
echo 'Hello World!'
```

And make it executable  

```sh
chmod +x ./test.sh
```

Now run that file with

```sh
$ ./test.sh
Hello World!
```

## 😎 Some Cool projects in bash

Here is a non-exhaustive list of cool projects made with bash:

- [**todo.sh**](https://github.com/todotxt/todo.txt-cli)  A simple todo tracker  
- [**bocker**](https://github.com/p8952/bocker)  Docker written in 100 lines of bash  
- [**mkdkr**](https://github.com/rosineygp/mkdkr)  mkdkr = Makefile + Docker  
- [**nvm**](https://github.com/nvm-sh/nvm) A version manager for node.js
- [**neofetch**](https://github.com/dylanaraps/neofetch) A command-line system information tool written in bash
- [**bash-it**](https://github.com/Bash-it/bash-it) A collection of community bash commands and scripts for bash

## 📑 Conclusion  

In the end, bash is an excellent tool for getting mundane, repetitive tasks, and long-running tasks with ease. Even after the introduction of orchestration and CI/CD tooling like Kubernetes, bash still exists. Giving a clue to how useful is the old but gold tool.

## Resources

- [Learn about various commands](https://linuxjourney.com/)
- [Basic syntax and concepts](https://guide.bash.academy/)
- [Quick lookup page](https://learnxinyminutes.com/docs/bash/)
- [A cheat sheet](https://devhints.io/bash)

<br/>

**Thanks for Reading!** ✨
