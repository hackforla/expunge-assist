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
<<<<<<< HEAD
          <span>START NOW 04</span>
=======
          <span>START NOW 03</span>
>>>>>>> c54b937e026663e059a33c4fdbad104e4e571a7d
          <img src={arrowRight} alt="arrow right" />
        </Button>
      </Flex>
    </Wrapper>
  )
}

export default Landing;