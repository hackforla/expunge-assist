import React from 'react';

import { IInvolvementInitialState } from 'contexts/FormStateProps';

import Checkbox from 'components/Checkbox';
import FlowNavigation from 'components/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementInitialStepProps {
  stepState: IInvolvementInitialState;
  setFormState: (value: any) => void;
  goNextPage: () => void;
  goBackPage: () => void;
}

const InvolvementInitialFlow = ({
  stepState,
  setFormState,
  goNextPage,
  goBackPage,
}: IInvolvementInitialStepProps) => {
  const utilityClasses = useUtilityStyles({});

  const updateFlowState = (changes: object) => {
    const newState = {
      ...stepState,
      ...changes,
    };
    setFormState(newState); // todo
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
          checked={stepState.isJobChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isJobChecked: evt.target.checked })
          }
          label="Jobs"
        />

        <Checkbox
          checked={stepState.isRecoveryChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isRecoveryChecked: evt.target.checked })
          }
          label="Recovery"
        />

        <Checkbox
          checked={stepState.isSchoolChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isSchoolChecked: evt.target.checked })
          }
          label="School"
        />

        <Checkbox
          checked={stepState.isParentingChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isParentingChecked: evt.target.checked })
          }
          label="Parenting"
        />

        <Checkbox
          checked={stepState.isCommunityChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isCommunityChecked: evt.target.checked })
          }
          label="Community Service"
        />

        <Checkbox
          checked={stepState.isNoneChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isNoneChecked: evt.target.checked })
          }
          label="None of the above"
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementInitialFlow;
