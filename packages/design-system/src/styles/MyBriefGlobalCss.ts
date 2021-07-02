import { createGlobalStyle } from 'styled-components';

import CssReset from './CssReset';

const MyBriefGlobalCss = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');

  ${CssReset}

  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  body {
    line-height: 1.65;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    direction: ltr;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
  }
`;

export default MyBriefGlobalCss;
