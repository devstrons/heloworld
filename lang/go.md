---
lang: Go
syntax: go
title: Introduction to the Go Programming Language | Go Explained
author: krishguptadev
---

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

## 📚 What is go?

go is a statically typed, compiled programming language with a similar syntax to C but with garbage collection, memory safety, CSP-style  concurrency and structural typing. It is a tool for building simple and reliable software, and it is used by Google, Facebook, Instagram, Netflix, Pinterest, and many other companies. 

## 🤔 Why to use Go?

Go is a great language for building software. It is a statically typed language, which means you can't mix types in the same program. It is a compiled language, which means it can run faster than other languages. It is an object oriented language, which means you can build programs that are easy to read and maintain, and it is easy to extend.

## 🧐 What is Go currently used for?

Go is used in various projects, including:

- [Google App Engine](https://cloud.google.com/appengine/docs/go/): Google's open source platform for building scalable, high-performance web applications  

- [Uber](https://www.uber.com/): Uber uses Go to build its software, including its mobile apps, web apps, and APIs

- [BBC](https://www.bbc.co.uk/): BBC developed thier own Social media crawlers and scarpers written in Go for an internal analytics product.

- [SoundCloud](https://soundcloud.com/): SoundCloud uses Go to build their music streaming service

- [Twitch](https://www.twitch.tv/): Twitch uses Go for communication between backend servers

## 🏁 Starting with Go development

To install Go, you can use the [Go installer](https://golang.org/doc/install/source#installer).

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

- [The go documentation](https://golang.org/doc/): The official documentation for Go.
- [The go playground](https://play.golang.org/): A playground for Go.
- [The go tutorial](https://tour.golang.org/): A tutorial for Go.
- [The go standard library](https://golang.org/doc/): The official Go standard library.

### 🛠️ Tooling around Go

- [Go lint](https://golang.org/cmd/golint): A linter for Go source code.
- [depth](https://github.com/KyleBanks/depth): Visualize dependency trees of any package by analyzing imports.
- [go-james](https://github.com/pieterclaerhout/go-james): Go project skeleton creator, builds and tests your projects without the manual setup.

**For Support, feel free to hop in** [**The Gophers discord's server**](https://discord.com/invite/golang).

## 😎 Some cool projects in Go

- [Uber](https://www.uber.com/): Golang ridesharing app

- [Badoo](https://badoo.com/): Golang dating app

- [SoundCloud](https://soundcloud.com/): Golang music streaming service

- [Allegro](https://allegro.pl/): Golang e-commerce platform

## ✨ Conclusion

Go is a really widely-used language in the industry, so getting a good grasp of its usage is a great way to advance your knowledge and career!

## 🤗 Thanks for Reading!
