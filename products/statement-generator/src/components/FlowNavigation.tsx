import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';

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
}

export default function FlowNavigation({
  onNext,
  onBack,
  isNextDisabled,
  isBackDisabled,
}: IFlowNavigation) {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles();
  const { goNextStep, goBackStep } = React.useContext(FormStateContext);

  function handleBack() {
    if (onBack) {
      onBack();
    } else {
      goBackStep();
    }
  }

  function handleNext() {
    if (onNext) {
      onNext();
    } else {
      goNextStep();
    }
  }

  return (
    <div className={utilityClasses.buttonContainer}>
      <Button
        className={classes.buttonLeft}
        onClick={handleBack}
        disabled={isBackDisabled}
        buttonText="BACK"
        theme="transparent-on-light"
      />
      <Button
        className={classes.buttonRight}
        onClick={handleNext}
        disabled={isNextDisabled}
        buttonText="NEXT"
        hasArrow
      />
    </div>
  );
}
