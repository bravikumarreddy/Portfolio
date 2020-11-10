import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { useSpring, animated, config, useTransition } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  project: {
    //margin: '30px',
  },
  gallery: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    maxWidth: '100%',
    overflow: 'hidden',
    userSelect: 'none',
  },
  gridNav: {
    position: 'relative',
  },
  galleryNav: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: '100%',
  },
  navIcons: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    padding: '0px 0px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    color: 'white',
  },
  arrows: {
    fontSize: 40,
    fontWeight: 'bold',
  },
}));
const ProjectGallery = (props) => {
  const classes = useStyles();
  const imagesArr = props.imagesArr;
  const [currImage, setCurrentImage] = useState(0);
  const [click, setClick] = useState('next');
  const transitions = useTransition(currImage, null, {
    from: {
      //marginLeft: click === 'next' ? '100%' : '-100%',
      opacity: 0,
    },
    enter: {
      //marginLeft: '0%',
      opacity: 1,
    },
    config: config.slow,
    leave: {
      //marginLeft: click === 'next' ? '-100%' : '100%',
      opacity: 0,
      position: 'absolute',
    },
  });

  return (
    <Paper className={classes.project} elevation={0}>
      <Grid container>
        <Grid item xs={12} className={classes.gridNav}>
          <Paper className={classes.gallery} elevation={24}>
            <Box
              component="div"
              display="flex"
              className={classes.imageWrapper}
            >
              {transitions.map(({ item, key, props }) => (
                <animated.img
                  src={imagesArr[item]}
                  key={key}
                  style={props}
                  className={classes.image}
                ></animated.img>
              ))}
            </Box>
          </Paper>
          <div className={classes.galleryNav}>
            <div
              className={classes.navIcons}
              onClick={() => {
                setClick('prev');
                if (currImage === 0) setCurrentImage(imagesArr.length - 1);
                else setCurrentImage(currImage - 1);
              }}
            >
              <ChevronLeftIcon className={classes.arrows}></ChevronLeftIcon>
            </div>

            <div
              className={classes.navIcons}
              onClick={() => {
                setClick('next');
                if (currImage === imagesArr.length - 1) setCurrentImage(0);
                else setCurrentImage(currImage + 1);
              }}
            >
              <ChevronRightIcon className={classes.arrows}></ChevronRightIcon>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default hot(ProjectGallery);
