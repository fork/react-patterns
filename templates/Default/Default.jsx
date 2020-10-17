// Component with CSS Default Container based on grid config from theme

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../../components/Container';

const StyledDefaultTemplate = styled.div`
  .default__wrapper {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const Default = ({ children }) => {
  return (
    <StyledDefaultTemplate>
      <div className="default__wrapper">
        <Container hasDebugGrid>{children}</Container>
      </div>
    </StyledDefaultTemplate>
  );
};

Default.propTypes = {
  children: PropTypes.node
};

Default.defaultProps = {
  children: null
};

export default Default;
