import React from 'react';

import arrowRight from '../../assets/arrowRight.svg'
import { Flex } from '../../styles/GlobalStyle'
import { PrimaryButton } from 'components/Button';
import { Wrapper } from '../../styles/Landing'

interface LandingProps {
  goToPage: (pageNumber: number) => void;
}

const Landing = ({ goToPage }: LandingProps) => {
  return (
    <Wrapper>
      <h1>Start fresh with a record expungement</h1>
      <h2>Generate a personal statement in just 20 minutes</h2>
      <Flex>
        <PrimaryButton onClick={() => goToPage(1)}>
          <span>START NOW</span>
          <img src={arrowRight} alt="arrow right" />
        </PrimaryButton>
      </Flex>
    </Wrapper>
  );
};

export default Landing;
