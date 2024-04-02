import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DashedVerticalLine from './DashedVerticalLine';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      display: 'inline-block', // Change to inline-block to align with the line
    },
    circle: {
      width: '4rem',
      height: '4rem',
      textDecoration: 'bold',
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.darker,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: '-2rem', // Adjust left position to center on the line
    },
  })
);
const CustomTimeline = () => {
  const classes = useStyles();
  const lineHeight = 375; // Adjust the line height as needed
  const topSpacing = 0; // Top spacing for the first circle
  const bottomSpacing = lineHeight; // Bottom spacing for the last circle
  const middlePosition = (bottomSpacing - topSpacing) / 2.3; // Middle position for the second circle

  return (
    <div className={classes.container}>
      <DashedVerticalLine />
      <div className={classes.circle} style={{ top: topSpacing }}>
        1
      </div>
      <div className={classes.circle} style={{ top: middlePosition }}>
        2
      </div>
      <div
        className={classes.circle}
        style={{ top: bottomSpacing - 32 }} // Adjust for circle size
      >
        3
      </div>
    </div>
  );
};

export default CustomTimeline;
