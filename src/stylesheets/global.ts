import { createGlobalStyle } from 'styled-components';

import sanitize from './sanitize';

import color from './tools/color';
import {
  colorsToCSSVariables,
  objectToCSSVariables,
  typographyToCSSVariables
} from './tools/css-variables';

const GlobalStyle = createGlobalStyle`
  ${sanitize}

  * { -webkit-tap-highlight-color: rgba(0,0,0,0); }

  html, body {
    width: 100%;
  }

  :root {
    /* General object to css variables transformation */
    ${props => objectToCSSVariables('spacings', props.theme.spacings)}
    ${props => objectToCSSVariables('font-families', props.theme.fontFamilies)}

    /* Special mixin to avoid color default value as css variable */
    ${props => colorsToCSSVariables(props.theme.colors)}
    
    /* Special mixin to build css variables from adaptive-size */
    ${props => typographyToCSSVariables(props.theme.typography)}
  }

  html {
    text-size-adjust: 100%;
    text-rendering: optimizeSpeed;  
    font-size: 100%;
  }

  body {
    font-family: Helvetica, sans-serif;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    background: ${color('neutral', 10)};
  }
  
  input, textarea, select, button {
    font-family: Helvetica, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    image-rendering: crisp-edges;
  }

  html,
  body,
  div,
  article,
  section,
  main,
  footer,
  header,
  form,
  fieldset,
  legend,
  pre,
  code,
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  textarea,
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='tel'],
  input[type='text'],
  input[type='url'] {
    box-sizing: border-box;
  }

  figure {
    margin: 0;
  }

  main {
    width: 100%;
    display: block;
    position: relative;
    background: #fff;
  }

  p {
    margin: 0;
  }
  
  i {
    font-style: italic;
  }

  b, strong {
    font-weight: 700;
  }

  @media print {
    @page { margin: 2cm }

    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }
    /*
    * Don't show links that are fragment identifiers
    */
    
    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre {
      white-space: pre-wrap !important;
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    /*
    * Printing Tables:
    * http://css-discuss.incutio.com/wiki/Printing_Tables
    */
    
    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  button {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background: transparent;
  }
`;

export default GlobalStyle;
