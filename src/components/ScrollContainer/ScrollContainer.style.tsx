import styled from 'styled-components';
import { space } from '../../stylesheets';

const StyledScrollContainer = styled.div`
  position: relative;
  overflow: hidden;

  .scrollContainer__items {
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    scrollbar-width: none;
    align-items: center;
    display: flex;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scrollContainer__item {
    flex-shrink: 0;
    margin-right: ${space('s')};
    scroll-snap-align: start;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .scrollContainer__prev,
  .scrollContainer__next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .scrollContainer__prev {
    left: ${space('xxs')};
  }

  .scrollContainer__next {
    right: ${space('xxs')};
  }

  button[aria-hidden='true'] {
    display: none;
  }
`;

export default StyledScrollContainer;
