import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import SetThemeContext from '../../contexts/SetThemeContext';
import Viewport from './viewport';

export default function TopLayout({ children, theme: initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <>
      <Viewport />
      <ThemeProvider theme={theme}>
        <SetThemeContext.Provider value={setTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </SetThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

TopLayout.defaultProps = {
  children: null,
};

TopLayout.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
};
