import React from 'react';

import Button from 'components/Button';
import ContentContainer from 'components/ContentContainer'

import arrowRight from '../../assets/arrowRight.svg'
import { Flex } from '../../styles/GlobalStyle'

interface LandingProps {
  goToPage: (pageNumber: number) => void;
}

const Landing: React.FC<LandingProps> = ({ goToPage }) => {
  return (
    <ContentContainer className='content-page'>
      <h1 className='page-title adjacent-margin'>Start fresh with a record expungement</h1>
      <div className='adjacent-margin'>Generate a personal statement in just 20 minutes</div>

      <Flex className='adjacent-margin'>
        <Button
          onClick={() => goToPage(1)}
          theme='dark'>
          <span>START NOW</span>
          <img src={arrowRight} alt="arrow right" />
        </Button>
      </Flex>
    </ContentContainer>
  )
}

export default Landing;
