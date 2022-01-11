import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { AppUrl, isAppUrl, getNextGeneratorUrl } from 'contexts/RoutingProps';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

interface PageData {
  // browserUrl: AppUrl;
  browserUrlIdx: number;
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
  const [appHistory, setAppHistory] = useState([AppUrl.Landing]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const [canShowAffirmation, setCanShowAffirmation] = useState(true);

  const currentStep = appHistory[historyIdx];
  const { pathname } = history.location;
  const appUrl = pathname as AppUrl;

  console.log('pathname', pathname, appUrl);

  const isDarkTheme =
    currentStep === AppUrl.BeforeYouBegin || currentStep === AppUrl.Landing;
  const topLevelPageTheme = isDarkTheme ? 'dark' : 'transparent';

  const navigateToAppUrl = (newAppUrl: AppUrl) => {
    history.push(`/form/${newAppUrl}`);
  };

  const goNextPage = (suggestedNext?: AppUrl) => {
    const nextUrl = suggestedNext || getNextGeneratorUrl(currentStep);
    setHistoryIdx(historyIdx + 1);
    if (!appHistory.includes(nextUrl)) {
      setAppHistory([...appHistory, nextUrl]);
    }

    navigateToAppUrl(nextUrl);
    setCanShowAffirmation(true);
  };

  const goBackPage = () => {
    const prevHistoryIdx = Math.max(historyIdx - 1, 0);
    const prevUrl = appHistory[prevHistoryIdx];
    setHistoryIdx(prevHistoryIdx);

    setCanShowAffirmation(false);
    navigateToAppUrl(prevUrl);
  };

  function handleBrowserPageNav(browserUrl: AppUrl) {
    const existingPageIdx = appHistory.indexOf(browserUrl);
    setHistoryIdx(existingPageIdx);
    setCanShowAffirmation(false);
  }

  // triggers on any url change
  //  including both programmatic history navigation via `navigateToAppUrl()`
  //  and pressing back on the browser
  useEffect(() => {
    const pathUrl = (pathname.match(/(?<=\/form\/).*/) || [])[0];

    // if nothing was matched, it is probably the home (landing) page
    if (pathUrl === undefined) {
      setHistoryIdx(0);
      setAppHistory([AppUrl.Landing]);
      return;
    }

    // 404 if current path is not one of our defined urls
    const browserUrl = (pathUrl as AppUrl) || AppUrl.Landing;
    if (!isAppUrl(browserUrl)) {
      setHistoryIdx(0);
      setAppHistory([AppUrl.NotFound]);
      history.push('/404');
      return;
    }

    const browserUrlIdx = appHistory.indexOf(browserUrl);
    const newPageData: PageData = {
      browserUrlIdx,
      isCurrentStep: browserUrl === currentStep,
      isViewedStep: browserUrlIdx > -1,
      isNewStep: browserUrlIdx === -1,
    };

    // redirect back to the first page when accessing another random page
    // (in the future we would first check what data is currently cached before
    // deciding if we redirect or not)
    if (browserUrl !== AppUrl.Landing && appHistory.length <= 1) {
      // setHistoryIdx(0);
      // setAppHistory([AppUrl.Landing]);
      // navigateToAppUrl(PAGES[AppUrl.Landing]);
    }

    if (newPageData.isViewedStep && !newPageData.isCurrentStep) {
      // handleBrowserPageNav(stepEnum);
    }

    // when going to home page, clear out steps
    // TODO: potentially buggy if data is filled and user presses back on browser
    if (pathname === '/' || pathname === '/form') {
      setHistoryIdx(0);
      setAppHistory([AppUrl.Landing]);
    }

    // TESTING
    //  if page is the first one the user lands on, treat it as the first page
    if (browserUrl && appHistory.length <= 1) {
      setHistoryIdx(0);
      setAppHistory([browserUrl]);
    }
  }, [pathname]);

  return (
    <RoutingContext.Provider
      value={{
        goNextPage,
        goBackPage,
        currentStep,
        canShowAffirmation,
        topLevelPageTheme,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export const RoutingContextProvider = withRouter(PreRoutingContextProvider);
