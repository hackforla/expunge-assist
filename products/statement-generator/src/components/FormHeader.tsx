import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';

import ProgressBar from 'components/ProgressBar';

const useStyles = makeStyles<Theme>(({ palette, breakpoints }) =>
  createStyles({
    root: {
      background: palette.primary.light,
      color: 'black',
      padding: '12px 12px',
      borderBottomRightRadius: '64px',

      [breakpoints.up(breakpoints.values.md)]: {
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
