import React from 'react';

import { IInvolvementParentingState } from 'contexts/FormStateProps';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementParentingStepProps {
  stepState: IInvolvementParentingState;
  setFormState: (value: any) => void;
}

const InvolvementParentingFlow = ({
  stepState,
  setFormState,
}: IInvolvementParentingStepProps) => {
  const utilityClasses = useUtilityStyles();

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

  const childNameValid = stepState.childName !== '';
  const parentYearsValid = stepState.parentYears !== '';
  const parentDescriptionValid = stepState.parentDescription !== '';
  const isNextDisabled =
    !childNameValid || !parentYearsValid || !parentDescriptionValid;

  return (
    <ContentContainer>
      <div className={utilityClasses.flexColumn}>
        What is the name of your child?
        <Input
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ childName: evt.target.value })
          }
          inputName="childName"
          placeholder="Name of Child"
          defaultValue={stepState.childName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        How long have you been a parent?
        <Input
          type="number"
          inputName="age"
          placeholder="1"
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ parentYears: evt.target.value })
          }
          disabled={!childNameValid}
          defaultValue={stepState.parentYears}
          adornment="years"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why is being a good parent important to you? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ parentDescription: evt.target.value })
          }
          inputName="parentDescription"
          placeholder="Being a good parent is important to me because..."
          multi
          isValid={parentDescriptionValid}
          disabled={!parentYearsValid}
          defaultValue={stepState.parentDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
};

export default InvolvementParentingFlow;
