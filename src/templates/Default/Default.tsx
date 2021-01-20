import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledDefaultTemplate = styled.div`
  .default__wrapper {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

type DefaultTemplateProps = {
  children: ReactNode;
};

const Default = ({ children }: DefaultTemplateProps): JSX.Element => {
  return (
    <StyledDefaultTemplate>
      <div className="default__wrapper">{children}</div>
    </StyledDefaultTemplate>
  );
};

export default Default;
