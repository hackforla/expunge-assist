import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

const BeforeYouBegin = () => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });
  const { t } = useTranslation();

  const { goNextStep } = useContext(FormStateContext);

  return (
    <div>
      <h3>{t('disclaimer.header')}</h3>

      <p>{t('disclaimer.text')}</p>

      <div className={utilityClasses.buttonContainer}>
        <Button
          className={utilityClasses.buttonRight}
          onClick={() => {
            goNextStep();
          }}
          theme="dark"
          buttonText="I understand"
          hasArrow
        />
      </div>
    </div>
  );
};

export default BeforeYouBegin;
