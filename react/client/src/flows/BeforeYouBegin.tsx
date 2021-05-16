import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

interface ComponentProps {
  onChangeAffirmation: (newState: object) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      margin: '23px 0 50px',
    },
  })
);
const BeforeYouBegin = ({
  onChangeAffirmation,
}: ComponentProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({});
  const { t } = useTranslation();

  const { goNextStep } = useContext(FormStateContext);

  return (
    <div className={utilityClasses.contentContainer}>
      <div
        className="adjacent-mar-top"
        style={{ fontWeight: 500, fontSize: '20px' }}
      >
        {t('disclaimer.header')}
      </div>
      <div className={classes.content} style={{ whiteSpace: 'pre-line' }}>
        {t('disclaimer.text')}
      </div>

      <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
        <Button
          onClick={() => {
            onChangeAffirmation({ isActive: true });
            goNextStep();
          }}
          buttonText="I understand"
          hasArrow
        />
      </div>
    </div>
  );
};

export default BeforeYouBegin;
