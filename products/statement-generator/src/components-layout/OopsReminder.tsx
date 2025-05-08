import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';
import { AppUrl } from 'contexts/RoutingProps';

import { LinkButtonComponent } from 'components/Button';

import OopsReminderImage from 'assets/oopsReminder.svg';
import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles<Theme>(({ spacing, globals }) => createStyles({
  outerOopsWrap: {
    padding: spacing(2),
    display: 'flex',
  },
  oopsHeader: {
    fontSize: '60px',
    lineHeight: '90px',
  },
  oopsText: {
    fontSize: '24px',
    lineHeight: '36px',
  },

  buttonContainer: {
    width: '100%',
    display: 'flex',
    padding: spacing(3, 0),
  },
  contentContainer: {
    width: '50%',
  },
  textContainer: {
    minWidth: '540px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));

const OopsReminder = () => {
  const { t } = useTranslation();
  const { showOopsReminder } = useContext(FormStateContext);
  const utilityClasses = useUtilityStyles();
  const styles = useStyles();

  if (!showOopsReminder) return null;
  return (
    <div className={`${utilityClasses.widePage} ${styles.outerOopsWrap}`}>
      <div className={`text-container ${styles.textContainer}`}>
        <h1 className={styles.oopsHeader}>{t('oops_reminder.header')}</h1>
        <p className={styles.oopsText}>{t('oops_reminder.paragraph_1')}</p>
        <br />
        <p className={styles.oopsText}>{t('oops_reminder.paragraph_2')}</p>
        <div className={styles.buttonContainer}>
          <LinkButtonComponent buttonText={t('oops_reminder.button_text')} to={AppUrl.Introduction} />
        </div>
      </div>
      <div className={`image-container ${styles.contentContainer}`}>
        <img src={OopsReminderImage} alt={t('oops_reminder.image_alt_text')} />
      </div>
    </div>
  );
};

export default OopsReminder;
