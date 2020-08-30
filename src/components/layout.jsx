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

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="lg">{children}</Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
