import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
import Checkbox from 'components/Checkbox';

import { IInvolvementCheckboxState } from 'involvement-step/InvolvementCommon';

const InvolvementInitialFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: StepProps) => {
  const classes = useStyles();
  const [state, setState] = useState<IInvolvementCheckboxState>({
    isJobChecked: false,
    isRecoveryChecked: false,
    isSchoolChecked: false,
    isParentingChecked: false,
    isCommunityChecked: false,
    isNoneChecked: false,
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
        What things have you been involved with since your conviction?
      </div>
      <div className={classes.flexColumn}>Please check all that apply:</div>
      <div className={classes.flexColumn}>
        <Checkbox
          checked={state.isJobChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isJobChecked: evt.target.checked })
          }
          label="Jobs"
        />

        <Checkbox
          checked={state.isRecoveryChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isRecoveryChecked: evt.target.checked })
          }
          label="Recovery"
        />

        <Checkbox
          checked={state.isSchoolChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isSchoolChecked: evt.target.checked })
          }
          label="School"
        />

        <Checkbox
          checked={state.isParentingChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isParentingChecked: evt.target.checked })
          }
          label="Parenting"
        />

        <Checkbox
          checked={state.isCommunityChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isCommunityChecked: evt.target.checked })
          }
          label="Community Service"
        />

        <Checkbox
          checked={state.isNoneChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isNoneChecked: evt.target.checked })
          }
          label="None of the above"
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

export default InvolvementInitialFlow;
