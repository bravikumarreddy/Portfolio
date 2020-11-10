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
import TechUsed from './TechUsed';
import ProjectGallery from './ProjectGallery';
const useStyles = makeStyles((theme) => ({
  appLogo: {
    width: '100px',
    height: '100px',
  },
  projectList: {
    margin: '0px',
    padding: '20px',
  },
  logoContainer: {
    borderRadius: '10px',
    overflow: 'hidden',
    //boxShadow: '1px 1px 2px 2px #ccc',
    border: '3px solid grey',
    margin: 'auto',
    flexGrow: 0,
  },
  galleryBtn: {
    backgroundColor: 'black',
    textTransform: 'none',
    color: 'white',

    '&:hover': {
      backgroundColor: '#686767',
      borderColor: 'none',
    },
  },
  listingBtn: {
    backgroundColor: '#689f38',
    textTransform: 'none',
    color: 'white',

    '&:hover': {
      backgroundColor: '#5a9216',
      borderColor: 'none',
    },
  },
  appInfo: {
    margin: '20px',
    flexBasis: '70%',
    flexGrow: 1,
  },
  subText: {
    fontWeight: 200,
  },
  subheading: {
    fontWeight: 400,
  },
  technologies: {
    marginTop: '20px',
  },
}));
const SingleProject = (props) => {
  const {
    projectImages,
    appTitle,
    appDescription,
    appLogo,
    techIcons,
    toolTipArr,
    time,
  } = props;
  const classes = useStyles();
  const [galleryModal, setGalleryModal] = useState(false);

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Paper className={classes.projectList} variant="outlined" square={true}>
          <Box display="flex" flexWrap="wrap">
            <Box
              className={classes.logoContainer}
              elevation={2}
              style={{ border: props.borderRemove ? 'none' : '3px solid grey' }}
              flexShrink={0}
              alignSelf="center"
            >
              <img src={`${appLogo}`} className={classes.appLogo}></img>
            </Box>
            <Box className={classes.appInfo}>
              <Typography variant="h5"> {appTitle}</Typography>
              <Typography variant="body1" className={classes.subText}>
                {appDescription}
              </Typography>

              <Typography variant="body2" className={classes.subText}>
                {time}
              </Typography>

              <Box display="flex" style={{ marginTop: '10px' }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    setGalleryModal(true);
                  }}
                  className={classes.galleryBtn}
                >
                  {' '}
                  Gallery
                </Button>
                {props.listing ? (
                  <Button
                    variant="contained"
                    size="small"
                    style={{ marginLeft: '10px' }}
                    className={classes.listingBtn}
                    component="a"
                    target="_blank"
                    href={props.listing}
                  >
                    {' '}
                    Listing
                  </Button>
                ) : (
                  ''
                )}
                {props.example ? (
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    style={{
                      marginLeft: '10px',
                      textTransform: 'none',
                      textAlign: 'center',
                    }}
                    component="a"
                    target="_blank"
                    href={props.example}
                  >
                    {' '}
                    Sample store
                  </Button>
                ) : (
                  ''
                )}
              </Box>

              <Dialog
                open={galleryModal}
                onClose={() => {
                  setGalleryModal(false);
                }}
                maxWidth={'xl'}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <ProjectGallery imagesArr={projectImages}></ProjectGallery>
              </Dialog>
            </Box>
          </Box>
          <Divider></Divider>
          <Box className={classes.technologies}>
            <Typography variant="h6" className={classes.subheading}>
              Technologies used
            </Typography>
            <TechUsed techIcons={techIcons} toolTipArr={toolTipArr}></TechUsed>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default hot(SingleProject);
