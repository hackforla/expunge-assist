import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

import AffirmationImage from 'assets/affirmation-img.svg';

import Button from 'components/Button';

import { AffirmationContext } from 'contexts/AffirmationContext';

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

const Affirmation = () => {
  const { affirmationData, updateAffirmationData } = useContext(
    AffirmationContext
  );

  const utilityClasses = useUtilityStyles({
    pageTheme: 'transparent',
  });
  const classes = useStyles({ isActive: affirmationData.isActive });

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

export default Affirmation;
