/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children }) => <Container maxWidth="md">{children}</Container>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
