import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';
import { AppUrl } from 'contexts/RoutingProps';

import { LinkButtonComponent } from 'components/Button';
import OopsReminderImage from 'assets/oopsReminder.svg';

const OopsReminder = () => {
  const { t } = useTranslation();
  const { showOopsReminder } = useContext(FormStateContext);
  if (!showOopsReminder) return null;
  return (
    <div className="outer-oops-wrap">
      <div className="text-container">
        <h2>{t('oops_reminder.header')}</h2>
        <p>{t('oops_reminder.paragraph_1')}</p>
        <p>{t('oops_reminder.paragraph_2')}</p>
        <LinkButtonComponent buttonText={t('oops_reminder.button_text')} to={AppUrl.Introduction}/>
      </div>
      <div className="image-container">
        <img src={OopsReminderImage} alt="Someone with their hands on their head in frustration standing in front of a computer that says 'NO REFRESHING'" />
      </div>
    </div>
  );
};

export default OopsReminder;
