import React from 'react';

import icon from '../assets/icon.svg'
import arrowRight from '../assets/arrowRight.svg'

import { Wrapper, ContentWrapper, FlexWrapper } from '../styles/PersonalStatement'
import { Button } from '../styles/GlobalStyle'

const PersonalStatement: React.FC = () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <Wrapper className="PersonalStatement">
      <img src={icon} alt=""/>
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