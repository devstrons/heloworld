---
lang: Haskell
syntax: haskell
title: An advanced, purely functional programming language
author: Ibrahim Raimi
---

```haskell
module Main (main) where          -- not needed in interpreter, is the default in a module file

main :: IO ()                     -- the compiler can infer this type definition
main = putStrLn "Hello, World!"
```

## 📚 What is Haskell?

Haskell is a general-purpose, statically-typed, purely functional programming language with type inference and lazy evaluation. Designed for teaching, research and industrial application, Haskell has pioneered a number of programming language features such as type classes, which enable type-safe operator overloading. Haskell's main implementation is the Glasgow Haskell Compiler (GHC). It is named after logician Haskell Curry.

Haskell's semantics are historically based on those of the Miranda programming language, which served to focus the efforts of the initial Haskell working group. The last formal specification of the language was made in July 2010, while the development of GHC has expanded Haskell via language extensions. The next formal specification was planned for 2020. On 29 October 2021 GHC2021 was released in GHC version 9.2.1.

Haskell is used in academia and industry. As of May 2021, Haskell was the 28th most popular programming language by Google searches for tutorials, and made up less than 1% of active users on the GitHub source code repository.

## 🤔 Why to use Haskell?

- Statically typed
  - Every expression in Haskell has a type which is determined at compile time. All the types composed together by function application have to match up. If they don't, the program will be rejected by the compiler. Types become not only a form of guarantee, but a language for expressing the construction of programs.

- Purely functional
  - Every function in Haskell is a function in the mathematical sense (i.e., "pure"). Even side-effecting IO operations are but a description of what to do, produced by pure code. There are no statements or instructions, only expressions which cannot mutate variables (local or global) nor access state like time or random numbers.

- Type inference
  - You don't have to explicitly write out every type in a Haskell program. Types will be inferred by unifying every type bidirectionally. However, you can write out types if you choose, or ask the compiler to write them for you for handy documentation.

- Concurrent
  - Haskell lends itself well to concurrent programming due to its explicit handling of effects. Its flagship compiler, GHC, comes with a high-performance parallel garbage collector and light-weight concurrency library containing a number of useful concurrency primitives and abstractions.

- Lazy
  - Functions don't evaluate their arguments. This means that programs can compose together very well, with the ability to write control constructs (such as if/else) just by writing normal functions. The purity of Haskell code makes it easy to fuse chains of functions together, allowing for performance benefits.

- Packages
  - Open source contribution to Haskell is very active with a wide range of packages available on the public package servers.

## 🧐 Notable Haskell applications

- [Xmonad](https://xmonad.org/) is a window manager for the X Window System, written fully in Haskell

- [Git-annex](https://git-annex.branchable.com/) Git-annex is a tool to manage (big) data files under Git version control. It also provides a distributed file synchronization system (git-annex assistant).

- [Linspire](https://www.linspirelinux.com/) Linux chose Haskell for system tools development.

- [Facebook](https://en.wikipedia.org/wiki/Facebook) implements its anti-spam programs in Haskell, maintaining the underlying data access library as open-source software.

- [Cryptol](https://www.cryptol.net/), a language and toolchain for developing and verifying cryptography algorithms, is implemented in Haskell.

- [GitHub](https://github.com/) implemented Semantic, an open-source library for analysis, diffing, and interpretation of untrusted source code, in Haskell.

## ⚙️ Setting up Haskell development environment

To install Haskell, follow the instructions below 👇

## Downloads

This instructions describes the installation of the Haskell toolchain, which consists of the following tools:

- [GHC](https://www.haskell.org/ghc/): the Glasgow Haskell Compiler

- [cabal-install](https://cabal.readthedocs.io/en/3.6/): the Cabal installation tool for managing Haskell software

- [stack](https://docs.haskellstack.org/en/stable/README/): a cross-platform program for developing Haskell projects

- [haskell-language-server](https://github.com/haskell/haskell-language-server) (optional): A language server for developers to integrate with their editor/IDE

## Installation instructions

for Linux, macOS, FreeBSD, Windows or WSL2

- Install GHC, cabal-install and haskell-language-server via [GHCup](https://www.haskell.org/ghcup/)
- To install stack, follow the instructions [here](https://docs.haskellstack.org/en/stable/install_and_upgrade/) (N.B. stack does not support FreeBSD)

## 🤗 Thanks for Reading
