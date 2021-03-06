import React, { useState } from 'react';

import Checkbox from './Checkbox';
import docs from './docs.mdx';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Checked = () => <Checkbox label="Checkbox 1" id="1" checked />;
export const Unchecked = () => <Checkbox label="Checkbox 2" id="2" />;
export const Error = () => (
  <Checkbox label="Checkbox 3" id="3" required error errorMessage="Dieses Feld ist verpflichtend" />
);
export const Success = () => <Checkbox label="Checkbox 3" id="3" required checked />;
export const Disabled = () => <Checkbox label="Checkbox 4" id="4" disabled />;
export const WithoutLabel = () => <Checkbox label="Checkbox 5" id="5" hideLabel />;
export const withState = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Checkbox 6"
      id="6"
      required
      checked={checked}
      onChange={() => setChecked(prev => !prev)}
    />
  );
};
