import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

const BeforeYouBegin = () => {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <h2>{t('before_you_begin_page.header')}</h2>

      <p>{t('before_you_begin_page.text')}</p>

      <FlowNavigation />
    </ContentContainer>
  );
};

export default BeforeYouBegin;
