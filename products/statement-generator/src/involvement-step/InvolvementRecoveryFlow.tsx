import React from 'react';

import { IInvolvementRecoveryState } from 'contexts/FormStateProps';

import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';
import Input from '../components/Input';

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

  const recoveryNameValid = stepState.recoveryName !== '';
  const recoveryDescriptionValid = stepState.recoveryDescription !== '';
  const isNextDisabled = !recoveryNameValid || !recoveryDescriptionValid;

  return (
    <ContentContainer>
      <div className={utilityClasses.flexColumn}>
        What is the name of the recovery program you are involved with?
        <Input
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ recoveryName: evt.target.value })
          }
          id="recoveryName"
          placeholder="Name of Organization"
          defaultValue={stepState.recoveryName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why is this recovery program important to you? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ recoveryDescription: evt.target.value })
          }
          id="recoveryDescription"
          placeholder="This program is important to me because..."
          multi
          isValid={recoveryDescriptionValid}
          disabled={!recoveryNameValid}
          defaultValue={stepState.recoveryDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
};

export default InvolvementRecoveryFlow;
