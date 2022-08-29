import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';

import AffirmationImage from 'assets/affirmation-img.svg';

import Button from 'components/Button';

import { AffirmationContext } from 'contexts/AffirmationContext';

import useUtilityStyles from 'styles/utilityStyles';

interface CustomStyleProps {
  isActive: boolean;
}

const useStyles = makeStyles<Theme, CustomStyleProps>(({ palette, spacing }) =>
  createStyles({
    affirmationContainer: {
      background: palette.primary.lighter,
      padding: spacing(2),
    },
    messageContainer: {
      marginTop: spacing(2),
    },
    titleText: {
      fontSize: '2rem',
    },
  })
);

const Affirmation = () => {
  const { t } = useTranslation();
  const { affirmationData, updateAffirmationData } = useContext(
    AffirmationContext
  );

  const utilityClasses = useUtilityStyles({
    pageTheme: 'transparent',
  });
  const classes = useStyles({ isActive: affirmationData.isActive });

  return (
    <Dialog
      classes={{
        paper: classes.affirmationContainer,
      }}
      fullWidth
      open={affirmationData.isActive}
      onClose={() => updateAffirmationData({ isActive: false })}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <img src={AffirmationImage} alt="affirmation illustration" />

      <div className={classes.messageContainer}>
        <h2 className={classes.titleText}>{t(affirmationData.titleText)}</h2>
        <p>{t(affirmationData.description)}</p>
      </div>

      <div className={utilityClasses.buttonContainer}>
        <Button
          hasArrow
          className={utilityClasses.buttonRight}
          onClick={() => updateAffirmationData({ isActive: false })}
          buttonText={t(affirmationData.buttonText)}
        />
      </div>
    </Dialog>
  );
};

export default Affirmation;
