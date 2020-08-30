import 'fontsource-roboto';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    color: theme.palette.text.secondary,
  },
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="About me" />
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.Card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be nevo lent
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                "a benevolent smile"
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.Card}>xs</Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.Card}>xs</Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.Card}>xs</Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.Card}>xs=6</Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.Card}>xs</Card>
        </Grid>
      </Grid>

      <h1>András Timár, PhD</h1>
      <h2>Soon...</h2>
    </Layout>
  );
};

export default IndexPage;
