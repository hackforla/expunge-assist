import React from 'react';
import useUtilityStyles from 'styles/utilityStyles';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    marTop24: {
      marginTop: '24px',
    },
  })
);
export default function NotFound() {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
    isSoloContainer: true,
  });

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={`${utilityClasses.contentContainer}`}>
        <div className={utilityClasses.flexGrow}>
          <h1 className="page-title">Oops!</h1>
          <div className={classes.marTop24}>
            This page does not exist. Why not head back to the home page?
          </div>
        </div>
      </div>
    </div>
  );
}
