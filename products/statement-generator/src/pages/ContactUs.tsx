import React from 'react';
import { makeStyles, createStyles, useMediaQuery } from '@material-ui/core';
import { useTranslation, Trans } from 'react-i18next';
import useUtilityStyles from 'styles/utilityStyles';

import contactIllustration from 'assets/contact.svg';
import ContactForm from 'components/ContactForm';
import { DynamicLink } from '../components/DynamicText';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) =>
  createStyles({
    pageContainer: {
      flex: '1 0 auto',
      flexDirection: 'column',
    },
    fullBleedBg: {
      backgroundColor: palette.primary.lighter,
      paddingTop: spacing(4),
      paddingBottom: spacing(1),
      [breakpoints.up('md')]: {
        paddingTop: spacing(6),
        paddingBottom: spacing(6),
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
      },
    },
    utGap: {
      [breakpoints.up('md')]: {
        gap: 30,
      },
    },
    textGroup: {
      [breakpoints.down('md')]: {
        marginBottom: spacing(3),
      },
    },
    heroImgContainer: {
      marginTop: spacing(3),
    },
    heroImg: {
      width: '100%',
      maxWidth: 420,
      height: 'auto',
    },
    srOnly: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0,
    },
    h1: {
      fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
      fontWeight: 600,
      margin: spacing(0, 0, 3, 0),
      [breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
      fontWeight: 600,
      margin: spacing(0, 0, 3, 0),
      [breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    subTitle: {
      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.15rem)',
      fontWeight: 600,
      margin: spacing(0, 0, 3, 0),
    },
    descrip: {
      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.15rem)',
      [breakpoints.up('md')]: {
        fontSize: 'clamp(1.25rem, calc(1.25rem + 0.026vw), 1.5rem)',
      },
      margin: '0 0 12px 0',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    contactSection: {
      padding: spacing(4, 0, 5, 0),
      [breakpoints.up('md')]: {
        padding: spacing(5, 0, 8, 0),
      },
    },
    formContainer: {
      [breakpoints.up('md')]: {
        flex: '1 1 50%',
        minWidth: 300,
      },
    },
  })
);

const Hero: React.FC = () => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();
  const { t } = useTranslation();
  const contactEmail = t('contact_email');
  const isMedUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  const smIntro = (
    <>
      <h2 className={classes.subTitle}>{t('contact_us_page.hero_title')}</h2>
      <p className={classes.descrip}>{t('contact_us_page.hero_paragraph1')}</p>
      <p className={classes.descrip}>
        {t('contact_us_page.hero_paragraph2', {
          contact_email: contactEmail,
        })}
      </p>
    </>
  );

  const mdUpIntro = (
    <>
      <p className={classes.descrip}>
        {t('contact_us_page.hero_paragraph1_md')}
      </p>
    </>
  );

  return (
    <section
      className={classes.fullBleedBg}
      role="banner"
      aria-labelledby="contact-page-heading"
    >
      <div className={`${classes.flexRow} ${utilityClasses.widePage}`}>
        <div className={classes.textGroup}>
          <h1 id="contact-page-heading" className={classes.h1}>
            {t('contact_us_page.page_header')}
          </h1>
          {isMedUp ? mdUpIntro : smIntro}
        </div>

        <figure className={classes.heroImgContainer}>
          <img
            className={classes.heroImg}
            src={contactIllustration}
            alt={t('contact_us_page.page_header')}
          />
          {/* Visually hidden caption */}
          <figcaption className={classes.srOnly}>
            {t('contact_us_page.hero_title')}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

const Info: React.FC = () => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();
  const { t } = useTranslation();
  const contactEmail = t('contact_email');

  return (
    <section
      className={classes.contactSection}
      aria-labelledby="contact-info-heading"
    >
      <div
        className={`${classes.flexRow} ${classes.utGap} ${utilityClasses.widePage}`}
      >
        <div className={classes.textGroup}>
          <h2 id="contact-info-heading" className={classes.h2}>
            {t('contact_us_page.info_title')}
          </h2>
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

        <div className={classes.formContainer}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactUs: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.pageContainer}>
      <Hero />
      <Info />
    </main>
  );
};

export default ContactUs;
