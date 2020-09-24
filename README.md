<div align="center">
  <a href="https://www.fork.de">
    <img src="./assets/fork-logo.png" width="156" height="30" alt="Fork Logo" />
  </a>
</div>

# React Patterns

This repository contains basic React Components, Hooks and Patterns, which we use at [Fork Unstable Media](https://www.fork.de/).

## Features

- 📦 Basic React components to start with
- 💅 styled-components for styling
- 🔧 ESLint, Stylelint und Prettier already configured
- 🎛 Storybook Integration with A11y, Docs and Viewport Plugin
- 📐 Styling helpers for color, spacings and media queries

**Table of contents**

- [Requirements](#requirements)
- [Installation](#installation)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

---

## Installation

Clone the `react-patterns` repository.

```sh
git clone https://github.com/fork/react-patterns
cd react-patterns/
```

You can copy the components in two different ways to your React project.

**Automatic migration**

Run the `migrate.sh` script with your project path as an argument.

```sh
bash .migration/migrate.sh /Users/path/to/your/project
```

Follow the steps and the script will copy and install all necessary files and dependecies.

**Manual migration**

Copy all components you need for your new project. All components consist of a `component.jsx`, `component.style.jsx`, `component.stories.jsx` and a `index.js` file. All components depend on design tokens and our stylesheet helpers, therefore you also need to copy the `stylesheets` and the `tokens` directory to your new project. Install the missing dependencies.

## Scripts

```sh
yarn start  # Starts storybook
yarn build  # Builds storybook
yarn deploy # Deploys storybook via staticpages-cli

# Only copy them if you need testing
yarn test         # Run jest test
yarn test:update  # Update tests

```

## Deployment

1. Copy `.env.example` to `.env` and add your staticpages `DEPLOY_KEY`.
2. Run `yarn deploy` to deploy static storybook app via staticpages-cli.

## Roadmap

Write something about future releases and whats on the list for the next development phase.

- [x] Update readme
- [ ] Add more jest tests
- [ ] Use Typescript

---

<div align="center">
  <img src="./assets/heart.png" width="38" height="41" alt="Fork Logo" />

  <p>Brought to you by <a href="https://www.fork.de">Fork Unstable Media GmbH</a></p>
</div>
