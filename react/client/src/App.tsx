import React from 'react';
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import RoutingContextProvider from 'contexts/RoutingContext';
import AffirmationContextProvider from 'contexts/AffirmationContext';

import PageContainer from 'components/PageContainer';
import Navbar from 'components/Navbar';

import PrivacyPolicy from 'pages/PrivacyPolicy';
import TermsOfUse from 'pages/TermsOfUse';
import FAQ from 'pages/FAQ';
import AboutUs from 'pages/AboutUs';

import 'styles/App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
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

  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <RoutingContextProvider>
          <AffirmationContextProvider>
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
