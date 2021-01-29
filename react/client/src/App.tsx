import React from 'react';
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import PageContainer from 'components/PageContainer';
import { GlobalStyle } from './styles/GlobalStyle';

import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse';
import FAQ from './components/pages/FAQ';
import AboutUs from './components/pages/AboutUs';
import Navbar from './components/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
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
        <Switch>
          <Route exact path="/" component={PageContainer} history={history} />
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
        <Navbar />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
};

export default App;
