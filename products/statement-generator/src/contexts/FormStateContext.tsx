import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  IStepState,
  defaultStepState,
  sampleStepState,
} from 'contexts/FormStateProps';
import { AppUrl, getNextFormUrl, isFormPage } from 'contexts/RoutingProps';
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
  const [stepShown, setStepShown] = useState<{ [key: string]: boolean }>({});
  const [showOopsReminder, setShowOopsReminder] = useState(false);

  const updateStepToForm = (stepState: any) =>
    setFormState({ ...formState, ...stepState });

  const { currentStep, goNextPage, goBackPage, setCanShowAffirmation } =
    useContext(RoutingContext);

  function getNextStep(givenUrl: AppUrl): AppUrl {
    const suggestedNext = getNextFormUrl(givenUrl);

    if (
      (suggestedNext === AppUrl.Job || suggestedNext === AppUrl.JobPreview) &&
      !formState.involvement.isJobChecked
    ) {
      return getNextStep(suggestedNext);
    }

    if (
      (suggestedNext === AppUrl.Unemployment ||
        suggestedNext === AppUrl.UnemploymentPreview) &&
      !formState.involvement.isUnemploymentChecked
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

    if (
      (suggestedNext === AppUrl.SomethingElse ||
        suggestedNext === AppUrl.SomethingElsePreview) &&
      !formState.involvement.isSomethingElseChecked
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
      if (process.env.NODE_ENV === 'development') {
        updateStepToForm(sampleStepState);
      }
    }
  }

  useEffect(() => {
    // initiate the event handler
    window.addEventListener('keydown', test);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('keydown', test);
    };
  });

  useEffect(() => {
    if (!stepShown[currentStep]) {
      setStepShown((prev) => ({ ...prev, [currentStep]: true }));
      // Add any specific logic that should only run once per step here
    }

    // Check if current step is form with empty formstate
    if (
      isFormPage(currentStep) &&
      currentStep !== AppUrl.Introduction &&
      formState.introduction.fullName === ''
    ) {
      setShowOopsReminder(true);
      setCanShowAffirmation(false);
    } else {
      setShowOopsReminder(false);
    }
  }, [currentStep, stepShown]);

  return (
    <FormStateContext.Provider
      value={{
        formState,
        updateStepToForm,
        goNextStep,
        goBackStep,
        getNextStep,
        stepShown,
        setStepShown,
        showOopsReminder,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};
