---
lang: C++
syntax: cpp
title: C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications.
author: Panquesito7
---

```cpp
#include <iostream>

int main(){
    std::cout << "Hello world!\n";
    return 0;
}
```

## ❓ What is C++?

C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, it has since expanded significantly over time; modern C++ currently has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM.

## 🤔 Why to use C++?

- Easy to learn and use.
- Many available resources and tutorials.
- Runs very fast and works on the most common OSes such as [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), [macOS](https://en.wikipedia.org/wiki/MacOS), and [Linux](https://en.wikipedia.org/wiki/GNU/Linux).
- Well-established in the market and used by large companies.
- Used to create desktop apps, 3D videogames, cloud, mobile apps, and more.
- Object-Oriented Programming (OOP).
- Gives you a basic programming knowledge if it's your first language. It'll make it easier for you to learn more languages in the future.

## ⚙️ Setting up C++ development environment

### 🐧 GNU/Linux

The G++ compiler needs to be installed in the system in order to compile C++ programs (Bash only). It usually comes installed in Linux systems.\
To verify if you have G++ installed or not, run `g++ --version` in the command line. A similar output to the below should be displayed.

```bash
g++ (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

If you don't have G++ installed, run the following commands.

_Updates and fetches all package databases._

```bash
sudo apt-get update
```

_Installs the latest G++ version._

```bash
sudo apt-get install g++
```

```bash
sudo apt-get install build-essential
```

You can now compile and run C++ programs directly via Bash.\
If you have any C++ file, you can run the following command to compile and run the program:

```bash
g++ -o <filename> <compiled-filename> && ./<compiled-filename>
```

You can take the "Hello World" program mentioned at the beginning of this file as a sample file.

> **Note:**
>
> If you update your C++ file, it will need to be re-compiled.

### 🏠 Microsoft Windows

G++ does not come preinstalled in Microsoft Windows systems. However, this can be used with the [MinGW](https://osdn.net/projects/mingw/) compiler.\
Download the file from the official website, run the setup, and configure it to your needs. You can also check [this page](https://www.geeksforgeeks.org/installing-mingw-tools-for-c-c-and-changing-environment-variable/) for full MinGW setup.

> **Note:**
>
> You'll need to change the environment variable/Windows PATH if you want the commands to run in any command line.\
> You can check [this tutorial](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html) for how to properly change the PATH (`windir\MinGW\bin` needs to be added, whereas `windir` is your system disk, such as `C:`). It may vary from your Windows build/version. **Please be very careful as you could damage your Windows installation.**

Once MinGW is fully installed and added to the Windows PATH, you can try and run the following command to compile and run a C++ program.

```bash
g++ -o <filename> <compiler-filename> && ./<compiled-filename>
```

You can take the "Hello World" program mentioned at the beginning of this file as a sample file.

> **Note:**
>
> If you update your C++ file, it will need to be re-compiled.

### 🍎 Apple macOS

The G++ compiler does not come preinstalled in macOS systems. It needs to manually be installed.\
One way of installing this is using the [Homebrew](https://brew.sh/index) package manager.

You can check [Homebrew's official tutorial](https://docs.brew.sh/Installation) in order to install Homebrew in your system.\
Once you've successfully installed Homebrew, run the following comamnd to install the GCC/G++ compiler in your system.

_Try using `homebrew` if `brew` does not work._

```bash
brew install gcc --force-bottle
```

Once GCC/G++ is successfully installed, you can run the following command to compile and run a C++ program in your system.

```bash
g++ -o <filename> <compiler-filename> && ./<compiled-filename>
```

You can take the "Hello World" program mentioned at the beginning of this file as a sample file.

> **Note:**
>
> If you update your C++ file, it will need to be re-compiled.

## ✏️ Popular C++ IDEs/Editors

- [Microsoft Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft Visual Studio](https://visualstudio.microsoft.com/) (Windows/macOS only)
- [Dev-C++](https://www.bloodshed.net/) (Windows only)
- [Code:: Blocks](https://www.codeblocks.org/)

## 🚀 Some cool projects in C++

- [TheAlgorithms/C-Plus-Plus](https://github.com/TheAlgorithms/C-Plus-Plus)
- [Memory Game](https://github.com/Panquesito7/memory-game) (Windows Forms)
- [Tic Tac Toe](https://github.com/Panquesito7/tic-tac-toe) (Windows Forms)
- [Top C++ Open Source Projects](https://github.com/trending/cpp)
- [Godot Engine](https://github.com/godotengine/godot)
- [Minetest](https://github.com/minetest/minetest)

## 🤗 Conclusion

C++ is one of the most powerful and easy-to-learn programming language. It can be used to build videogames, (mobile) apps, algorithms, and so much more. You should consider learning C++: it is an excellent and fast language and it'll help you boost your knowledge in so many ways.

**Thank you for reading!** 🎉
