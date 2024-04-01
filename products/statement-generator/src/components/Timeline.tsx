import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Brightness1 } from '@material-ui/icons';

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
    },
    step: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    bullet: {
      width: theme.spacing(1),
      height: theme.spacing(1),
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[400],
      marginRight: theme.spacing(2.5),
      boxSizing: 'border-box', // Ensure consistent sizing
    },
    bulletCompleted: {
      backgroundColor: theme.palette.primary.main,
    },
    label: {
      fontWeight: 'bold',
    },
    description: {
      marginTop: theme.spacing(1),
    },
  })
);

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {steps.map((step) => (
        <Box key={step.id} className={classes.step}>
          <Brightness1 className={`${classes.bullet}`} />
          <Box>
            <Typography className={classes.label}>{step.label}</Typography>
            <Typography className={classes.description}>
              {step.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Timeline;
