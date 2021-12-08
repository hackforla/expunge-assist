import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { IStepState } from 'contexts/FormStateProps';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import FlowNavigation from 'components/FlowNavigation';

import { getPreviewStatement } from 'helpers/previewHelper';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(() =>
  createStyles({
    preview: {
      padding: '15px',
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      borderRadius: '20px',
      whiteSpace: 'pre-line',

      '& p': {
        marginBottom: 15,
      },
    },
  })
);

interface IFinalizeStepProps {
  formState: IStepState;
}

const FinalizeStep = ({ formState }: IFinalizeStepProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  const displayDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.purpleTitle}>
        <VisibilityIcon className={utilityClasses.purpleIcon} />
        Previewing Final Statement
      </div>

      <div className={classes.preview}>
        <span>{`${displayDate},\n\n`}</span>
        <span>{`To whom it may concern,\n\n`}</span>
        <p>{getPreviewStatement(formState, STEP_ENUMS.INTRODUCTION)}</p>
        <p>
          {getPreviewStatement(formState, STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW)}
        </p>
        <p>
          {getPreviewStatement(
            formState,
            STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW
          )}
        </p>
        <p>
          {getPreviewStatement(
            formState,
            STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW
          )}
        </p>
        <p>
          {getPreviewStatement(
            formState,
            STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW
          )}
        </p>
        <p>
          {getPreviewStatement(
            formState,
            STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW
          )}
        </p>
        <p>
          {getPreviewStatement(
            formState,
            STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW
          )}
        </p>
        <p>{getPreviewStatement(formState, STEP_ENUMS.GOALS_PREVIEW)}</p>
        <p>{getPreviewStatement(formState, STEP_ENUMS.WHY_PREVIEW)}</p>
      </div>

      <FlowNavigation />
    </div>
  );
};

export default FinalizeStep;
