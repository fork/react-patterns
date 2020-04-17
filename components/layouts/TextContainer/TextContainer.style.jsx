import styled from 'styled-components';

import { color } from '../../../stylesheets';

const StyledTextContainer = styled.div`
  p {
    padding: 0.75rem 0;
  }

  h1 {
    display: inline-block;
  }

  h2,
  h3 {
    margin: 1rem 0;

    [data-whatinput='mouse'] &,
    [data-whatinput='touch'] & {
      outline: 0;
    }
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }

  a {
    border-bottom: 1px solid ${color('black')};
    color: ${color('black')};
    text-decoration: none;
  }
`;

export default StyledTextContainer;
