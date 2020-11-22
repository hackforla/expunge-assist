import React from 'react';

import hackForLALogo from '../assets/hackForLALogo.svg'

import { Wrapper, ImageWrapper, LinkWrapper } from '../styles/Navbar'

const Navbar: React.FC = () => {
  return (
    <Wrapper className="Navbar">
      <ImageWrapper>
        <img src={hackForLALogo} alt='Hack for LA Logo' />
      </ImageWrapper>
      <LinkWrapper>
        <li><a href='/#/PrivacyPolicy'>Privacy Policy</a></li>
        <li><a href='/#/TermsOfUse'>Terms Of Use</a></li>
        <li><a href='/#/FAQ'>FAQ</a></li>
        <li><a href='/#/AboutUs'>About Us</a></li>
      </LinkWrapper>
      <span>COPYRIGHT 2020 HACK FOR LA</span>
    </Wrapper>
  )
}

export default Navbar;