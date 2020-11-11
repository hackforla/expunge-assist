import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle';

import PersonalStatement from './components/PersonalStatement'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsOfUse from './components/pages/TermsOfUse'
import FAQ from './components/pages/FAQ'
import AboutUs from './components/pages/AboutUs'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={PersonalStatement} />
        <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
        <Route path='/TermsOfUse' component={TermsOfUse} />
        <Route path='/FAQ' component={FAQ} />
        <Route path='/AboutUs' component={AboutUs} />
      </Switch>
      <Navbar />
      <GlobalStyle />
    </Router>
  );
}

export default App;