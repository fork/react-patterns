import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledRadio = styled.div<{ error?: boolean; hideLabel?: boolean }>`
  .radio__label {
    margin-bottom: ${space('s')};
    ${props => props.hideLabel && hideVisually()}
  }

  .radio__item {
    display: flex;
    align-items: center;
    margin-bottom: ${space('s')};
  }

  label {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${color('neutral')};
    line-height: 1;
  }

  .radio__custom-icon {
    position: relative;
    display: inline-block;
    width: ${space('m')};
    height: ${space('m')};
    border: 1px solid ${color('neutral')};
    margin-right: ${space('xs')};
    border-radius: 100%;

    &:after {
      display: none;
      position: absolute;
      content: '';
      border-radius: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${space('xs')};
      height: ${space('xs')};
      background: ${color('neutral')};
    }
  }

  input {
    ${hideVisually()}
  }

  input[disabled] ~ label {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input:checked ~ label > .radio__custom-icon:after {
    display: block;
  }

  .radio__wrapper {
    position: relative;
  }

  .radio__error {
    display: block;
    color: ${color('warning')};
    margin-top: ${space('s')};
  }

  ${props =>
    props.error &&
    css`
      .radio__label {
        color: ${color('warning')};
      }

      label .radio__custom-icon {
        border-color: ${color('primary')};
      }
    `}
`;

export default StyledRadio;
