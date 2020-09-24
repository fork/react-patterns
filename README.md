<div align="center">
  <a href="https://www.fork.de">
    <img src="./assets/fork-logo.png" width="156" height="30" alt="Fork Logo" />
  </a>
</div>

# React Patterns

This repository contains basic React Components, Hooks and Patterns, which we use as a starting point at [Fork Unstable Media](https://www.fork.de/).

## Features

- 📦 Basic React components to start with
- 💅 styled-components for styling
- 🔧 ESLint, Stylelint und Prettier already configured
- 🧱 Storybook Integration with A11y, Docs and Viewport Plugin
- 📐 Styling helpers for color, spacings and media queries
- ⚙️ Basic jest snapshot testing is already implemented

**Table of contents**

- [Installation](#installation)
- [Scripts](#scripts)
- [Theming](#theming)
- [Stylesheets](#stylesheets)
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

### 1. Automatic migration

Run the `migrate.sh` script with your project path as an argument.

```sh
bash .migration/migrate.sh /Users/path/to/your/project
```

Follow the steps and the script will copy and install all necessary files and dependecies.

### 2. Manual migration

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

## Theming

The theming of our components is based on a `tokens` file, where we store our main variables. The `tokens` file consists of colors, spacings, breakpoints, grid sizes, font-sizes or animation properties. A basic example is located at `./tokens/index.js`.

You need to wrap the whole React tree inside a `ThemeProvider` to make the tokens available for the components. Otherwise the styling helpers will return an error.

```js
import { ThemeProvider } from 'styled-components';
import tokens from 'path/to/tokens';

const App = ({ children }) => {
  return <ThemeProvider theme={tokens}>{children}</ThemeProvider>;
};
```

## Stylesheets

We use `styled-components` to style our react components. There are several helper methods and tools in the `stylesheets` direcetory which will return theme aware design tokens.

**Example**

```js
import styled from 'styled-components';
import { color, space, mq } from 'path/to/stylesheets';

const StyledComponent = styled.h2`
  margin: ${space('m')} 0;
  color: ${color('primary')};

  ${mq('m')} {
    color: ${color('secondary')};
  }
`;
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
