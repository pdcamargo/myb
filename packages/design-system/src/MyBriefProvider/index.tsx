import React from 'react';
import { ThemeProvider } from 'styled-components';

import MyBriefGlobalCss from '../styles/MyBriefGlobalCss';

import theme from '../theme/theme';

const MyBriefProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <MyBriefGlobalCss />
  </ThemeProvider>
);

export default MyBriefProvider;
