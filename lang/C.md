---
lang: C
syntax: C
title: C language is so cool!
author: shuklaritvik06
---

```C
#include<stdio.h>
int main()
{
    printf("Hello World!");
    return 0;
}
```
## What is C?

C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C programming is considered as the base for other programming languages, that is why it is known as mother language. C language is a system programming language because it can be used to do low-level programming (for example driver and kernel). It is generally used to create hardware devices, OS, drivers, kernels, etc. For example, Linux kernel is written in C. It supports the feature of both low-level and high-level languages.

## Why one should use C?

- Easy to learn
- Structured language
- It produces efficient programs
- It can handle low-level activities
- It can be compiled on a variety of computer platforms

C programming language has fewer libraries in comparison with other high-level languages. So, learning C programming also clears programming concepts to a great extent as you have to write lot of things from scratch. You will not be dependent on the programming language entirely for implementing some basic operations and implementing them on your own will also help to build up your analytical skills. C is extensively used in Embedded Programming. Embedded Programming is also referred to as micro-controller programming, where C program is used to control micro-controllers. Microcontrollers and embedded programming is widely used in auto-motives, Robotics, Hardwares etc.

## Setting up C environment locally

**Step 1:**

You have to download a text editor or an IDE to type your code. Examples include Notepad++,Sublime,vim. An integrated development environment or an IDE is a software application that provides comprehensive facilities to computer programmers for software development. Examples include Visual Studio Code, CLion.

- Sublime - Navigate to [https://www.sublimetext.com/3](https://www.sublimetext.com/3) to download the latest stable version of Sublime according to your OS (Windows/Linux/OSX).
- Visual Studio Code - Navigate to [https://code.visualstudio.com/download](https://code.visualstudio.com/download)  to download the latest stable version of Sublime according to your OS (Windows/Linux/OSX).

**Step 2:**

Install the Compiler according to your OS

#### Linux   

If you are using Linux , then check whether GCC is installed on your system by entering the following command from the command line - `gcc --version`

If you have GNU compiler installed on your machine, then it should print a message as follows:

"gcc (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0 Copyright (C) 2019 Free Software Foundation, Inc. 
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE."

If it is not installed you can install using these commands:

`sudo apt-get install gcc`
`sudo apt-get install build-essential`

#### Windows

Get the latest version of Mingw-w64 via [MSYS2](https://www.msys2.org/), which provides up-to-date native builds of GCC, Mingw-w64, and other helpful C++ tools and libraries. Then follow the instructions on the [MSYS2](https://www.msys2.org/) website to install Mingw-w64.

Add the path to your Mingw-w64 `bin` folder to the Windows `PATH` environment variable by using the following steps:

- In the Windows search bar, type 'settings' to open your Windows Settings.
- Search for Edit environment variables for your account.
- Choose the Path variable and then select Edit.
- Select New and add the Mingw-w64 destination folder path to the system path. The exact path depends on which version of Mingw-w64 you have installed and where you installed it. If you used the settings above to install Mingw-w64, then add this to the path: C:\msys64\mingw64\bin.
- Select OK to save the updated PATH. You will need to reopen any console windows for the new PATH location to be available


**Check your MinGW installation**

To check that your Mingw-w64 tools are correctly installed and available, open a new Command Prompt and type:

- `g++ --version`
- `gdb --version`

If you don't see the expected output or g++ or gdb is not a recognized command, make sure your PATH entry matches the Mingw-w64 binary location where the compilers are located.

#### Mac OS

Navigate to [https://brew.sh/](https://brew.sh/) and install Homebrew package manager on your system. After installing Homebrew, you can use the command `brew install gcc` to install gcc compiler.

**Writing your first hello world program in C:**

Create a new folder. Inside the new folder, right click and create a new file 'helloworld.c'. Write the below code in your new file.

```C
#include<stdio.h>
int main()
{
    printf("Hello World!");
    return 0;
}
```
Change the working directory to where you have your C program. You can do that by using the command ‘cd’, which changes the directory. We need to pass the name of the directory in which the program is stored.

Example: `cd Desktop`

The next step is to compile the program. To do this we need to use the command gcc followed by the name of the program we are going to execute. In our case, we will use 'helloworld.c'. After this, an executable file will be created in the directory that your c file exists in with a '.exe' extension.

In the next step, we can run the program. This is done by simply using the command `./<executable file>` in the terminal . On giving this we will get an output. Here, our helloworld code is executed and we got output for this code.

Output - `Hello World!`

Congratulations! You have successfully setup the C environment.

If you’re looking for some projects in C for contribution, checkout the below projects:

- [Project neovim](https://github.com/neovim/neovim)
- [Project TDengine](https://github.com/taosdata/TDengine)
- [Top Open Source Projects](https://github.com/trending/c)
