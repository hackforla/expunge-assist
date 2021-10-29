import React, { useContext } from 'react';
import Button from 'components/Button';
import { Banner } from 'components/Banner';
import { makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';

import useUtilityStyles from 'styles/utilityStyles';
import { Banner } from './Banner';

const useStyles = makeStyles(() =>
  createStyles({
    marTop24: {
      marginTop: '24px',
    },
    marTop36: {
      marginTop: '36px',
    },
    flowNavigationContainer: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  })
);

const Landing = () => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
    isSoloContainer: true,
  });

  const { goNextPage } = useContext(RoutingContext);

  return (
    <div className={utilityClasses.primaryContainer}>
      <Banner />
      <div className={`${utilityClasses.contentContainer}`}>
        <div className={utilityClasses.flexGrow}>
          <h1 className="page-title">Start fresh with a record expungement</h1>
          <div className={classes.marTop24}>
            Generate a personal statement in just 20 minutes
          </div>
        </div>

        <div className={classes.flowNavigationContainer}>
          <Button
            onClick={() => goNextPage()}
            theme="dark"
            hasArrow
            buttonText="START NOW"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
