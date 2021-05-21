import React, { createContext, useContext, useState } from 'react';

import { IStepState, defaultStepState } from 'contexts/FormStateProps';
import {
  STEP_ENUMS,
  getNextFormStep,
  isAnInvolvementPage,
} from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

interface FormStateProviderProps {
  children: React.ReactNode;
}

const FormStateContext = createContext<any>(undefined);
export default FormStateContext;

export const FormStateContextProvider = ({
  children,
}: FormStateProviderProps) => {
  const [formState, setFormState] = useState<IStepState>(defaultStepState);

  const updateStepToForm = (stepState: any) =>
    setFormState({ ...formState, ...stepState });

  const { currentStep, goNextPage, goBackPage } = useContext(RoutingContext);

  function getNextStep(startingStep: string): string {
    const suggestedNext = getNextFormStep(startingStep);

    // if `None of the Above` is checked, we go directly to the unemployed step
    if (
      isAnInvolvementPage(suggestedNext) &&
      formState.involvementInitialState.isNoneChecked
    ) {
      return STEP_ENUMS.INVOLVEMENT.UNEMPLOYED;
    }

    if (
      suggestedNext === STEP_ENUMS.INVOLVEMENT.JOB &&
      !formState.involvementInitialState.isJobChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      suggestedNext === STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE &&
      !formState.involvementInitialState.isCommunityChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      suggestedNext === STEP_ENUMS.INVOLVEMENT.RECOVERY &&
      !formState.involvementInitialState.isRecoveryChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      suggestedNext === STEP_ENUMS.INVOLVEMENT.SCHOOL &&
      !formState.involvementInitialState.isSchoolChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      suggestedNext === STEP_ENUMS.INVOLVEMENT.PARENTING &&
      !formState.involvementInitialState.isParentingChecked
    ) {
      return getNextStep(suggestedNext);
    }

    return suggestedNext;
  }

  const goNextStep = () => {
    const nextStep = getNextStep(currentStep);
    goNextPage(nextStep);
  };

  const goBackStep = () => {
    goBackPage();
  };

  return (
    <FormStateContext.Provider
      value={{
        formState,
        updateStepToForm,
        goNextStep,
        goBackStep,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};
