import React, { useState } from 'react';

import { IStepProps } from 'contexts/FormStateProps';

import Checkbox from 'components/Checkbox';
import FlowNavigation from 'components/FlowNavigation';

import { IInvolvementCheckboxState } from 'involvement-step/InvolvementCommon';

import useUtilityStyles from 'styles/utilityStyles';

const InvolvementInitialFlow = ({
  formState,
  setFormState,
  goNextPage,
  goBackPage,
}: IStepProps) => {
  const utilityClasses = useUtilityStyles({});
  const [state, setState] = useState<IInvolvementCheckboxState>({
    isJobChecked: false,
    isRecoveryChecked: false,
    isSchoolChecked: false,
    isParentingChecked: false,
    isCommunityChecked: false,
    isNoneChecked: false,
  });

  const updateFlowState = (changes: object) => {
    const newState = {
      ...state,
      ...changes,
    };
    setState(newState);
    setFormState(formState); // todo
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
          checked={state.isJobChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isJobChecked: evt.target.checked })
          }
          label="Jobs"
        />

        <Checkbox
          checked={state.isRecoveryChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isRecoveryChecked: evt.target.checked })
          }
          label="Recovery"
        />

        <Checkbox
          checked={state.isSchoolChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isSchoolChecked: evt.target.checked })
          }
          label="School"
        />

        <Checkbox
          checked={state.isParentingChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isParentingChecked: evt.target.checked })
          }
          label="Parenting"
        />

        <Checkbox
          checked={state.isCommunityChecked}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ isCommunityChecked: evt.target.checked })
          }
          label="Community Service"
        />

        <Checkbox
          checked={state.isNoneChecked}
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
