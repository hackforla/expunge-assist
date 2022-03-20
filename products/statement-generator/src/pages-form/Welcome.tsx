import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <h1>{t('welcomePage.titleText')}</h1>

      <p>{t('welcomePage.description')}</p>

      <FlowNavigation showBack={false} />
    </ContentContainer>
  );
}
