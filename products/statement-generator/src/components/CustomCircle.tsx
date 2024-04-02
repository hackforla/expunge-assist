import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

interface CustomCircleProps {
  size: number;
  color: string;
}

const useStyles = makeStyles({
  circle: {
    borderRadius: '50%',
  },
});

const CustomCircle: React.FC<CustomCircleProps> = ({ size, color }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.circle}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

export default CustomCircle;
