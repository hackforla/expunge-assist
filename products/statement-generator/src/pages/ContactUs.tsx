import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useTranslation, Trans } from 'react-i18next';
import useUtilityStyles from 'styles/utilityStyles';

import contactIllustration from 'assets/contact.svg';
import { DynamicLink } from '../components/DynamicText';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) =>
  createStyles({
    pageContainer: {
      flex: '1 0 auto',
      flexDirection: 'column',
    },
    fullBleedBg: {
      backgroundColor: palette.primary.lighter,
      paddingTop: spacing(3),
      paddingBottom: spacing(4),
      [breakpoints.up('md')]: {
        paddingTop: spacing(9),
        paddingBottom: spacing(9),
      },
    },
    flexRow: {
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      flexDirection: 'column',
      [breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
      },
    },
    textGroup: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 60%',
    },
    title: {
      fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
      fontWeight: 600,
      margin: spacing(0, 0, 3, 0),
    },
    subTitle: {
      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.15rem)',
      fontWeight: 600,
      margin: spacing(0, 0, 3, 0),
    },
    descrip: {
      margin: '0 0 12px 0',
      lineHeight: 1.5,
      fontWeight: 400,
    },

    heroImgContainer: {
      marginTop: spacing(3),

      [breakpoints.up('md')]: {
        marginTop: 0,
        flex: '1 1 40%',
      },
    },
    heroImg: {
      width: '100%',
      maxWidth: 420,
      height: 'auto',
    },
    contactSection: {
      padding: spacing(3, 0, 5, 0),
      [breakpoints.up('md')]: {
        padding: spacing(5, 0, 8, 0),
      },
    },
  })
);

export default function ContactUs() {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();
  const { t } = useTranslation();
  const contactEmail = t('contact_email');

  return (
    <main className={`${classes.pageContainer}`}>
      {/* Hero Block */}
      <div className={classes.fullBleedBg}>
        <div className={`${classes.flexRow} ${utilityClasses.widePage}`}>
          <div className={classes.textGroup}>
            <h2 className={classes.title}>
              {t('contact_us_page.page_header')}
            </h2>
            <h3 className={classes.subTitle}>
              {t('contact_us_page.hero_title')}
            </h3>
            <p className={classes.descrip}>
              {t('contact_us_page.hero_paragraph1')}
            </p>
            <p className={classes.descrip}>
              {t('contact_us_page.hero_paragraph2', {
                contact_email: contactEmail,
              })}
            </p>
          </div>
          <div className={classes.heroImgContainer}>
            <img
              className={classes.heroImg}
              src={contactIllustration}
              alt={t('contact_us_page.page_header')}
            />
          </div>
        </div>
      </div>

      {/* Contact Block */}
      <div className={classes.contactSection}>
        <div className={`${classes.flexRow} ${utilityClasses.widePage}`}>
          <div className={`${classes.textGroup}`}>
            <h2 className={classes.title}>{t('contact_us_page.info_title')}</h2>
            <p className={classes.descrip}>
              <Trans
                i18nKey="contact_us_page.info_paragraph1"
                values={{ contact_email: contactEmail }}
                components={{ Link: <DynamicLink /> }}
              />
            </p>
            <p className={classes.descrip}>
              {t('contact_us_page.info_paragraph2_sla')}
            </p>
          </div>
          {/* Form section will be added in a subsequent step */}
          <div>
            Thank you! Your message has been sent. We will be in touch shortly.
          </div>
        </div>
      </div>
    </main>
  );
}
