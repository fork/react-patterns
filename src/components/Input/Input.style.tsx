import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledInput = styled.div<{ error?: boolean; success?: boolean; hideLabel?: boolean }>`
  label {
    display: block;
    font-weight: bold;
    color: ${color('neutral')};
    line-height: 1;
    margin-bottom: ${space('s')};
    ${props => props.hideLabel && hideVisually()}
  }

  input {
    width: 100%;
    outline: none;
    background: transparent;
    color: ${color('neutral')};
    border: 1px solid ${color('neutral')};
    padding: ${space('s')};

    &::placeholder {
      font-weight: normal;
      color: ${color('neutral', 50)};
      opacity: 1;
    }

    &[disabled] {
      opacity: 0.5;
    }

    &:focus {
      border-color: ${color('neutral', 30)};
    }
  }

  .input__wrapper {
    position: relative;
  }

  .input__error {
    display: block;
    margin-top: ${space('s')};
    color: ${color('warning')};
  }

  ${props =>
    props.success &&
    css`
      label {
        color: ${color('success')};
      }

      input {
        border-color: ${color('success')};
      }
    `}

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('warning')};
      }

      input {
        border-color: ${color('warning')};
      }
    `}
`;

export default StyledInput;
