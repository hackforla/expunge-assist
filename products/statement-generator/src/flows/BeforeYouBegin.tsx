import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Button from 'components/Button';

import ContentContainer from 'page-layout/ContentContainer';

import useUtilityStyles from 'styles/utilityStyles';

const BeforeYouBegin = () => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'light',
  });
  const { t } = useTranslation();

  const { goNextStep } = useContext(FormStateContext);

  return (
    <ContentContainer>
      <h3>{t('disclaimer.header')}</h3>

      <p>{t('disclaimer.text')}</p>

      <div className={utilityClasses.buttonContainer}>
        <Button
          className={utilityClasses.buttonRight}
          onClick={() => {
            goNextStep();
          }}
          theme="landing"
          buttonText="I understand"
          hasArrow
        />
      </div>
    </ContentContainer>
  );
};

export default BeforeYouBegin;
