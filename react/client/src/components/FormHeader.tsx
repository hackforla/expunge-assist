import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import ProgressBar from 'components/ProgressBar';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      background: '#f7ebff',
      color: 'black',
      padding: '12px 12px',
      borderBottomRightRadius: '64px',

      [theme.breakpoints.up(theme.breakpoints.values.md)]: {
        marginLeft: '18px',
        marginRight: '18px',
      },

      '& h2': {
        fontWeight: '300',
        fontSize: '20px',
        marginBottom: '12px',
      },
      '& .step-text': {
        color: '#9a9a9a',
        fontSize: '14px',
        marginTop: '6px',
      },
    },
  })
);

function convertStepToNum(step: string): number {
  switch (step) {
    case STEP_ENUMS.INTRODUCTION:
    case STEP_ENUMS.INTRODUCTION_PREVIEW:
      return 1;
    case STEP_ENUMS.INVOLVEMENT.INITIAL:
    case STEP_ENUMS.INVOLVEMENT.JOB:
    case STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW:
    case STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE:
    case STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW:
    case STEP_ENUMS.INVOLVEMENT.RECOVERY:
    case STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW:
    case STEP_ENUMS.INVOLVEMENT.SCHOOL:
    case STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW:
    case STEP_ENUMS.INVOLVEMENT.PARENTING:
    case STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW:
    case STEP_ENUMS.INVOLVEMENT.UNEMPLOYED:
    case STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW:
      return 2;
    case STEP_ENUMS.GOALS:
    case STEP_ENUMS.GOALS_PREVIEW:
      return 3;
    case STEP_ENUMS.WHY:
    case STEP_ENUMS.WHY_PREVIEW:
      return 4;
    case STEP_ENUMS.FINALIZE:
      return 5;
    default:
      return 0;
  }
}

function convertStepToTitle(step: string): string {
  switch (step) {
    case STEP_ENUMS.INTRODUCTION:
    case STEP_ENUMS.INTRODUCTION_PREVIEW:
      return 'Introduce Yourself!';
    case STEP_ENUMS.INVOLVEMENT.INITIAL:
      return 'Involvement';
    case STEP_ENUMS.INVOLVEMENT.JOB:
      return 'Involvement: Job';
    case STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE:
      return 'Involvement: Community Service';
    case STEP_ENUMS.INVOLVEMENT.RECOVERY:
      return 'Involvement: Recovery';
    case STEP_ENUMS.INVOLVEMENT.SCHOOL:
      return 'Involvement: School';
    case STEP_ENUMS.INVOLVEMENT.PARENTING:
      return 'Involvement: Parenting';
    case STEP_ENUMS.INVOLVEMENT.UNEMPLOYED:
      return 'Involvement: Unemployment';
    case STEP_ENUMS.GOALS:
      return 'Goals';
    case STEP_ENUMS.WHY:
      return 'Why';
    case STEP_ENUMS.FINALIZE:
      return 'My Personal Statement';
    default:
      return '';
  }
}

const FormHeader = () => {
  const classes = useStyles();
  const { currentStep } = React.useContext(RoutingContext);

  const maxNum = 5;
  const stepNum = convertStepToNum(currentStep);
  const percentageComplete = (stepNum / maxNum) * 100;

  if (stepNum === 0) {
    return null;
  }

  const formTitle = convertStepToTitle(currentStep);

  return (
    <div className={classes.root}>
      <h2>{formTitle}</h2>

      <ProgressBar percentage={percentageComplete} />

      {stepNum < maxNum && <div className="step-text">Step {stepNum} of 5</div>}
      {stepNum === maxNum && <div className="step-text">Completed</div>}
    </div>
  );
};

export default FormHeader;
