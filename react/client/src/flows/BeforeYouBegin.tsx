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
      <div className="adjacent-mar-top" style={{ fontWeight: 500 }}>
        {t('disclaimer.header')}
      </div>
      <div className="adjacent-mar-top" style={{ whiteSpace: 'pre-line' }}>
        {t('disclaimer.text')}
      </div>

      <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
        <Button
          onClick={() => {
            goNextPage();
          }}
          buttonText="I understand"
          hasArrow
        />
      </div>
    </>
  );
};

export default BeforeYouBegin;
