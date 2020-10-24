import { Box, LinearProgress, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export default function LinearProgressWithLabel({ value, ...props }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <LinearProgress variant="determinate" value={10 * value} {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {value}
          /10
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
