import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import { createStyles, makeStyles } from '@material-ui/core';

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
      maxWidth: '945px',
      minWidth: '342px',
      width: '100%',
      margin: '45px auto 54.64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      [breakpoints.down('md')]: {
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
      alignItems: 'flex-start',
      backgroundColor: palette.primary.lighter,
      flex: '1 1 60%',
      marginRight: '36px',

      [breakpoints.down('md')]: {
        marginRight: 0,
        alignItems: 'center',
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

      [breakpoints.down(breakpoints.values.lg)]: {
        textAlign: 'center',
      },
    },
    ImgContainer: {
      width: '100%',
      textAlign: 'center',
      flex: '1 1 40%',
      marginRight: '16px',
    },
    Img: {
      width: 'auto',
      maxWidth: '100%',
      minWidth: '182px',
    },
  })
);

export const CreditsHeader: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContent}>
        <div className={classes.HeaderText}>
          <h2 className={classes.Heading}>{t('credits_page.page_header')}</h2>
          <p className={classes.SubHeading}>
            {t('credits_page.page_subheader')}
          </p>
        </div>
        <div className={classes.ImgContainer}>
          <img className={classes.Img} alt="Two people talking" />
        </div>
      </div>
    </header>
  );
};

function Credits() {
  const { t } = useTranslation();
  return (
    <>
      <CreditsHeader />
      <ContentContainer>
        <h2>{t('links.terms_of_use')}</h2>
        <h3>{t('terms_of_use_page.generator_heading')}</h3>
        <p>{t('terms_of_use_page.generator_description')}</p>

        <h3>{t('terms_of_use_page.scope_heading')}</h3>
        <p>{t('terms_of_use_page.scope_description')}</p>

        <h3>{t('terms_of_use_page.contributions_heading')}</h3>
        <p>{t('terms_of_use_page.contributions_description')}</p>
        <p>{t('terms_of_use_page.liability_description')}</p>
      </ContentContainer>
    </>
  );
}

export default Credits;
