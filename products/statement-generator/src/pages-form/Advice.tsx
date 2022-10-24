import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

export default function Advice() {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <h2>{t('advice_page.header')}</h2>
      <p>{t('advice_page.point1.content')}</p>
      
      <p>{t('advice_page.point2.content')}</p>
      <p>{t('advice_page.point3.content')}</p>
      <p>{t('advice_page.followUp')}</p>
      <FlowNavigation />
    </ContentContainer>
  );
}
