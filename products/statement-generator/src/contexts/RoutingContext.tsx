import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { AppUrl, isAppUrl, getNextFormUrl } from 'contexts/RoutingProps';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

interface PageData {
  browserUrlIdx: number;
  isCurrentStep: boolean;
  isViewedStep: boolean; // has user been on this step in current session
  // isNewStep: boolean;
}

const RoutingContext = React.createContext<any>(undefined);
export default RoutingContext;

const PreRoutingContextProvider = ({
  children,
  history,
}: RoutingProviderProps) => {
  const [appHistory, setAppHistory] = useState([AppUrl.Landing]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const [appTheme, setAppTheme] = useState('transparent');
  const [canShowAffirmation, setCanShowAffirmation] = useState(true);

  const currentStep = appHistory[historyIdx];
  const { pathname } = history.location;

  const navigateToFormUrl = (newAppUrl: AppUrl) => {
    history.push(newAppUrl);
  };

  const goNextPage = (suggestedNext?: AppUrl) => {
    const nextUrl = suggestedNext || getNextFormUrl(currentStep);
    setHistoryIdx(historyIdx + 1);
    if (!appHistory.includes(nextUrl)) {
      setAppHistory([...appHistory, nextUrl]);
    }

    navigateToFormUrl(nextUrl);
    setCanShowAffirmation(true);
  };

  const goBackPage = () => {
    const prevHistoryIdx = Math.max(historyIdx - 1, 0);
    const prevUrl = appHistory[prevHistoryIdx];
    setHistoryIdx(prevHistoryIdx);

    setCanShowAffirmation(false);
    navigateToFormUrl(prevUrl);
  };

  function handleBrowserPageNav(browserUrl: AppUrl) {
    const existingPageIdx = appHistory.indexOf(browserUrl);
    setHistoryIdx(existingPageIdx);
    setCanShowAffirmation(false);
  }

  // triggers on any url change
  //  including both programmatic history navigation via `navigateToFormUrl()`
  //  and pressing back on the browser
  useEffect(() => {
    // when going to home page, clear out steps
    // TODO: potentially buggy if data is filled and user presses back on browser
    if (pathname === '/' || pathname === '/form') {
      setHistoryIdx(0);
      setAppHistory([AppUrl.Landing]);
      return;
    }

    // 404 if current path is not one of our defined urls
    const browserUrl = (pathname as AppUrl) || AppUrl.Landing;
    if (!isAppUrl(browserUrl)) {
      setHistoryIdx(0);
      setAppHistory([AppUrl.NotFound]);
      history.push('/404');
      return;
    }

    const browserUrlIdx = appHistory.indexOf(browserUrl);

    const newPageData: PageData = {
      browserUrlIdx,
      isCurrentStep: browserUrl === appHistory[historyIdx],
      isViewedStep: browserUrlIdx > -1,
      // isNewStep: browserUrlIdx === -1,
    };

    // redirect back to the first page when accessing another random page
    // (in the future we would first check what data is currently cached before
    // deciding if we redirect or not)
    if (browserUrl !== AppUrl.Landing && appHistory.length <= 1) {
      // setHistoryIdx(0);
      // setAppHistory([AppUrl.Landing]);
      // navigateToFormUrl(AppUrl.Landing);
    }

    if (newPageData.isViewedStep && !newPageData.isCurrentStep) {
      handleBrowserPageNav(browserUrl);
    }

    // TESTING
    //  if page is the first one the user lands on, treat it as the first page
    if (browserUrl && appHistory.length <= 1) {
      setHistoryIdx(0);
      setAppHistory([browserUrl]);
    }
  }, [pathname]);

  // update `appTheme` depending on page
  useEffect(() => {
    switch (currentStep) {
      case AppUrl.Welcome:
        setAppTheme('pink');
        break;
      default:
        setAppTheme('transparent');
        break;
    }
  }, [currentStep]);

  return (
    <RoutingContext.Provider
      value={{
        goNextPage,
        goBackPage,
        currentStep,
        canShowAffirmation,
        appTheme,
        setAppTheme,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export const RoutingContextProvider = withRouter(PreRoutingContextProvider);
