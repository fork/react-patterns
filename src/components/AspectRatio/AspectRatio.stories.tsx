import React from 'react';
import { Story } from '@storybook/react';

import AspectRatio, { AspectRatioProps } from './AspectRatio';
import docs from './docs.mdx';

export default {
  title: 'Components/Utility/AspectRatio',
  component: AspectRatio,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Template: Story<AspectRatioProps> = args => {
  const { ratio } = args;

  return (
    <div style={{ background: '#80ff00', width: '400px' }}>
      <AspectRatio {...args}>{ratio}</AspectRatio>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { ratio: '16:9' };
