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
} from 'helpers/StatementHelpers';

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

        <p>
          {`I am working towards going back to school, so that I can be a social worker. To work towards my goals; I have been taking night classes at Rosedale Community Center, and I have been shadowing a social worker on Fridays. Having my record cleared would help me acheive these goals for my future.

          I want to clear my record because I am a different person from who I was when I was convicted. I want to make the world a better place. Right now having a criminal record is preventing me from being accepted to college, and it has hindered my career. Getting my record cleared will have a major impact on my life.

          Sincerely,

          Jenna Smith`}
        </p>
      </div>

      <FlowNavigation />
    </div>
  );
};

export default FinalizeStep;
