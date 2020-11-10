import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Grid, Tooltip } from '@material-ui/core';
import { useSpring, config, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const useStyles = makeStyles((theme) => ({
  iconBox: {
    width: '70px',
    height: '70px',
    padding: '10px',
    position: 'relative',
  },
  techIcons: {
    width: '100%',
  },
  techContainer: {
    margin: '10px',
  },
  svgPercent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  tag: {
    textAlign: 'center',
  },
  skillBox: {
    margin: '20px',
    marginTop: '0px',
  },
}));
const SingleSkill = (props) => {
  const classes = useStyles();
  var { icon, toolTip, percent } = props.iconSettings;
  var startConfig = {
    from: { strokeDasharray: '0, 100' },
    to: { strokeDasharray: `${percent}, 100` },
    config: { mass: 1, tension: 120, friction: 50 },
  };
  const [springProps, set, stop] = useSpring(() => startConfig);

  return (
    <Box className={classes.skillBox}>
      <Box className={classes.iconBox}>
        <VisibilitySensor partialVisibility={true}>
          {({ isVisible }) => {
            if (isVisible) {
              set({
                from: { strokeDasharray: '0, 100' },
                to: { strokeDasharray: `${percent}, 100` },
              });
            } else {
              set({
                from: { strokeDasharray: `0, 100` },
                to: { strokeDasharray: '0, 100' },
              });
            }
            return (
              <React.Fragment>
                <img className={classes.techIcons} src={`${icon}`}></img>
                <svg viewBox="0 0 36 36" className={classes.svgPercent}>
                  <animated.path
                    d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                    style={springProps}
                  />
                </svg>
              </React.Fragment>
            );
          }}
        </VisibilitySensor>
      </Box>
      <Typography variant="body2" className={classes.tag}>
        {toolTip}
      </Typography>
    </Box>
  );
};
export default hot(SingleSkill);
