import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dashedVerticalLine: {
      height: '405px', // Adjust the height as needed

      width: '3px', // Adjust the width as needed
      backgroundColor: theme.palette.primary.darker, // Set the color of the dashes
      backgroundImage: 'linear-gradient(to bottom, transparent 50%, #fff 50%)', // Set the color of the dashes
      backgroundSize: '100% 20px', // Adjust the dash size
      backgroundRepeat: 'repeat-y', // Repeat the dashed pattern vertically
    },
  })
);

const DashedVerticalLine = () => {
  const classes = useStyles();

  return <div className={classes.dashedVerticalLine} />;
};

export default DashedVerticalLine;
