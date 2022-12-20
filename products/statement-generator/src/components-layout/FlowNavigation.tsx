import React, { useCallback, useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';

import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(() =>
  createStyles({
    buttonLeft: {},
    buttonRight: {
      marginLeft: 'auto',
    },
  })
);

interface IFlowNavigation {
  onNext?: () => void;
  isNextDisabled?: boolean;
  onBack?: () => void;
  isBackDisabled?: boolean;
  showBack?: boolean;
  showNext?: boolean;
}

export default function FlowNavigation({
  onNext,
  onBack,
  isNextDisabled,
  isBackDisabled,
  showBack = true,
  showNext = true,
}: IFlowNavigation) {
  const { goNextStep, goBackStep } = useContext(FormStateContext);
  const { appTheme } = useContext(RoutingContext);

  const utilityClasses = useUtilityStyles({ pageTheme: appTheme });
  const classes = useStyles();

  const backBtnTheme =
    appTheme === 'dark' ? 'transparent-on-dark' : 'transparent-on-light';

  const handleBack = useCallback(() => {
    if (onBack) {
      onBack();
    } else {
      goBackStep();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (onNext) {
      onNext();
    } else {
      goNextStep();
    }
  }, []);

  return (
    <div className={utilityClasses.buttonContainer}>
      {showBack && (
        <Button
          className={classes.buttonLeft}
          onClick={handleBack}
          disabled={isBackDisabled}
          buttonText="BACK"
          theme={backBtnTheme}
        />
      )}

      {showNext && (
        <Button
          className={classes.buttonRight}
          onClick={handleNext}
          disabled={isNextDisabled}
          buttonText="NEXT"
          theme="dark"
          hasArrow
        />
      )}
    </div>
  );
}
