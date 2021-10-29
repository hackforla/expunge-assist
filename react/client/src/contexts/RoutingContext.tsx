import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { STEP_ENUMS, PAGES, URL, getNextFormStep } from 'contexts/RoutingProps';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

interface PageData {
  stepEnum: string;
  pageEnum: string; // path
  isViewedStep: boolean; // has user been on this step in current session
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

  const [pageData, setPageData] = useState<PageData>({
    stepEnum: STEP_ENUMS.NONE,
    pageEnum: PAGES[STEP_ENUMS.NONE],
    isViewedStep: false,
  });

  const navigateToFormPage = (newPageUrl: string) => {
    history.push(`/form/${newPageUrl}`);
  };

  const goNextPage = (suggestedNext?: string) => {
    const nextStep = suggestedNext || getNextFormStep(currentStep);
    setCurrentStepIdx(currentStepIdx + 1);
    setFormSteps([...formSteps, nextStep]);
    const nextPageUrl = PAGES[nextStep];
    navigateToFormPage(nextPageUrl);
    setCanShowAffirmation(true);
  };

  const goBackPage = () => {
    const prevStepIdx = Math.max(currentStepIdx - 1, 0);
    const prevStep = formSteps[prevStepIdx];
    setCurrentStepIdx(prevStepIdx);
    setFormSteps(formSteps.slice(0, prevStepIdx + 1));
    const prevPageUrl = PAGES[prevStep];
    navigateToFormPage(prevPageUrl);
    setCanShowAffirmation(false);
  };

  // triggers on any url change
  //  meaning both programmatic history navigation via `navigateToFormPage()`
  //  and pressing back on the browser
  useEffect(() => {
    const pathMatcher = pathname.match(/(?<=\/form\/).*/) || [];
    const pageFromPathname = pathMatcher[0] || '';
    setPageData({
      stepEnum: URL[pageFromPathname],
      pageEnum: pageFromPathname,
      isViewedStep: formSteps.includes(URL[pageFromPathname]),
    });
    console.log('pageData', pageData);

    // redirect back to the first page when accessing another random page
    // (in the future we would first check what data is currently cached before
    // deciding if we redirect or not)
    if (pageData.pageEnum !== PAGES[STEP_ENUMS.NONE] && formSteps.length <= 1) {
      // setCurrentStepIdx(0);
      // setFormSteps([STEP_ENUMS.NONE]);
      // navigateToFormPage(PAGES[STEP_ENUMS.NONE]);
    }

    if (pageData.isViewedStep) {
      console.log('cool', pageData.pageEnum);
    }

    // when going back to home page, clear out steps
    if (pathname === '/' || pathname === '/form') {
      setCurrentStepIdx(0);
      setFormSteps([STEP_ENUMS.NONE]);
    }

    // TESTING
    //  if page is the first one the user lands on, treat it as the first page
    if (pageData.pageEnum && formSteps.length <= 1) {
      const pathURL = URL[pageData.pageEnum];
      if (pathURL === undefined) {
        setCurrentStepIdx(0);
        setFormSteps([STEP_ENUMS.NONE]);
        history.push('/404');
      } else {
        setCurrentStepIdx(0);
        setFormSteps([pathURL]);
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
