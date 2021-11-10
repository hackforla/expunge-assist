import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    pageContainer: {
      minWidth: '100%',
      height: '100%',
    },
    greetingContainer: {
      width: '100%',
      backgroundColor: '#fffaf2',
      display: 'flex',
    },
    greetingTextContainer: {
      width: '50%',
      paddingTop: '30px',
    },
    greetingImageContainer: {
      width: '50%',
    },
  })
);

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.paeContainer}>
      <div className={classes.greetingContainer}>
        <div className={classes.greetingTextContainer}>Tezt</div>
        <div className={classes.greetingImageContainer}>image</div>
      </div>
    </div>
  );
}
