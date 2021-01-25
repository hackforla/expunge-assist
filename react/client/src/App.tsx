import React from 'react';
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import PageContainer from 'components/PageContainer';
import { GlobalStyle } from './styles/GlobalStyle';

import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse';
import FAQ from './components/pages/FAQ';
import AboutUs from './components/pages/AboutUs';
import Navbar from './components/Navbar';
import PDF from './components/PDF';

const App: React.FC = () => {
  const history = useHistory();

  return (
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
        <Route path="/pdf" component={PDF} />
      </Switch>
      <Navbar />
      <GlobalStyle />
    </Router>
  );
};

export default App;
