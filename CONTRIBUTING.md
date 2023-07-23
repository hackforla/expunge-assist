# Contributing
Thanks for being interested in helping out with Expunge Assist! 🎉 

This is a developer specific guide. For more general Expunge Assist questions, see our [wiki](https://github.com/hackforla/expunge-assist/wiki) or reach out to `#expunge-assist` on slack. 

For any dev-related questions, please feel free to ask for help in the `#expunge-assist-dev` slack channel or message the [dev lead](https://github.com/hackforla/expunge-assist/wiki/The-Current-Team) on slack. 

## Prerequisites
This guide assumes you've already been through onboarding through HackforLA. This onboarding includes getting organization access to Slack, Github, and Google Drive. If you haven't, [start here!](https://www.hackforla.org/getting-started)

Here are some things you'll want to be familiar with:
* command line (cli)
* git & github
* npm & node
* TypeScript (or JavaScript)


## Getting Started
Join the following Slack channels: 
- #expunge-assist 
- #expunge-assist-dev 
- #expunge-assist-design-and-content

### Meetings - (as of July 23, 2023)

- Dev Meeting: Thursdays 6pm-6:30pm PST 
- All Teams Meeting: First Monday of the Month from 5-6pm PST
- Dev/Design/Product Check-in: Mondays 5-5:30pm PST


### Local Setup

* Clone the repo by running `git clone git@github.com:hackforla/expunge-assist.git` in your command line.
* Navigate to the following folder in your cli `/expunge-assist/products/statement-generator/`
  - Because of how the project was originally set up, this is where the javascript app resides and I am going to refer to this as the __root folder__  from now on.
* This was created using [create-react-app](https://create-react-app.dev/) and manages dependencies with [npm](https://www.npmjs.com/), so let's __install dependencies__ by running `npm install` in the root folder.
* After dependencies are installed, run `npm run start` which should open up the app in your browser.
* You can now make changes and the page should live update!


### Finding an Issue

The filtered Dev issues are located [here](https://github.com/hackforla/expunge-assist/projects/1?card_filter_query=label%3A%22role%3A+development%22). 

See the entire project board [here](https://github.com/hackforla/expunge-assist/projects/1). Issues are organized by role, size, priority, and feature. Please choose from the top couple tasks in the `Prioritized Backlog` column. Look for `good first issue`, `size: 1pt` or `size: small` labels which are simpler tasks.

Once you find an issue you're interested in, please assign yourself and move it to `In Progress (active)`. 

## Development

The Expunge Assist app was developed in [TypeScript](https://www.typescriptlang.org/). It's not too much different than JavaScript other than it has type checking. We also have a [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) package for code formatting preferences.

We develop off of the `dev` branch which will contain the latest changes. The `master` branch is left for the production build.


### Create a Branch

- Start in the `dev` repo with `git checkout dev`
- Make sure you're up to date with `git pull`
- Create a new branch with `git checkout -b BRANCHNAME`

Branch names should be descriptive of the task and include the issue number. For example, if you were working on [this issue](https://github.com/hackforla/expunge-assist/issues/698) creating the 'something else' flow in the statement generator, a good branch name would be something like `something-else-689`

#### Files
* `App.tsx`: This is the entry point for the app which renders different pages based on the route.
  * `PageContainer.tsx` -> `Form.tsx`: This is where different pages and steps of the Form gets rendered.

* `RoutingContext.tsx`: We use React Context to handle giving each page component the state and functions relating to navigating.
* `FormStateContext.tsx`: This handles tracking the current state of the filled out form.


### Create a Pull Request
When you finish making your changes and commit them, you can now make a pull request (PR).
* before pushing, run our reformatter and linter using `npm run lint:fix`
* Push your changes to the github repo with `git push origin BRANCHNAME`
* Go to the Pull Requests tab on github.com and click "New pull request"
* Change so the base branch is `base:dev`
* Create a meaningful title and description
* Link the PR to the relevant issue
* Move issue to `Ready for Review` section and post in `#expunge-assist-dev` with a link to the PR
* Once you have 1 approval, assign to the dev lead to have issue merged.

