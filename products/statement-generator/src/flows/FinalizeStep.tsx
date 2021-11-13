import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { IStepState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

import {
  generateIntroduction,
  generateInvolvementJob,
  generateInvolvementCommunity,
  generateInvolvementRecovery,
  generateInvolvementSchool,
  generateInvolvementParenting,
  generateInvolvementUnemployed,
  generateFutureGoals,
  generateWhy,
} from 'helpers/statementGenerators';

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
        <p>{generateIntroduction(formState)}</p>
        <p>{generateInvolvementJob(formState)}</p>
        <p>{generateInvolvementCommunity(formState)}</p>
        <p>{generateInvolvementRecovery(formState)}</p>
        <p>{generateInvolvementSchool(formState)}</p>
        <p>{generateInvolvementParenting(formState)}</p>
        <p>{generateInvolvementUnemployed(formState)}</p>
        <p>{generateFutureGoals(formState)}</p>
        <p>{generateWhy(formState)}</p>
      </div>

      <FlowNavigation />
    </div>
  );
};

export default FinalizeStep;
