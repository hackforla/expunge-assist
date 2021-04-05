import React, { useEffect, useState } from 'react';
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
  const { pathname } = history.location;

  const navigateToFormPage = (newPageUrl: string) => {
    history.push(`/form/${newPageUrl}`);
  };

  const goNextPage = () => {
    const nextStep = getNextFormStep(currentStep);
    setCurrentStepIdx(currentStepIdx + 1);
    setFormSteps([...formSteps, nextStep]);
    const currentPageName = PAGES[currentStep];
    navigateToFormPage(currentPageName);
  };

  const goBackPage = () => {
    const prevStepIdx = Math.max(currentStepIdx - 1, 0);
    setCurrentStepIdx(prevStepIdx);
    setFormSteps(formSteps.slice(0, prevStepIdx + 1));
    const currentPageName = PAGES[currentStep];
    navigateToFormPage(currentPageName);
  };

  // handle arriving directly from a url
  useEffect(() => {
    const pathMatcher = pathname.match(/(?<=\/form\/)\w*/) || [];
    const stepFromPathName = pathMatcher[0] || '';

    // redirect back to the first page when accessing another random page
    // (in the future we would first check what data is currently cached before
    // deciding if we redirect or not)
    if (stepFromPathName !== PAGES[FORM_STEPS.NONE] && formSteps.length <= 1) {
      // setCurrentStepIdx(0);
      // setFormSteps([FORM_STEPS.NONE]);
      // navigateToFormPage(PAGES[FORM_STEPS.NONE]);
    }

    // when going back to home page, clear out steps
    if (pathname === '/' && formSteps.length > 1) {
      setCurrentStepIdx(0);
      setFormSteps([FORM_STEPS.NONE]);
    }
  }, [pathname]);

  return (
    <RoutingContext.Provider
      value={{
        goNextPage,
        goBackPage,
        mainPage: currentStep,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export default withRouter(RoutingContextProvider);
