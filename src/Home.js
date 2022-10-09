import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useSpring, animated, config } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import Projects from './Projects';
import profilePic from '../assets/profile.jpg';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  SvgIcon,
} from '@material-ui/core';

import GitHubIcon from '../assets/Icons/github.svg';
import LinkedInIcon from '../assets/Icons/linkedin.svg';
import MailIcon from '../assets/Icons/mail.svg';
import EmailIcon from '@material-ui/icons/Email';
import { auto } from 'async';
import { height } from '@material-ui/system';
import Skills from './Skills';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {},
  appBar: {
    backgroundColor: 'black',
  },
  navButton: {
    borderRadius: '0px',
    backgroundColor: 'black',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'none',
      boxShadow: 'none',
    },
    width: '100%',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  introBox: {
    height: '370px',
  },
  profileImage: {
    background: `url(${profilePic})`,
    width: '300px',
    height: '300px',
    margin: 'auto',
    borderRadius: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: '7px solid black',
  },
  introContent: {
    width: '100%',
    height: '100%',
  },
  introPadding: {
    padding: '10px',
  },
  iconButton: {
    padding: '0px',
    marginRight: '15px',
    boxShadow: 2,
    '&:hover': {
      backgroundColor: '#ACACAC',
    },
  },
  icon: {
    color: 'black',
    height: '25px',
    width: '25px',
  },
  hireMeButton: {
    backgroundColor: 'black',
    textTransform: 'none',
    color: 'white',
    width: '100%',
    '&:hover': {
      backgroundColor: '#686767',
      borderColor: 'none',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const pictureProps = useSpring({
    to: { width: '300px', height: '300px' },
    from: { width: '0px', height: '0px' },
    config: config.wobbly,
  });
  const contentProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.stiff,
  });
  const AnimatedBox = animated(Box);
  return (
    <div className={classes.root}>
      <a id="home"></a>
      <AppBar position="sticky" className={classes.appBar}>
        <Box className={classes.toolBar}>
          <Box display="flex" justifyContent="space-around">
            <Box flexGrow={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.navButton}
                size="large"
                component="a"
                href="#home"
              >
                Home
              </Button>
            </Box>
            <Box flexGrow={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.navButton}
                size="large"
                component="a"
                href="#projects"
              >
                Projects
              </Button>
            </Box>
            <Box flexGrow={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.navButton}
                size="large"
                component="a"
                href="#skills"
              >
                Skills
              </Button>
            </Box>
            <Box flexGrow={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.navButton}
                size="large"
                component="a"
                href="https://b-ravi-kumar-96.medium.com/"
                target="_blank"
              >
                Blog
              </Button>
            </Box>
          </Box>
        </Box>
      </AppBar>
      <Grid container alignItems="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          className={`${classes.introBox} ${classes.introPadding}`}
        >
          <Box className={classes.profilePic} display="flex">
            <AnimatedBox
              className={classes.profileImage}
              style={pictureProps}
              component="div"
            ></AnimatedBox>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.introPadding}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.introContent}
          >
            <AnimatedBox style={contentProps}>
              <Typography
                variant="h3"
                style={{ fontWeight: 'bold', lineHeight: 1 }}
              >
                Ravi Kumar
              </Typography>
              <Typography
                variant="body2"
                style={{ fontWeight: '200', paddingLeft: '2px' }}
              >
                Binghamton, NY, USA
              </Typography>
              <br></br>
              <Typography variant="body1" style={{ fontWeight: '200' }}>
                <Typography component="span">👨🏻‍💻 &nbsp;</Typography> Entrepreneur
                + Freelancer + Gamer + Full-Stack Developer{' '}
                <Typography component="span"> ⚡ 🚀 &nbsp; 🛠️ </Typography>
              </Typography>
              <Typography
                variant="body2"
                style={{ fontWeight: '200', marginTop: '10px' }}
              >
                Degree - Computer Science
              </Typography>
              <Typography
                variant="body2"
                style={{ fontWeight: '200', marginTop: '5px' }}
              ></Typography>
              <br></br>
              <Box display="flex">
                <IconButton
                  className={classes.iconButton}
                  component="a"
                  href="https://github.com/bravikumarreddy"
                  target="_blank"
                >
                  <img className={classes.icon} src={`${GitHubIcon}`}></img>
                </IconButton>
                <IconButton
                  className={classes.iconButton}
                  component="a"
                  href="https://www.linkedin.com/in/ravi-kumar-reddy-bangaru/"
                  target="_blank"
                >
                  <img className={classes.icon} src={`${LinkedInIcon}`}></img>
                </IconButton>
                <IconButton
                  className={classes.iconButton}
                  component="a"
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=b.ravi.kumar.96@gmail.com"
                  target="_blank"
                >
                  <img className={classes.icon} src={`${MailIcon}`}></img>
                </IconButton>
              </Box>
              <br></br>
              <Button
                variant="contained"
                className={classes.hireMeButton}
                component="a"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=b.ravi.kumar.96@gmail.com"
                target="_blank"
                startIcon={<EmailIcon />}
              >
                Hire Me
              </Button>
            </AnimatedBox>
          </Box>
        </Grid>
      </Grid>

      <a id="projects"></a>
      <Projects></Projects>

      <a id="skills"></a>
      <Skills></Skills>
    </div>
  );
};
export default hot(Home);
