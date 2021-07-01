import styled from 'styled-components';

import { color } from '../../stylesheets';

const StyledRichtext = styled.div`
  p {
    padding: 0.75rem 0;
  }

  h2,
  h3,
  h4 {
    margin: 1rem 0;
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

export default StyledRichtext;
