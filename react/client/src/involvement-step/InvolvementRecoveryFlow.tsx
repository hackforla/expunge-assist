import React, { useState } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import { IInvolvementRecoveryState } from 'involvement-step/InvolvementCommon';

import useUtilityStyles from 'styles/utilityStyles';

const InvolvementRecoveryFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: StepProps) => {
  const utilityClasses = useUtilityStyles();
  const [state, setState] = useState<IInvolvementRecoveryState>({
    recoveryName: '',
    recoveryDescription: '',
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
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What is the name of the recovery program you are involved with?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ recoveryName: evt.target.value })
          }
          inputName="recoveryName"
          placeholder="Name of Organization"
          multi={false}
          isValid
          defaultValue={state.recoveryName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why is this recovery program important to you? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ recoveryDescription: evt.target.value })
          }
          inputName="recoveryDescription"
          placeholder="This program is important to me because..."
          multi
          isValid
          defaultValue={state.recoveryDescription}
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementRecoveryFlow;
