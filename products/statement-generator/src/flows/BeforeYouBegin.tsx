import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

interface ComponentProps {
  onChangeAffirmation: (newState: object) => void;
}

const BeforeYouBegin = ({ onChangeAffirmation }: ComponentProps) => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });
  const { t } = useTranslation();

  const { goNextStep } = useContext(FormStateContext);

  return (
    <div className={utilityClasses.contentContainer}>
      <h3>{t('disclaimer.header')}</h3>

      <p>{t('disclaimer.text')}</p>

      <div className={utilityClasses.buttonContainer}>
        <Button
          className={utilityClasses.buttonRight}
          onClick={() => {
            onChangeAffirmation({ isActive: true });
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
