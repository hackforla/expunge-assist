import React, { useContext, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

import AffirmationImage from 'assets/affirmation-img.svg';

import Button from 'components/Button';

import { AffirmationContext } from 'contexts/AffirmationContext';
import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'page-layout/ContentContainer';

import useUtilityStyles from 'styles/utilityStyles';

interface CustomStyleProps {
  isActive: boolean;
}

const useStyles = makeStyles<Theme, CustomStyleProps>(
  ({ palette, globals, spacing }) =>
    createStyles({
      affirmationComponent: {
        position: 'absolute',
        background: palette.primary.light,
        top: 60, // offset from header
        bottom: 60, // offset from footer
        left: '0',
        width: '100%',
        zIndex: 1,
        paddingTop: spacing(2),
        display: ({ isActive }) => (isActive ? 'block' : 'none'),
      },
      affirmationInner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      },
      cropIllustration: {
        overflow: 'hidden',
        maxWidth: '375px',
        borderBottomLeftRadius: '10%',
        borderBottomRightRadius: '10%',
        width: '100%',
      },
      illustration: {
        width: globals.contentWidth,
        position: 'relative',
        left: '-78px',
        top: '-3px',
      },
      messageContainer: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
      },
    })
);

const AffirmationComponent = () => {
  const { formState } = useContext(FormStateContext);
  const { currentStep, canShowAffirmation } = useContext(RoutingContext);
  const { affirmationData, updateAffirmationData } = useContext(
    AffirmationContext
  );

  const utilityClasses = useUtilityStyles({
    pageTheme: 'transparent',
  });
  const classes = useStyles({ isActive: affirmationData.isActive });

  useEffect(() => {
    switch (currentStep) {
      case AppUrl.Introduction:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Welcome!',
          buttonText: 'Begin',
          description: 'This is a tool to generate a personal statement.',
        });
        break;
      case AppUrl.Involvement:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Congrats!',
          buttonText: 'Next',
          description:
            'You just finished introducing yourself! You are well on your way to completing your personal statement and getting your record cleared!',
        });
        break;
      case AppUrl.Goals:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Hooray!',
          buttonText: 'Next',
          description:
            'You just finished telling everyone about your involvement in your city and your various communities! Thank you for taking the time to tell us about this!',
        });
        break;
      case AppUrl.Why:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Great Job!',
          buttonText: 'Next',
          description:
            'Those are some amazing goals you’ve set for yourself! You’re one step closer towards acheiving them too by getting your record cleared.',
        });
        break;
      case AppUrl.Landing:
      default:
        updateAffirmationData({
          isActive: false,
        });
        break;
    }
  }, [currentStep])

  return (
    <div
      className={`${utilityClasses.primaryContainer} ${classes.affirmationComponent}`}
    >
      <ContentContainer className={classes.affirmationInner}>
        <div className={classes.cropIllustration}>
          <img
            src={AffirmationImage}
            alt="affirmation illustration"
            className={classes.illustration}
          />
        </div>

        <div className={classes.messageContainer}>
          <h1>{affirmationData.titleText}</h1>
          <p>{affirmationData.description}</p>
        </div>

        <div className={utilityClasses.buttonContainer}>
          <Button
            className={utilityClasses.buttonRight}
            onClick={() => updateAffirmationData({ isActive: false })}
            buttonText={affirmationData.buttonText}
            hasArrow
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default AffirmationComponent;
