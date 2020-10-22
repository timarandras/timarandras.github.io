import 'fontsource-roboto';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About me" />
      <Grid container spacing={3}>
        <Grid item xs>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
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

      <h1>András Timár, PhD</h1>
      <h2>Soon...</h2>
      <Button variant="contained" color="primary">
        noausd
      </Button>
      <Button variant="contained" color="secondary">
        noausd
      </Button>
    </Layout>
  );
};

export default IndexPage;
