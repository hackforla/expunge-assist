import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { STEP_ENUMS, PAGES, URL, getNextFormStep } from 'contexts/RoutingProps';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

interface PageData {
  stepIdx: number;
  stepEnum: string;
  pageEnum: string; // path
  isCurrentStep: boolean;
  isViewedStep: boolean; // has user been on this step in current session
  isNewStep: boolean;
}

const RoutingContext = React.createContext<any>(undefined);
export default RoutingContext;

const PreRoutingContextProvider = ({
  children,
  history,
}: RoutingProviderProps) => {
  const [formSteps, setFormSteps] = useState([STEP_ENUMS.NONE]);
  const [canShowAffirmation, setCanShowAffirmation] = useState(true);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const currentStep = formSteps[currentStepIdx];
  const { pathname } = history.location;

  const navigateToFormPage = (newPageUrl: string) => {
    history.push(`/form/${newPageUrl}`);
  };

  const goNextPage = (suggestedNext?: string) => {
    const nextStep = suggestedNext || getNextFormStep(currentStep);
    setCurrentStepIdx(currentStepIdx + 1);
    if (!formSteps.includes(nextStep)) {
      setFormSteps([...formSteps, nextStep]);
    }

    const nextPageUrl = PAGES[nextStep];
    navigateToFormPage(nextPageUrl);
    setCanShowAffirmation(true);
  };

  const goBackPage = () => {
    const prevStepIdx = Math.max(currentStepIdx - 1, 0);
    const prevStep = formSteps[prevStepIdx];
    setCurrentStepIdx(prevStepIdx);
    const prevPageUrl = PAGES[prevStep];
    setCanShowAffirmation(false);
    navigateToFormPage(prevPageUrl);
  };

  function handleBrowserPageNav(existingPageEnum: string) {
    const existingPageIdx = formSteps.indexOf(existingPageEnum);
    setCurrentStepIdx(existingPageIdx);
    setCanShowAffirmation(false);
  }

  // triggers on any url change
  //  meaning both programmatic history navigation via `navigateToFormPage()`
  //  and pressing back on the browser
  useEffect(() => {
    const pathMatcher = pathname.match(/(?<=\/form\/).*/) || [];
    const pageEnum = pathMatcher[0] || '';
    const stepEnum = URL[pageEnum];
    const stepIdx = formSteps.indexOf(stepEnum);
    const newPageData: PageData = {
      stepIdx,
      stepEnum,
      pageEnum,
      isCurrentStep: stepEnum === currentStep,
      isViewedStep: stepIdx > -1,
      isNewStep: stepIdx === -1,
    };

    // redirect back to the first page when accessing another random page
    // (in the future we would first check what data is currently cached before
    // deciding if we redirect or not)
    if (pageEnum !== PAGES[STEP_ENUMS.NONE] && formSteps.length <= 1) {
      // setCurrentStepIdx(0);
      // setFormSteps([STEP_ENUMS.NONE]);
      // navigateToFormPage(PAGES[STEP_ENUMS.NONE]);
    }

    if (newPageData.isViewedStep && !newPageData.isCurrentStep) {
      handleBrowserPageNav(stepEnum);
    }

    // when going to home page, clear out steps
    // TODO: potentially buggy if data is filled and user presses back on browser
    if (pathname === '/' || pathname === '/form') {
      setCurrentStepIdx(0);
      setFormSteps([STEP_ENUMS.NONE]);
    }

    // TESTING
    //  if page is the first one the user lands on, treat it as the first page
    if (pageEnum && formSteps.length <= 1) {
      if (stepEnum === undefined) {
        setCurrentStepIdx(0);
        setFormSteps([STEP_ENUMS.NONE]);
        history.push('/404');
      } else {
        setCurrentStepIdx(0);
        setFormSteps([stepEnum]);
      }
    }
  }, [pathname]);

  return (
    <RoutingContext.Provider
      value={{
        goNextPage,
        goBackPage,
        currentStep,
        canShowAffirmation,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export const RoutingContextProvider = withRouter(PreRoutingContextProvider);
