import React, { ReactNode } from 'react';

import { StyledTab } from './Tabs.style';

export interface TabProps {
  index?: number;
  selected?: boolean;
  title: string | ReactNode;
  children?: ReactNode;
}

const Tab = ({ children, index, selected }: TabProps) => (
  <StyledTab
    id={`tabpanel_${index}`}
    role="tabpanel"
    aria-labelledby={`tab_${index}`}
    aria-hidden={!selected}
  >
    {children}
  </StyledTab>
);

export default Tab;
