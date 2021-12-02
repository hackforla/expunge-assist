import React from 'react';
import {
  useHistory,
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { RoutingContextProvider } from 'contexts/RoutingContext';
import AffirmationContextProvider from 'contexts/AffirmationContext';
import { FormStateContextProvider } from 'contexts/FormStateContext';

import PageContainer from 'components/PageContainer';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import FormHeader from 'components/FormHeader';

import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import PreviewPage from 'pages/PreviewPage';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import TermsOfUse from 'pages/TermsOfUse';
import FAQ from 'pages/FAQ';
import AboutUs from 'pages/AboutUs';

import 'styles/App.css';

import { useTranslation } from 'react-i18next';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9903FF',
    },
    secondary: {
      main: '#0AEBA0',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
});

const App: React.FC = () => {
  const history = useHistory();
  const { i18n } = useTranslation();

  const handleClick = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <RoutingContextProvider>
        <FormStateContextProvider>
          <AffirmationContextProvider>
            <ThemeProvider theme={theme}>
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

              <FormHeader />

              <Switch>
                <Route exact path="/" component={Landing} />

                <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
                <Route path="/TermsOfUse" component={TermsOfUse} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/AboutUs" component={AboutUs} />

                <Route path="/404" component={NotFound} />

                <Route exact path="/:page?/preview" component={PreviewPage} />

                <Route
                  path="/:page?"
                  component={PageContainer}
                  history={history}
                />

                <Route component={NotFound} />
              </Switch>
              <Navbar />
            </ThemeProvider>
          </AffirmationContextProvider>
        </FormStateContextProvider>
      </RoutingContextProvider>
    </Router>
  );
};

export default App;
