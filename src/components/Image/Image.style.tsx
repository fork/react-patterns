import styled from 'styled-components';
import { ReturnImageProps } from './Image';

const StyledImage = styled.img<ReturnImageProps>`
  display: inline-block;

  img {
    transition-property: opacity;
    transition-delay: 0.3s;
  }

  img[data-src],
  &.lazyload,
  &.lazyloading {
    opacity: 0;
  }

  img,
  &.lazyloaded {
    opacity: 1;
  }
`;

export default StyledImage;
