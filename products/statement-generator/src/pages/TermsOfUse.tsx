import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      lineHeight: 1.5,
    },
  })
);

function TermsOfUse() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <ContentContainer>
      <h2>{t('links.terms_of_use')}</h2>
      <h3>{t('terms_of_use_page.generator_heading')}</h3>
      <p className={classes.text}>
        {t('terms_of_use_page.generator_description')}
      </p>

      <h3>{t('terms_of_use_page.scope_heading')}</h3>
      <p className={classes.text}>{t('terms_of_use_page.scope_description')}</p>

      <h3>{t('terms_of_use_page.contributions_heading')}</h3>
      <p className={classes.text}>
        {t('terms_of_use_page.contributions_description')}
      </p>
      <p className={classes.text}>
        {t('terms_of_use_page.liability_description')}
      </p>
    </ContentContainer>
  );
}

export default TermsOfUse;
