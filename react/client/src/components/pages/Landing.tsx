import React from 'react';

import arrowRight from '../../assets/arrowRight.svg'
import { Flex } from '../../styles/GlobalStyle'
import { PrimaryButton } from 'components/Button';
import { Wrapper } from '../../styles/Landing'

interface LandingProps {
  goToPage: (pageNumber: number) => void;
}

const Landing: React.FC<LandingProps> = ({ goToPage }) => {
  return (
    <Wrapper>
      <h1 className='page-title'>Start fresh with a record expungement</h1>
      <div>Generate a personal statement in just 20 minutes</div>
      <Flex>
        <PrimaryButton onClick={() => goToPage(1)}>
          <span>START NOW</span>
          <img src={arrowRight} alt="arrow right" />
        </PrimaryButton>
      </Flex>
    </Wrapper>
  )
}

export default Landing;
