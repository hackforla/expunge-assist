import React from 'react';

import arrowRight from '../../assets/arrowRight.svg'
import { Button, Flex } from '../../styles/GlobalStyle'
import { Wrapper } from '../../styles/Landing'

interface LandingProps {
  goToPage: (pageNumber: number) => void;
}

const Landing: React.FC<LandingProps> = ({ goToPage }) => {
  return (
    <Wrapper>
      <h1>Start fresh with a record expungement</h1>
      <h2>Generate a personal statement in just 20 minutes</h2>
      <Flex>
        <Button onClick={() => goToPage(1)}>
          <span>START NOW 04</span>
          <img src={arrowRight} alt="arrow right" />
        </Button>
      </Flex>
    </Wrapper>
  )
}

export default Landing;