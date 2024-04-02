import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CustomTimeline from './CustomTimeline';

export interface TimelineStep {
  id: string;
  label: string;
  description: string;
  isCompleted?: boolean;
}

interface TimelineProps {
  steps: TimelineStep[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(2),
    },
    step: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      fontWeight: 'bold',
    },
    description: {
      marginTop: theme.spacing(2),
    },
    dashedline: {
      marginRight: theme.spacing(5),
    },
    stepOne: {
      marginBottom: theme.spacing(12),
    },
    stepTwo: {
      marginBottom: theme.spacing(2),
    },
    stepThree: {
      marginTop: theme.spacing(13),
    },
  })
);

const Timeline: React.FC<TimelineProps> = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Box className={classes.step}>
        <div className={classes.dashedline}>
          <CustomTimeline />
        </div>
        <div>
          <div className={classes.stepOne}>
            <h3>{t('landing_page.sectionTitle4BulletTitle1')}</h3>
            <p>{t('landing_page.sectionParagraph4BulletPoint1')}</p>
          </div>
          <div className={classes.stepTwo}>
            <h3>{t('landing_page.sectionTitle4BulletTitle2')}</h3>
            <p>{t('landing_page.sectionParagraph4BulletPoint2')}</p>
          </div>
          <div className={classes.stepThree}>
            <h3>{t('landing_page.sectionTitle4BulletTitle3')}</h3>
            <p>{t('landing_page.sectionParagraph4BulletPoint3')}</p>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Timeline;
