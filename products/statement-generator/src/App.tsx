import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { RoutingContextProvider } from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';
import AffirmationContextProvider from 'contexts/AffirmationContext';
import { FormStateContextProvider } from 'contexts/FormStateContext';

import PageContainer from 'page-layout/PageContainer';
import AppFooter from 'page-layout/AppFooter';
import AppHeader from 'page-layout/AppHeader';
import AppSubheader from 'page-layout/AppSubheader';

import BeforeYouBegin from 'flows/BeforeYouBegin';
import IntroductionStep from 'flows/IntroductionStep';
import InvolvementCommunityServiceFlow from 'involvement-step/InvolvementCommunityServiceFlow';
import InvolvementInitialFlow from 'involvement-step/InvolvementInitialFlow';
import InvolvementJobFlow from 'involvement-step/InvolvementJobFlow';
import InvolvementParentingFlow from 'involvement-step/InvolvementParentingFlow';
import InvolvementRecoveryFlow from 'involvement-step/InvolvementRecoveryFlow';
import InvolvementSchoolFlow from 'involvement-step/InvolvementSchoolFlow';
import InvolvementUnemployedFlow from 'involvement-step/InvolvementUnemployedFlow';
import FinalizeStep from 'flows/FinalizeStep';
import GoalsStep from 'flows/GoalsStep';
import WhyStep from 'flows/WhyStep';

import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import PreviewPage from 'pages/PreviewPage';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import TermsOfUse from 'pages/TermsOfUse';
import FAQ from 'pages/FAQ';
import AboutUs from 'pages/AboutUs';

import 'styles/App.css';
import appTheme from 'styles/appTheme';

import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const handleClick = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <RoutingContextProvider>
          <AffirmationContextProvider>
            <FormStateContextProvider>
              <nav
                style={{
                  width: '100%',
                  padding: '2rem 0',
                  backgroundColor: 'gray',
                  display: 'none',
                  // display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <button onClick={() => handleClick('en')}>ENG</button>
                <button onClick={() => handleClick('esp')}>ESP</button>
                <button onClick={() => handleClick('ko')}>KO</button>
              </nav>

              <AppHeader />
              <AppSubheader />

              <PageContainer>
                <Switch>
                  <Route exact path="/" component={Landing} />

                  <Route
                    exact
                    path={AppUrl.BeforeYouBegin}
                    component={BeforeYouBegin}
                  />

                  <Route
                    exact
                    path={AppUrl.Introduction}
                    component={IntroductionStep}
                  />

                  {/* start involvement flow pages */}
                  <Route
                    exact
                    path={AppUrl.Involvement}
                    component={InvolvementInitialFlow}
                  />

                  <Route
                    exact
                    path={AppUrl.CommunityService}
                    component={InvolvementCommunityServiceFlow}
                  />

                  <Route
                    exact
                    path={AppUrl.Job}
                    component={InvolvementJobFlow}
                  />

                  <Route
                    exact
                    path={AppUrl.Parenting}
                    component={InvolvementParentingFlow}
                  />

                  <Route
                    exact
                    path={AppUrl.Recovery}
                    component={InvolvementRecoveryFlow}
                  />

                  <Route
                    exact
                    path={AppUrl.School}
                    component={InvolvementSchoolFlow}
                  />

                  <Route
                    exact
                    path={AppUrl.Unemployed}
                    component={InvolvementUnemployedFlow}
                  />
                  {/* end involvement flow pages */}

                  <Route
                    exact
                    path={AppUrl.Finalize}
                    component={FinalizeStep}
                  />

                  <Route exact path={AppUrl.Goals} component={GoalsStep} />

                  <Route exact path={AppUrl.Why} component={WhyStep} />

                  <Route
                    exact
                    path="/form/:page?/preview"
                    component={PreviewPage}
                  />

                  <Route
                    path={AppUrl.PrivacyPolicy}
                    component={PrivacyPolicy}
                  />
                  <Route path={AppUrl.TermsOfUse} component={TermsOfUse} />
                  <Route path={AppUrl.FAQ} component={FAQ} />
                  <Route path={AppUrl.AboutUs} component={AboutUs} />

                  <Route component={NotFound} />
                  <Route path="/404" component={NotFound} />
                </Switch>
              </PageContainer>

              <AppFooter />
            </FormStateContextProvider>
          </AffirmationContextProvider>
        </RoutingContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
