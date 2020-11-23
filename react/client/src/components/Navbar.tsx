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
        <li><a href={process.env.PUBLIC_URL + '/PrivacyPolicy'} >Privacy Policy</a></li>
        <li><a href={process.env.PUBLIC_URL + '/TermsOfUse'} >Terms Of Use</a></li>
        <li><a href={process.env.PUBLIC_URL + '/FAQ' }>FAQ</a></li>
        <li><a href={process.env.PUBLIC_URL + '/AboutUs' }>About Us</a></li>
      </LinkWrapper>
      <span>COPYRIGHT 2020 HACK FOR LA</span>
    </Wrapper>
  )
}

export default Navbar;