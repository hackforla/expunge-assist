import React from 'react';
import { useTranslation } from 'react-i18next';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

import YesIcon from 'assets/Check.png';
import NoIcon from 'assets/Cancel.png';

export default function Advice() {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <h2>{t('advice_page.header')}</h2>
      <div>
        <p>{t('advice_page.point1.content')}</p>
        <div className="yes-no-container">
          <div className="no-container">
            <img src={NoIcon} alt=""/>
            <p>{t('advice_page.point1.no')}</p>
          </div>
          <div className="yes-container">
            <img src={YesIcon} alt=""/>
            <p>{t('advice_page.point1.yes')}</p>
          </div>
        </div>
        <p>{t('advice_page.point2.content')}</p>
        <div className="yes-no-container">
          <div className="no-container">
            <img src={NoIcon} alt=""/>
            <p>{t('advice_page.point2.no')}</p>
          </div>
          <div className="yes-container">
            <img src={YesIcon} alt=""/>
            <p>{t('advice_page.point2.yes')}</p>
          </div>
        </div>
        <p>{t('advice_page.point3.content')}</p>
        <div className="yes-no-container">
          <div className="no-container">
            <img src={NoIcon} alt=""/>
            <p>{t('advice_page.point3.no')}</p>
          </div>
          <div className="yes-container">
            <img src={YesIcon} alt=""/>
            <p>{t('advice_page.point3.yes')}</p>
          </div>
        </div>
      </div>
      <p>{t('advice_page.followUp')}</p>
      <FlowNavigation />
    </ContentContainer>
  );
}
