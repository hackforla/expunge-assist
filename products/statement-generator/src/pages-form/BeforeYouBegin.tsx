import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, useMediaQuery } from '@material-ui/core';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

const useStyles = makeStyles(({ palette, breakpoints }) =>
  createStyles({
    root: {
      '& h3': {
        fontSize: '20px',
        lineHeight: 1.15,
        fontWeight: 500,
        letterSpacing: '0.0015em',
        [breakpoints.down(breakpoints.values.md)]: {
          fontSize: '24px',
          letterSpacing: '0.0025em',
          fontWeight: 400,
        },
      },
      '& p': {
        marginTop: 0,
        lineHeight: 1.175,
        letterSpacing: '0.005em',
      },
      '& a': {
        color: palette.primary.darker,
      },
      '& h6': {
        fontSize: '16px',
        marginTop: '24px',
        fontWeight: 400,
        lineHeight: 1.2,
        paddingBottom: '8px',
        [breakpoints.down(breakpoints.values.md)]: {
          fontSize: '20px',
          fontWeight: 400,
        },
      },
    },
    italicDesktop: {
      [breakpoints.down(breakpoints.values.md)]: {
        fontStyle: 'italic',
      },
    },
  })
);

const BeforeYouBegin = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  return (
    <ContentContainer className={classes.root}>
      <h3>{t('before_you_begin_page.header')}</h3>

      <h6>{t('before_you_begin_page.sectionTitle1')}</h6>
      <p
        /* eslint-disable-next-line  react/no-danger */
        dangerouslySetInnerHTML={{
          __html: isMobile
            ? t('before_you_begin_page.mobileLineBreak')
            : t('before_you_begin_page.sectionParagraph1'),
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
      <h6>{t('before_you_begin_page.sectionTitle4')}</h6>
      <p
        /* eslint-disable-next-line  react/no-danger */
        dangerouslySetInnerHTML={{
          __html: t('before_you_begin_page.sectionParagraph4'),
        }}
      />
      <FlowNavigation />
    </ContentContainer>
  );
};

export default BeforeYouBegin;
