import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

export interface VerticalStepperStep {
  id: string;
  label: string;
  description: string;
  isCompleted?: boolean;
}

interface VerticalStepProps {
  steps: VerticalStepperStep[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    step: {
      display: 'flex',
      alignItems: 'center',
    },
    stepContent: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(2),
      fontSize: '1rem',
    },
    active: {
      fontWeight: 'bold',
      color: theme.palette.primary.darker,
    },
    stepLabel: {
      color: theme.palette.primary.dark,
    },
  })
);

const VerticalStepper: React.FC<VerticalStepProps> = ({ steps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel className={classes.active}>{step.label}</StepLabel>
            <Typography className={classes.active}>
              {step.description}
            </Typography>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default VerticalStepper;
