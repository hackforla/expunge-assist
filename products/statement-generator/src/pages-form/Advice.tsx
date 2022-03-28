import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

export default function Advice() {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <h2>{t('advicePage.header')}</h2>
      <p>{t('advicePage.point1')}</p>
      <p>{t('advicePage.point2')}</p>
      <p>{t('advicePage.point3')}</p>
      <p>{t('advicePage.point4')}</p>
      <FlowNavigation />
    </ContentContainer>
  );
}
