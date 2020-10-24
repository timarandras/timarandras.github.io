import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faEnvelope, faHome, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';

import ListItemLink from './ListItemLink';

export default function PersonalCard() {
  return (
    <Card raised>
      <CardHeader
        avatar={
          <Avatar alt="András Timár, PhD." src="https://www.gravatar.com/avatar/8a67307a6895a1cfd5e6144771dcaaf2" />
        }
        title={<Typography variant="h5">Personal</Typography>}
      />
      <CardContent>
        <List>
          <ListItemLink href="tel:+36-70-318-1789" target="_blank" rel="noreferrer noopener">
            <ListItemIcon>
              <FontAwesomeIcon icon={faMobile} size="2x" />
            </ListItemIcon>
            <ListItemText primary="+36-70-318-1789" />
          </ListItemLink>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faBirthdayCake} size="2x" />
            </ListItemIcon>
            <ListItemText primary="April 20, 1981" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} size="2x" />
            </ListItemIcon>
            <ListItemText primary="9/A Eötvös Lóránd str." secondary="Halásztelek, Hungary" />
          </ListItem>
          <ListItemLink href="mailto:Dr. András Timár <timaromar@gmail.com>">
            <ListItemIcon>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </ListItemIcon>
            <ListItemText primary="timaromar@gmail.com" />
          </ListItemLink>
          <ListItemLink href="https://www.linkedin.com/in/drandrastimar" target="_blank">
            <ListItemIcon>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </ListItemIcon>
            <ListItemText primary="www.linkedin.com/in/drandrastimar" />
          </ListItemLink>
          <ListItemLink href="https://github.com/timarandras" target="_blank">
            <ListItemIcon>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </ListItemIcon>
            <ListItemText primary="github.com/timarandras" />
          </ListItemLink>
        </List>
      </CardContent>
    </Card>
  );
}
