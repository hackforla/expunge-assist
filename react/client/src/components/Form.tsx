import React from 'react';

import Header from './Header'
import FormHeader from './FormHeader'
import BeforeYouBegin from './formPages/BeforeYouBegin'

interface FormProps {
  formStep: number;
}

const Form: React.FC<FormProps> = ({formStep}) => {
  return (
    <div>
      <Header />
      <FormHeader formStep={formStep}/>
      {formStep === 1 && <BeforeYouBegin />}
      {formStep === 2 && <p>Welcome!</p>}
    </div>
  )
}

export default Form;