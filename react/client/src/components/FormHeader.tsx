import React from 'react';

import { Wrapper } from '../styles/FormHeader';

interface FormHeaderProps {
  formStep: number;
}

const FormHeader: React.FC<FormHeaderProps> = ({ formStep }) => {
  let formHeaderStep: number | undefined = undefined;

  if (formStep > 2) {
    formHeaderStep = 1;
  }

  return (
    <Wrapper>
      {formHeaderStep && <>
        <h1>Form Header</h1>
        <p>Step {formHeaderStep} of 5</p>
      </>}
    </Wrapper>
  )
}

export default FormHeader;