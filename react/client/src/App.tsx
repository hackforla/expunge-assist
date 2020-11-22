import React from 'react';
import { useHistory, HashRouter as Router, Route, Switch } from "react-router-dom";

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
        <Route exact path='/form/:page?' component={PersonalStatementContainer} history={history}/>
        <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />
        <Route exactpath='/TermsOfUse' component={TermsOfUse} />
        <Route exact path='/FAQ' component={FAQ} />
        <Route exact path='/AboutUs' component={AboutUs} />
      </Switch>
      <Navbar />
      <GlobalStyle />
    </Router>
  );
}

export default App;