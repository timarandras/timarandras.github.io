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
        <Grid item xs={2} lg={3}>
          <PersonalCard />
        </Grid>
        <Grid item xs={2} lg={3}>
          <JobsCard />
        </Grid>
        <Grid item xs={2} lg={3}>
          <EducationCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2} lg={3}>
          <ExperienceCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SourceCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
