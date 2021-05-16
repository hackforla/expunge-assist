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
  onBack?: () => void;
}

export default function FlowNavigation({ onNext, onBack }: IFlowNavigation) {
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
        buttonText="NEXT"
        hasArrow
      />
    </div>
  );
}
