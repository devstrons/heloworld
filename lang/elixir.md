---
lang: Elixir
syntax: elixir
title: Elixir is a dynamic, functional language for building scalable and maintainable applications.
author: Yashvardhan
---

```elixir
IO.puts("Hello, World!")
```

## 🤔 What is Elixir?

Elixir is a functional, dynamically typed, concurrent general purpose programming language created by
*José Valim*. It is built on the top of Erlang virtual machine which is known for running low latency,
distributed and fault-tolerant systems. Elixir compiles down to Erlang's bytecode. Since its release in
2011, it has become one of the most loved languages, because Elixir applications are scalable , very reliable,
and syntax is also nice.

## 🤷‍♂️ Why to use Elixir?

* **Scalability** - Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages.  Isolation allows processes to be garbage collected independently, reducing system-wide pauses, and using all machine resources as efficiently as possible (vertical scaling).

* **Fault-Tolerance** - To cope with failures, Elixir provides supervisors which describe how to restart parts of your system when things go bad. The combination of fault-tolerance and event-driven programming via message passing makes Elixir an excellent choice for reactive programming and robust architectures.

* **Functional** - Functional programming promotes a coding style that helps developers write code that is short, concise, and maintainable. In Elixir immutable data structures help concurrency quite a lot, and pattern matching is great for writing declarative code.

* **Dynamic Typing** - Dynamic typing means that types are checked in run-time, not during compilation. This increases the development speed for simple web and mobile applications. In Elixir, static types can be introduced in Elixir through typespecs.

## ⚙ Setting up Elixir development environment

### 🔨 Tools you will need

For setting up an environment for performing Elixir codes, you need a machine with minimum of 2 GB of RAM.\
You will also need the following softwares:

* Linux, macOS, or Windows XP/7/8/10 operating system
* Erlang
* Text Editors like Sublime Text, VS Code, Atom

#### **On MacOS**

* Using Homebrew

```console
foo@bar~$ brew install elixir
```

* Using Macports

```console
foo@bar~$ sudo port install elixir
```

#### **On Linux**

* Arch Linux

```console
foo@bar~$ pacman -S elixir
```

* Debian or Ubuntu

```console
foo@bar~$ wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && sudo dpkg -i erlang-solutions_2.0_all.deb
foo@bar~$ sudo apt-get update
foo@bar~$ sudo apt-get install esl-erlang
foo@bar~$ sudo apt-get install elixir
```

* Fedora

```console
foo@bar~$ yum install elixir
```

#### **On Windows**

* Using Chocolatey

```console
foo@bar~$ cinst elixir
```

Or you can donwload the installer from [here](https://github.com/elixir-lang/elixir-windows-setup/releases/download/v2.1/elixir-websetup.exe) and just simply follow the instruction.

#### **On Raspberry Pi**

```console
foo@bar~$ echo "deb https://packages.erlang-solutions.com/debian buster contrib" | sudo tee /etc/apt/sources.list.d/erlang-solutions.list
foo@bar~$ wget https://packages.erlang-solutions.com/debian/erlang_solutions.asc
foo@bar~$ sudo apt-key add erlang_solutions.asc
foo@bar~$ sudo apt update
foo@bar~$ sudo apt install elixir
```

#### **Using Docker**

```console
foo@bar~$ docker run -it --rm elixir bash
```

## 🚩 Some cool projects in Elixir

* [**Phoenix Framework**](https://github.com/phoenixframework/phoenix)
* [**Plausible Analytics**](https://github.com/plausible-insights/plausible)
* [**Papercups**](https://papercups.io/)
* [**Bamboo**](https://github.com/thoughtbot/bamboo)
* [**Teslamate**](https://github.com/adriankumpf/teslamate)

## 🏢 Companies using Elixir

### **WhatsApp**

WhatsApp provides messaging services to more than 1 billion people around the world, and they do all this having a really small team

### **Adobe**

Adobe used Elixir in production to create a client/cloud app for a collaborative photography workflow.

### **Discord**

Instant messaging app for video, voice calls and text chats chose Elixir to build a large-scale messaging system with over 5 million concurrent users.

## Conclusion

If want to build a robust, fault-tolerant scalable project with a small team then Elixir is the best weapon for you.

## 🤗 Thanks For Reading
