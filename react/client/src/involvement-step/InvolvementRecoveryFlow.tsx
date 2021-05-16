import React from 'react';

import { IInvolvementRecoveryState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementRecoveryProps {
  stepState: IInvolvementRecoveryState;
  setFormState: (value: any) => void;
}

const InvolvementRecoveryFlow = ({
  stepState,
  setFormState,
}: IInvolvementRecoveryProps) => {
  const utilityClasses = useUtilityStyles();

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What is the name of the recovery program you are involved with?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ recoveryName: evt.target.value })
          }
          inputName="recoveryName"
          placeholder="Name of Organization"
          multi={false}
          isValid
          defaultValue={stepState.recoveryName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why is this recovery program important to you? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ recoveryDescription: evt.target.value })
          }
          inputName="recoveryDescription"
          placeholder="This program is important to me because..."
          multi
          isValid
          defaultValue={stepState.recoveryDescription}
        />
      </div>

      <FlowNavigation />
    </div>
  );
};

export default InvolvementRecoveryFlow;
