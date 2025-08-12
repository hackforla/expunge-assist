import React, { useContext, useRef } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import {
  AffirmationContext,
  AFFIRMATION_DATA,
} from 'contexts/AffirmationContext';

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
  const { goNextStep, goBackStep, getNextStep } = useContext(FormStateContext);
  const { appTheme, currentStep, canShowAffirmation } =
    useContext(RoutingContext);
  const { updateAffirmationData, affirmationShown, setAffirmationShown } =
    useContext(AffirmationContext);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

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
    const nextStep = getNextStep(currentStep);
    const newData = AFFIRMATION_DATA[nextStep as string];
    if (onNext) {
      onNext();
    } else if (
      newData &&
      canShowAffirmation &&
      !affirmationShown[currentStep]
    ) {
      updateAffirmationData({
        ...newData,
        isActive: true,
      });
      setAffirmationShown((prev: Record<string, boolean>) => ({
        ...prev,
        [currentStep as string]: true,
      }));
    } else {
      goNextStep();
    }
  };

  const handleNextButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.shiftKey && event.key === 'Tab') {
      event.preventDefault();
      backButtonRef.current?.focus();
    }
  };

  return (
    <div className={utilityClasses.buttonContainer}>
      {showBack && (
        <Button
          ref={backButtonRef}
          className={classes.buttonLeft}
          tabIndex={-1}
          onClick={handleBack}
          disabled={isBackDisabled}
          buttonText={backButtonLabel || 'BACK'}
          theme={backBtnTheme}
          hasBackArrow
        />
      )}

      {showNext && (
        <Button
          ref={nextButtonRef}
          className={classes.buttonRight}
          tabIndex={0}
          onClick={handleNext}
          onKeyDown={handleNextButtonKeyDown}
          disabled={isNextDisabled}
          buttonText={nextButtonLabel || 'NEXT'}
          theme="dark"
          hasForwardArrow
        />
      )}
    </div>
  );
}
