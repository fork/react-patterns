# React Patterns

This repository contains basic React Components, Hooks and Patterns. You can copy the whole repository or specific components to your React project.

## How to migrate components to your own React project

You can copy and paste what you need or run the `migrate.sh` script with your project path as an argument.

```sh
bash migrate.sh /Users/path/to/your/project
```

Follow the steps and the script will copy and install all necessary files and dependecies. After it is finished add the following scripts depending on what you need to your `package.json` file.

```
"storybook": "start-storybook -s ./public -p 8000",
"storybook:build": "build-storybook && cp -r ./public/. ./storybook-static/public/",
"deploy": "yarn build && staticpages-cli",
"test": "jest --config ./jest.config.json",
"test:update": "jest --config ./jest.config.json -u"
```

## TODO:

    - Update readme
    - Add more jest tests

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
