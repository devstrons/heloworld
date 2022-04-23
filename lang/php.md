---
lang: PHP
syntax: php
title: PHP is a general-purpose scripting language geared towards web development.
author: irsayvid
---

```php
<?php
echo "Hello World!";
?>
```

## 👩‍💻 What is PHP?

PHP is the acronym for Hypertext Preprocessor. It is a popular opensource server-side scripting language that can be used to develop dynamic and interactive websites. It was among the first server-side languages that could be embedded into HTML, making it easier to add functionality to web pages without needing to call external files for data. It is a dynamic interpreted language which means it is not compiled to machine language but rather read at runtime. It can easily fit into both frontend and backend uses. It is easy to learn with C-like syntax, free to download and is powerful enough to run some of the biggest websites on the internet. WordPress, Facebook, Slack, MailChimp and Wikipedia are few websites built using PHP.

## 🤔 Why to use PHP?

The main feature of PHP which makes me like it more is you need not write complicated scripts like in the case of other languages. Few simple lines of code are sufficient to get your work done. It can be used to manage dynamic content, databases, session tracking. You can even build an entire e-commerce site using PHP. It can be integrated with a number of popular databases like [MySQL](https://www.mysql.com), [PostgreSQL](https://www.postgresql.org), [Oracle](https://www.oracle.com/in/index.html), [Sybase](https://www.sap.com/india/acquired-brands/what-is-sybase.html), [Informix](https://www.ibm.com/products/informix), and [Microsoft SQL Server](https://www.microsoft.com/en-ie/sql-server/sql-server-downloads). The MySQL server executes even very complex queries with huge result sets in record-setting time. PHP supports a large number of major protocols such as POP3, IMAP, and LDAP. PHP4 added support for Java and distributed object architectures (COM and CORBA), making n-tier development a possibility for the first time. PHP Mailer library is used to send emails safely and easily.

- Simple and easy to learn
- Efficient (Cost and performance wise)
- Secure
- Flexible

PHP can perform a lot of operations like form handling, file operations, database modification, and cookie setting. It can be used to encrypt data and restrict users to access specific pages on your website.
 
A PHP framework provides a basic structure for streamlining the development of web apps. We use them because they speed up the development process.

**Listed below are few popular PHP frameworks:**

- [Laravel](https://laravel.com)
- [CodeIgniter](https://codeigniter.com)
- [Symfony](https://symfony.com)
- [CakePHP](https://cakephp.org)

## ⚙️ Setting up PHP development environment

Instead of downloading various components separately, I feel it’s good to install all in one packages like [XAMPP]( https://www.apachefriends.org/index.html), [WAMP]( https://www.wampserver.com/en/) which contain Apache, PHP, MySQL, and many other dependencies in a single installation file.

In this tutorial, I’ll guide how to install XAMPP. Before getting started, let’s know the full form of XAMPP:-
```
X — Cross-platform (X), as it supports multiple operating systems
A — Apache HTTP Server
M — MariaDB (formerly MySQL)
P — PHP
P — PERL
```
Additionally, XAMPP comes with other useful tools such as Mercury mail server, phpMyAdmin for database administration, Webalizer for web server log analysis, OpenSSL, Apache Tomcat for running Java code, and FileZilla FTP server.
Currently, the latest stable version of PHP is 7.4

### ⚙️ Step 1:

[Click here](https://www.apachefriends.org/download.html) to download the latest stable version of PHP according to your OS (windows/Linux/OSX)

### ⚙️ Step 2:

Once the download is complete, run the installer file which you downloaded. Follow the instructions mentioned and click next. Select components you want install and choose specific location for installation. Make sure to check the “Private networks, such as my home or work network” option. This is very important. XAMPP won’t work if you don’t check this and click Allow access. Once done, click finish.
Complete the setup and run XAMPP Control Panel.

### ⚙️ Step 3:

In the control panel, click on config button. Click on the start button beside Apache and MySQL modules. You can access your Apache server’s dashboard by clicking on the admin button beside it. Alternatively, you can also reach it via http://localhost/dashboard/ URL in your browser.
You can access your phpMyAdmin dashboard by clicking the admin button beside MySQL module. Or you can simply go to http://localhost/phpmyadmin/ in your browser. Here, you can manage the MariaDB (or MySQL) databases of your web projects.

**Writing your first hello world program in php:**
Create a new folder hello in C:\xampp\htdocs\ (The C: drive may vary based on the location you chose for installation). Inside the new folder, right click and create a new file ‘hello.php’. Write the below code in your new file. PHP is case insensitive. You need not worry if a given keyword is in lowercase or uppercase. It treats echo and ECHO as the same.

```php
    <?php
    echo "Hello World!";
    ?>
```

Navigate to [http://localhost/hello/hello.php](http://localhost/hello/hello.php) in your preferred browser.

If it displays “Hello World!”, you’ve successfully setup XAMPP server and wrote your first few lines in PHP.

## 💻 Popular PHP IDEs/Editors

1. [Kite](https://www.kite.com)
2. [Rapid PHP editor](https://www.rapidphpeditor.com)
3. [Eclipse PDT](https://www.eclipse.org/pdt)
4. [Komodo](https://www.activestate.com/products/komodo-ide)
5. [CodeLobster](https://www.codelobster.com)
6. [PHPStorm](https://www.jetbrains.com/phpstorm)
7. [NetBeans](https://netbeans.apache.org)
8. [Atom](https://atom.io)
9. [Sublime Text](https://www.sublimetext.com)
10. [Geany](https://www.geany.org)


## 🎉 Some cool projects in PHP

If you’re looking for some projects in PHP for inspiration or contribution, checkout the below projects:

- [Project Celadon](https://github.com/Webwiznitr/Project-celadon-2.0)
- [Project Sirius](https://github.com/CYBORG-NIT-ROURKELA/project-sirius)
- [Top open source projects in PHP]( https://github.com/trending/php)

> *Congratulations on making it till the end!*