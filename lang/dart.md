---
lang: Dart
syntax: Dart
title:  Dart is Smart Language!
author: chandan0000
---

```dart
int main(){
    print("hello world");
}
```
## What is Dart?
Dart is a new general and open source programming language with a vibrant community developed by Google Inc. and its official website is https://dart.dev. It was first announced as a public preview on October 10, 2011; it has now reached version 1.10. World class language designers and developers are involved in this project, namely, Lars Bak and Kasper Lund (known for their V8 JavaScript engine embedded in the Chrome browser, which revolutionized performance in the JavaScript world), and Gilad Bracha (a language theorist known for the development of the Strongtalk and Newspeak languages and for the Java specification). Judging by the huge amount of resources and the number of teams working on it, it is clear that Google is very serious about making Dart a success.

## What is Dart used for?
Dart programming language can be used for web and mobile applications and is also suitable for server and desktop applications.

Dart wasn’t popular and was known as an orphan, but it had a compiler for a Dart VM, also Google had all the control about this language.

## Why to use Dart?
- Dart is really flexible
- Dart embraced the open source ecosystem
- Dart is pretty easy to learn
- Dart is a good first language
- Dart has great tooling support
- Dart is a robust language
- Dart ensures productivity
- Dart is used by Flutter
- Dart is backed by a tech giant
- Dart solved a lot of problems, efficiently

## Tools You Will Need
For setting up environment for performing java codes you need with a minimum of 2 GB of RAM.
You will also need the following softwares :
- Linux, macOS or Windows xp/7/8/10 operating system
- Dart SDK
- Text Editors


## Setting up Dart development environment
**Executing Script Online with DartPad:**

You may test your scripts online by using the online editor at https://dartpad.dartlang.org/. The Dart Editor executes the script and displays both HTML as well as console output. The online editor is shipped with a set of preset code samples.



**Dart Installation:**
 
 
**Install Dart on Windows:**
In this tutorial, we will provide a step by step process to get Dart installed on Windows.

Dart SDK comes as a pre-compiled version. So, download and extracting is all you need to do.

**Step 1:** Download Dart SDK
Go to Dart SDK archive page.

The URL is https://dart.dev/tools/sdk/archive.

Download Dart SDK
Click on the Dart SDK link. The download will start immediately and a zip file will be downloaded.

**Step 2:** Extract zip file
Extract the contents of Dart SDK zip file. The contents of the folder would be as shown below.

**Step 3:**
 Add Dart Path to PATH Environment Variable
As of now, you can run dart command only from bin folder of dart sdk. To run dart command from anywhere in your file system, add dart bin path to PATH environment variable.

Open Environment Variables. Under System variables, click on Path and click Edit button.

Edit environment variable window appears. Click on New and paste the dart sdk bin path as shown below.

**Step 4:** Restart Command Prompt
Close the existing command prompt window and open a new command prompt.

Just run the dart command:  dart --version


**Install the Dart SDK on Linux:**


The steps of Dart installation on Linux is given below.

Before installing the Dart, if you are Debian/Ubuntu on AMD64(64-bit Intel) in your local machine, you can install the Dart through one of the following options.

Install using apt-get
Install a Debian package
Installation using apt-get

**Step -1:**

 Type the following commands for a one-time setup.

$sudo apt-get update  
$ sudo apt-get install apt-transport-https  
  
$ sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'  
  
$ sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'  
**Step - 2:**

 Type the following command in terminal to install the Dart SDK using apt-get option.

$sudo apt-get update  
$ sudo apt-get install dart  
It will successfully download the Dart SDK.


**Installation a Debian Package:**

We can download Dart SDK as a Debian package in the .deb package format. To make all Dart binaries accessible, we have to change the PATH by typing the following command.

export PATH="$PATH:/usr/lib/dart/bin"  
To change the PATH for upcoming terminal sessions, use a below command:

$ echo 'export PATH="$PATH:/usr/lib/dart/bin"' >> ~/.profile  


## Popular dart Editors 
- The Eclipse, IntelliJ, and WebStorm are the IDEs from the Jet brains that support the Dart Programming, but WebStorm is more popular than others. We can download it from https://www.jetbrains.com/webstorm/download/#section=windows-version.


## Some Cool projects in Dart

- **1. [Invoice Naija](https://github.com/invoiceninja/admin-portal):** This is a business application for documenting invoices, tasks, and expenses.
It was built using flutter and laravel.

- Invoice Naija
- Extra Features
- Clients
- Products
- Quotes
- Payments
 

**2. [Bit Alarm](https://github.com/damoonrashidi/bitalarm)** This is a cryptocurrency application created to keep track of different cryptocurrencies

Bit Alarm
Extra Features
Loading indicator.
 Graph out historical data for a currency
Scan QR-code to add a wallet to wallet list
 Remove wallet from the list
 Dynamic portfolio based on the address (ETH + ERC20-tokens, LTC, BTC, BCH, DASH and ADA for now)
 Further, Ability to add individual assets in addition to wallets

**3 [Weight Tracker](https://github.com/MSzalek-Mobile/weight_tracker)** Weight Tracker is an application dedicated to people who want to dump or maintain weight. It allows you to keep an eye on your progress and pursue your weight goals.

- **Screenshot Image**

- **Extra Features**

- **Simple**

- **User-Friendly** 

**4. [Flutter Music Player](https://github.com/iampawan/Flutter-Music-Player)**
Flutter Music Player is an open-source music player application, available only on Andriod, for now.

- Screenshot Image
- Extra Features
- Fetch local songs (Inbuilt Permission)
- Beautiful UI with multiple themes(Coming Soon)
- Animation
- Full Fledged Example
- play (local files)
- stop
- pause
- seek
- shuffle
- Album Art
- onComplete
- onDuration / onCurrentPosition

**5. [Trovami](https://github.com/Samaritan1011001/Trovami)**
Trovami is a flutter based android application, you can use to share your current location with other persons.

- preview
- Extra Features
- Create groups and choose to share your live location
- View group members on the map
- Google Sign-in

**6. [BookSearch](https://github.com/Norbert515/BookSearch)**

- BookSearch helps you keep track of books, you have read