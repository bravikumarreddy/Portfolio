import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { useSprings, animated, config, useTransition } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  project: {
    maxWidth:"1600px",
    
    
    position: 'relative',
  },
  gallery: {
    marginLeft: 'auto',
    marginRight: 'auto',
    
    
    position: 'relative',
  },
  image: {
    width: '100%',
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
    height: '100%',  
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
  galleryMain:{
    width:"100%",
    height:"100%"
  }
}));
const ProjectGallery = (props) => {
  const classes = useStyles();
  const imagesArr = props.imagesArr;
  const [currImage, setCurrentImage] = useState(0);
  const [click, setClick] = useState('next');
  const [springs, set, stop] = useSprings(imagesArr.length, index => ({
    transform:`translateX(0%)`
  }))

  
  //console.log(currImage);
  return (
   
      <Paper className={classes.project}  elevation={0} >
        
            <Paper className={classes.gallery} elevation={24} >
              <Box
                component="div"
                display="flex"
                className={classes.imageWrapper}
                style={{width:`${100*imagesArr.length}%`}}

              >{imagesArr.map((item,index)=>{
                return <animated.img
                    src={item}
                    key={index}
                    style={springs[index]}
                    className={classes.image}
                  ></animated.img>
              })}
                 
                 
               
              </Box>
            </Paper>
            <div className={classes.galleryNav}>
              <div
                className={classes.navIcons}
                onClick={() => {
                  setClick('prev');
                  var newCurr = currImage;
                  if (currImage === 0) newCurr=  imagesArr.length - 1;
                  else newCurr = currImage-1;

                  setCurrentImage(newCurr);
                  
                  
                  set({
                    transform:`translateX(-${newCurr*100}%)`
                  })

                }}
              >
                <ChevronLeftIcon className={classes.arrows}></ChevronLeftIcon>
              </div>
  
              <div
                className={classes.navIcons}
                onClick={() => {
                  setClick('next');
                  var newCurr = currImage;
                  if (currImage === imagesArr.length - 1) {
                    newCurr = 0;
                    
                  }
                  else {
                    newCurr = currImage + 1;
                    
                  }
                  setCurrentImage(newCurr)
                  set({
                    transform:`translateX(-${newCurr*100}%)`
                  })
                }}
              >
                <ChevronRightIcon className={classes.arrows}></ChevronRightIcon>
              </div>
            </div>
          
      </Paper>
    
  );
};
export default hot(ProjectGallery);
