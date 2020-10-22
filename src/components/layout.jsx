/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../gatsby-theme-material-ui-top-layout/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="lg">{children}</Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
