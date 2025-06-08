import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core';

import bgCircleDesktop from '../assets/bg-circle-desktop.svg';
import bgCircleMobile from '../assets/bg-circle-mobile.svg';

interface BackgroundCircleProps {
  children: React.ReactNode;
}

const useStyles = makeStyles(({ breakpoints, spacing }) =>
  createStyles({
    backgroundImage: {
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundImage: `url(${bgCircleDesktop})`,
      display: 'flex',
      flexGrow: 1,

      [breakpoints.down(breakpoints.values.lg)]: {
        backgroundSize: 'contain',
      },

      [breakpoints.down(breakpoints.values.md)]: {
        backgroundSize: 'contain',
        backgroundPosition: 'right top',
        backgroundImage: `url(${bgCircleMobile})`,
      },
    },
  })
);

const BackgroundCircle = ({ children }: BackgroundCircleProps) => {
  const classes = useStyles();

  return <div className={classes.backgroundImage}>{children}</div>;
};

export default BackgroundCircle;
