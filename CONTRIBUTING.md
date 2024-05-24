# Contributing

Thanks for being interested in helping out with Expunge Assist! 🎉

This is a developer specific guide. For more general Expunge Assist questions, see our [wiki](https://github.com/hackforla/expunge-assist/wiki) or reach out to `#expunge-assist` on slack.

For any dev-related questions, please feel free to ask for help in the `#expunge-assist-dev` slack channel or message the [dev lead](https://github.com/hackforla/expunge-assist/wiki/The-Current-Team) on slack.

## Prerequisites

This guide assumes you've already been through onboarding through HackforLA. This onboarding includes getting organization access to Slack, Github, and Google Drive. If you haven't, [start here!](https://www.hackforla.org/getting-started)

Otherwise, please take a look through our [wiki](https://github.com/hackforla/expunge-assist/wiki) to get familiar with the project, our team, and processes.

Here are some things you'll want to be familiar with:

- command line (cli)
- git & github
- npm & node
- TypeScript (or JavaScript)

## Getting Started

Join the following Slack channels:

- #expunge-assist
- #expunge-assist-dev
- #expunge-assist-design-and-content

### Meetings - (as of May 24, 2024)

- Dev Meeting: Wednesdays 6pm-6:30pm PST
- All Teams Meeting: First Friday of the Month from 10:30am-11:30am PST

### Local Setup

- Clone the repo by running `git clone git@github.com:hackforla/expunge-assist.git` in your command line.
- Navigate to the following folder in your cli `/expunge-assist/products/statement-generator/`
  - Because of how the project was originally set up, this is where the javascript app resides and I am going to refer to this as the **root folder** from now on.
- This was created using [create-react-app](https://create-react-app.dev/) and manages dependencies with [npm](https://www.npmjs.com/), so let's **install dependencies** by running `npm install` in the root folder.
- After dependencies are installed, run `npm run start` which should open up the app in your browser.
- You can now make changes and the page should live update!

### Finding an Issue

The filtered Dev issues are located [here](https://github.com/hackforla/expunge-assist/projects/1?card_filter_query=label%3A%22role%3A+development%22).

See the entire project board [here](https://github.com/hackforla/expunge-assist/projects/1). Issues are organized by role, size, priority, and feature. Please choose from the top couple tasks in the `Prioritized Backlog` column. Look for `good first issue`, `size: 1pt` or `size: small` labels which are simpler tasks.

Once you find an issue you're interested in, please assign yourself and move it to `In Progress (active)`.

## Development

The Expunge Assist app was developed in [TypeScript](https://www.typescriptlang.org/). It's not too much different than JavaScript other than it has type checking. We also have a [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) package for code formatting preferences.

We develop off of the `dev` branch which will contain the latest changes. The `master` branch is left for the production build.

### Working on an Issue

Once you've claimed an issue for your own, you're welcome to get started on it.

- Start in the `dev` repo with `git checkout dev`
- Make sure you're up to date with `git pull`
- Create a new branch with `git checkout -b BRANCHNAME`
- Make your changes

Branch names should be descriptive of the task and include the issue number. For example, if you were working on [this issue](https://github.com/hackforla/expunge-assist/issues/698) creating the 'something else' flow in the statement generator, a good branch name would be something like `689-something-else`. Make sure not to use a `#` sign to start your branch name as git hates them.

### Create a Pull Request

When you finish making your changes and commit them, you can now make a pull request (PR).

- before pushing, run our reformatter and linter using `npm run lint:fix`
- Push your changes to the github repo with `git push origin BRANCHNAME`
- Go to the Pull Requests tab on github.com and click "New pull request"
- Change so the base branch is `base:dev`
- Create a meaningful title and description
- Link the PR to the relevant issue
- Move issue to `Ready for Review` section and post in `#expunge-assist-dev` with a link to the PR
- Once you have 1 approval, assign to the dev lead to have issue merged.

### Reviewing a Pull Request

Pull Requests that are ready for review can be found two places: the `#expunge-assist-dev` channel on slack and linked in issues in the `Ready to Review` column on the project board.

Assign yourself as a reviewer on the PR.

Using the branch listed in the PR, run the app locally. Ask yourself these questions:

1. Does it solve the issue listed?
2. Could it be refactored?

Bonus points for evaluating the rest of the page for any bugs or design mistakes. If you find any unrelated to the PR you're reviewing, please [write a new issue](https://github.com/hackforla/expunge-assist/issues/new?assignees=&labels=&projects=&template=blank-issue.md&title=).

If the PR needs updates, leave specific comments on the PR for the developer to address. Tag the developer and update status to `request changes`.

If the PR passes the questions above, approve it and assign to the dev lead to be merged!
