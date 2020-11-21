import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, Link, Typography } from '@material-ui/core';
import useTimeAgo from '@rooks/use-time-ago';
import React from 'react';

const date = new Date();

export default function SourceCard() {
  // @ts-ignore
  const lastUpdated = useTimeAgo(date.getTime());
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
      <CardContent>
        <Typography align="center" color="textSecondary" variant="body1">
          Last updated {lastUpdated}
        </Typography>
      </CardContent>
    </Card>
  );
}
