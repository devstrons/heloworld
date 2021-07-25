 There are these distributions- Pick which ever is relevant for you. Here we go with Windows 
-[elixir](https://elixir-lang.org/install.html)

 Free and open source text editor from Microsoft
-[Visual Studio Code](https://code.visualstudio.com/Download) 

 Install this extension in VScode. Helps in formatting and debugging your code
-[ElixirLS: Elixir support and debugger](https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls)


 Steps to run the Program:

-Navigate to the directory where you want your project to be.
 E:\>cd projects
 E:\Projects\hello-world\Lang\ELIXIR

-Create a new directory if required (mix new <name of the directory>)
 E:\Projects\hello-world\Lang\ELIXIR>mix new todos
 or
 directly include the files in the current directory 
 E:\Projects\hello-world\Lang\ELIXIR>mix new .

 <!-- After typing the commands:- 
 * creating README.md
 * creating .formatter.exs
 * creating .gitignore
 * creating mix.exs
 * creating lib
 * creating lib/todos.ex
 * creating test
 * creating test/test_helper.exs
 * creating test/todos_test.exs
 
 Your Mix project was created successfully.
 You can use "mix" to compile it, test it, and more:
 
     cd todos
     mix test 

 Run "mix help" for more commands.-->

-Navigate to new directory just created
 E:\Projects\hello-world\Lang\ELIXIR\>cd todos
 E:\Projects\hello-world\Lang\ELIXIR\todos>

-To open your VScode IDE from terminal
 E:\Projects\hello-world\Lang\ELIXIR\todos>code .

-To activate your Elixir environment Shell
 E:\Projects\hello-world\Lang\ELIXIR\todos>iex -S mix
 <!-- 
 Compiling 1 file (.ex)
 Generated todos app
 Interactive Elixir (1.12.2) - press Ctrl+C to exit (type h() ENTER for help)
 iex(1)>
  -->

 -To launch your program
  iex(1)> Todos.hello_world
  <!-- "hello world" -->

 -If it doesnt work as mentioned above:
  iex(1)>Todos.hello_world
  <!-- UndefinedFunctionError... 
  This basically means we need to tell the Elixir Shell that we made some changes and have not yet refreshed it-->

 -iex(1)>recompile
 <!-- Compiling 1 file (.ex)
      :ok 
 With this we have refreshed the Shell and now we are good to proceed -->

-iex(2)>Todos.hello_world
 <!-- "hello world" -->
      
