import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { RoutingContextProvider } from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';
import AffirmationContextProvider from 'contexts/AffirmationContext';
import { FormStateContextProvider } from 'contexts/FormStateContext';

import PageContainer from 'components-layout/PageContainer';
import AppFooter from 'components-layout/AppFooter';
import AppHeader from 'components-layout/AppHeader';
import AppSubheader from 'components-layout/AppSubheader';
import Affirmation from 'components-layout/Affirmation';

import Welcome from 'pages-form/Welcome';
import Advice from 'pages-form/Advice';
import BeforeYouBegin from 'pages-form/BeforeYouBegin';
import IntroductionStep from 'pages-form/IntroductionStep';
import InvolvementCommunityServiceFlow from 'pages-form/InvolvementCommunityServiceFlow';
import InvolvementInitialFlow from 'pages-form/InvolvementInitialFlow';
import InvolvementJobFlow from 'pages-form/InvolvementJobFlow';
import InvolvementParentingFlow from 'pages-form/InvolvementParentingFlow';
import InvolvementRecoveryFlow from 'pages-form/InvolvementRecoveryFlow';
import InvolvementSchoolFlow from 'pages-form/InvolvementSchoolFlow';
import InvolvementUnemploymentFlow from 'pages-form/InvolvementUnemploymentFlow';
import InvolvementSomethingElseFlow from 'pages-form/InvolvementSomethingElseFlow';
import FinalizeForm from 'pages-form/FinalizeForm';
import FinalizePreview from 'pages-form/FinalizePreview';
import GoalsStep from 'pages-form/GoalsStep';
import WhyStep from 'pages-form/WhyStep';
import Download from 'pages-form/Download';

import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import PreviewPage from 'pages/PreviewPage';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import TermsOfUse from 'pages/TermsOfUse';
import FAQ from 'pages/FAQ';
import AboutUs from 'pages/AboutUs';
import Credits from 'pages/Credits';

import 'styles/App.css';
import customMuiTheme from 'styles/customMuiTheme';

import { useTranslation } from 'react-i18next';
import ScrollToTop from './components-layout/ScrollToTop';

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div data-testid="location-display" style={{ display: 'none' }}>
      {location.pathname}{' '}
    </div>
  );
};

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const handleClick = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <ThemeProvider theme={customMuiTheme}>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <RoutingContextProvider>
          <ScrollToTop />
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

              <PageContainer>
                <AppHeader />
                <AppSubheader />

                <Affirmation />
                <Switch>
                  <Route exact path="/" component={Landing} />

                  <Route exact path={AppUrl.Welcome} component={Welcome} />

                  <Route
                    exact
                    path={AppUrl.BeforeYouBegin}
                    component={BeforeYouBegin}
                  />

                  <Route exact path={AppUrl.Advice} component={Advice} />

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
                    path={AppUrl.SomethingElse}
                    component={InvolvementSomethingElseFlow}
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
                    path={AppUrl.Unemployment}
                    component={InvolvementUnemploymentFlow}
                  />
                  {/* end involvement flow pages */}

                  <Route
                    exact
                    path={AppUrl.Finalize}
                    component={FinalizeForm}
                  />

                  <Route
                    exact
                    path={AppUrl.FinalizePreview}
                    component={FinalizePreview}
                  />

                  <Route exact path={AppUrl.Goals} component={GoalsStep} />

                  <Route exact path={AppUrl.Why} component={WhyStep} />

                  <Route exact path={AppUrl.Download} component={Download} />

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
                  <Route path={AppUrl.Credits} component={Credits} />
                  <Route path={AppUrl.FAQ} component={FAQ} />
                  <Route path={AppUrl.AboutUs} component={AboutUs} />

                  <Route component={NotFound} />
                  <Route path="/404" component={NotFound} />
                </Switch>
                <AppFooter />
              </PageContainer>
              <LocationDisplay />
            </FormStateContextProvider>
          </AffirmationContextProvider>
        </RoutingContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
