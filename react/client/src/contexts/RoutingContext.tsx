import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { PAGE_ENUMS, PAGES, URL, getNextFormStep } from 'contexts/RoutingProps';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

export const RoutingContext = React.createContext<any>(undefined);

const RoutingContextProvider = ({
  children,
  history,
}: RoutingProviderProps) => {
  const [formSteps, setFormSteps] = useState([PAGE_ENUMS.NONE]);
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
    const nextPageUrl = PAGES[nextStep];
    navigateToFormPage(nextPageUrl);
  };

  const goBackPage = () => {
    const prevStepIdx = Math.max(currentStepIdx - 1, 0);
    const prevStep = formSteps[prevStepIdx];
    setCurrentStepIdx(prevStepIdx);
    setFormSteps(formSteps.slice(0, prevStepIdx + 1));
    const prevPageUrl = PAGES[prevStep];
    navigateToFormPage(prevPageUrl);
  };

  // handle arriving directly from a url
  useEffect(() => {
    const pathMatcher = pathname.match(/(?<=\/form\/).*/) || [];
    const stepFromPathName = pathMatcher[0] || '';

    // redirect back to the first page when accessing another random page
    // (in the future we would first check what data is currently cached before
    // deciding if we redirect or not)
    if (stepFromPathName !== PAGES[PAGE_ENUMS.NONE] && formSteps.length <= 1) {
      // setCurrentStepIdx(0);
      // setFormSteps([PAGE_ENUMS.NONE]);
      // navigateToFormPage(PAGES[PAGE_ENUMS.NONE]);
    }

    // when going back to home page, clear out steps
    if ((pathname === '/' || pathname === '/form') && formSteps.length > 1) {
      setCurrentStepIdx(0);
      setFormSteps([PAGE_ENUMS.NONE]);
    }

    // for testing: treat current page as the landing page
    if (stepFromPathName) {
      const pageEnumFromPath = URL[stepFromPathName];
      setCurrentStepIdx(0);
      setFormSteps([pageEnumFromPath]);
    }
  }, [pathname]);

  return (
    <RoutingContext.Provider
      value={{
        goNextPage,
        goBackPage,
        pageEnum: currentStep,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export default withRouter(RoutingContextProvider);
