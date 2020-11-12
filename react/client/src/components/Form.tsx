import React from 'react';

import BeforeYouBegin from './formPages/BeforeYouBegin'
import Step1 from './formPages/Step1';
import { Wrapper } from '../styles/Form';

interface FormProps {
  pageNumber: number;
}

const Form: React.FC<FormProps> = ({pageNumber}) => {
  return (
    <Wrapper>
      {pageNumber === 1 && <BeforeYouBegin />}
      {pageNumber === 2 && <p>Welcome!</p>}
      {pageNumber === 3 && <Step1 /> }
    </Wrapper>
  )
}

export default Form;