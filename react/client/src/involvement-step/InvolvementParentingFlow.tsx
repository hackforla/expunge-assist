import React, { useState } from 'react';

import { IStepProps } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Input from 'components/Input';
import Textarea from 'components/Textarea';

import { IInvolvementParentingState } from 'involvement-step/InvolvementCommon';

import useUtilityStyles from 'styles/utilityStyles';

const InvolvementParentingFlow = ({
  formState,
  setFormState,
  goNextPage,
  goBackPage,
}: IStepProps) => {
  const utilityClasses = useUtilityStyles();
  const [state, setState] = useState<IInvolvementParentingState>({
    childName: '',
    parentYears: '',
    parentDescription: '',
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
        What is the name of your child?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ childName: evt.target.value })
          }
          inputName="childName"
          placeholder="Name of Child"
          multi={false}
          isValid
          defaultValue={state.childName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        How long have you been a parent?
        <Input
          type="number"
          inputName="age"
          placeholder="1"
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ parentYears: evt.target.value })
          }
          defaultValue={state.parentYears}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why is being a good parent important to you? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ parentDescription: evt.target.value })
          }
          inputName="parentDescription"
          placeholder="Being a good parent is important to me because..."
          multi={false}
          isValid
          defaultValue={state.parentDescription}
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementParentingFlow;
