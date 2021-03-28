import React from 'react';
import useUtilityStyles from 'styles/utilityStyles';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

interface ComponentProps {
  goNextPage: () => void;
}

const BeforeYouBegin = ({ goNextPage }: ComponentProps) => {
  const utilityClasses = useUtilityStyles({});
  const { t } = useTranslation();

  return (
    <>
      <div className="adjacent-mar-top" style={{ whiteSpace: 'pre-wrap' }}>
        {t('disclaimerText.0')}
        <br />
        <br />
        {t('disclaimerText.1')}
        <br />
        <br />
        {t('disclaimerText.2')}
        <br />
        <br />
        {t('disclaimerText.3')}
        <br />
        <br />
        {t('disclaimerText.4')}
        <br />
        <br />
        {t('disclaimerText.5')}
      </div>

      <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
        <Button
          onClick={() => goNextPage()}
          buttonText="I understand"
          hasArrow
        />
      </div>
    </>
  );
};

export default BeforeYouBegin;
