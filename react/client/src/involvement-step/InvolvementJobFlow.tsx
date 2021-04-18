import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
import Textarea from 'components/Textarea';

import {
  IJobFlowProps,
  IInvolvementJobState,
} from 'involvement-step/InvolvementCommon';

const InvolvementJobFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: IJobFlowProps) => {
  const classes = useStyles();
  const [state, setState] = useState<IInvolvementJobState>({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
  });

  const updateFlowState = (changes: object) => {
    const newState = {
      ...state,
      ...changes,
    };
    setState(newState);
    setInputs(inputs); // todo
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexColumn}>
        What is the name of the company you work for?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ companyName: evt.target.value })
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
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ jobTitle: evt.target.value })
          }
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
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ jobDescription: evt.target.value })
          }
          inputName="jobDescription"
          placeholder="I have had the chance to..."
          multi
          isValid
          defaultValue={state.jobDescription}
        />
      </div>

      <Button onClick={() => goBackPage()} buttonText="BACK" />
      <Button onClick={() => goNextPage()} buttonText="NEXT" />
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
