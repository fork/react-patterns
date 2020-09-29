import styled from 'styled-components';
import { space, color } from '../../stylesheets';

const StyledTabs = styled.div`
  .tabs__list {
    position: relative;
    list-style-type: none;
    overflow-x: scroll;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    border-bottom: 1px solid ${color('black')};
    padding: ${space('xs')} 0 0;
    border-radius: 0;
    margin: 0;
    justify-content: ${props => props.centered && 'center'};

    li {
      flex-shrink: 0;
    }

    a {
      position: relative;
      display: flex;
      align-items: center;
      color: ${color('black')};
      padding: ${space('xs')} ${space('m')};
      border-bottom: 2px solid transparent;

      &:hover {
        color: ${color('black')};
        border-color: ${color('primary')};
      }

      &:focus {
        outline: none;
        border-color: ${color('secondary')};
      }

      &[aria-selected='true'] {
        border-color: ${color('black')};
      }
    }

    li:last-of-type a {
      margin-right: 0;
    }
  }
`;

export const StyledTab = styled.div`
  display: block;
  padding-top: ${space('s')};

  &[aria-hidden='true'] {
    display: none;
  }
`;

export default StyledTabs;
