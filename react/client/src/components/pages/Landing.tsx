import React from 'react';

import ContentContainer from 'components/ContentContainer'

import arrowRight from '../../assets/arrowRight.svg'
import { Flex } from '../../styles/GlobalStyle'
import { PrimaryButton } from 'components/Button';

interface LandingProps {
  goToPage: (pageNumber: number) => void;
}

const Landing: React.FC<LandingProps> = ({ goToPage }) => {
  return (
    <ContentContainer className='content-page'>
      <h1 className='page-title adjacent-margin'>Start fresh with a record expungement</h1>
      <div className='adjacent-margin'>Generate a personal statement in just 20 minutes</div>

      <PrimaryButton onClick={() => goToPage(1)}>
        <span>START NOW</span>
        <img src={arrowRight} alt="arrow right" />
      </PrimaryButton>

    </ContentContainer>
  )
}

export default Landing;
