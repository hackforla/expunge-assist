import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { RoutingContextProvider } from 'contexts/RoutingContext';
import { PAGES } from 'contexts/RoutingProps';
import AffirmationContextProvider from 'contexts/AffirmationContext';
import { FormStateContextProvider } from 'contexts/FormStateContext';

import PageContainer from 'page-layout/PageContainer';
import AppFooter from 'page-layout/AppFooter';
import AppHeader from 'page-layout/AppHeader';
import AppSubheader from 'page-layout/AppSubheader';
import Form from 'components/Form';

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
  const history = useHistory();
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
                    path="/form/:page?/preview"
                    component={PreviewPage}
                  />

                  <Route
                    path="/form/:page?"
                    component={Form}
                    history={history}
                  />

                  <Route
                    path={PAGES.PRIVACY_POLICY}
                    component={PrivacyPolicy}
                  />
                  <Route path={PAGES.TERMS_OF_USE} component={TermsOfUse} />
                  <Route path={PAGES.FAQ} component={FAQ} />
                  <Route path={PAGES.ABOUT_US} component={AboutUs} />

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
