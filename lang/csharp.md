---
lang: C#
syntax: cs
title: C# can be used to create almost anything but is particularly strong at building Windows desktop applications and games.
author: hey-mikey
---

```cs
public class HelloWorld {
    public static void Main(string[] args) {
        Console.WriteLine("Hello, World!"); 
        Console.ReadLine(); 
    }
}
```

## 🤔 What is C#?

 - C# is a language developed by Microsoft in 2000 to address the growing interest in web applications. It was written by Anders
   Hejlsberg, who also worked on Turbo Pascal and Delphi.
 - It's useful for desktop applications as well as mobile and cross-platform applications, too.
 - With the Unity game engine, developers can also create games with C#

## 📈 Why to use C#?

 - C# is remarkably scalable and easy to maintain.  
 - It's good for beginners, especially beginners with experience with Java or C++ because the code syntax is very similar
 - It's possible to write applications for desktop, web, mobile, games, and cross-platform with C#. Cool stuff!
 - C# is statically-typed and easy to read, and it's object-oriented, another thing it has in common with Java.
 - [According to a 2020 StackOverflow study](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved), C# is an in-demand skill and among the top ten languages used.

## 🛠️ Setting up C# development environment

### 💻 To use on Linux or macOS

To start building .NET apps, download and install the [.NET SDK (Software Development Kit)](https://download.visualstudio.microsoft.com/download/pr/8a504918-9508-464d-80c6-4da7f9cc9ac6/f9d6ad00bbd798bafb549101b5b4a4c0/dotnet-sdk-5.0.402-win-x64.exe)

Once you've installed, open a new command prompt and run the following command:
```sh
dotnet
```
If you receive a 'dotnet is not recognized as an internal or external command' error, make sure you opened a new command prompt. 

In the command prompt again, write
```sh
dotnet new console -o myApp
```
then navigate to that directory
```sh
cd myApp
```
The main file in the myApp folder is Program.cs. By default it's already written to print "Hello World!" to the Console.

### 📎 Using it on Windows

1. Download and install the free version of [Visual Studio](https://visualstudio.microsoft.com/downloads).
2. Open Visual Studio, and choose "Create a new project" in the Start window. 
3. Choose `C#` from the Language list.
4. Choose `Windows` from the platform list.
5. Choose `Console` from the project types list.
6. Once your new project loads, you can add `.cs` files or edit the existing automatically-included `.cs` file.

## ✏️ Popular C# IDEs/Editors

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Visual Studio](https://visualstudio.microsoft.com/downloads)
- [JetBrains Rider](https://www.jetbrains.com/rider)

## 🆒 Some cool projects in C#

- [The Roslyn .NET compiler](https://github.com/dotnet/roslyn)
- [Google's Material Design for C#](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit)
- [TheAlgorithms/C#](https://github.com/TheAlgorithms/C-Sharp)

## 🚀 Conclusion

C# is a very flexible and beginner-friendly language, and it's used in a multitude of contexts from the web to desktop to mobile gaming. It's not difficult to get started with C#, and it will allow you to create a wide variety of projects and applications. Sky's the limit!

**Thanks for reading ✨**
