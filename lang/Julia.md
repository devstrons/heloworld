---
lang: Julia
syntax: julia
title: Julia is a high-level, high-performance, dynamic programming language.
author: Shivansh Yadav
---
```julia
println("Hello World!")
```
---

## 🤔 What is Julia

Julia is a new, general-purpose, high-performance programming language with the tagline **"Looks like Python, feels like Lisp, runs like Fortran”**. It is easy to use, powerful, and extremely performant.

---
## 📈 Why to use Julia

- When using Python and other languages in production and environments it becomes a sort of a burden and a limitation. While Julia is computationally efficient and easy to use for developers.

- Syntactically Julia is quite similar to python so if you write code that does very similar stuff to what it does in python, it does faster in Julia.

- You can also embed all Python, C/C++, and Java code directly inside Julia, run that code and interact with output using Julia.

**In Short**

- Open-source
- Interoperability
- Reproducible
- Build to be fast
- Well suited for data-intensive problems
- Familiar Syntax
- Dynamic and composable

---

## 🛠️ Setting up Julia development environment

### 💻 On Windows & Mac

#### Step 1

> Install Julia 

- Download Julia from the official [Julia website](https://julialang.org/downloads/).

#### Step 2

> Using VSCode

- Install the Julia Extension.

- Create an example file `index.jl` and start using Julia.

- Write your code and type `julia index.jl` in the terminal to get the output.

### 🐧 On Linux

- Open a new terminal and go to your Downloads folder:

```bash
cd ~/Downloads
```

- Use `wget` to retrieve the latest compressed [Julia Linux Binaries](https://julialang.org/downloads/):

```bash
wget https://julialang-s3.julialang.org/bin/linux/x64/1.7/julia-1.7.0-linux-x86_64.tar.gz
```

- Extract the `.tar.gz`:

```bash
tar -xvzf julia-1.7.0-linux-x86_64.tar.gz
```

- Copy the extracted folder to [`/opt`](https://askubuntu.com/a/34922/292615):

```bash
sudo cp -r julia-1.7.0 /opt/
```

- Finally, create a symbolic link to `julia` inside the `/usr/local/bin` folder:

```bash
sudo ln -s /opt/julia-1.7.0/bin/julia /usr/local/bin/julia
```

- Install the Julia Extension on VSCode.

- Create an example file index.jl and start using Julia.

- Write your code and type `julia index.jl` in the terminal to get the output.

---

## ✏️ Popular Julia IDEs/Editors

- [Juno](https://junolab.org/) is the most popular IDE for the Julia language. Development focus of Juno has shifted to the [Julia extension for VSCode](https://www.julia-vscode.org/).
- [Visual Studio Code](https://code.visualstudio.com/download)

----

## 😎 Some cool projects in Julia

- [CliMA](https://clima.caltech.edu/) - Climate Modeling Alliance.
- Julia is also excelling in the pharmaceutical modeling space.
- Lots of drug discovery is also happening using Julia fundamentally.
- [Pumas-AI](https://pumas.ai/) developed a revolutionary platform for model based drug development which utilizes the powerful Julia programming language.

---

## 🚀 Conclusion

If you are someone who is very interested in the climate space or the medical space then you should go for Julia.

**Thanks for reading** ✨
