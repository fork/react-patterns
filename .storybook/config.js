import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import 'lazysizes';
import 'picturefill';

const req = require.context('../components/', true, /stories\.(js|jsx|mdx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'React Patterns',
      brandUrl: 'https://fork.de'
    })
  }
});

configure(loadStories, module);
