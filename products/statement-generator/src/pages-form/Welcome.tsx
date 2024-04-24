import React, { useRef, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import AffirmationImage from 'assets/affirmation-img.svg';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

const useStyles = makeStyles<Theme>(({ palette, spacing, globals }) =>
  createStyles({
    illustrationContainer: {
      marginTop: spacing(3),
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
    },
    illustration: {
      background: palette.primary.lighter,
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
  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the container when the page loads
    contentContainerRef.current?.focus();
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

      <ContentContainer ref={contentContainerRef} tabIndex={-1}>
        <h1>{t('welcome_page.titleText')}</h1>

        <p>{t('welcome_page.description')}</p>

        <FlowNavigation showBack={false} />
      </ContentContainer>
    </>
  );
}
