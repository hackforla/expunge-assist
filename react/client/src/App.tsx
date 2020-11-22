import React from 'react';
import { useHistory, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle';

import PersonalStatementContainer from './components/PersonalStatementContainer'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsOfUse from './components/pages/TermsOfUse'
import FAQ from './components/pages/FAQ'
import AboutUs from './components/pages/AboutUs'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  const history = useHistory();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={PersonalStatementContainer} history={history}/>
        <Route path={process.env.PUBLIC_URL + '/form/:page?'} component={PersonalStatementContainer} history={history}/>
        <Route path={process.env.PUBLIC_URL + '/PrivacyPolicy'} component={PrivacyPolicy} />
        <Route path={process.env.PUBLIC_URL + '/TermsOfUse'} component={TermsOfUse} />
        <Route path={process.env.PUBLIC_URL + '/FAQ'} component={FAQ} />
        <Route path={process.env.PUBLIC_URL + '/AboutUs'} component={AboutUs} />
      </Switch>
      <Navbar />
      <GlobalStyle />
    </Router>
  );
}

export default App;