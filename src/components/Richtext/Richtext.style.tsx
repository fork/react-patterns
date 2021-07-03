import styled from 'styled-components';

import { color, space, typography } from '../../stylesheets';

const StyledRichtext = styled.div`
  p {
    padding: 0;
    margin: 0 0 ${space('s')};
    ${typography('copy')};
  }

  h2 {
    ${typography('headline2')};
  }

  h3 {
    ${typography('headline3')};
  }

  h4 {
    ${typography('headline4')};
  }

  h2,
  h3,
  h4 {
    margin: ${space('m')} 0 ${space('s')};
  }

  ul,
  ol {
    list-style-position: inside;
    padding: 0;
    margin: 0 0 ${space('m')};

    li {
      ${typography('copy')};
    }
  }

  a {
    border-bottom: 1px solid ${color('primary')};
    color: ${color('primary')};
    text-decoration: none;
  }
`;

export default StyledRichtext;
