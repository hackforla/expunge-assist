import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';

function TermsOfUse() {
  const { t } = useTranslation();

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
    </ContentContainer>
  );
}

export default TermsOfUse;
