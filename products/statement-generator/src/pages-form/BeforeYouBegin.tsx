import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

const BeforeYouBegin = () => {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <h2>{t('disclaimer.header')}</h2>

      <p>{t('disclaimer.text')}</p>

      <FlowNavigation />
    </ContentContainer>
  );
};

export default BeforeYouBegin;
