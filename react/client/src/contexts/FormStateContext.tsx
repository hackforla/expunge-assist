import React, { createContext, useContext, useState } from 'react';

import { IStepState, defaultStepState } from 'contexts/FormStateProps';
import { PAGE_ENUMS, getNextFormStep } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

interface RoutingProviderProps {
  children: React.ReactNode;
}

const FormStateContext = createContext<any>(undefined);
export default FormStateContext;

export const FormStateContextProvider = ({ children }: RoutingProviderProps) => {
  const [formState, setFormState] = useState<IStepState>(defaultStepState);

  const updateStepToForm = (stepState: any) =>
    setFormState({ ...formState, ...stepState });

  const { currentStep, goNextPage, goBackPage } = useContext(RoutingContext);

  const goNextStep = () => {
    const suggestedNext = getNextFormStep(currentStep);
    console.log('suggestedNext', suggestedNext)
    goNextPage(suggestedNext);
  }

  const goBackStep = () => {
    goBackPage();
  }

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
