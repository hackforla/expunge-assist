import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
import Input from 'components/Input';
import Textarea from 'components/Textarea';

import { IInvolvementParentingState } from 'involvement-step/InvolvementCommon';

const InvolvementParentingFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: StepProps) => {
  const classes = useStyles();
  const [state, setState] = useState<IInvolvementParentingState>({
    childName: '',
    parentYears: '',
    parentDescription: '',
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
        What is the name of your child?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ childName: evt.target.value })
          }
          inputName="childName"
          placeholder="Name of Child"
          multi={false}
          isValid
          defaultValue={state.childName}
        />
      </div>

      <div className={classes.flexColumn}>
        How long have you been a parent?
        <Input
          type="number"
          inputName="age"
          placeholder="1"
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ parentYears: evt.target.value })
          }
          defaultValue={state.parentYears}
        />
      </div>

      <div className={classes.flexColumn}>
        Why is being a good parent important to you? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ parentDescription: evt.target.value })
          }
          inputName="parentDescription"
          placeholder="Being a good parent is important to me because..."
          multi={false}
          isValid
          defaultValue={state.parentDescription}
        />
      </div>

      <div>
        <Button onClick={() => goBackPage()} buttonText="BACK" />
        <Button onClick={() => goNextPage()} buttonText="NEXT" />
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

export default InvolvementParentingFlow;
