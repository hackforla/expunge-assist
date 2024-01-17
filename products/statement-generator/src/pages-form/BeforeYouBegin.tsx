import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import alert from '../assets/Alert.png';

const useStyles = makeStyles(({ palette, breakpoints }) =>
  createStyles({
    root: {
      '& h3': {
        fontSize: '24px',
        lineHeight: 1.15,
        fontWeight: 400,
        letterSpacing: '0.0015em',
        [breakpoints.up(breakpoints.values.md)]: {
          fontSize: '34px',
          letterSpacing: '0.0025em',
          fontWeight: 400,
        },
      },
      '& p': {
        marginTop: 0,
        lineHeight: 1.175,
        letterSpacing: '0.005em',
        [breakpoints.up(breakpoints.values.md)]: {
          marginTop: '8px',
        },
      },
      '& a': {
        color: palette.primary.darker,
        whiteSpace: 'noWrap',
      },
      '& h6': {
        fontSize: '20px',
        marginTop: '24px',
        fontWeight: 400,
        lineHeight: 1.2,
        paddingBottom: '8px',
        [breakpoints.up(breakpoints.values.md)]: {
          fontSize: '20px',
          fontWeight: 400,
        },
      },
    },
    italicDesktop: {
      [breakpoints.up(breakpoints.values.md)]: {
        fontStyle: 'italic',
      },
    },
    alert: {
      background: '#f0f5ff',
      display: 'flex',
      boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '24px',
      '& img': {
        height: '24px',
      },
      '& h6': {
        fontSize: '20px',
        marginTop: '24px',
        fontWeight: 400,
        lineHeight: 1.2,
        paddingBottom: '8px',
        [breakpoints.up(breakpoints.values.md)]: {
          fontSize: '20px',
          fontWeight: 400,
        },
      },
      '& p': {
        marginTop: 0,
        lineHeight: 1.175,
        letterSpacing: '0.005em',
        [breakpoints.up(breakpoints.values.md)]: {
          marginTop: '8px',
        },
      },
    },
  })
);

const BeforeYouBegin = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ContentContainer className={classes.root}>
      <h3>{t('before_you_begin_page.header')}</h3>

      <h6>{t('before_you_begin_page.sectionTitle1')}</h6>
      <p
        /* eslint-disable-next-line  react/no-danger */
        dangerouslySetInnerHTML={{
          __html: t('before_you_begin_page.sectionParagraph1'),
        }}
      />
      <h6>{t('before_you_begin_page.sectionTitle2')}</h6>
      <p
        /* eslint-disable-next-line  react/no-danger */
        dangerouslySetInnerHTML={{
          __html: t('before_you_begin_page.sectionParagraph2'),
        }}
      />
      <h6>{t('before_you_begin_page.sectionTitle3')}</h6>
      <p
        /* eslint-disable-next-line  react/no-danger */
        dangerouslySetInnerHTML={{
          __html: t('before_you_begin_page.sectionParagraph3'),
        }}
      />
      <div className={classes.alert}>
        <img src={alert} alt="" />
        <h6>{t('before_you_begin_page.sectionTitle4')}</h6>
        <p
          /* eslint-disable-next-line  react/no-danger */
          dangerouslySetInnerHTML={{
            __html: t('before_you_begin_page.sectionParagraph4'),
          }}
        />
      </div>
      <FlowNavigation />
    </ContentContainer>
  );
};

export default BeforeYouBegin;
