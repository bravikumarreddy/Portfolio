import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Divider,
} from '@material-ui/core';

import SingleProject from './SingleProject';

import TechUsed from './TechUsed';
import p1I1 from '../assets/projects/project1/1.png';
import p1I2 from '../assets/projects/project1/2.png';
import p1I3 from '../assets/projects/project1/3.png';
import p1I4 from '../assets/projects/project1/4.png';
import p1Logo from '../assets/projects/project1/logo.png';
import p2I1 from '../assets/projects/project2/0.png';
import p2I2 from '../assets/projects/project2/1.png';
import p2I3 from '../assets/projects/project2/2.png';
import p2Logo from '../assets/projects/project2/logo.png';

import p3I1 from '../assets/projects/project3/1.png';
import p3I2 from '../assets/projects/project3/2.png';
import p3Logo from '../assets/projects/project3/logo.png';

import ProjectGallery from './ProjectGallery';
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

const useStyles = makeStyles((theme) => ({
  projectsTitle: {
    padding: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontWeight: 500,
  },
}));

const Projects = () => {
  const project1Arr = [p1I1, p1I2, p1I3, p1I4];
  const project2Arr = [p2I1, p2I2, p2I3];
  const project3Arr = [p3I1, p3I2];

  const classes = useStyles();
  return (
    <Grid container justify="center" style={{ margin: '40px 0px' }}>
      <Grid item xs={10}>
        <Paper elevation={5}>
          <Typography variant="h5" className={classes.projectsTitle}>
            PROJECTS
          </Typography>

          <SingleProject
            projectImages={project1Arr}
            appTitle={'All in one announcement banner'}
            appDescription={
              'Free shipping progress, Slider bar with coupon code and timer for shopify store.'
            }
            time="Sep 2020 - Oct 2020"
            appLogo={p1Logo}
            example="https://angamalai-dairies.myshopify.com/"
            techIcons={[
              shopifyLogo,
              reactLogo,
              reduxLogo,
              webpackLogo,
              materialuiLogo,
              babelLogo,
              dynamodbLogo,
              lambdaLogo,
              awsLogo,
              nodejsLogo,
              serverlessLogo,
            ]}
            toolTipArr={[
              'shopify',
              'react',
              'redux',
              'webpack',
              'materialui',
              'babel',
              'dynamodb',
              'lambda',
              'aws',
              'nodejs',
              'serverless',
            ]}
          ></SingleProject>
          <Divider></Divider>
          <SingleProject
            projectImages={project2Arr}
            appTitle={'School Management System'}
            time="Jun 2020 - Aug 2020"
            appDescription={
              'Manage attendace, fee, teachers, library, events, exams, communicaion, grades.'
            }
            appLogo={p2Logo}
            techIcons={[
              phpLogo,
              laravelLogo,
              bootstrapLogo,
              mysqlLogo,
              reactLogo,
              webpackLogo,
              babelLogo,
              awsLogo,
            ]}
            toolTipArr={[
              'php',
              'laravel',
              'bootstrap',
              'my-sql',
              'react',
              'webpack',
              'babel',
              'aws',
            ]}
          ></SingleProject>
          <Divider></Divider>
          <SingleProject
            projectImages={project3Arr}
            appTitle={'Colorful announcement banner'}
            appDescription={
              'Easy setup announcement banner for shopify stores.'
            }
            time="May 2020 - Jun 2020"
            listing="https://apps.shopify.com/colorful-announcement-banner"
            example="https://shakalaka-booom-boom.myshopify.com/"
            appLogo={p3Logo}
            borderRemove={true}
            techIcons={[
              shopifyLogo,
              reactLogo,
              reduxLogo,
              webpackLogo,
              babelLogo,
              firestoreLogo,
              nextjsLogo,
              nodejsLogo,
            ]}
            toolTipArr={[
              'shopify',
              'react',
              'redux',
              'webpack',
              'babel',
              'firestore',
              'nextjs',
              'nodejs',
            ]}
          ></SingleProject>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default hot(Projects);
