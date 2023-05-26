import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

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
      },
      '& h6': {
        fontSize: '16px',
        marginTop: '24px',
        fontWeight: 700,
        lineHeight: 1.2,
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
        className={`${classes.italicDesktop}`}
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
