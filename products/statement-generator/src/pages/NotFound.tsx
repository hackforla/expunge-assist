import React from 'react';
import { Link, makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';

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
            Sorry, the page you are looking for does not exist. Try starting
            from our&nbsp;
            <Link color="textPrimary" href="/">
              homepage.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
