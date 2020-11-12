import React from 'react';

import FormHeader from './FormHeader'
import BeforeYouBegin from './formPages/BeforeYouBegin'
import { Wrapper } from '../styles/Form';

interface FormProps {
  formStep: number;
}

const Form: React.FC<FormProps> = ({formStep}) => {
  return (
    <Wrapper>
      <FormHeader formStep={formStep}/>
      {formStep === 1 && <BeforeYouBegin />}
      {formStep === 2 && <p>Welcome!</p>}
    </Wrapper>
  )
}

export default Form;