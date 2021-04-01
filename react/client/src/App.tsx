import React from 'react';
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import RoutingContextProvider from 'contexts/RoutingContext';
import AffirmationContextProvider from 'contexts/AffirmationContext';

import PageContainer from 'components/PageContainer';
import Navbar from 'components/Navbar';

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
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <RoutingContextProvider>
          <AffirmationContextProvider>
            {/* <nav
              style={{
                width: '100%',
                padding: '2rem 0',
                backgroundColor: 'gray',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button onClick={() => handleClick('en')}>ENG</button>
              <button onClick={() => handleClick('esp')}>ESP</button>
              <button onClick={() => handleClick('ko')}>KO</button>
            </nav> */}

            <Switch>
              <Route
                exact
                path="/"
                component={PageContainer}
                history={history}
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
            </Switch>
          </AffirmationContextProvider>
        </RoutingContextProvider>
        <Navbar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
