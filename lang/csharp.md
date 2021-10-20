---
lang: C#
syntax: cs
title: C# is a multi-paradigm general-purpose programming language designed by Anders Hejlsberg from Microsoft in 200.
author: hey-mikey
---

```cs
public class HelloWorld {
    public static void Main(string[] args) {
        Console.WriteLine("Hello, World!"); 
        /* this keeps the console open instead of 
         * printing the line and immediately closing. 
         */
        Console.ReadLine(); 
    }
}
```

## What is C#?
C# is a language developed by Microsoft in 2000, at the time to address the growing interest in web applications. 
It's useful for desktop applications as well as mobile and cross-platform applications, too.

## Why to use C#?
C# is remarkably scalable and easy to maintain. 
It's also good for beginniners. 
It has reusable components, the code syntax looks similar to Java and C++
(so developers with experience in either language should find C# familiar), and the data-types are flexible.

## Setting up C# development environment
To use on Linux or macOS:
To start building .NET apps, download and install the .NET SDK (Software Development Kit).
https://download.visualstudio.microsoft.com/download/pr/8a504918-9508-464d-80c6-4da7f9cc9ac6/f9d6ad00bbd798bafb549101b5b4a4c0/dotnet-sdk-5.0.402-win-x64.exe

Once you've installed, open a new command prompt and run the following command:

dotnet

If you receive a 'dotnet' is not recognized as an internal or external command error, make sure you opened a new command prompt. 

In the command prompt again, write
dotnet new console -o myApp

then navigate to that directory
cd myApp

The main file in the myApp folder is Program.cs. By default it's already written to print "Hello World!" to the Console.

To use on Windows:

Download and install the free version of Visual Studio from https://visualstudio.microsoft.com/downloads/

Open Visual Studio, and choose "Create a new project" in the Start window. 
Choose C# from the Language list.
Choose Windows from the platform list.
Choose Console from the project types list.
Once your new project loads, you can add .cs files or edit the existing automatically-included .cs file.

## Popular C# IDEs/Editors
VSCode
Visual Studio
JetBrains Rider

## Some cool projects in C#
The Roslyn .NET compiler (https://github.com/dotnet/roslyn)
Google's Material Design for C# (https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit)

## Conclusion
C# is a very flexible and beginner-friendly language, and it's used in a multitude of contexts from web to Desktop to mobile gaming.