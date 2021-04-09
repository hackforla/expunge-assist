import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Textarea from 'components/Textarea';

import { IJobFlowProps } from 'involvement-step/InvolvementCommon';

const InvolvementJobFlow = ({ state, onChangeState }: IJobFlowProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flexColumn}>
        What is the name of the company you work for?
        <Textarea
          handleChange={() =>
            onChangeState({ companyName: !state.companyName })
          }
          inputName="companyName"
          placeholder="Name of company"
          multi={false}
          isValid
          defaultValue={state.companyName}
        />
      </div>

      <div className={classes.flexColumn}>
        What is your current job title?
        <Textarea
          handleChange={() => onChangeState({ jobTitle: !state.jobTitle })}
          inputName="jobTitle"
          placeholder="Job Title"
          multi={false}
          isValid
          defaultValue={state.jobTitle}
        />
      </div>

      <div className={classes.flexColumn}>
        What do you do at this job? Why is this important to you? (2-3 sentences
        suggested)
        <Textarea
          handleChange={() =>
            onChangeState({ jobDescription: !state.jobDescription })
          }
          inputName="jobDescription"
          placeholder="I have had the chance to..."
          multi
          isValid
          defaultValue={state.jobDescription}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 24,
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

export default InvolvementJobFlow;
