import styled, { css } from 'styled-components';
import { color, hideVisually, space } from '../../stylesheets';

const StyledTextarea = styled.div<{ error?: boolean; success?: boolean; hideLabel?: boolean }>`
  label {
    display: block;
    color: ${color('neutral')};
    margin-bottom: ${space('s')};
    ${props => props.hideLabel && hideVisually()}
  }

  textarea {
    width: 100%;
    outline: none;
    background: transparent;
    color: ${color('neutral')};
    resize: none;
    position: relative;
    border: 1px solid ${color('neutral')};
    padding: ${space('s')};

    &::placeholder {
      opacity: 1;
      color: ${color('neutral', 30)};
    }

    &:focus {
      border-color: ${color('neutral', 30)};
    }
  }

  .textarea__error {
    display: block;
    color: ${color('warning')};
    margin-top: ${space('xs')};
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
