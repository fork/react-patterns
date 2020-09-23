<div align="center">
  <a href="https://www.fork.de">
    <img src="./assets/fork-logo.png" width="156" height="30" alt="Fork Logo" />
  </a>
</div>

# React Patterns

This repository contains basic React Components, Hooks and Patterns, which we use at [Fork Unstable Media](https://www.fork.de/).

## How to install components to your own React project

Clone the `react-patterns` repository.

```sh
git clone https://github.com/fork/react-patterns
cd react-patterns/
```

## Automatic migration

Run the `migrate.sh` script with your project path as an argument.

```sh
bash .migration/migrate.sh /Users/path/to/your/project
```

Follow the steps and the script will copy and install all necessary files and dependecies.

## Manual migration

### `components`

Copy all components you need for your new project. All components consist of a `component.jsx`, `component.style.jsx` and a `component.stories.jsx` file.

### `stylesheets`

Copy the `stylesheets` directory to your new project, because all components depend on some stylesheet helpers.

### Scripts

```shell
yarn start  // Starts storybook
yarn build  // Builds storybook
yarn deploy // Deploys storybook via staticpages-cli

yarn test         // Run jest test
yarn test:update  // Update snapshots

```

### How to deploy

1. Copy `.env.example` to `.env` and add your staticpages `DEPLOY_KEY`.
2. Run `yarn deploy` to deploy static storybook app via staticpages-cli.

## Roadmap

    - Update readme
    - Add more jest tests
