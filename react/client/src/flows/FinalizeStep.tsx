import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { IStepState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';

import useUtilityStyles from 'styles/utilityStyles';

import { GenerateIntroduction } from 'helpers/StatementHelpers';

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
        <p>{GenerateIntroduction(formState)}</p>

        <p>
          {`To Whom It May Concern,

          Thank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old. I am also a proud veteran of the United States Armed Forces.

          Since my conviction, I have been working at United Federal Credit Union as a Security Guard. At University Federal Credit Union, I have had the opportunity to assist in day to day operations and ensure the safety of valued customers. This is important to me because I like making people feel safe.

          I have also been really involved in community service. In particular, I’ve been working with Pauly’s Project. At Pauly’s Project, I lead the outreach team and distribute food to unhoused neighbors throughout the LA area. It’s important to me because I want these members of our community feel valued and loved.

          I am working towards going back to school, so that I can be a social worker. To work towards my goals; I have been taking night classes at Rosedale Community Center, and I have been shadowing a social worker on Fridays. Having my record cleared would help me acheive these goals for my future.

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
