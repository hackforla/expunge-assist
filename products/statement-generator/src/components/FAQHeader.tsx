import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    header: {
      width: '100vw',
      height: '464px',
      padding: spacing(1, 3),
      // padding: '45px 222px 54.6px 222px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.primary.lighter,
      marginBottom: 0,
    },
  })
);

export const FAQHeader: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <div>
        <h2>{t('faq2_page.page_header')}</h2>
        <p>{t('faq2_page.page_subheader')}</p>
      </div>
      {/* add header image here */}
    </header>
  );
};
