import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { FORM_STEPS, PAGES, getNextFormStep } from 'contexts/RoutingProps';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

export const RoutingContext = React.createContext<any>(undefined);

const RoutingContextProvider = ({
  children,
  history,
}: RoutingProviderProps) => {
  const [formSteps, setFormSteps] = useState([FORM_STEPS.NONE]);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const currentStep = formSteps[currentStepIdx];

  const url = history.location.pathname;
  const pageNumber = Number(url.slice(url.indexOf('/form') + 6)) || 0;

  const navigateToFormPage = () => {
    const currentPageName = PAGES[currentStep];
    history.push(`/form/${currentPageName}`);
  };

  const goNextPage = () => {
    const nextStep = getNextFormStep(currentStep);
    setCurrentStepIdx(currentStepIdx + 1);
    setFormSteps([...formSteps, nextStep]);
    navigateToFormPage();
  };

  const goBackPage = () => {
    const prevStepIdx = Math.max(currentStepIdx - 1, 0);
    setCurrentStepIdx(prevStepIdx);
    setFormSteps(formSteps.slice(0, prevStepIdx + 1));
    navigateToFormPage();
  };

  return (
    <RoutingContext.Provider
      value={{
        goNextPage,
        goBackPage,
        pageNumber,
        mainPage: currentStep,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export default withRouter(RoutingContextProvider);
