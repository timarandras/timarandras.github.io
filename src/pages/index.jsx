import 'fontsource-roboto';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faEnvelope, faHome, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Layout>
      <SEO title="About me" />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Card className={classes.Card}>
              <CardHeader avatar={<Avatar>H</Avatar>} title="Personal Information" />
              <CardContent>
                <img src="https://www.gravatar.com/avatar/8a67307a6895a1cfd5e6144771dcaaf2" />
                <List>
                  <ListItem>
                    <ListItemText primary="Single-line item" secondary="Secondary text" />
                  </ListItem>
                </List>
                <Typography variant="body1">András Timár, PhD</Typography>
                <Typography variant="body1">
                  <FontAwesomeIcon icon={faMobile} color={theme.palette.primary.main} />
                  {` `}
                  +36-70-318-1789
                  <FontAwesomeIcon icon={faBirthdayCake} size="1x" />
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  <FontAwesomeIcon icon={faGithub} size="1x" />
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
          <Grid item xs={6}>
            <Card>xs=6</Card>
          </Grid>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default IndexPage;
