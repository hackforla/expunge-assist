import React from 'react';

import Header from './Header'
import FormHeader from './FormHeader'

interface FormProps {
  formStep: number;
}

const Form: React.FC<FormProps> = ({formStep}) => {
  return (
    <div>
      <Header />
      <FormHeader formStep={formStep}/>
      {formStep === 1 && <p>Before you Begin</p>}
      {formStep === 2 && <p>Welcome!</p>}
    </div>
  )
}

export default Form;