import styled from 'styled-components';

import { color, space, typography } from '../../stylesheets';

const StyledRichtext = styled.div`
  li,
  p {
    ${typography('copy')};
  }

  h2 {
    ${typography('headline-2')};
  }

  h3 {
    ${typography('headline-3')};
  }

  h4 {
    ${typography('headline-4')};
  }

  h2,
  h3,
  h4 {
    margin: 0 0 ${space('m')} 0;
  }

  p {
    margin: 0 0 ${space('m')} 0;
  }

  ul,
  ol {
    list-style-position: inside;
    margin-bottom: ${space('m')};
    padding-left: ${space('m')};

    li {
      margin-bottom: ${space('xs')};

      &::marker {
        color: ${color('primary')};
        font-weight: bold;
      }
    }

    li > ul,
    li > ol {
      margin-top: ${space('s')};
    }
  }

  ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
    ol {
      list-style-type: lower-latin;
      ol {
        list-style-type: square;
      }
    }
  }

  a {
    border-bottom: 1px solid ${color('primary')};
    color: ${color('primary')};
    text-decoration: none;
  }
`;

export default StyledRichtext;
