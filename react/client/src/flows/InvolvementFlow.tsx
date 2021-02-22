import React, { useState } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

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

interface IInvolvementFormState {
  convictionCheckboxes: string[];
}

const InvolvementFlow = ({ inputs, setInputs, goToPage }: StepProps) => {
  const [flowState, setFlowState] = useState({
    convictionCheckboxes: [],
  });

  return (
    <form>
      <ConvictionStep />
      <Button onClick={() => goToPage(2)} buttonText="BACK" />
      <Button onClick={() => goToPage(4)} buttonText="LOOKS GOOD" />
    </form>
  );
};

const ConvictionStep = () => {
  const classes = useStyles();
  const [checkState, setCheckState] = useState({
    isJobChecked: false,
    isRecoveryChecked: false,
    isSchoolChecked: false,
    isParentingChecked: false,
    isCommunityChecked: false,
    isNoneChecked: false,
  });

  const updateCheckState = (newState: object) => {
    setCheckState({ ...checkState, ...newState });
  };

  return (
    <div>
      <div>What things have you been involved with since your conviction?</div>
      <div>Please check all that apply:</div>
      <div className={classes.flexColumn}>
        <Checkbox
          checked={checkState.isJobChecked}
          onChange={() =>
            updateCheckState({ isJobChecked: !checkState.isJobChecked })
          }
          label="Jobs"
        />

        <Checkbox
          checked={checkState.isRecoveryChecked}
          onChange={() =>
            updateCheckState({
              isRecoveryChecked: !checkState.isRecoveryChecked,
            })
          }
          label="Recovery"
        />

        <Checkbox
          checked={checkState.isSchoolChecked}
          onChange={() =>
            updateCheckState({ isSchoolChecked: !checkState.isSchoolChecked })
          }
          label="School"
        />

        <Checkbox
          checked={checkState.isParentingChecked}
          onChange={() =>
            updateCheckState({
              isParentingChecked: !checkState.isParentingChecked,
            })
          }
          label="Parenting"
        />

        <Checkbox
          checked={checkState.isCommunityChecked}
          onChange={() =>
            updateCheckState({
              isCommunityChecked: !checkState.isCommunityChecked,
            })
          }
          label="Community Service"
        />

        <Checkbox
          checked={checkState.isNoneChecked}
          onChange={() =>
            updateCheckState({ isNoneChecked: !checkState.isNoneChecked })
          }
          label="None of the above"
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

export default InvolvementFlow;
