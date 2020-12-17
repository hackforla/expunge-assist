import React from 'react';
import styled from 'styled-components'

import iconBlack from '../assets/iconBlack.svg'
import iconWhite from '../assets/iconWhite.svg'

import device from 'styles/breakpoints'

interface StyleProps {
  background?: string;
  color?: string;
}

export const StyledContainer = styled.div<StyleProps>`
  background: ${props => props.background};
  color: ${props => props.color};
  display:flex;
  padding: 1.5em 0 0 1.5em;
  @media only screen and ${device.md} {
    margin: 0 0 0 2.5em;
  }
  div {
    display:none;
    margin-left: 1.8em;
    text-transform:uppercase;
    font-size:.75rem;
    @media only screen and ${device.md} {
      display:flex;
      flex-direction:column;
    }
  }
`

interface HeaderProps {
  pageNumber: number;
}

const Header: React.FC<HeaderProps> = ({ pageNumber }) => {
  let icon: string, background: string, color: string;

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
    <StyledContainer background={background} color={color} className="Header">
      <img src={icon} alt="" />
      <div>
        <p>The Record</p>
        <p>Clearance Project</p>
      </div>
    </StyledContainer>
  )
}

export default Header;
