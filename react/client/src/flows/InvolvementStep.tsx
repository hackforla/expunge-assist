import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Textarea from 'components/Textarea';
import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';

interface ICheckState {
  isJobChecked: boolean;
  isRecoveryChecked: boolean;
  isSchoolChecked: boolean;
  isParentingChecked: boolean;
  isCommunityChecked: boolean;
  isNoneChecked: boolean;
}

interface IJobState {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
}

const InvolvementStep = ({ inputs, setInputs, goToPage }: StepProps) => {
  const [flowState, setFlowState] = useState({
    convictionCheckState: {
      isJobChecked: false,
      isRecoveryChecked: false,
      isSchoolChecked: false,
      isParentingChecked: false,
      isCommunityChecked: false,
      isNoneChecked: false,
    },
  });

  const handleStateChange = (newState: object) => {
    setFlowState({ ...flowState, ...newState });
  };

  return (
    <form>
      <ConvictionFlow
        state={flowState.convictionCheckState}
        onChangeState={(newState) => {
          handleStateChange({...flowState, convictionCheckState: {
            ...flowState.convictionCheckState,
            ...newState,
          }})
        }} />

      <Button onClick={() => goToPage(2)} buttonText="BACK" />
      <Button onClick={() => goToPage(4)} buttonText="LOOKS GOOD" />
    </form>
  );
};

interface IConvictionFlowProps {
  state: ICheckState;
  onChangeState: (newState: object) => void;
}

const ConvictionFlow = ({ state, onChangeState }: IConvictionFlowProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className='adjacent-mar-top'>What things have you been involved with since your conviction?</div>
      <div className='adjacent-mar-top'>Please check all that apply:</div>
      <div className={classes.flexColumn}>
        <Checkbox
          checked={state.isJobChecked}
          onChange={() =>
            onChangeState({ isJobChecked: !state.isJobChecked })
          }
          label="Jobs"
        />

        <Checkbox
          checked={state.isRecoveryChecked}
          onChange={() =>
            onChangeState({
              isRecoveryChecked: !state.isRecoveryChecked,
            })
          }
          label="Recovery"
        />

        <Checkbox
          checked={state.isSchoolChecked}
          onChange={() =>
            onChangeState({ isSchoolChecked: !state.isSchoolChecked })
          }
          label="School"
        />

        <Checkbox
          checked={state.isParentingChecked}
          onChange={() =>
            onChangeState({
              isParentingChecked: !state.isParentingChecked,
            })
          }
          label="Parenting"
        />

        <Checkbox
          checked={state.isCommunityChecked}
          onChange={() =>
            onChangeState({
              isCommunityChecked: !state.isCommunityChecked,
            })
          }
          label="Community Service"
        />

        <Checkbox
          checked={state.isNoneChecked}
          onChange={() =>
            onChangeState({ isNoneChecked: !state.isNoneChecked })
          }
          label="None of the above"
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

export default InvolvementStep;
