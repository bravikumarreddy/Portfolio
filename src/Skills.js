import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Modal,
  Dialog,
  Grid,
} from '@material-ui/core';

import awsLogo from '../assets/tech/aws.png';
import babelLogo from '../assets/tech/babel.png';
import dynamodbLogo from '../assets/tech/dynamodb.png';
import firestoreLogo from '../assets/tech/firestore.png';
import lambdaLogo from '../assets/tech/lambda.png';
import laravelLogo from '../assets/tech/laravel.png';
import materialuiLogo from '../assets/tech/materialui.png';
import mysqlLogo from '../assets/tech/mysql.png';
import nodejsLogo from '../assets/tech/nodejs.png';
import phpLogo from '../assets/tech/php.png';
import reactLogo from '../assets/tech/react.png';
import reduxLogo from '../assets/tech/redux.png';
import serverlessLogo from '../assets/tech/serverless.png';
import shopifyLogo from '../assets/tech/shopify.png';
import webpackLogo from '../assets/tech/webpack.png';
import bootstrapLogo from '../assets/tech/bootstrap.png';
import nextjsLogo from '../assets/tech/nextjs.png';
import javascriptLogo from '../assets/tech/javascript.png';
import graphqlLogo from '../assets/tech/graphql.png';
import htmlLogo from '../assets/tech/html.png';
import cssLogo from '../assets/tech/css.png';
import dockerLogo from '../assets/tech/docker.png';
import kubernetesLogo from '../assets/tech/kubernetes.png';
import javaLogo from '../assets/tech/java.png';
import pythonLogo from '../assets/tech/python.png';

import SingleSkill from './SingleSkill';
const useStyles = makeStyles((theme) => ({
  projectsTitle: {
    padding: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontWeight: 500,
  },
  disclaimer: {
    padding: '20px',
    fontWeight: 400,
  },
  skillContainer: {
    margin: '0px',
  },
}));
const Skills = (props) => {
  const classes = useStyles();
  var skillsArr = [
    {
      icon: javascriptLogo,
      toolTip: 'javascript',
      percent: 95,
    },
    {
      icon: htmlLogo,
      toolTip: 'html',
      percent: 98,
    },
    {
      icon: cssLogo,
      toolTip: 'css',
      percent: 70,
    },
    {
      icon: reactLogo,
      toolTip: 'react',
      percent: 95,
    },
    {
      icon: reduxLogo,
      toolTip: 'redux',
      percent: 80,
    },
    {
      icon: webpackLogo,
      toolTip: 'webpack',
      percent: 95,
    },
    {
      icon: babelLogo,
      toolTip: 'babel',
      percent: 50,
    },
    {
      icon: nodejsLogo,
      toolTip: 'nodejs',
      percent: 95,
    },
    {
      icon: graphqlLogo,
      toolTip: 'graphql',
      percent: 60,
    },
    {
      icon: shopifyLogo,
      toolTip: 'shopify',
      percent: 80,
    },
    {
      icon: serverlessLogo,
      toolTip: 'serverless',
      percent: 70,
    },
    {
      icon: bootstrapLogo,
      toolTip: 'bootstrap',
      percent: 100,
    },
    {
      icon: awsLogo,
      toolTip: 'aws',
      percent: 70,
    },
    {
      icon: dockerLogo,
      toolTip: 'docker',
      percent: 80,
    },
    {
      icon: kubernetesLogo,
      toolTip: 'kubernetes',
      percent: 40,
    },
    {
      icon: nextjsLogo,
      toolTip: 'nextjs',
      percent: 90,
    },
    {
      icon: materialuiLogo,
      toolTip: 'materialui',
      percent: 92,
    },
    {
      icon: firestoreLogo,
      toolTip: 'firestore',
      percent: 60,
    },
    {
      icon: dynamodbLogo,
      toolTip: 'dynamodb',
      percent: 70,
    },
    {
      icon: lambdaLogo,
      toolTip: 'lambda',
      percent: 60,
    },

    {
      icon: phpLogo,
      toolTip: 'php',
      percent: 80,
    },
    {
      icon: mysqlLogo,
      toolTip: 'mysql',
      percent: 95,
    },
    {
      icon: laravelLogo,
      toolTip: 'laravel',
      percent: 60,
    },
    {
      icon: pythonLogo,
      toolTip: 'python',
      percent: 70,
    },
    {
      icon: javaLogo,
      toolTip: 'java',
      percent: 30,
    },
  ];
  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Paper elevation={5} style={{ marginBottom: '50px' }}>
          <Typography variant="h5" className={classes.projectsTitle}>
            Skills
          </Typography>
          <Typography variant="body1" className={classes.disclaimer}>
            As a computer science graduate, I am continuously learning new
            technologies and adapting to recent trends. I am ready to learn new
            skills required by the company that helps me improve the company's
            performance. Below skills represent familiarity with technologies i
            have been working within recent years.
          </Typography>
          <Grid container className={classes.skillContainer}>
            {skillsArr.map((value, index) => {
              return (
                <Grid item key={index}>
                  <SingleSkill iconSettings={value}></SingleSkill>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default hot(Skills);
