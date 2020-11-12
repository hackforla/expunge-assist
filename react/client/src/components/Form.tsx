import React, { useState } from 'react';

import BeforeYouBegin from './formPages/BeforeYouBegin'
import Step1 from './formPages/Step1';
import { Wrapper } from '../styles/Form';

interface FormProps {
  pageNumber: number;
  handleClick: () => void;
}

const Form: React.FC<FormProps> = ({ pageNumber, handleClick }) => {
  const [ name, setName ] = useState<string>('');
  const [ age, setAge ] = useState<number | null>(null);
  const [ introduction, setIntroduction ] = useState<string>('');

  return (
    <Wrapper>
      <h2>{`<Form>`} state: **for development purposes**</h2>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Introduction: {introduction} </h2>
      {pageNumber === 1 && <BeforeYouBegin />}
      {pageNumber === 2 && <p>Welcome!</p>}
      {pageNumber === 3 && <Step1 setName={setName} setAge={setAge} setIntroduction={setIntroduction}/> }
    </Wrapper>
  )
}

export default Form;