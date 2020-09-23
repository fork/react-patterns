import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledInput = styled.div`
  label {
    display: block;
    font-weight: bold;
    color: ${color('black')};
    line-height: 1;
    margin-bottom: ${space('s')};
    ${props => props.hideLabel && hideVisually()}
  }

  input {
    width: 100%;
    outline: none;
    background: transparent;
    color: ${color('black')};
    font-size: inherit;
    font-weight: normal;
    border: 1px solid ${color('black')};
    padding: ${space('s')};

    &::placeholder {
      font-weight: normal;
    }

    &::-ms-input-placeholder {
      font-weight: normal;
    }

    &:-ms-input-placeholder {
      font-weight: normal;
    }

    &[disabled] {
      opacity: 0.5;
    }

    &:focus {
      border-color: orange;
    }
  }

  .input__wrapper {
    position: relative;
  }

  .input__error {
    display: block;
    color: ${color('primary')};
  }

  ${props =>
    props.success &&
    css`
      label {
        color: green;
      }

      input {
        border-color: green;
      }
    `}

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('primary')};
      }

      input {
        border-color: ${color('primary')};
      }
    `}
`;

export default StyledInput;