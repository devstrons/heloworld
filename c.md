---
    lang : C
    syntax : C
    title: C is a general purpose computer programming language
    author: AaquibAli 
---

  ```C 
       #include <stdio.h>
       int main() {
         //printf() displays the string inside quotation
           printf("Hello, World!");
           return 0;
      }
  ```
   
    
# What is C?

**C** is a general-purpose programming language that is extremely popular, simple, and flexible to use.  It was first introduced in **1972** by **Dennis Ritchie**. It is a structured programming language that is machine-independent and extensively used to write various applications, Operating Systems like Windows, and many other complex programs like Oracle database, Git, Python interpreter, and more.

# History of C language :

The base or father of programming languages is ‘ALGOL.’ It was first introduced in 1960. ‘ALGOL’ was used on a large basis in European countries. ‘ALGOL’ introduced the concept of structured programming to the developer community. In 1967, a new computer programming language was announced called as ‘BCPL’ which stands for Basic Combined Programming Language. BCPL was designed and developed by Martin Richards, especially for writing system software. This was the era of programming languages. Just after three years, in 1970 a new programming language called ‘B’ was introduced by Ken Thompson that contained multiple features of ‘BCPL.’ This programming language was created using UNIX operating system at AT&T and Bell Laboratories. Both the ‘BCPL’ and ‘B’ were system programming languages.

