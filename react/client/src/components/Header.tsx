import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import iconBlack from '../assets/iconBlack.svg';
import iconWhite from '../assets/iconWhite.svg';

import device from 'styles/breakpoints';

interface StyleProps {
  background?: string;
  color?: string;
}

export const StyledContainer = styled.div<StyleProps>`
  background: ${props => props.background};
  color: ${props => props.color};
  display: flex;

  .logo-title {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 12px;

    ${device.sm_only} {
      display: none;
    }
  }
`

interface HeaderProps {
  pageNumber: number;
}

const Header = ({ pageNumber }: HeaderProps) => {
  let icon: string;
  let background: string;
  let color: string;

  if (pageNumber === 0) {
    background = '#9903ff';
    color = 'white';
    icon = iconWhite;

  } else {
    background = 'white';
    color = 'black';
    icon = iconBlack;
  }

  return (
    <StyledContainer background={background} color={color} className='app-header'>
      <img src={icon} alt="" />
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          color: color,
        }}
        className='logo-title'>
        <p>The Record</p>
        <p>Clearance Project</p>
      </Link>
    </StyledContainer>
  )
}

export default Header;
