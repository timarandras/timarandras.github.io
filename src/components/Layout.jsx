import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children }) => <Container maxWidth="lg">{children}</Container>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
