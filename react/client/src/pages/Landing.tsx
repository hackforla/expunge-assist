import React from 'react';
import Button from 'components/Button';
import { makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';

interface LandingProps {
  goNextPage: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    marTop24: {
      marginTop: '24px',
    },
    marTop36: {
      marginTop: '36px',
    },
  })
);

const Landing = ({ goNextPage }: LandingProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({ theme: 'dark' });

  return (
    <div className={`${utilityClasses.contentContainer} content-page`}>
      <h1 className="page-title">Start fresh with a record expungement</h1>
      <div className={classes.marTop24}>
        Generate a personal statement in just 20 minutes
      </div>

      <div className={`${utilityClasses.buttonContainer} ${classes.marTop36}`}>
        <Button
          onClick={() => goNextPage()}
          theme="dark"
          hasArrow
          buttonText="START NOW"
        />
      </div>
    </div>
  );
};

export default Landing;
