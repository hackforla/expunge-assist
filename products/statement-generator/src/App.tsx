import React from 'react';
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { RoutingContextProvider } from 'contexts/RoutingContext';
import AffirmationContextProvider from 'contexts/AffirmationContext';
import { FormStateContextProvider } from 'contexts/FormStateContext';

import PageContainer from 'components/PageContainer';
import Footer from 'components/Footer';
import Header from 'components/Header';

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

              <Header />

              <Switch>
                <Route exact path="/" component={Landing} />

                <Route
                  exact
                  path="/form/:page?/preview"
                  component={PreviewPage}
                />

                <Route
                  path="/form/:page?"
                  component={PageContainer}
                  history={history}
                />

                <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
                <Route path="/TermsOfUse" component={TermsOfUse} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/AboutUs" component={AboutUs} />

                <Route component={NotFound} />
                <Route path="/404" component={NotFound} />
              </Switch>
            </FormStateContextProvider>
          </AffirmationContextProvider>
        </RoutingContextProvider>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
