# Hello World

A repository that includes Hello World from popular languages added by our community

# How can I add a language to the list?

1. Fork the repository, and create a branch named `<language_to_add>`. In this example, we're adding **Java** to the list.
2. Create a file in the `lang` folder with the name of the language you want to add (e.g.: `java.md`).
3. Add this content to your newly created file. Add your GitHub username in the `author` field. Just remove the `\` in the code backtick.

```markdown
---
lang: Java
syntax: java
title: Java is so cool!
author: DEVSTRONS
---

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
\```

# Java is so cool!
```

4. Submit a pull request with the content:

```markdown
- Added the Java language to the list.
```

5. That's it! Now you should wait until the maintainers merge your pull request.

## License

This project is licensed under the [MIT](https://github.com/devstrons/hello-world/blob/main/LICENSE.md) license.
