import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledSelect = styled.div<{ error?: boolean; success?: boolean; hideLabel?: boolean }>`
  label {
    display: block;
    margin-bottom: ${space('s')};
    color: ${color('neutral')};
    line-height: 1;
    ${props => props.hideLabel && hideVisually()}
  }

  svg {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    right: ${space('s')};
  }

  .select__wrapper {
    position: relative;
  }

  select {
    width: 100%;
    outline: none;
    background: transparent;
    appearance: none;
    color: ${color('neutral')};
    line-height: 1;
    border: 1px solid ${color('neutral')};
    padding: ${space('s')};

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
        color: ${color('success')};
      }

      select {
        border-color: ${color('success')};
      }
    `}

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('warning')};
      }

      select {
        border-color: ${color('warning')};
      }
    `}

  .select__error {
    display: block;
    color: ${color('warning')};
    margin-top: ${space('s')};
  }
`;

export default StyledSelect;
