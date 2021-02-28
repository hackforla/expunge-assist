import React, { useState } from 'react';
// import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import InvolvementFlow1 from 'involvement-step/InvolvementFlow1';

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
    setInputs(inputs); // todo
  };

  return (
    <form>
      <InvolvementFlow1
        state={flowState.convictionCheckState}
        onChangeState={(newState) => {
          handleStateChange({
            ...flowState,
            convictionCheckState: {
              ...flowState.convictionCheckState,
              ...newState,
            },
          });
        }}
      />

      <Button onClick={() => goToPage(2)} buttonText="BACK" />
      <Button onClick={() => goToPage(4)} buttonText="LOOKS GOOD" />
    </form>
  );
};

export default InvolvementStep;
