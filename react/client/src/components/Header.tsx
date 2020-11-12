import React from 'react';

import iconBlack from '../assets/iconBlack.svg'
import iconWhite from '../assets/iconWhite.svg'

import { LandingHeader, FormHeader } from '../styles/Header'

interface HeaderProps {
  pageNumber: number;
}

const Header: React.FC<HeaderProps> = ({ pageNumber }) => {
  let icon: string, background: string, formStep: number;
  pageNumber === 0 ? icon = iconWhite : icon = iconBlack;
  pageNumber === 0 ? background = '#9903ff' : background = 'white';
  pageNumber > 2 ? formStep = 1 : formStep = 2;

  return (
    <>
    { pageNumber < 3 ? 
      <LandingHeader background={background} className="Header">
        <img src={icon} alt="" />
        <div>
          <p>The Record</p>
          <p>Clearance Project</p>
        </div>
      </LandingHeader>
    : 
      <FormHeader>
        <h2>Introduce Yourself!</h2>
        <p>Step {formStep} of 5</p>
      </FormHeader>
    }
    
    </>
  )
}

export default Header;