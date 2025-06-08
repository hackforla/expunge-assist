import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';
import { AppUrl } from 'contexts/RoutingProps';

import { LinkButtonComponent } from 'components/Button';

import OopsReminderImage from 'assets/oopsReminder.svg';
import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles<Theme>(({ spacing, breakpoints }) =>
  createStyles({
    outerOopsWrap: {
      padding: spacing(2),
      display: 'flex',
      [breakpoints.down(breakpoints.values.md)]: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        textAlign: 'center',
        margin: '60px 0',
        paddingTop: '0',
        paddingBottom: '0',
      },
    },
    oopsHeader: {
      'font-weight': '600',
      letterSpacing: '-0.5px',
      width: '100%',
    },
    oopsText: {
      fontSize: '20px',
      lineHeight: '1.5',
      maxWidth: '415px',
      [breakpoints.down(breakpoints.values.md)]: {
        fontSize: '16px',
      },
    },
    buttonContainer: {
      width: '100%',
      display: 'flex',
      padding: spacing(3, 0),
      [breakpoints.down(breakpoints.values.md)]: {
        justifyContent: 'center',
      },
    },
    imageContainer: {
      width: '50%',
      [breakpoints.down(breakpoints.values.md)]: {
        padding: spacing(2),
        width: '100%',
        maxWidth: '450px',
      },
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: spacing(4),
    },
    image: {
      width: '100%',
    },
  })
);

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
          <LinkButtonComponent
            buttonText={t('oops_reminder.button_text')}
            to={AppUrl.Welcome}
          />
        </div>
      </div>
      <div className={`${styles.imageContainer}`}>
        <img
          className={styles.image}
          src={OopsReminderImage}
          alt={t('oops_reminder.image_alt_text')}
        />
      </div>
    </div>
  );
};

export default OopsReminder;
