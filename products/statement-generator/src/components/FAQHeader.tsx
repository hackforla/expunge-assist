import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import faqMobile from '../assets/faqMobile.svg';
import faqDesktop from '../assets/faqDesktop.svg';

const useStyles = makeStyles(({ palette, breakpoints }) =>
  createStyles({
    Header: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: palette.primary.lighter,
      marginBottom: '12px',

      [breakpoints.down('sm')]: {
        minHeight: '509px',
      },
    },
    HeaderContent: {
      maxWidth: '996px',
      minWidth: '342px',
      width: '69.2%',
      margin: '45px 222px 54.64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      [breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        margin: '24px 16px',
        gap: '36px',
      },
    },
    HeaderText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.primary.lighter,
      marginRight: '113.5px',

      [breakpoints.down('md')]: {
        marginRight: 0,
      },

      [breakpoints.down('sm')]: {
        gap: '24px',
      },
    },
    Heading: {
      fontSize: '34px',
      lineHeight: '51px',
      marginBotton: '16px',
      fontWeight: 700,
    },
    SubHeading: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 400,
    },
    DesktopImage: {
      [breakpoints.down(breakpoints.values.md)]: {
        display: 'none',
      },
    },
    MobileImage: {
      [breakpoints.up(breakpoints.values.md)]: {
        display: 'none',
      },
    },
  })
);

export const FAQHeader: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContent}>
        <div className={classes.HeaderText}>
          <h2 className={classes.Heading}>{t('faq2_page.page_header')}</h2>
          <p className={classes.SubHeading}>{t('faq2_page.page_subheader')}</p>
        </div>
        <div className={classes.DesktopImage}>
          <img src={faqDesktop} alt="Two people talking" />
        </div>
        <div className={classes.MobileImage}>
          <img src={faqMobile} alt="Two people talking" />
        </div>
      </div>
    </header>
  );
};
