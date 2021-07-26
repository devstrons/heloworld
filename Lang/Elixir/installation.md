 There are these distributions- Pick which ever is relevant for you. Here we go with Windows 
- [elixir](https://elixir-lang.org/install.html)

 Free and open source text editor from Microsoft
- [Visual Studio Code](https://code.visualstudio.com/Download) 

 Install this extension in VScode. Helps in formatting and debugging your code
- [ElixirLS: Elixir support and debugger](https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls)


- <h2>Steps to run the Program:</h2>

-<h3>Navigate to the directory where you want your project to be.</h3>
 E:\>cd projects<br>
 E:\Projects\hello-world\Lang\ELIXIR<br>

-<h3>Create a new directory if required (mix new <name of the directory>)</h3>
 E:\Projects\hello-world\Lang\ELIXIR>mix new todos<br>
 or<br>
 directly include the files in the current directory<br> 
 E:\Projects\hello-world\Lang\ELIXIR>mix new .<br>

 After typing the commands, this will appear in the Command Prompt:-
 <i>
 * creating README.md
 * creating .formatter.exs
 * creating .gitignore
 * creating mix.exs
 * creating lib
 * creating lib/todos.ex
 * creating test
 * creating test/test_helper.exs
 * creating test/todos_test.exs
 
 Your Mix project was created successfully.<br>
 You can use "mix" to compile it, test it, and more:
 
     cd todos
     mix test 

 Run "mix help" for more commands.</i>

 -<h3>Navigate to new directory just created</h3>
 E:\Projects\hello-world\Lang\ELIXIR\>cd todos<br>
 E:\Projects\hello-world\Lang\ELIXIR\todos><br>

 -<h3>To open your VScode IDE from terminal</h3>
 E:\Projects\hello-world\Lang\ELIXIR\todos>code .

 -<h3>To activate your Elixir environment Shell</h3>
 E:\Projects\hello-world\Lang\ELIXIR\todos>iex -S mix<br>
 <i>
 Compiling 1 file (.ex)<br>
 Generated todos app<br>
 Interactive Elixir (1.12.2) - press Ctrl+C to exit (type h() ENTER for help)<br>
 iex(1)><br>
 </i>

 -<h3>To launch your program</h3>
  iex(1)> Todos.hello_world<br>
 <i>"hello world"</i><br>

 -<h3>If it doesnt work as mentioned above:</h3>
  iex(1)>Todos.hello_world<br>
 <i>
  UndefinedFunctionError... <br>
  This basically means we need to tell the Elixir Shell that we made some changes and have not yet refreshed it<br></i>

 -iex(1)>recompile<br>
 <i>
 Compiling 1 file (.ex)<br>
 :ok <br>
  With this we have refreshed the Shell and now we are good to proceed </i><br>

-iex(2)>Todos.hello_world<br>
 <i>"hello world"</i><br>
      
