import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

import AffirmationImage from 'assets/affirmation-img.svg';

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
