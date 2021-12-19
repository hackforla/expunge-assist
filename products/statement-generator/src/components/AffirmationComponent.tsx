import React, { useEffect, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

import AffirmationImage from 'assets/affirmation-img.svg';

import { AffirmationContext } from 'contexts/AffirmationContext';
import RoutingContext from 'contexts/RoutingContext';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import useUtilityStyles from 'styles/utilityStyles';
import Button from './Button';

interface CustomStyleProps {
  isActive: boolean;
}

const useStyles = makeStyles<Theme, CustomStyleProps>(
  ({ palette, globals, spacing }) =>
    createStyles({
      affirmationComponent: {
        position: 'absolute',
        background: palette.primary.light,
        left: '0',
        bottom: '0',
        top: '0',
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

interface ComponentProps {
  isActive: boolean;
  titleText: string;
  buttonText: string;
  description: string;
  onChangeAffirmation: (newState: object) => void;
  match: any;
}

const AffirmationComponent = ({
  isActive,
  titleText,
  buttonText = 'Next',
  description,
  onChangeAffirmation,
}: ComponentProps) => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'transparent',
  });
  const classes = useStyles({ isActive });

  let match = useRouteMatch('/form/:page?');
  const { currentStep, canShowAffirmation } = useContext(RoutingContext);
  const { affirmationData, updateAffirmationData } = useContext(
    AffirmationContext
  );

  useEffect(() => {
    // handle closing the affirmation on home page
    if (match?.path === '/') updateAffirmationData({ isActive: false });
  }, [match]);

  // todo: move text into a json for localization
  useEffect(() => {
    switch (currentStep) {
      case STEP_ENUMS.INTRODUCTION:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Welcome!',
          buttonText: 'Begin',
          description: 'This is a tool to generate a personal statement.',
        });
        break;
      case STEP_ENUMS.INVOLVEMENT.INITIAL:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Congrats!',
          buttonText: 'Next',
          description:
            'You just finished introducing yourself! You are well on your way to completing your personal statement and getting your record cleared!',
        });
        break;
      case STEP_ENUMS.GOALS:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Hooray!',
          buttonText: 'Next',
          description:
            'You just finished telling everyone about your involvement in your city and your various communities! Thank you for taking the time to tell us about this!',
        });
        break;
      case STEP_ENUMS.WHY:
        updateAffirmationData({
          isActive: canShowAffirmation,
          titleText: 'Great Job!',
          buttonText: 'Next',
          description:
            'Those are some amazing goals you’ve set for yourself! You’re one step closer towards acheiving them too by getting your record cleared.',
        });
        break;
      default:
        break;
    }
  }, [currentStep]);

  return (
    <div
      className={`${utilityClasses.primaryContainer} ${classes.affirmationComponent}`}
    >
      <div
        className={`${utilityClasses.contentContainer} ${classes.affirmationInner}`}
      >
        <div className={classes.cropIllustration}>
          <img
            src={AffirmationImage}
            alt="affirmation illustration"
            className={classes.illustration}
          />
        </div>

        <div className={classes.messageContainer}>
          <h1>{titleText}</h1>
          <p>{description}</p>
        </div>

        <div className={utilityClasses.buttonContainer}>
          <Button
            className={utilityClasses.buttonRight}
            onClick={() => onChangeAffirmation({ isActive: false })}
            buttonText={buttonText}
            hasArrow
          />
        </div>
      </div>
    </div>
  );
};

export default AffirmationComponent;
