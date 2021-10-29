import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';

import Button from 'components/Button';

const useStyles = makeStyles(() =>
  createStyles({
    flowNavigationContainer: {
      marginTop: 'auto',
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
}

export default function FlowNavigation({
  onNext,
  isNextDisabled,
}: IFlowNavigation) {
  const classes = useStyles();
  const { goNextStep } = React.useContext(FormStateContext);

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
        className={classes.buttonRight}
        onClick={handleNext}
        disabled={isNextDisabled}
        buttonText="NEXT"
        hasArrow
      />
    </div>
  );
}