In 1972, a great computer scientist [Dennis Ritchie](https://en.wikipedia.org/wiki/Dennis_Ritchie/) created a new programming language called ‘C’ at the Bell Laboratories. It was created from ‘ALGOL’, ‘BCPL’ and ‘B’ programming languages. ‘C’ programming language contains all the features of these languages and many more additional concepts that make it unique from other languages.

# Why learn C Language?

As we studied earlier, ‘C’ is a base language for many programming languages. So, learning ‘C’ as the main language will play an important role while studying other programming languages. It shares the same concepts such as data types, operators, control statements and many more. ‘C’ can be used widely in various applications. It is a simple language and provides faster execution. There are many jobs available for a ‘C’ developer in the current market.

# Why to use c?

 
- ‘C’ language is widely used in embedded systems.

- It is used for developing system applications.
 
- It is widely used for developing desktop applications.
 
- Most of the applications by Adobe are developed using ‘C’ programming language.
 
- It is used for developing browsers and their extensions. Google’s Chromium is built using ‘C’ programming language.
 
- It is used to develop databases. MySQL is the most popular database software which is built using ‘C’.

- It is used in developing an operating system. Operating systems such as Apple’s OS X, Microsoft’s Windows, and Symbian are developed using ‘C’ language. It is used for      developing desktop as well as mobile phone’s operating system.

- It is used for compiler production.

- It is widely used in IOT applications.

## Setting up C development environment :
If you want to set up your environment for C programming language, you need the following two software tools available on your computer :
- Text Editor 
- The C Compiler ([Turbo C](https://turbo-c.apponic.com/), [Dev C](https://sourceforge.net/projects/orwelldevcpp/files/latest/download), [GCC](https://gcc.gnu.org/), [VS Code](https://code.visualstudio.com/), etc.)

## Text Editor :
This will be used to type your program. Examples of few a editors include [Windows Notepad](https://www.microsoft.com/en-us/p/windows-notepad/9msmlrh6lzf3?activetab=pivot:overviewtab),  [OS Edit command](https://www.computerhope.com/edithlp.htm),  [Brief](http://www.briefeditor.com/),  [Epsilon](https://www.lugaru.com/),  [EMACS](https://www.gnu.org/software/emacs/), and [vim or vi](https://www.vim.org/).

The name and version of text editors can vary on different operating systems. For example, Notepad will be used on Windows, and vim or vi can be used on windows as well as on Linux or UNIX.

The files you create with your editor are called the source files and they contain the program source codes. The source files for C programs are typically named with the extension ".c".

Before starting your programming, make sure you have one text editor in place and you have enough experience to write a computer program, save it in a file, compile it and finally execute it.

## The C Compiler :
The source code written in source file is the human readable source for your program. It needs to be "compiled", into machine language so that your CPU can actually execute the program as per the instructions given.

The compiler compiles the source codes into final executable programs. The most frequently used and free available compiler is the GNU C/C++ compiler, otherwise you can have compilers either from HP or Solaris if you have the respective operating systems.

The following section explains how to install GNU C/C++ compiler on various OS. We keep mentioning C/C++ together because GNU gcc compiler works for both C and C++ programming languages.

## Installation on UNIX/Linux :
If you are using Linux or UNIX, then check whether GCC is installed on your system by entering the following command from the command line −

```
   $ gcc -v
```

If you have GNU compiler installed on your machine, then it should print a message as follows −

```
   Using built-in specs.
   Target: i386-redhat-linux
   Configured with: ../configure --prefix=/usr .......
   Thread model: posix
   gcc version 4.1.2 20080704 (Red Hat 4.1.2-46)
```
If GCC is not installed, then you will have to install it yourself using the detailed instructions available at https://gcc.gnu.org/install/.

## Installation on Mac OS :
If you use Mac OS X, the easiest way to obtain GCC is to download the Xcode development environment from Apple's web site and follow the simple installation instructions. Once you have Xcode setup, you will be able to use GNU compiler for C/C++.

Xcode is currently available at https://developer.apple.com/xcode/

## Installation on Windows :
To install GCC on Windows, you need to install MinGW. To install MinGW, go to the MinGW homepage www.mingw.org and ollow the link to the MinGW download page. Download the latest version of the MinGW.

While installing Min GW, at a minimum, you must install gcc-core, gcc-g++, binutils, and the MinGW runtime, but you may wish to install more.

Add the bin subdirectory of your MinGW installation to your **PATH** environment variable, so that you can specify these tools on the command line by their simple names.

After the installation is complete, you will be able to run gcc, g++, ar, ranlib, dlltool, and several other GNU tools from the Windows command line.

# Limitations of C?

- Difficult to debug.

- C allows a lot of freedom in writing code, and that is why you can put an empty line or white space anywhere in the program. And because there is no fixed place    to start or     end the line, so it isn't easy to read and understand the program.

- C compilers can only identify errors and are incapable of handling exceptions (run-time errors).

- C provides no data protection.

- It also doesn't feature the reusability of source code extensively.

- It does not provide strict data type checking (for example, an integer value can be passed for floating datatype).

# Some Cool projects in C :

[Nuke](https://github.com/jithin-renji/Nuke) : Nuke is a program that allows users to wipe out the entire contents of any given drive. Once it clears out the contents, it writes random bytes to ensure complete destruction of data. 

[Mini Voting System](https://github.com/cognitive-ninja/Mini-Voting-System) : With the Mini Voting program, you have a system that allows a small or large group of people to cast their votes while the program keeps track of the count. Mini Voting System is rather flexible in that it lets the user perform an illegal deletion if needed. Every voting process is recorded, based on which the result is declared. 

[Calendar App](https://github.com/ganeshkavhar/Calender-app-in-C-by-ganesh-kavhar) : The Calendar App is another simple project that can be developed using C. It can serve as your on-the-go calendar to perform various functions. 

[Blender](https://github.com/blender/blender) : Blender is a free, cross-platform, open source 3D creation suite that is compatible with Windows, Macintosh and Linux.

[Yara](https://github.com/VirusTotal/yara) : It is a simple program capable of performing powerful and complex tasks. With YARA, you can identify malware and then classify them based on the patterns they display – textual or binary. 

[Redis](https://github.com/redis/redis) :  Redis is an open source, in-memory database that allows you to access mutable data structures simply by entering a series of commands. It allows multiple processes to share an existing data structure and make modifications to it. 

# Thanks for Reading :)

