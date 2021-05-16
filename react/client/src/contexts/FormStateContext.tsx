import React, { createContext, useState } from 'react';

import { IStepState, defaultStepState } from 'contexts/FormStateProps';

interface RoutingProviderProps {
  children: React.ReactNode;
}

export const FormStateContext = createContext<any>(undefined);

const FormStateContextProvider = ({ children }: RoutingProviderProps) => {
  const [formState, setFormState] = useState<IStepState>(defaultStepState);

  const updateStepToForm = (stepState: any) =>
    setFormState({ ...formState, ...stepState });

  return (
    <FormStateContext.Provider
      value={{
        formState,
        updateStepToForm,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

export default FormStateContextProvider;
