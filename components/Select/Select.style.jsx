import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledSelect = styled.div`
  label {
    display: block;
    margin-bottom: ${space('m')};
    font-weight: bold;
    color: ${color('black')};
    line-height: 1;
    ${props => props.hideLabel && hideVisually()}
  }

  svg {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    right: ${space('m')};
  }

  .select__wrapper {
    position: relative;
  }

  select {
    width: 100%;
    outline: none;
    background: transparent;
    appearance: none;
    color: ${color('black')};
    font-size: inherit;
    font-weight: normal;
    line-height: 1;
    border: 1px solid ${color('black')};
    padding: ${space('m')};

    option {
      color: black;
    }

    &[disabled] {
      opacity: 0.5;

      & + svg {
        opacity: 0.5;
      }
    }

    &::-ms-expand {
      display: none;
    }
  }

  ${props =>
    props.success &&
    css`
      label {
        color: green;
      }

      select {
        border-color: green;
      }
    `}

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('primary')};
      }

      select {
        border-color: ${color('primary')};
      }
    `}
`;

export default StyledSelect;
