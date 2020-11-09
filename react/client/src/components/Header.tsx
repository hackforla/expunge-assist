import React from 'react';

import icon from '../assets/icon.svg'

import { Wrapper } from '../styles/Header'

const Header: React.FC = () => {
  return (
    <Wrapper className="Header">
      <img src={icon} alt=""/>
      <div>
        <p>The Record</p>
        <p>Clearance Project</p>
      </div>
    </Wrapper>
  )
}

export default Header;