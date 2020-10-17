import React, { useState } from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
};

export const Checked: React.FC = () => <Checkbox label="Checkbox 1" id="1" checked />;
export const Unchecked: React.FC = () => <Checkbox label="Checkbox 2" id="2" />;
export const Error: React.FC = () => (
  <Checkbox label="Checkbox 3" id="3" required error errorMessage="Dieses Feld ist verpflichtend" />
);
export const Success: React.FC = () => <Checkbox label="Checkbox 3" id="3" required checked />;
export const Disabled: React.FC = () => <Checkbox label="Checkbox 4" id="4" disabled />;
export const WithoutLabel: React.FC = () => <Checkbox label="Checkbox 5" id="5" hideLabel />;
export const withState: React.FC = () => {
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
