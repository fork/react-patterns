import React from 'react';
import PropTypes from 'prop-types';

import { StyledTab } from './Tabs.style';

const Tab = ({ children, index, selected }) => (
  <StyledTab
    id={`tabpanel_${index}`}
    role="tabpanel"
    aria-labelledby={`tab_${index}`}
    aria-hidden={!selected}
  >
    {children}
  </StyledTab>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number,
  selected: PropTypes.bool
};

Tab.defaultProps = { index: 0, selected: false };

export default Tab;
