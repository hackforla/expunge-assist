import React, { useRef, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import AffirmationImage from 'assets/affirmation-img.svg';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

const useStyles = makeStyles<Theme>(({ spacing, globals }) =>
  createStyles({
    illustrationContainer: {
      marginTop: spacing(3),
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
    },
    illustration: {
      width: globals.contentWidth,
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%)',
    },
  })
);

export default function Welcome() {
  const { t } = useTranslation();
  const classes = useStyles();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Focus the container when the page loads
    titleRef.current?.focus();
  }, []);

  return (
    <>
      <div className={classes.illustrationContainer}>
        <img
          src={AffirmationImage}
          alt="affirmation illustration"
          className={classes.illustration}
        />
      </div>

      <ContentContainer>
        <h1 ref={titleRef} tabIndex={-1}>
          {t('welcome_page.titleText')}
        </h1>

        <p>{t('welcome_page.description')}</p>

        <FlowNavigation showBack={false} />
      </ContentContainer>
    </>
  );
}
