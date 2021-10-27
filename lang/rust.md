---
lang: Rust
syntax: rs
title: A language empowering everyone to build reliable and efficient software.
author: Ocramoi
---

```rust
fn main() {
    println!("Hello, world!");
}
```

## 🐍 What is Rust?
 
Rust, as defined by Steve Nichols in _"The Rust Programming Language"_ is a programming language that balances high-level ergonomics and low-level control, abstracting resource control just enough so you can have control over low-level details but it won't be a hassle.

Been voted "the most loved programming language" by the Stack Overflow Developer Survey every year since 2016, Rust is multi-paradigm, with compilation and package managing achieved by its own set of tools, _rustc_ and _cargo_, respectively.
 
### 🤔 Why is Rust so beloved nowadays?

Rust had ever since it's inception the objective of allowing the power of C/C++ without the hassle and the risks that come with them. One of the main problems it tried to tackle was the risk of dealing with memory at the level of C++ without resorting to a garbage collector. It achieved this with the concept of **ownership and borrowing**, allowing the usage of pointers as in C/C++ but keeping those in their respective context by default, destroying pointers after exiting their blocks, increasing security and making their management easier, as per the [reference manual][https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html]. These and many other implementation of powerful concepts in a ergonomic way allowed it to be easily adopted in many concepts while increasing the security and readability of them, making Rust a favorite in the programming community.

## 🧐 What is Rust used for?

Today, Rust's development is [sponsored by Mozilla][https://research.mozilla.org/rust/], being adopted in the development of Firefox, its most known product. Rust is also currently being used by other big corporations like [Dropbox and Cloudfare][https://www.rust-lang.org/], with it's adoption in the development of the Linux kernel being [currently discussed][https://www.zdnet.com/article/rust-in-the-linux-kernel-why-it-matters-and-whats-happening-next/].

## Start with Rust development

The best way to install Rust is to use it's management tool `rustup`, which can be installed:
- On Linux, macOS or other Unix-like OS by running `$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` on the terminal
- On Windows or other platforms, check [the manual][https://forge.rust-lang.org/infra/other-installation-methods.html]

`rustup` will also take care of installing the Rust package manager `cargo` and the compiler `rustc`. For more information, check [their Getting Started web page][https://www.rust-lang.org/learn/get-started].
 
### Writing your first 'Hello, world!' program

With Rust installed and configured, create a new file with the `rs` extension in a folder of your choosing, for example `hello_world.rs`, and write to it the code below:
```rust
fn main() {
    println!("Hello, world!");
}
```

Now, in the same folder your code is located, run `rustc hello_world.rs` (consider `hello_world` being your file name, if different). This will create a file called simply `hello_world` in Unix-like systems or `hello_world.exe` on Windows. To run your code, on Unix-like systems run in your terminal `./hello_world` or `.\hello_world.exe` on Windows and you should get `Hello, world!` as your output. Hooray! Your first Rust program is ready.

### Where to go next?
Now that you have the necessary tools installed, you can get to the language's manual by running `rustup docs --book` in your terminal or by accessing [the online manual in your browser][https://doc.rust-lang.org/book/]. Some good books on Rust development are _"Programming Rust: Fast, Safe Systems Development"_ by Jim Blandy and Jason Orendorff and _"The Rust Programming Language"_ by Steve Klabnik Carol Nichols.
 
## ✨ Conclusion 

Rust is a really hot language in the industry right now, so getting a good grasp of it's usage is a great way to advance your career in CompSci or to understand the probable future of systems development!

## 🤗 Thanks for Reading!
