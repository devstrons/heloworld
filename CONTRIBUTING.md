# <a name="contributing">Contributing Overview</a>

Please do! Thanks for your help in improving the project! :balloon:

Be sure to see the complete set of contributor markdown file here.

All contributors are welcome. Not sure where to start? Please take the [Support](https://github.com/DevsTrons/Support/blob/main/README.md) for how, where, and why to contribute. This project is community-built and welcomes collaboration. Contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

All set to contribute? Grab an open issue with the ["good first issue" label](../../labels/good%20first%20issue) and jump in. Join our [Discord server](https://discord.gg/MVujzTBqed) and engage in conversation. Create a [new issue](/../../issues/new/choose) if needed. All [pull requests](/../../pulls) should ideally reference an open [issue](/../../issues). Include keywords in your pull request descriptions, as well as commit messages, to [automatically close related issues in GitHub](https://help.github.com/en/github/managing-your-work-on-github/closing-issues-using-keywords).

## Project Setup

1. Make sure to fork the repository, so it's available to your GitHub account, for further contributions as well as it state your contributions in it.

![Screenshot from 2021-08-15 19-56-14](https://user-images.githubusercontent.com/75872316/129481808-6850685c-1f84-4d5e-900e-a9e243825fa5.png)

2. Clone the repository from your account to local PC, so its available to you locally. Also, you can make changes in it for testing/contributions/enhancements.

![Screenshot from 2021-08-15 20-02-46](https://user-images.githubusercontent.com/75872316/129482057-1f6d04b2-8769-4d3f-9401-09ceb953bc4c.png)
```
git clone https://github.com/<your-username>/Hello-World
```

3. Now, set the `upstream` so it make a "path of contribution" from your account's repo. (repository) to original repository.

![Screenshot from 2021-08-15 20-10-21](https://user-images.githubusercontent.com/75872316/129482284-e9c76c34-9ff9-4c7f-8c91-577a0297f647.png)

```
git remote add upstream https://github.com/DevsTrons/Hello-World
```
4. Run a command, so it will host the website up on port `4000` locally.
```
make
```
5. After done with the changes in code, get ready to contribute, Excited ? :star_struck: 

6. Make your own branch, so it'll hold your name, as well as which part you gone to be changing.
```
git checkout -b <username-which_part>
```
- For eg., Lets assume, the documentation part is fixed/enhanced by someone, & his name is "Amin", the branch will be name as "amin-docs"
```
git checkout -b amin-docs
```

7. Now, you've to add the changes in that branch, you created just above.
```
git add .
```
8. Lets commit the changes, & earn "green square of the day".
```
git commit -m "<message>"
```
9. Now, just push the changes from your repo. to original repository.
```
git push origin <your-branch-name>
```
10. Once you've committed and pushed all of your changes to GitHub, go to the page for your fork on GitHub, select your development branch, and click the pull request button. If you need to make any adjustments to your pull request, just push the updates to GitHub. Your pull request will automatically track the changes in your development branch and update it.

**NOTE:**

=> "LGTM 🥳 or Looks Good/Great To Me" is the word, you're seeking from reviewers.

## New to Git?

Resources: <https://lab.github.com> and <https://try.github.com/>

### License

This repository and site are available as open-source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
