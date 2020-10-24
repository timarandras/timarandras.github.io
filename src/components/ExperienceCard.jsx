import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import LinearProgressWithLabel from './LinearProgressWithLabel';
import skills from './skills';

const SkillsTable = ({ type }) => (
  <Paper elevation={5}>
    <Toolbar>
      <Typography variant="h6">{type}</Typography>
    </Toolbar>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Skill</TableCell>
            <TableCell align="center">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skills[type].map((skill) => (
            <TableRow key={skill.name}>
              <TableCell component="th" scope="row">
                {skill.name}
              </TableCell>
              <TableCell align="right">
                <LinearProgressWithLabel value={skill.level} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

SkillsTable.propTypes = {
  type: PropTypes.string.isRequired,
};

export default function ExperienceCard() {
  return (
    <Card raised>
      <CardHeader
        avatar={<FontAwesomeIcon icon={faFlask} size="2x" />}
        title={<Typography variant="h5">Experience | Skills</Typography>}
      />
      <CardContent>
        <Grid container spacing={1}>
          {/* eslint-disable react/no-array-index-key */}
          {Object.keys(skills).map((type, k) => (
            <Grid key={k} item xs={12} md={6} lg={4}>
              <SkillsTable type={type} />
            </Grid>
          ))}
          {/* eslint-enable react/no-array-index-key */}
        </Grid>
      </CardContent>
    </Card>
  );
}
