import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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
      position: 'relative',
      display: 'inline-block',
    },
    dashedVerticalLine: {
      height: '440px',
      width: '3px',
      backgroundColor: theme.palette.primary.darker,
      backgroundImage: 'linear-gradient(to bottom, transparent 50%, #fff 50%)',
      backgroundSize: '100% 20px',
      backgroundRepeat: 'repeat-y',
    },
    circle: {
      width: '4rem',
      height: '4rem',
      textDecoration: 'bold',
      backgroundColor: theme.palette.primary.lighter,
      color: theme.palette.primary.darker,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: '-2rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    stepOne: {
      marginBottom: theme.spacing(14),
    },
    stepTwo: {
      marginBottom: theme.spacing(2),
    },
    stepThree: {
      marginTop: theme.spacing(14),
    },
  })
);

const Timeline: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const lineHeight = 405;
  const topSpacing = 0;
  const bottomSpacing = lineHeight;
  const middlePosition = (bottomSpacing - topSpacing) / 2.3;

  return (
    <Box className={classes.root}>
      <Box className={classes.step}>
        <div className={classes.dashedline}>
          <div className={classes.dashedVerticalLine} />
          <div className={classes.circle} style={{ top: topSpacing }}>
            1
          </div>
          <div className={classes.circle} style={{ top: middlePosition }}>
            2
          </div>
          <div className={classes.circle} style={{ top: bottomSpacing - 32 }}>
            3
          </div>
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
