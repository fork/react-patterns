import styled, { css } from 'styled-components';

import { color, space, hideVisually } from '../../stylesheets';

const StyledCheckbox = styled.div`
  display: block;
  width: 100%;

  label {
    display: flex;
  }

  .checkbox__label {
    position: relative;
    display: flex;
    align-items: center;
    color: ${color('black')};
    cursor: pointer;
    hyphens: auto;
    padding-left: ${space('s')};

    ${({ hideLabel }) =>
      hideLabel &&
      css`
        ${hideVisually()}
      `}

    a {
      text-decoration: underline;
    }
  }

  .checkbox__custom-checkbox {
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid ${color('black')};
    width: 20px;
    height: 20px;

    ${props =>
      props.error &&
      css`
        border-color: ${color('primary')};
      `}

    ${props =>
      props.success &&
      css`
        border-color: green;
      `}

    svg {
      display: none;
      fill: #000;
      margin-left: 2px;

      ${props =>
        props.success &&
        css`
          fill: green;
        `}
    }
  }

  input {
    ${hideVisually()}

    &[disabled] ~ .checkbox__label, &[disabled] ~ .checkbox__custom-checkbox {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:checked ~ .checkbox__custom-checkbox svg {
      display: block;
    }
  }

  .checkbox__required {
    position: absolute;
    top: -10px;
    right: -10px;
    line-height: 1;
    width: 6px;
    height: 6px;
    color: ${color('black')};

    ${props =>
      props.error &&
      css`
        color: ${color('primary')};
      `}

    ${props =>
      props.success &&
      css`
        color: green;
      `}
  }

  .checkbox__error {
    display: block;
    color: ${color('primary')};
  }
`;

export default StyledCheckbox;
