import React from 'react';
import useUtilityStyles from 'styles/utilityStyles';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

interface ComponentProps {
  goNextPage: () => void;
  onChangeAffirmation: (newState: object) => void;
}

const BeforeYouBegin = ({
  goNextPage,
  onChangeAffirmation,
}: ComponentProps) => {
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
            onChangeAffirmation({ isActive: true });
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
