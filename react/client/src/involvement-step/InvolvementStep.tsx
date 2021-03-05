import React, { useState } from 'react';
// import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import InvolvementInitialFlow from 'involvement-step/InvolvementInitialFlow';
import InvolvementJobFlow from 'involvement-step/InvolvementJobFlow';

const InvolvementStep = ({ inputs, setInputs, goToPage }: StepProps) => {
  const [flowState, setFlowState] = useState({
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

      <InvolvementJobFlow
        state={flowState.jobState}
        onChangeState={(newState) => {
          handleStateChange({
            ...flowState,
            jobState: {
              ...flowState.jobState,
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
