import { css } from 'styled-components';

const sanitize = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  ::before,
  ::after {
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }

  html {
    cursor: default; /* 1 */
    line-height: 1.5; /* 2 */
    -moz-tab-size: 4; /* 3 */
    tab-size: 4; /* 3 */
    -webkit-tap-highlight-color: transparent /* 4 */;
    -ms-text-size-adjust: 100%; /* 5 */
    -webkit-text-size-adjust: 100%; /* 5 */
    word-break: break-word; /* 6 */
  }

  body {
    margin: 0;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  dl dl,
  dl ol,
  dl ul,
  ol dl,
  ul dl {
    margin: 0;
  }

  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin: 0;
  }

  hr {
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  main {
    display: block;
  }

  nav ol,
  nav ul {
    list-style: none;
    padding: 0;
  }

  pre {
    font-family: monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  iframe {
    border-style: none;
  }

  img {
    border-style: none;
  }

  svg:not([fill]) {
    fill: currentColor;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  table {
    border-collapse: collapse;
  }

  button,
  input,
  select {
    margin: 0;
  }

  button {
    overflow: visible; /* 1 */
    text-transform: none; /* 2 */
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  fieldset {
    border: 1px solid #a0a0a0; /* 1 */
    padding: 0.35em 0.75em 0.625em; /* 2 */
  }

  input {
    overflow: visible;
  }

  legend {
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    white-space: normal; /* 1 */
  }

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  select {
    text-transform: none;
  }

  textarea {
    margin: 0; /* 1 */
    overflow: auto; /* 2 */
    resize: vertical; /* 3 */
  }

  [type='checkbox'],
  [type='radio'] {
    padding: 0;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  details {
    display: block;
  }

  dialog {
    background-color: white;
    border: solid;
    color: black;
    display: block;
    height: -moz-fit-content;
    height: -webkit-fit-content;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    -ms-touch-action: manipulation; /* 1 */
    touch-action: manipulation; /* 2 */
  }

  [hidden] {
    display: none;
  }

  [aria-busy='true'] {
    cursor: progress;
  }

  [aria-controls] {
    cursor: pointer;
  }

  [aria-disabled='true'],
  [disabled] {
    cursor: not-allowed;
  }

  [aria-hidden='false'][hidden] {
    display: initial;
  }

  [aria-hidden='false'][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    position: absolute;
  }
`;

export default sanitize;
