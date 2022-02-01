import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledFileUpload = styled.div<{
  error?: boolean;
  success?: boolean;
  hideLabel?: boolean;
  output?: string;
}>`
  .fileUpload__label {
    color: ${color('neutral')};
    margin-bottom: ${space('s')};
    ${props => props.hideLabel && hideVisually()}
  }

  .fileUpload__custom {
    position: relative;
    display: block;
    width: 100%;
    outline: none;
    background: transparent;
    color: ${color('neutral')};
    font-size: inherit;
    font-weight: normal;
    border: 1px solid ${color('neutral')};
    padding: ${space('s')};
    cursor: pointer;

    svg {
      fill: ${color('neutral')};
      position: absolute;
      right: ${space('s')};
      top: 50%;
      transform: translateY(-50%);
    }
  }

  input {
    ${hideVisually()}
  }

  input:disabled + .fileUpload__custom {
    border-color: ${color('neutral', 30)};
  }

  .fileUpload__output {
    display: block;
  }

  .fileUpload__error {
    display: block;
    margin-top: ${space('s')};
    color: ${color('warning')};
  }

  ${props =>
    !props.output &&
    css`
      .fileUpload__output {
        color: ${color('neutral', 50)};
      }
    `}

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
