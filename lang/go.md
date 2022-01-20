---
lang: GoLang
syntax: go
title: Build simple, reliable, and efficient software with Go!
author: krishguptadev
---

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

## 📚 What is Go?

Go is a statically typed, compiled programming language with a similar syntax to C but with garbage collection, memory safety, CSP-style concurrency, and structural typing. It is a tool for building simple and reliable software, and it is used by Google, Facebook, Instagram, Netflix, Pinterest, and many other companies. 

## 🤔 Why to use Go?

Go is a programming language created by Ken Thompson (the creator of the B programming language), Robert Griesemer and Rob Pike, released in 2009. Go was made to fill out the holes in C and Java google came across while working on distributed systems. It is a great language for building software. It is a statically typed language, which means you can't mix types in the same program. It is a compiled language, which means it can run faster than other languages. It is an object-oriented language, which means you can build programs that are easy to read and maintain, and it is easy to extend. From the start go was built to be readible and powerful at the same time, which means that go programs are easily readible and really powerful. Go is useful for carrying out programming for scalable servers and large software systems.

### 🧐 What is Go currently used for?

Go is used in various projects, including:

- [Google App Engine](https://cloud.google.com/appengine/docs/go/): Google's open source platform for building scalable, high-performance web applications  

- [Uber](https://www.uber.com/): Uber uses Go to build its software, including its mobile apps, web apps, and APIs

- [BBC](https://www.bbc.co.uk/): BBC developed thier own Social media crawlers and scarpers written in Go for an internal analytics product.

- [SoundCloud](https://soundcloud.com/): SoundCloud uses Go to build their music streaming service

- [Twitch](https://www.twitch.tv/): Twitch uses Go for communication between backend servers

## 🏁 Starting with Go development

To install Go, follow the instructions below for your operating system 👇

- Windows: Use the MSI installed, from [this link](https://golang.org/doc/install). 
- Linux, Download archive from [this link](https://golang.org/doc/install) and extract into `/usr/local` (Go file tree will be created at: /usr/local/go) using the command below 👇 
  ```shell
  rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.3.linux-amd64.tar.gz
  export PATH=$PATH:/usr/local/go/bin
  ```
- Mac: Download and run the installed from [the website](https://golang.org/doc/install)

To test your installation, run: `go version`.

**Windows and Mac**: Path will be automatically updated
**On Linux**: Add the following line to the end of your .bashrc: export PATH=$PATH:/usr/local/go/bin

## 👋 Writing your first 'Hello, world!' program

With Go installed and configured, create a folder named `hello_world` and run the following command in that folder:

```shell
go mod init example/hello
```

Now, create a file named `hello.go` in the folder and write to it the code below

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

Run the following command to see the program in action:

```shell
go run .
```

### 🔍 Where to go next?

- [The Go documentation](https://golang.org/doc/): The official documentation for Go.
- [The Go playground](https://play.golang.org/): A playground for Go.
- [The Go tutorial](https://tour.golang.org/): A tutorial for Go.
- [The Go standard library](https://golang.org/doc/): The official Go standard library.

### 🛠️ Tooling around Go

- [Go lint](https://golang.org/cmd/golint): A linter for Go source code.
- [depth](https://github.com/KyleBanks/depth): Visualize dependency trees of any package by analyzing imports.
- [go-james](https://github.com/pieterclaerhout/go-james): Go project skeleton creator, builds and tests your projects without the manual setup.

**For support, feel free to hop in** [**The Gophers Discord's server**](https://discord.com/invite/golang).

### 😎 Some cool projects in Go

- [Uber](https://www.uber.com/): Golang ridesharing app

- [Badoo](https://badoo.com/): Golang dating app

- [SoundCloud](https://soundcloud.com/): Golang music streaming service

- [Allegro](https://allegro.pl/): Golang e-commerce platform

## ✨ Conclusion

Go is a really widely-used language in the industry, so getting a good grasp of its usage is a great way to advance your knowledge and career!

## 🤗 Thanks for Reading!
