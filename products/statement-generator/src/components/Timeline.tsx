import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import DashedVerticalLine from './DashedVerticalLine';
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
      marginBottom: theme.spacing(4),
    },
    label: {
      fontWeight: 'bold',
    },
    description: {
      marginTop: theme.spacing(1),
    },
    dashedline: {
      marginRight: theme.spacing(4),
    },
  })
);

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Box className={classes.step}>
        <div className={classes.dashedline}>
          <CustomTimeline />
        </div>
        <Box>
          <h3>{t('landing_page.sectionTitle4BulletTitle1')}</h3>
          <ul>
            <p className={classes.description}>
              {t('landing_page.sectionParagraph4BulletPoint1')}
            </p>
          </ul>
          <h3>{t('landing_page.sectionTitle4BulletTitle2')}</h3>
          <ul>
            <p className={classes.description}>
              {t('landing_page.sectionParagraph4BulletPoint2')}
            </p>
          </ul>
          <h3>{t('landing_page.sectionTitle4BulletTitle3')}</h3>
          <ul>
            <p className={classes.description}>
              {t('landing_page.sectionParagraph4BulletPoint3')}
            </p>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Timeline;
