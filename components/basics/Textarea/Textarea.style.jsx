import styled, { css } from 'styled-components';
import { color, space } from '../../../stylesheets';

const StyledTextarea = styled.div`
  label {
    display: block;
    font-weight: bold;
    color: ${color('black')};
    margin-bottom: ${space('m')};
  }

  textarea {
    width: 100%;
    outline: none;
    background: transparent;
    color: ${color('black')};
    font-size: inherit;
    font-weight: normal;
    resize: none;
    position: relative;
    border: 1px solid ${color('black')};
    padding: ${space('m')};

    &::placeholder {
      color: ${color('black')};
      font-weight: normal;
    }

    &::-ms-input-placeholder {
      color: ${color('black')};
      font-weight: normal;
    }

    &:-ms-input-placeholder {
      color: ${color('black')};
      font-weight: normal;
    }

    &:focus {
      border-color: orange;
    }
  }

  .textarea__error {
    display: block;
    color: ${color('primary')};
  }

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('primary')};
      }

      textarea {
        border-color: ${color('primary')};
      }
    `}

  ${props =>
    props.success &&
    css`
      label {
        color: green;
      }

      textarea {
        border-color: green;
      }
    `}
`;

export default StyledTextarea;
