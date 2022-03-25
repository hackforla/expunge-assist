import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';

import ProgressBar from 'components/ProgressBar';

import { getSectionTitle } from 'helpers/i18nHelper';

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

function convertStepToNum(url: AppUrl): number {
  switch (url) {
    case AppUrl.Introduction:
    case AppUrl.IntroductionPreview:
      return 1;
    case AppUrl.Involvement:
    case AppUrl.Job:
    case AppUrl.JobPreview:
    case AppUrl.CommunityService:
    case AppUrl.CommunityServicePreview:
    case AppUrl.Recovery:
    case AppUrl.RecoveryPreview:
    case AppUrl.School:
    case AppUrl.SchoolPreview:
    case AppUrl.Parenting:
    case AppUrl.ParentingPreview:
    case AppUrl.Unemployed:
    case AppUrl.UnemployedPreview:
      return 2;
    case AppUrl.Goals:
    case AppUrl.GoalsPreview:
      return 3;
    case AppUrl.Why:
    case AppUrl.WhyPreview:
      return 4;
    case AppUrl.Finalize:
      return 5;
    case AppUrl.Download:
      return 5;
    default:
      return 0;
  }
}

const FormHeader = () => {
  const classes = useStyles();
  const { currentStep } = React.useContext(RoutingContext);

  const maxNum = 5;
  const stepNum = convertStepToNum(currentStep);
  const percentageComplete = (stepNum / maxNum) * 100;

  const formTitle = getSectionTitle(currentStep);

  if (stepNum === 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      <h3>{formTitle}</h3>

      <ProgressBar percentage={percentageComplete} />

      {stepNum < maxNum && (
        <div className={classes.stepText}>Step {stepNum} of 5</div>
      )}
      {stepNum === maxNum && <div className={classes.stepText}>Completed</div>}
    </div>
  );
};

export default FormHeader;
