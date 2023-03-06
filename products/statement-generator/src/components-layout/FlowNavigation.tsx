import React, { useContext } from 'react';
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
  isBackDisabled?: boolean;
  isNextDisabled?: boolean;
  backButtonLabel?: string;
  nextButtonLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  showBack?: boolean;
  showNext?: boolean;
}

export default function FlowNavigation({
  isBackDisabled,
  isNextDisabled,
  backButtonLabel,
  nextButtonLabel,
  onBack,
  onNext,
  showBack = true,
  showNext = true,
}: IFlowNavigation) {
  const { goNextStep, goBackStep } = useContext(FormStateContext);
  const { appTheme } = useContext(RoutingContext);

  const utilityClasses = useUtilityStyles({ pageTheme: appTheme });
  const classes = useStyles();

  const backBtnTheme =
    appTheme === 'dark' ? 'transparent-on-dark' : 'transparent-on-light';

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      goBackStep();
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      goNextStep();
    }
  };

  return (
    <div className={utilityClasses.buttonContainer}>
      {showBack && (
        <Button
          className={classes.buttonLeft}
          onClick={handleBack}
          disabled={isBackDisabled}
          buttonText={backButtonLabel || 'BACK'}
          theme={backBtnTheme}
        />
      )}

      {showNext && (
        <Button
          className={classes.buttonRight}
          onClick={handleNext}
          disabled={isNextDisabled}
          buttonText={nextButtonLabel || 'NEXT'}
          theme="dark"
          hasArrow
        />
      )}
    </div>
  );
}
