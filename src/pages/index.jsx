import { Grid } from '@material-ui/core';
import React from 'react';

import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';
import JobsCard from '../components/JobsCard';
import Layout from '../components/Layout';
import PersonalCard from '../components/PersonalCard';
import SEO from '../components/Seo';
import SourceCard from '../components/SourceCard';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About me" />
      <Grid container spacing={3}>
        <Grid item xs>
          <PersonalCard />
        </Grid>
        <Grid item xs>
          <JobsCard />
        </Grid>
        <Grid item xs>
          <EducationCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <ExperienceCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <SourceCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
