import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(() =>
  createStyles({
    purpleTitle: {
      color: '#9903FF',
      fontStyle: 'italic',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    purpleIcon: {
      color: '#9903FF',
      fontSize: '20px',
      marginRight: '0.5rem',
    },
    preview: {
      padding: '15px',
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      borderRadius: '20px',
      '& h2': {
        color: '#9903FF',
        marginTop: 15,
      },
      '& p': {
        whiteSpace: 'pre-wrap',
        marginBottom: 15,
      },
    }
  })
);

// interface IFinalizeStepProps {}

const FinalizeStep = () => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={classes.purpleTitle}>
        <VisibilityIcon className={classes.purpleIcon} />
        Previewing Final Statement
      </div>

      <div className={classes.preview}>
        <p>
          {`October 26th, 2020

          To Whom It May Concern,

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
