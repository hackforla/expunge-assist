import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import DynamicText from 'components/DynamicText';

import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';

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
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridTemplateAreas: `
                          'icon title'
                          'icon paragraph'
                        `,
      alignItems: 'start',
      boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '24px',
      marginBottom: '40px',
      '& span': {
        height: 'auto',
        width: '24px',
        gridArea: 'icon',
        marginRight: '8px',
      },
      '& h6': {
        margin: 0,
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: 1.2,
        gridArea: 'title',
        [breakpoints.up(breakpoints.values.md)]: {
          fontSize: '20px',
          fontWeight: 400,
        },
      },
      '& p': {
        marginTop: 0,
        lineHeight: 1.175,
        letterSpacing: '0.005em',
        gridArea: 'paragraph',
        [breakpoints.up(breakpoints.values.md)]: {
          marginTop: 0,
        },
      },
    },
  })
);

const BeforeYouBegin = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    titleRef.current?.focus();
  }, []);

  return (
    <ContentContainer className={classes.root}>
      <h3 ref={titleRef} tabIndex={-1}>
        {t('before_you_begin_page.header')}
      </h3>

      <h6>{t('before_you_begin_page.sectionTitle1')}</h6>
      <p>
        <DynamicText i18nkey="before_you_begin_page.sectionParagraph1" />
      </p>
      <h6>{t('before_you_begin_page.sectionTitle2')}</h6>
      <p>
        <DynamicText i18nkey="before_you_begin_page.sectionParagraph2" />
      </p>
      <h6>{t('before_you_begin_page.sectionTitle3')}</h6>
      <p>
        <DynamicText i18nkey="before_you_begin_page.sectionParagraph3" />
      </p>
      <div className={classes.alert}>
        <span>
          <ErrorRoundedIcon style={{ color: '#2F6FED' }} />
        </span>
        <h6>{t('before_you_begin_page.sectionTitle4')}</h6>
        <p>
          <DynamicText i18nkey="before_you_begin_page.sectionParagraph4" />
        </p>
      </div>
      <FlowNavigation />
    </ContentContainer>
  );
};

export default BeforeYouBegin;
