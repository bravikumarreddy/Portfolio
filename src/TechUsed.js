import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Grid, Tooltip, Box } from '@material-ui/core';
import { useTrail, config, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  iconBox: {
    width: '60px',
    height: '60px',
    margin: '10px',
  },
  techIcons: {
    width: '100%',
  },
  techContainer: {
    margin: '10px',
  },
}));
import VisibilitySensor from 'react-visibility-sensor';

const TechUsed = (props) => {
  const classes = useStyles();
  const techIcons = props.techIcons;
  const toolTipArr = props.toolTipArr;
  const AnimatedGrid = animated(Grid);
  const [trail, set, stop] = useTrail(techIcons.length, () => {
    return {
      from: { width: '1%' },
      to: { width: '100%' },
      config: config.stiff,
    };
  });

  return (
    <Grid container className={classes.techContainer}>
      {trail.map((props, index) => {
        return (
          <Grid item key={index}>
            <Box className={classes.iconBox}>
              <VisibilitySensor partialVisibility={true}>
                {({ isVisible }) => {
                  if (isVisible) {
                    set({
                      from: { width: '0%' },
                      to: { width: '100%' },
                      config: config.stiff,
                    });
                  } else {
                    set({
                      from: { width: '100%' },
                      to: { width: '0%' },
                      config: config.stiff,
                    });
                  }
                  return (
                    <div>
                      <Tooltip
                        title={toolTipArr[index]}
                        placement="right-start"
                        arrow
                      >
                        <animated.img
                          style={props}
                          className={classes.techIcons}
                          src={`${techIcons[index]}`}
                        ></animated.img>
                      </Tooltip>
                    </div>
                  );
                }}
              </VisibilitySensor>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default hot(TechUsed);
