import React from 'react';

import arrowRight from '../assets/arrowRight.svg'

import { Button, Flex } from '../styles/GlobalStyle'
import { Wrapper, ContentWrapper } from '../styles/PersonalStatement'

const PersonalStatement: React.FC = () => {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <Wrapper className="PersonalStatement">
      <ContentWrapper>
        <h1>Start fresh with a record expungement</h1>
        <h2>Generate a personal statement in just 20 minutes</h2>
        <Flex>
          <Button onClick={handleClick}>
            <span>START NOW</span>
            <img src = {arrowRight} alt="arrow right"/>
          </Button>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  )
}

export default PersonalStatement