import React from 'react';

import { IInvolvementInitialState } from 'contexts/FormStateProps';

import Checkbox from 'components/Checkbox';
import FlowNavigation from 'components/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementInitialStepProps {
  stepState: IInvolvementInitialState;
  setFormState: (value: any) => void;
}

const InvolvementInitialFlow = ({
  stepState,
  setFormState,
}: IInvolvementInitialStepProps) => {
  const utilityClasses = useUtilityStyles({});

  const updateStepState = (changes: IInvolvementInitialState) => {
    if (changes.isNoneChecked) {
      setFormState({
        isJobChecked: false,
        isRecoveryChecked: false,
        isSchoolChecked: false,
        isParentingChecked: false,
        isCommunityChecked: false,
        isNoneChecked: true,
      });
      return;
    }

    if (
      changes.isJobChecked ||
      changes.isRecoveryChecked ||
      changes.isSchoolChecked ||
      changes.isParentingChecked ||
      changes.isCommunityChecked
    ) {
      setFormState({
        ...stepState,
        ...changes,
        isNoneChecked: false,
      });
      return;
    }

    setFormState({
      ...stepState,
      ...changes,
    });
  };

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What things have you been involved with since your conviction?
      </div>
      <div className={utilityClasses.flexColumn}>
        Please check all that apply:
      </div>
      <div className={utilityClasses.flexColumn}>
        <Checkbox
          checked={stepState.isJobChecked || false}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ isJobChecked: evt.target.checked })
          }
          label="Jobs"
        />

        <Checkbox
          checked={stepState.isRecoveryChecked || false}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ isRecoveryChecked: evt.target.checked })
          }
          label="Recovery"
        />

        <Checkbox
          checked={stepState.isSchoolChecked || false}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ isSchoolChecked: evt.target.checked })
          }
          label="School"
        />

        <Checkbox
          checked={stepState.isParentingChecked || false}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ isParentingChecked: evt.target.checked })
          }
          label="Parenting"
        />

        <Checkbox
          checked={stepState.isCommunityChecked || false}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ isCommunityChecked: evt.target.checked })
          }
          label="Community Service"
        />

        <Checkbox
          checked={stepState.isNoneChecked || false}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ isNoneChecked: evt.target.checked })
          }
          label="None of the above"
        />
      </div>

      <FlowNavigation />
    </div>
  );
};

export default InvolvementInitialFlow;
