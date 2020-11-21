import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import React, { useContext } from 'react';

import SetThemeContext from '../contexts/SetThemeContext';

const ThemeButton = () => {
  const theme = useTheme();
  const setTheme = useContext(SetThemeContext);

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            onChange={() => {
              setTheme(
                createMuiTheme({
                  ...theme,
                  palette: {
                    type: theme.palette.type === 'dark' ? 'light' : 'dark',
                  },
                }),
              );
            }}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label="Toggle Theme"
      />
    </FormGroup>
  );
};

export default ThemeButton;
