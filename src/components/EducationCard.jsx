import { faBrain, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader, List, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

import ListItemLink from './ListItemLink';

export default function JobsCard() {
  return (
    <Card raised>
      <CardHeader
        avatar={<FontAwesomeIcon icon={faGraduationCap} size="2x" />}
        title={<Typography variant="h5">Education</Typography>}
      />
      <CardContent>
        <List>
          <ListItemLink href="https://www.eet.bme.hu/" target="_blank" rel="noreferrer noopener">
            <ListItemIcon>
              <FontAwesomeIcon icon={faBrain} size="2x" />
            </ListItemIcon>
            <ListItemText primary="PhD Degree" secondary="Budapest University of Technology and Economics | 2013" />
          </ListItemLink>
          <ListItemLink href="https://www.eet.bme.hu/" target="_blank" rel="noreferrer noopener">
            <ListItemIcon>
              <FontAwesomeIcon icon={faGraduationCap} size="2x" />
            </ListItemIcon>
            <ListItemText
              primary="Electrical Engineer MSc."
              secondary="Budapest University of Technology and Economics | 2006"
            />
          </ListItemLink>
        </List>
      </CardContent>
    </Card>
  );
}
