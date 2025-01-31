import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

const useStyles = makeStyles(({ breakpoints }) =>
  createStyles({
    title: {
      marginBottom: '32px',
      letterSpacing: '0.25px',
      lineHeight: '40px',
      fontSize: '34px',
      [breakpoints.down(breakpoints.values.sm)]: {
        fontSize: '24px',
        lineHeight: '28px',
      },
    },
    yesNoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '16px 0',
      [breakpoints.down(breakpoints.values.sm)]: {
        flexDirection: 'column',
        margin: '24px 0',
      },
    },
    borderContainer: {
      border: '1px solid #C5B3D1',
      borderRadius: '8px',
      display: 'flex',
      width: '100%',
      padding: '0 14px',
      height: '79px',
      alignItems: 'center',
      [breakpoints.down(breakpoints.values.sm)]: {
        margin: '4px 0',
        maxWidth: '400px',
      },
    },
    marginRight: {
      marginRight: '11px',
      [breakpoints.down(breakpoints.values.sm)]: {
        marginRight: '0',
      },
    },
    icon: {
      width: '44px',
      height: 'auto',
    },
    textMargin: {
      marginLeft: '24px',
    },
    followUp: {
      margin: '24px 0 47px',
    },
    text: {
      [breakpoints.down(breakpoints.values.sm)]: {
        marginTop: '24px',
      },
    },
  })
);

export default function Advice() {
  const { t } = useTranslation();
  const classes = useStyles();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    titleRef.current?.focus();
  }, []);

  const RedCancelIcon = () => (
    <CancelRoundedIcon style={{ color: '#E87461' }} className={classes.icon} />
  );

  const GreenCheckIcon = () => (
    <CheckCircleRoundedIcon
      style={{ color: '#0AEBA0' }}
      className={classes.icon}
    />
  );

  return (
    <ContentContainer>
      <h2 ref={titleRef} tabIndex={-1} className={classes.title}>
        {t('advice_page.header')}
      </h2>
      <div>
        <p className={classes.text}>{t('advice_page.point1.content')}</p>
        <div className={classes.yesNoContainer}>
          <div className={`${classes.borderContainer} ${classes.marginRight}`}>
            <RedCancelIcon />
            <p className={classes.textMargin} aria-label="Bad Example">
              {t('advice_page.point1.no')}
            </p>
          </div>
          <div className={classes.borderContainer}>
            <GreenCheckIcon />
            <p className={classes.textMargin} aria-label="Good Example">
              {t('advice_page.point1.yes')}
            </p>
          </div>
        </div>
        <p className={classes.text}>{t('advice_page.point2.content')}</p>
        <div className={classes.yesNoContainer}>
          <div className={`${classes.borderContainer} ${classes.marginRight}`}>
            <RedCancelIcon />
            <p className={classes.textMargin} aria-label="Bad Example">
              {t('advice_page.point2.no')}
            </p>
          </div>
          <div className={classes.borderContainer}>
            <GreenCheckIcon />
            <p className={classes.textMargin} aria-label="Good Example">
              {t('advice_page.point2.yes')}
            </p>
          </div>
        </div>
        <p className={classes.text}>{t('advice_page.point3.content')}</p>
        <div className={classes.yesNoContainer}>
          <div className={`${classes.borderContainer} ${classes.marginRight}`}>
            <RedCancelIcon />
            <p className={classes.textMargin} aria-label="Bad Example">
              {t('advice_page.point3.no')}
            </p>
          </div>
          <div className={classes.borderContainer}>
            <GreenCheckIcon />
            <p className={classes.textMargin} aria-label="Good Example">
              {t('advice_page.point3.yes')}
            </p>
          </div>
        </div>
      </div>
      <p className={`${classes.followUp} ${classes.text}`}>
        {t('advice_page.followUp')}
      </p>
      <FlowNavigation />
    </ContentContainer>
  );
}
