import React from 'react';

import icon from '../assets/icon.svg'
import arrowRight from '../assets/arrowRight.svg'

import { Button } from '../styles/GlobalStyle'
import { Wrapper, LogoWrapper, ContentWrapper, FlexWrapper } from '../styles/PersonalStatement'

const PersonalStatement: React.FC = () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <Wrapper className="PersonalStatement">
      <LogoWrapper>
        <img src={icon} alt=""/>
        <div>
          <p>The Record</p>
          <p>Clearance Project</p>
        </div>
      </LogoWrapper>
      <ContentWrapper>
        <h1>Start fresh with a record expungement</h1>
        <h2>Generate a personal statement in just 20 minutes</h2>
        <FlexWrapper>
          <Button color="blue" onClick={handleClick}>
            <span>START NOW</span>
            <img src = {arrowRight} alt="arrow right"/>
          </Button>
        </FlexWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default PersonalStatement