Python 3 Installation on Windows <br>
Step 1: Select Version of Python to Install
The installation procedure involves downloading the official Python .exe installer and running it on your system.

The version you need depends on what you want to do in Python. For example, if you are working on a project coded in Python version 2.6, you probably need that version. If you are starting a project from scratch, you have the freedom to choose.

If you are learning to code in Python, we recommend you download both the latest version of Python 2 and 3. Working with Python 2 enables you to work on older projects or test new projects for backward compatibility.


Step 2: Download Python Executable Installer![python-for-windows](https://user-images.githubusercontent.com/79055093/129522974-f2c24167-664e-450b-abed-2b94fb883f9d.png)

Open your web browser and navigate to the Downloads for Windows section of the official Python website.  https://www.python.org/downloads/source/
Search for your desired version of Python. At the time of publishing this article, the latest Python 3 release is version 3.7.3, while the latest Python 2 release is version 2.7.16.
Select a link to download either the Windows x86-64 executable installer or Windows x86 executable installer. The download is approximately 25MB.

Note: If your Windows installation is a 32-bit system, you need the Windows x86 executable installer. If your Windows is a 64-bit version, you need to download the Windows x86-64 executable installer. There is nothing to worry about if you install the “wrong” version. You can uninstall one version of Python and install another.

Step 3: Run Executable Installer
1. Run the Python Installer once downloaded. (In this example, we have downloaded Python 3.7.3.)

2. Make sure you select the Install launcher for all users and Add Python 3.7 to PATH checkboxes. The latter places the interpreter in the execution path. For older versions of Python that do not support the Add Python to Path checkbox, see Step 6.

3. Select Install Now – the recommended installation options.
![python-setup](https://user-images.githubusercontent.com/79055093/129523082-16c758b1-5518-4c88-9db5-61de17726190.png)



For all recent versions of Python, the recommended installation options include Pip and IDLE. Older versions might not include such additional features.

4. The next dialog will prompt you to select whether to Disable path length limit. Choosing this option will allow Python to bypass the 260-character MAX_PATH limit. Effectively, it will enable Python to use long path names.
![python-setup-completed](https://user-images.githubusercontent.com/79055093/129523147-6ee6e6f3-6bdf-4497-a703-98582482c28e.png)


The Disable path length limit option will not affect any other system settings. Turning it on will resolve potential name length issues that may arise with Python projects developed in Linux.

Step 4: Verify Python Was Installed On Windows  
Navigate to the directory in which Python was installed on the system. In our case, it is C:\Users\Username\AppData\Local\Programs\Python\Python37 since we have installed the latest version.
Double-click python.exe.
The output should be similar to what you can see below:
![verify-python-install-1](https://user-images.githubusercontent.com/79055093/129523216-84249f9b-ffd8-4e3b-9bd8-3c335a3e3182.png)

Note: You can also check whether the installation was successful by typing python –V in Command Prompt. The output should display your installed version of Python. In our case, it is “Python 3.7.3.”

Step 5: Verify Pip Was Installed
If you opted to install an older version of Python, it is possible that it did not come with Pip preinstalled. Pip is a powerful package management system for Python software packages. Thus, make sure that you have it installed.

We recommend using Pip for most Python packages, especially when working in virtual environments.

To verify whether Pip was installed:

Open the Start menu and type "cmd."
Select the Command Prompt application.
Enter pip -V in the console. If Pip was installed successfully, you should see the following output:
![verify-pip](https://user-images.githubusercontent.com/79055093/129523333-6a5d60ce-abbd-42ec-ac83-1621240c8c77.png)

Pip has not been installed yet if you get the following output:

'pip' is not recognized as an internal or external command,
Operable program or batch file.
If your version of Python is missing Pip, see our article How to Install Pip to Manage Python Packages on Windows.

Step 6: Add Python Path to Environment Variables (Optional)
We recommend you go through this step if your version of the Python installer does not include the Add Python to PATH checkbox or if you have not selected that option.

Setting up the Python path to system variables alleviates the need for using full paths. It instructs Windows to look through all the PATH folders for “python” and find the install folder that contains the python.exe file.

1. Open the Start menu and start the Run app.
![run-dialog-box](https://user-images.githubusercontent.com/79055093/129523395-c13bc1f5-5bbe-4d2f-97d7-f4b36f347807.jpg)

run dialog box
2. Type sysdm.cpl and click OK. This opens the System Properties window.

3. Navigate to the Advanced tab and select Environment Variables.

4. Under System Variables, find and select the Path variable.

5. Click Edit.

6. Select the Variable value field. Add the path to the python.exe file preceded with a semicolon (;). For example, in the image below, we have added ";C:\Python34."
![add-variable-value-python3-installation-windows](https://user-images.githubusercontent.com/79055093/129523490-ea1f149a-93f9-4c5a-98fe-311817a04f21.png)

How to add the Variable Value durring python3 windows installation.
7. Click OK and close all windows.

By setting this up, you can execute Python scripts like this: Python script.py

Instead of this: C:/Python34/Python script.py

As you can see, it is cleaner and more manageable.

Step 7: Install virtualnv (Optional)
You have Python, and you have Pip to manage packages. Now, you need one last software package - virtualnv. Virtualnv enables you to create isolated local virtual environments for your Python projects.

Why use virtualnv?

Python software packages are installed system-wide by default. Consequently, whenever a single project-specific package is changed, it changes for all your Python projects. You would want to avoid this, and having separate virtual environments for each project is the easiest solution.

To install virtualnv:

1. Open the Start menu and type "cmd."

2. Select the Command Prompt application.

3. Type the following pip command in the console:

C:\Users\Username> pip install virtualenv


For VS code install Python extension from vs code store:
![Screenshot (955)](https://user-images.githubusercontent.com/79055093/129523997-4ee6aba7-8633-4ae5-8c08-6da37f9ffdef.png)
