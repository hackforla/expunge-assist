import React from 'react';

import { Wrapper } from '../styles/Navbar'

const Navbar: React.FC = () => {
  return(
    <Wrapper className="Navbar">
      <li><a href='/PrivacyPolicy'>PrivacyPolicy</a></li>
      <li><a href='/TermsOfUse'>TermsOfUse</a></li>
      <li><a href='/FAQ'>FAQ</a></li>
      <li><a href='/AboutUs'>AboutUs</a></li>
    </Wrapper>
  )
}

export default Navbar;