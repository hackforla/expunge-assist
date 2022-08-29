import React, { useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';

import ProgressBar from 'components/ProgressBar';
import FormStateContext from 'contexts/FormStateContext';
import { IInvolvementInitialState } from 'contexts/FormStateProps';

import { getSectionTitle } from 'helpers/i18nHelper';

const useStyles = makeStyles<Theme>(
  ({ palette, breakpoints, globals, spacing, typography }) =>
    createStyles({
      outerWrapper: {
        background: palette.primary.lighter,
        borderBottomRightRadius: '64px',
        paddingBottom: spacing(1),

        [breakpoints.up(breakpoints.values.md)]: {
          borderBottomLeftRadius: '64px',
        },
      },
      formHeader: {
        maxWidth: globals.wideWidth,
        color: palette.common.black,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: spacing(1, 2),
      },
      stepText: {
        color: palette.common.grey,
        marginTop: spacing(1),
        fontSize: typography.fontSize,
      },
    })
);

function convertStepToNum(
  url: AppUrl,
  involvement: IInvolvementInitialState
): number {
  let additionalStepCounter = 0;
  // get the boolean values of involvement
  const involvementArr = Object.values(involvement);
  // isJobChecked and isNoneChecked are already accounted for; so we're removing them
  involvementArr.shift();
  involvementArr.pop();
  const involvementActivities: number[] = [];
  involvementArr.forEach((value) => {
    if (value) {
      additionalStepCounter += 1;
      involvementActivities.push(0);
      return;
    }
    involvementActivities.push(-1);
  });
  const stepAdjustmentArr: number[] = [];
  involvementActivities.forEach((step, i) => {
    const prevStep = stepAdjustmentArr[i - 1];
    if (i === 0) {
      stepAdjustmentArr.push(step);
      return;
    }
    const adjustedStep = step + prevStep;
    stepAdjustmentArr.push(adjustedStep);
  });

  switch (url) {
    case AppUrl.Introduction:
    case AppUrl.IntroductionPreview:
      return 1;
    case AppUrl.Involvement:
      return 2;
    case AppUrl.CommunityService:
    case AppUrl.CommunityServicePreview: {
      return 7 + stepAdjustmentArr[3];
    }
    case AppUrl.Recovery:
    case AppUrl.RecoveryPreview: {
      return 4;
    }
    case AppUrl.School:
    case AppUrl.SchoolPreview: {
      return 5 + stepAdjustmentArr[1];
    }
    case AppUrl.Parenting:
    case AppUrl.ParentingPreview: {
      return 6 + stepAdjustmentArr[2];
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
    case AppUrl.FinalizePreview:
      return 7 + additionalStepCounter;
    case AppUrl.Download:
      return 7 + additionalStepCounter;
    default:
      return 0;
  }
}

const FormHeader = () => {
  const classes = useStyles();
  const { currentStep } = useContext(RoutingContext);
  const {
    formState: { involvement },
  } = useContext(FormStateContext);

  const {
    isJobChecked,
    isCommunityChecked,
    isParentingChecked,
    isSchoolChecked,
    isRecoveryChecked,
    isNoneChecked,
  } = involvement;
  let maxNum = 6;
  const stepNum = convertStepToNum(currentStep, involvement);
  if (isJobChecked) {
    maxNum += 1;
  }
  if (isCommunityChecked) {
    maxNum += 1;
  }
  if (isParentingChecked) {
    maxNum += 1;
  }
  if (isSchoolChecked) {
    maxNum += 1;
  }
  if (isRecoveryChecked) {
    maxNum += 1;
  }
  if (isNoneChecked) {
    maxNum += 1;
  }

  if (currentStep === AppUrl.Involvement) {
    maxNum = 6;
  }
  const percentageComplete = (stepNum / maxNum) * 100;

  const formTitle = getSectionTitle(currentStep);

  if (stepNum === 0) {
    return null;
  }

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.formHeader}>
        <h3>{formTitle}</h3>

        <ProgressBar percentage={percentageComplete} />
      </div>
    </div>
  );
};

export default FormHeader;
