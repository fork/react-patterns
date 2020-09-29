import styled, { css } from 'styled-components';
import { color, space } from '../../stylesheets';

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
      border-color: ${color('secondary')};
    }
  }

  .textarea__error {
    display: block;
    color: ${color('highlight')};
  }

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('highlight')};
      }

      textarea {
        border-color: ${color('highlight')};
      }
    `}

  ${props =>
    props.success &&
    css`
      label {
        color: ${color('secondary')};
      }

      textarea {
        border-color: ${color('secondary')};
      }
    `}
`;

export default StyledTextarea;
