import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, Link, Typography } from '@material-ui/core';
import React from 'react';

export default function SourceCard() {
  return (
    <Card raised>
      <CardContent>
        <Typography align="center" color="textSecondary" variant="body1">
          <Link
            color="inherit"
            href="https://github.com/timarandras/timarandras.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable react/jsx-one-expression-per-line */}
            View source on <FontAwesomeIcon icon={faGithub} />.{/* eslint-ensable react/jsx-one-expression-per-line */}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
