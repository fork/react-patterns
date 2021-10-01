import styled, { css } from 'styled-components';
import { color, hideVisually, space } from '../../stylesheets';

const StyledTextarea = styled.div<{ error?: boolean; success?: boolean; hideLabel?: boolean }>`
  label {
    display: block;
    font-weight: bold;
    color: ${color('neutral', 100)};
    margin-bottom: ${space('s')};
    ${props => props.hideLabel && hideVisually()}
  }

  textarea {
    width: 100%;
    outline: none;
    background: transparent;
    color: ${color('neutral', 100)};
    font-size: inherit;
    font-weight: normal;
    resize: none;
    position: relative;
    border: 1px solid ${color('neutral', 100)};
    padding: ${space('m')};

    &::placeholder {
      color: ${color('neutral', 100)};
      font-weight: normal;
    }

    &::-ms-input-placeholder {
      color: ${color('neutral', 100)};
      font-weight: normal;
    }

    &:-ms-input-placeholder {
      color: ${color('neutral', 100)};
      font-weight: normal;
    }

    &:focus {
      border-color: ${color('neutral', 30)};
    }
  }

  .textarea__error {
    display: block;
    color: ${color('warning')};
  }

  ${props =>
    props.error &&
    css`
      label {
        color: ${color('warning')};
      }

      textarea {
        border-color: ${color('warning')};
      }
    `}

  ${props =>
    props.success &&
    css`
      label {
        color: ${color('success')};
      }

      textarea {
        border-color: ${color('success')};
      }
    `}
`;

export default StyledTextarea;
