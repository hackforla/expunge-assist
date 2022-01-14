# Contributing
Thanks for being interested in helping out with Expunge Assist!


# Prerequisites
Hopefully by now you have had onboarding and had your github account set up with an ssh key and connected to the HackForLA organization.

Here are some things you'll want to be familiar with:
* command line (cli)
* git & github
* npm & node

but you're always welcome to ask for help in the `#expunge-assist-frontend` slack channel.


# Getting Started
We develop off of the `dev` branch which will contain the latest changes. The `master` branch is left for the production build.

We have tasks with things that need to get done located here https://github.com/hackforla/expunge-assist/projects/1. Look for `good first issue` label which are simpler tasks.


### Setup
* Clone the repo by running `git clone git@github.com:hackforla/expunge-assist.git` in your command line.
* Navigate to the following folder in your cli `/expunge-assist/products/statement-generator/`
  - Because of how the project was originally set up, this is where the javascript app resides and I am going to refer to this as the __root folder__  from now on.
* This was created using [create-react-app](https://create-react-app.dev/) and manages dependencies with [npm](https://www.npmjs.com/), so let's __install dependencies__ by running `npm install` in the root folder.
* After dependencies are installed, run `npm run start` which should open up the app in your browser.
* You can now make changes and the page should live update!


### Create a Branch
* Start in the `dev` repo with `git checkout dev`
* Make sure you're up to date with `git pull`
* Create a new branch with `git checkout -b BRANCHNAME`
* You're ready to make changes!


### Development
Expunge-Assist was developed in [TypeScript](https://www.typescriptlang.org/). It's not too much different than JavaScript other than it has type checking. We also have a [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) pacakage for code formatting preferences. If there are anything we don't notice in PRs we'll probably run auto-format on the codebase.

#### Files
* `App.tsx`: This is the entry point for the app which renders different pages based on the route.
  * `PageContainer.tsx` -> `Form.tsx`: This is where different pages and steps of the Form gets rendered.

* `RoutingContext.tsx`: We use React Context to handle giving each page component the state and functions relating to navigating.
* `FormStateContext.tsx`: This handles tracking the current state of the filled out form.


### Create a Pull Request
When you finish making your changes and commit them, you can now make a pull request (PR).
* Push your changes to the github repo with `git push origin BRANCHNAME`
* Go to the Pull Requests tab on github.com and click "New pull request"
* Change so the base branch is `base:dev`
* Create a meaningful title and description
* Link the PR to the relevant Issue


Once at least one person approves it, you can squash and merge it into the dev branch!
