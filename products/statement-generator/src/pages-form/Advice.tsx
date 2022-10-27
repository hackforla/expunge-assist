import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

import YesIcon from 'assets/Check.png';
import NoIcon from 'assets/Cancel.png';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      marginBottom: '32px',
      letterSpacing: '0.25%',
      lineHeight: '40px',
      fontSize: '34px',
    },
    yesNoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '16px 0'
    },
    borderContainer: {
      border: "1px solid #C5B3D1",
      borderRadius: '8px',
      display: 'flex',
      width: '100%',
      padding: '0 14px',
      height: '79px',
      alignItems: 'center'
    },
    marginRight: {
      marginRight: '11px',
    },
    icon: {
      width: '44px',
      height: 'auto'
    },
    textMargin: {
      marginLeft: '24px'
    },
    followUp: {
      margin: '24px 0 47px'
    }
  })
);

export default function Advice() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <ContentContainer>
      <h2 className={classes.title}>{t('advice_page.header')}</h2>
      <div>
        <p>{t('advice_page.point1.content')}</p>
        <div className={classes.yesNoContainer}>
          <div className={`${classes.borderContainer} ${classes.marginRight}`}>
            <img src={YesIcon} alt="" className={classes.icon}/>
            <p className={classes.textMargin}>{t('advice_page.point1.yes')}</p>
          </div>
          <div className={classes.borderContainer}>
            <img src={NoIcon} alt="" className={classes.icon}/>
            <p className={classes.textMargin}>{t('advice_page.point1.no')}</p>
          </div>
        </div>
        <p>{t('advice_page.point2.content')}</p>
        <div className={classes.yesNoContainer}>
          <div className={`${classes.borderContainer} ${classes.marginRight}`}>
            <img src={YesIcon} alt="" className={classes.icon}/>
            <p className={classes.textMargin}>{t('advice_page.point2.yes')}</p>
          </div>
          <div className={classes.borderContainer}>
            <img src={NoIcon} alt="" className={classes.icon}/>
            <p className={classes.textMargin}>{t('advice_page.point2.no')}</p>
          </div>
        </div>
        <p>{t('advice_page.point3.content')}</p>
        <div className={classes.yesNoContainer}>
          <div className={`${classes.borderContainer} ${classes.marginRight}`}>
            <img src={YesIcon} alt="" className={classes.icon}/>
            <p className={classes.textMargin}>{t('advice_page.point3.yes')}</p>
          </div>
          <div className={classes.borderContainer}>
            <img src={NoIcon} alt="" className={classes.icon}/>
            <p className={classes.textMargin}>{t('advice_page.point3.no')}</p>
          </div>
        </div>
      </div>
      <p className={classes.followUp}>{t('advice_page.followUp')}</p>
      <FlowNavigation />
    </ContentContainer>
  );
}
