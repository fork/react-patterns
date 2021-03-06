<div align="left">
    <img width="600" title="React Patterns" src="http://github.fork.de/ReactPatterns_201005.svg">
</div>

This repository contains basic React Components, Hooks and Patterns, which we use as a starting point at [Fork Unstable Media](https://www.fork.de/).

**Table of contents**

- [Features](#features)
- [Installation](#installation)
- [Theming](#theming)
- [Stylesheets](#stylesheets)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

<!-- /TOC -->

---

## Features

- 📦 Basic React components to start with
- 💅 styled-components for styling
- 🔧 ESLint, Stylelint und Prettier already configured
- 🧱 Storybook Integration with A11y, Docs, Viewport and Theme Playground Plugin
- 📐 Styling helpers for color, spacings and media queries
- ⚙️ Basic jest snapshot testing is already implemented

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

Copy all components you need for your new project. All components consist of a `component.jsx`, `component.style.jsx`, `component.stories.jsx` and a `index.js` file. All components depend on design tokens and our stylesheet helpers, therefore you also need to copy the `stylesheets` and the `tokens` directory to your new project.

<details>
  <summary>Install missing dependencies</summary>

```sh
# Install dependencies
yarn add react react-dom styled-components prop-types lazysizes picturefill what-input js-cookie @svgr/cli

# Install dev dependencies
yarn add -D @storybook/react @storybook/addon-a11y @storybook/theming @storybook/addon-docs @storybook/addon-viewport babel-loader @babel/core babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json jest react-is react-test-renderer @4rk/staticpages-cli
```

</details>

<details>
  <summary>Add scripts to package.json</summary>

```sh
"storybook": "start-storybook -s ./public -p 8000",
"storybook:build": "build-storybook",
"deploy": "yarn storybook:build && staticpages-cli",
"test": "jest --config ./jest.config.json",
"test:update": "jest --config ./jest.config.json -u",
"build:icons": "svgr --no-dimensions --typescript -d src/components/Icon/compiled src/components/Icon/icons"
```

</details>

<details>
  <summary>Wrap your React tree in a <b>ThemeProvider</b></summary>

```js
import React from 'react';
import { ThemeProvider } from 'path/to/stylesheets';

export default () => (
  <ThemeProvider theme="default">
    <ReactTree />
  </ThemeProvider>
);
```

</details>

## Theming

The theming of our components is based on a `tokens` file, where we store our main variables. The `tokens` file consists of colors, spacings, breakpoints, grid sizes, font-sizes or animation properties. A basic example is located at `./tokens/index.js`.

You need to wrap the whole React tree inside a `ThemeProvider` to make the tokens available for the components. Otherwise the styling helpers will return an error.

```js
import { ThemeProvider } from 'path/to/stylesheets';

const App = ({ children }) => {
  return <ThemeProvider theme="default">{children}</ThemeProvider>;
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
    color: ${color('neutral', 30)};
  }
`;
```

## Deployment

1. Copy `.env.example` to `.env` and add your staticpages `DEPLOY_KEY`.
2. Run `yarn deploy` to deploy static storybook app via staticpages-cli.

## Roadmap

Write something about future releases and whats on the list for the next development phase.

- [x] Update readme
- [x] Use Typescript
- [ ] Add more jest tests

---

<div align="center">
  <img src="http://github.fork.de/heart.png" width="38" height="41" alt="Fork Logo" />

  <p>Brought to you by <a href="https://www.fork.de">Fork Unstable Media GmbH</a></p>
</div>

---
