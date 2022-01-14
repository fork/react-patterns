import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledFileUpload = styled.div<{ error?: boolean; success?: boolean; hideLabel?: boolean }>`
  .fileUpload__label {
    display: block;
    font-weight: bold;
    color: ${color('neutral', 100)};
    line-height: 1;
    ${props => props.hideLabel && hideVisually()}
  }

  .fileUpload__custom {
    display: block;
    width: 100%;
    outline: none;
    background: transparent;
    color: ${color('neutral', 100)};
    font-size: inherit;
    font-weight: normal;
    border: 1px solid ${color('neutral', 100)};
    padding: ${space('s')};
    margin-top: ${props => !props.hideLabel && space('s')};
    cursor: pointer;
  }

  input {
    ${hideVisually()}
  }

  input[disabled] + .fileUpload__custom {
    opacity: 0.5;
  }

  input:focus + .fileUpload__custom {
    border-color: ${color('neutral', 30)};
  }

  .fileUpload__output {
    display: block;
  }

  .fileUpload__error {
    display: block;
    color: ${color('warning')};
  }

  ${props =>
    props.success &&
    css`
      .fileUpload__label {
        color: ${color('success')};
      }

      .fileUpload__custom {
        border-color: ${color('success')};
      }
    `}

  ${props =>
    props.error &&
    css`
      .fileUpload__label {
        color: ${color('warning')};
      }

      .fileUpload__custom {
        border-color: ${color('warning')};
      }
    `}
`;

export default StyledFileUpload;
