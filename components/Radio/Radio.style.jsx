import styled, { css } from 'styled-components';
import { color, space, hideVisually } from '../../stylesheets';

const StyledRadio = styled.div`
  .radio__label {
    font-weight: bold;
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
    color: ${color('black')};
    line-height: 1;
  }

  .radio__custom-icon {
    position: relative;
    display: inline-block;
    width: ${space('l')};
    height: ${space('l')};
    border: 1px solid ${color('black')};
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
      width: ${space('s')};
      height: ${space('s')};
      background: ${color('black')};
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
    color: ${color('primary')};
    margin-top: ${space('s')};
  }

  ${props =>
    props.error &&
    css`
      .radio__label {
        color: ${color('primary')};
      }

      label .radio__custom-icon {
        border-color: ${color('primary')};
      }
    `}
`;

export default StyledRadio;
