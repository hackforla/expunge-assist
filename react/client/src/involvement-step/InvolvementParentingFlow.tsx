import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
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
    parentYears: 0,
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
        What is the name of the community service organization that you are
        involved with?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ childName: evt.target.value })
          }
          inputName="childName"
          placeholder="Name of Organization"
          multi={false}
          isValid
          defaultValue={state.childName}
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
