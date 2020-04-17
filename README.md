# React Patterns

This repository contains basic React Components, Hooks and Patterns. You can copy the whole repository or specific components to your React project.

## How to migrate components to your own React project

### 1. Install dependecies

```sh
// Required
yarn add react react-dom styled-components prop-types

// Optional
yarn add lazysizes picturefill what-input

// Only needed in CookieLayer
yarn add js-cookies
```

## TODO:

    - Update readme
    - Add more jest tests

### Scripts

```sh
yarn start  // Starts storybook
yarn build  // Builds storybook
yarn deploy // Deploys storybook via staticpages-cli

yarn test         // Run jest test
yarn test:update  // Update snapshots

```

### How to deploy

1. Copy `.env.example` to `.env` and add your staticpages `DEPLOY_KEY`.
2. Run `yarn deploy` to deploy static storybook app via staticpages-cli.
