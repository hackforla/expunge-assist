import React, { useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';

import ProgressBar from 'components/ProgressBar';
import FormStateContext from 'contexts/FormStateContext';
import { IInvolvementInitialState } from 'contexts/FormStateProps';

const useStyles = makeStyles<Theme>(
  ({ palette, breakpoints, spacing, typography }) =>
    createStyles({
      root: {
        background: palette.primary.lighter,
        color: palette.common.black,
        padding: spacing(2),
        borderBottomRightRadius: '64px',

        [breakpoints.up(breakpoints.values.md)]: {
          marginLeft: spacing(2),
          marginRight: spacing(2),
        },

        '& h2': {
          fontWeight: '300',
        },
      },
      stepText: {
        color: palette.common.grey,
        marginTop: spacing(1),
        fontSize: typography.fontSize,
      },
    })
);

function convertStepToNum(url: AppUrl, involvement: IInvolvementInitialState ): number {
  let additionalStepCounter =0;
  // get the boolean values of involvement
  const involvementArr = Object.values(involvement);
  // isJobChecked and isNoneChecked are already accounted for; so we're removing them
  involvementArr.shift();
  involvementArr.pop();
  const involvementActivities: number[] = [];
  involvementArr.forEach((value,i) => {
    if(value) {
      additionalStepCounter += 1;
      involvementActivities.push(0);
      return;
    }
    involvementActivities.push(-1)
  })
  const stepAdjustment: number[] = [];
  involvementActivities.reduce((a,b) => {
    stepAdjustment.push(b);
    return a+b;
  })
  console.log(stepAdjustment);
  
  switch (url) {
    case AppUrl.Introduction:
    case AppUrl.IntroductionPreview:
      return 1;
    case AppUrl.Involvement:
      return 2;
    case AppUrl.CommunityService:
    case AppUrl.CommunityServicePreview: {
      return 7 + stepAdjustment[3];
    }
    case AppUrl.Recovery:
    case AppUrl.RecoveryPreview: {
      return 4;
    }
    case AppUrl.School:
    case AppUrl.SchoolPreview: {
      return 5 + stepAdjustment[1];
    }
    case AppUrl.Parenting:
    case AppUrl.ParentingPreview: {
      return 6 + stepAdjustment[2];
    }
    case AppUrl.Job:
    case AppUrl.JobPreview:
    case AppUrl.Unemployed:
    case AppUrl.UnemployedPreview:
      return 3;
    case AppUrl.Goals:
    case AppUrl.GoalsPreview:
      return 4 + additionalStepCounter;
    case AppUrl.Why:
    case AppUrl.WhyPreview:
      return 5 + additionalStepCounter;
    case AppUrl.Finalize:
      return 6 + additionalStepCounter;
    case AppUrl.Download:
      return 6 + additionalStepCounter;
    default:
      return 0;
  }
}

function convertStepToTitle(url: AppUrl): string {
  switch (url) {
    case AppUrl.Introduction:
    case AppUrl.IntroductionPreview:
      return 'Introduce Yourself!';
    case AppUrl.Involvement:
      return 'Involvement';
    case AppUrl.Job:
      return 'Involvement: Job';
    case AppUrl.JobPreview:
      return 'Involvement: Job';
    case AppUrl.CommunityService:
      return 'Involvement: Community Service';
    case AppUrl.CommunityServicePreview:
      return 'Involvement: Community Service';
    case AppUrl.Recovery:
      return 'Involvement: Recovery';
    case AppUrl.RecoveryPreview:
      return 'Involvement: Recovery';
    case AppUrl.School:
      return 'Involvement: School';
    case AppUrl.SchoolPreview:
      return 'Involvement: School';
    case AppUrl.Parenting:
      return 'Involvement: Parenting';
    case AppUrl.ParentingPreview:
      return 'Involvement: Parenting';
    case AppUrl.Unemployed:
      return 'Involvement: Unemployment';
    case AppUrl.UnemployedPreview:
      return 'Involvement: Unemployment';
    case AppUrl.Goals:
      return 'Goals';
    case AppUrl.GoalsPreview:
      return 'Goals';
    case AppUrl.Why:
      return 'Why';
    case AppUrl.WhyPreview:
      return 'Why';
    case AppUrl.Finalize:
      return 'My Personal Statement';
    default:
      return '';
  }
}

const FormHeader = () => {
  const classes = useStyles();
  const { currentStep } = useContext(RoutingContext);
  const { formState: { involvement } } = useContext(FormStateContext)

  const { isJobChecked, isCommunityChecked, isParentingChecked, isSchoolChecked, isRecoveryChecked, isNoneChecked } = involvement;
  let maxNum = 5;
  const stepNum = convertStepToNum(currentStep, involvement);
  if(isJobChecked) {
    maxNum +=1;
  }
  if(isCommunityChecked) {
    maxNum +=1;
  }
  if(isParentingChecked) {
    maxNum +=1;
  }
  if(isSchoolChecked) {
    maxNum +=1;
  }
  if(isRecoveryChecked) {
    maxNum +=1;
  }
  if(isNoneChecked) {
    maxNum +=1;
  }
  const percentageComplete = (stepNum / maxNum) * 100;

  if (stepNum === 0) {
    return null;
  }

  const formTitle = convertStepToTitle(currentStep);

  return (
    <div className={classes.root}>
      <h2>{formTitle}</h2>

      <ProgressBar percentage={percentageComplete} />

      {stepNum < maxNum && (
        <div className={classes.stepText}>Step {stepNum} of {maxNum}</div>
      )}
      {stepNum === maxNum && <div className={classes.stepText}>Completed</div>}
    </div>
  );
};

export default FormHeader;
