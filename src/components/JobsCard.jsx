import { faCode, faSatellite, faSuitcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader, List, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

import ListItemLink from './ListItemLink';

export default function JobsCard() {
  return (
    <Card raised>
      <CardHeader
        avatar={<FontAwesomeIcon icon={faSuitcase} size="2x" />}
        title={<Typography variant="h5">Jobs</Typography>}
      />
      <CardContent>
        <List>
          <ListItemLink href="https://www.c3s.hu/" target="_blank" rel="noreferrer noopener">
            <ListItemIcon>
              <FontAwesomeIcon icon={faSatellite} size="2x" />
            </ListItemIcon>
            <ListItemText primary="Aerospace Software Engineer" secondary="C3S LLC. | 2016 - current" />
          </ListItemLink>
          <ListItemLink href="https://www.eet.bme.hu/" target="_blank" rel="noreferrer noopener">
            <ListItemIcon>
              <FontAwesomeIcon icon={faUserGraduate} size="2x" />
            </ListItemIcon>
            <ListItemText
              primary="Senior Lecturer | IT SysAdmin"
              secondary="Budapest University of Technology and Economics | 2014 - current"
            />
          </ListItemLink>
          <ListItemLink href="https://www.eet.bme.hu/" target="_blank" rel="noreferrer noopener">
            <ListItemIcon>
              <FontAwesomeIcon icon={faCode} size="2x" />
            </ListItemIcon>
            <ListItemText primary="C++/Qt Application Developer" secondary="Mediagnost Co. Ltd. | 2005 - 2007" />
          </ListItemLink>
        </List>
      </CardContent>
    </Card>
  );
}
