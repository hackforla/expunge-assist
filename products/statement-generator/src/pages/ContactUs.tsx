import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useTranslation, Trans } from 'react-i18next';

import { DynamicLink } from '../components/DynamicText';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) =>
  createStyles({
    // pageContainer: {
    //   width: '100%',
    //   margin: 'auto',
    //   display: 'flex',
    //   flex: '1 0 auto',
    //   flexDirection: 'column',
    //   backgroundColor: '#FFFFFF',
    // },
    heroBg: {
      // width: '100%',
      backgroundColor: palette.primary.lighter,
      paddingTop: spacing(3),
      paddingBottom: spacing(4),
      [breakpoints.up('md')]: {
        paddingTop: spacing(9),
        paddingBottom: spacing(9),
      },
    },
    hero: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      flexDirection: 'column',
      color: palette.primary.darker,
    },
    pageTitle: {
      fontWeight: 500,
      margin: '0 0 12px 0',
    },
    heroTitle: {
      fontWeight: 600,
      margin: '16px 0 8px 0',
    },
    heroText: {
      margin: '0 0 12px 0',
      lineHeight: 1.5,
      fontWeight: 200,
    },
    infoSection: {
      backgroundColor: '#FFFFFF',
      padding: spacing(3, 0, 5, 0),
      [breakpoints.up('md')]: {
        padding: spacing(5, 0, 8, 0),
      },
    },
    infoInner: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '0 16px',
      color: palette.common.black,
    },
    infoTitle: {
      color: palette.primary.darker,
      fontWeight: 600,
      margin: '0 0 8px 0',
    },
    infoText: {
      margin: '0 0 12px 0',
      lineHeight: 1.5,
      fontWeight: 200,
    },
  })
);

export default function ContactUs() {
  const classes = useStyles();
  const { t } = useTranslation();
  const contactEmail = t('contact_email');

  return (
    // <div className={classes.pageContainer}>
    <div>
      {/* Hero Block */}
      <div className={classes.heroBg}>
        <div className={classes.hero}>
          <h2 className={classes.pageTitle}>
            {t('contact_us_page.page_header')}
          </h2>
          <h3 className={classes.heroTitle}>
            {t('contact_us_page.hero_title')}
          </h3>
          <p className={classes.heroText}>
            {t('contact_us_page.hero_paragraph1')}
          </p>
          <p className={classes.heroText}>
            {t('contact_us_page.hero_paragraph2', {
              contact_email: contactEmail,
            })}
          </p>
        </div>
      </div>

      {/* Info Block */}
      <div className={classes.infoSection}>
        <div className={classes.infoInner}>
          <h3 className={classes.infoTitle}>
            {t('contact_us_page.info_title')}
          </h3>
          <p className={classes.infoText}>
            <Trans
              i18nKey="contact_us_page.info_paragraph1"
              values={{ contact_email: contactEmail }}
              components={{ Link: <DynamicLink /> }}
            />
          </p>
          <p className={classes.infoText}>
            {t('contact_us_page.info_paragraph2_sla')}
          </p>
        </div>
      </div>

      {/* Form section will be added in a subsequent step */}
    </div>
  );
}
