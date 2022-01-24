import React, { createContext, useContext, useState } from 'react';

import {
  IStepState,
  defaultStepState,
  sampleStepState,
} from 'contexts/FormStateProps';
import { AppUrl, getNextFormUrl } from 'contexts/RoutingProps';
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

  function getNextStep(givenUrl: AppUrl): AppUrl {
    const suggestedNext = getNextFormUrl(givenUrl);

    if (
      (suggestedNext === AppUrl.Job || suggestedNext === AppUrl.JobPreview) &&
      !formState.involvement.isJobChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      (suggestedNext === AppUrl.Unemployed ||
        suggestedNext === AppUrl.UnemployedPreview) &&
      formState.involvement.isJobChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      (suggestedNext === AppUrl.CommunityService ||
        suggestedNext === AppUrl.CommunityServicePreview) &&
      !formState.involvement.isCommunityChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      (suggestedNext === AppUrl.Recovery ||
        suggestedNext === AppUrl.RecoveryPreview) &&
      !formState.involvement.isRecoveryChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      (suggestedNext === AppUrl.School ||
        suggestedNext === AppUrl.SchoolPreview) &&
      !formState.involvement.isSchoolChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      (suggestedNext === AppUrl.Parenting ||
        suggestedNext === AppUrl.ParentingPreview) &&
      !formState.involvement.isParentingChecked
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

  function test(evt: KeyboardEvent) {
    // ` (backquote)
    if (evt.keyCode === 192) {
      updateStepToForm(sampleStepState);
    }
  }

  React.useEffect(() => {
    // initiate the event handler
    window.addEventListener('keydown', test);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('keydown', test);
    };
  });

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
