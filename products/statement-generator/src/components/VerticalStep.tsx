import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

function getSteps() {
  return ['Answer Questions', 'Preview and edit text', 'Download letter'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `Follow simple question prompts to know what and how much to say.`;
    case 1:
      return `Preview what you’ve written and make any changes after each section and at the end.`;
    case 2:
      return `When you’re happy with the letter, download, copy, or email it to use in your application.`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalStep() {
  const classes = useStyles();

  const steps = getSteps();
  return (
    <div className={classes.root}>
      <Stepper orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
