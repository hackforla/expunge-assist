import React, { useContext, useRef, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import Fade from '@material-ui/core/Fade';
import { useHistory } from 'react-router-dom';
import AffirmationImage from 'assets/affirmation-img.svg';
import { defaultStepState } from 'contexts/FormStateProps';
import Button from 'components/Button';

import { AffirmationContext } from 'contexts/AffirmationContext';

import useUtilityStyles from 'styles/utilityStyles';
import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';
import FormStateContext from 'contexts/FormStateContext';

interface CustomStyleProps {
  isActive: boolean;
}

const useStyles = makeStyles<Theme, CustomStyleProps>(({ palette, spacing }) =>
  createStyles({
    affirmationContainer: {
      background: palette.primary.lighter,
      padding: spacing(2),
    },
    doneAffirmationContainer: {
      background: palette.primary.lighter,
      borderRadius: '23px',
      maxWidth: '35rem',
    },
    messageContainer: {
      marginTop: spacing(2),
    },
    doneMessageContainer: {
      margin: spacing(2),
    },
    titleText: {
      fontSize: '2rem',
    },
    buttonSpacing: {
      padding: spacing(2),
    },
  })
);

const Affirmation = () => {
  const { currentStep, appTheme } = useContext(RoutingContext);
  const { updateStepToForm, goNextStep } = useContext(FormStateContext);
  const history = useHistory();
  const { t } = useTranslation();
  const { affirmationData, updateAffirmationData } =
    useContext(AffirmationContext);
  const returnHome = () => {
    const path = AppUrl.Landing;
    updateAffirmationData({ isActive: false });
    updateStepToForm(defaultStepState);
    history.push(path);
  };
  const handleAffirmationNext = () => {
    if (AppUrl.FinalizePreview === currentStep) {
      returnHome();
    } else {
      updateAffirmationData({ isActive: false });
    }
  };

  const utilityClasses = useUtilityStyles({
    pageTheme: 'transparent',
  });
  const classes = useStyles({ isActive: affirmationData.isActive });

  const image = affirmationData.image || AffirmationImage;
  const backBtnTheme =
    appTheme === 'dark' ? 'transparent-on-dark' : 'transparent-on-light';

  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  return (
    <Dialog
      TransitionComponent={Fade}
      transitionDuration={500}
      TransitionProps={{
        onExited: () => {
          goNextStep();
        },
      }}
      classes={
        AppUrl.FinalizePreview === currentStep
          ? { paper: classes.doneAffirmationContainer }
          : { paper: classes.affirmationContainer }
      }
      fullWidth
      open={affirmationData.isActive}
      onClose={() => updateAffirmationData({ isActive: false })}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <img src={image} alt="affirmation illustration" />

      <div
        className={
          AppUrl.FinalizePreview === currentStep
            ? classes.doneMessageContainer
            : classes.messageContainer
        }
      >
        <h2
          ref={contentContainerRef}
          tabIndex={-1}
          className={classes.titleText}
        >
          {t(affirmationData.titleText)}
        </h2>
        <p>{t(affirmationData.description)}</p>
      </div>

      <div
        className={`${utilityClasses.buttonContainer} ${
          utilityClasses.justifyRight
        } ${
          AppUrl.FinalizePreview === currentStep && utilityClasses.spaceBetween
        } ${classes.buttonSpacing}`}
      >
        {AppUrl.FinalizePreview === currentStep && (
          <Button
            hasBackArrow
            theme={backBtnTheme}
            onClick={() => updateAffirmationData({ isActive: false })}
            buttonText={t(affirmationData.backButtonText)}
          />
        )}
        <Button
          hasForwardArrow
          onClick={handleAffirmationNext}
          buttonText={t(affirmationData.buttonText)}
        />
      </div>
    </Dialog>
  );
};

export default Affirmation;
