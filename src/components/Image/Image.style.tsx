import styled from 'styled-components';

const StyledImage = styled.img`
  display: inline-block;
  width: 100%;

  &.lazyload,
  &.lazyloading {
    opacity: 0;
    transition: opacity 400ms;
  }

  &.lazyloaded {
    transition: opacity 400ms;
    opacity: 1;
  }
`;

export default StyledImage;
