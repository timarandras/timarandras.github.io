import { Grid } from '@material-ui/core';
import React from 'react';

import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';
import JobsCard from '../components/JobsCard';
import Layout from '../components/Layout';
import PersonalCard from '../components/PersonalCard';
import SEO from '../components/Seo';
import SourceCard from '../components/SourceCard';
import ThemeButton from '../components/ThemeButton';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About me" />
      <ThemeButton />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <PersonalCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <JobsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EducationCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
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
