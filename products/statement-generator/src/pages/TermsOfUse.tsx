import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

import ContentContainer from 'components-layout/ContentContainer';

import useUtilityStyles from 'styles/utilityStyles';

function TermsOfUse() {
  const { t } = useTranslation();
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });
  const history = useHistory();

  return (
    <ContentContainer>
      <h2>{t('links.terms_of_use')}</h2>
      <h3>{t('terms_of_use_page.generator_heading')}</h3>
      <p>{t('terms_of_use_page.generator_description')}</p>

      <h3>{t('terms_of_use_page.scope_heading')}</h3>
      <p>{t('terms_of_use_page.scope_description')}</p>

      <h3>{t('terms_of_use_page.contributions_heading')}</h3>
      <p>{t('terms_of_use_page.contributions_description')}</p>
      <p>{t('terms_of_use_page.liability_description')}</p>

      <div className={utilityClasses.buttonContainer}>
        <Button
          onClick={() => history.goBack()}
          buttonText="Back"
          theme="transparent-on-light"
        />
      </div>
    </ContentContainer>
  );
}

export default TermsOfUse;
