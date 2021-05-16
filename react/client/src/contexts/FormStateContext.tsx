import React, { createContext, useState } from 'react';

import { IStepState, defaultStepState } from 'contexts/FormStateProps';
import { PAGE_ENUMS, getNextFormStep } from 'contexts/RoutingProps';
import { RoutingContext } from 'contexts/RoutingContext';

interface RoutingProviderProps {
  children: React.ReactNode;
}

export const FormStateContext = createContext<any>(undefined);

const FormStateContextProvider = ({ children }: RoutingProviderProps) => {
  const [formState, setFormState] = useState<IStepState>(defaultStepState);

  const updateStepToForm = (stepState: any) =>
    setFormState({ ...formState, ...stepState });

  const useRoutingContext = () => React.useContext(RoutingContext);
  const { pageEnum, goNextPage, goBackPage } = useRoutingContext();

  const goNextStep = () => {
    const suggestedNext = getNextFormStep(pageEnum);
    goNextPage(suggestedNext);
  }

  const goPrevStep = () => {
    goBackPage();
  }

  return (
    <FormStateContext.Provider
      value={{
        formState,
        updateStepToForm,
        goNextStep,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

export default FormStateContextProvider;
