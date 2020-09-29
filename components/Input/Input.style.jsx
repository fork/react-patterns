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
      border-color: ${color('secondary')};
    }
  }

  .input__wrapper {
    position: relative;
  }

  .input__error {
    display: block;
    color: ${color('highlight')};
  }

  ${props =>
    props.success &&
    css`
      label {
        color: ${color('secondary')};
      }

      input {
        border-color: ${color('secondary')};
      }
    `}

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('highlight')};
      }

      input {
        border-color: ${color('highlight')};
      }
    `}
`;

export default StyledInput;
