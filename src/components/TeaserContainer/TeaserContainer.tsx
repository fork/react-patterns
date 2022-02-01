import React, { ReactElement } from 'react';

import { TeaserProps } from '../Teaser/Teaser';

import StyledTeaserContainer from './TeaserContainer.style';

export type TeaserContainerProps = {
  className?: string;
  children: ReactElement<TeaserProps> | ReactElement<TeaserProps>[];
};

const TeaserContainer = ({ children, className }: TeaserContainerProps) => (
  <StyledTeaserContainer className={className}>{children}</StyledTeaserContainer>
);

TeaserContainer.defaultProps = {
  className: undefined
};

export default TeaserContainer;
