import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';

import Button from 'components/Button';

const useStyles = makeStyles(() =>
  createStyles({
    flowNavigationContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
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

export default function FlowNavigation({ onNext, onBack, isNextDisabled = true, isBackDisabled = true }: IFlowNavigation) {
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
    <div
      className={`flow-navigation-container ${classes.flowNavigationContainer}`}
    >
      <Button
        className={classes.buttonLeft}
        onClick={handleBack}
        buttonText="BACK"
        theme="transparent"
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
