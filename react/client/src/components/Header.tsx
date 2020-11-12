import React from 'react';

import iconBlack from '../assets/iconBlack.svg'
import iconWhite from '../assets/iconWhite.svg'

import { Wrapper } from '../styles/Header'

interface HeaderProps {
  formStep: number;
}

const Header: React.FC<HeaderProps> = ({ formStep }) => {
  let icon, background;
  formStep === 0 ? icon = iconWhite : icon = iconBlack;
  formStep === 0 ? background = '#9903ff' : background = 'white';

  return (
    <Wrapper background={background} className="Header">
      <img src={icon} alt="" />
      <div>
        <p>The Record</p>
        <p>Clearance Project</p>
      </div>
    </Wrapper>
  )
}

export default Header;