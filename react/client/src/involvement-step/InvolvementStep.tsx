import React, { useState } from 'react';
// import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import {
  IInvolvementState,
  StepEnum,
} from 'involvement-step/InvolvementCommon';
import InvolvementInitialFlow from 'involvement-step/InvolvementInitialFlow';

const InvolvementStep = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: StepProps) => {
  const [flowState, setFlowState] = useState<IInvolvementState>({
    currentStep: StepEnum.INITIAL,
    involvementState: {
      isJobChecked: false,
      isRecoveryChecked: false,
      isSchoolChecked: false,
      isParentingChecked: false,
      isCommunityChecked: false,
      isNoneChecked: false,
    },
    jobState: {
      companyName: '',
      jobTitle: '',
      jobDescription: '',
    },
  });

  const handleStateChange = (newState: object) => {
    setFlowState({ ...flowState, ...newState });
    setInputs(inputs); // todo
  };

  return (
    <form>
      <InvolvementInitialFlow
        state={flowState.involvementState}
        onChangeState={(newState) => {
          handleStateChange({
            ...flowState,
            involvementState: {
              ...flowState.involvementState,
              ...newState,
            },
          });
        }}
      />

      <Button onClick={() => goBackPage()} buttonText="BACK" />
      <Button onClick={() => goNextPage()} buttonText="NEXT" />
    </form>
  );
};

export default InvolvementStep;
