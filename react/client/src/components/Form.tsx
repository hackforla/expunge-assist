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
      {pageNumber === 1 && <BeforeYouBegin />}
      {pageNumber === 2 && <p>Welcome!</p>}
      {pageNumber === 3 && 
      <>
        <Step1 setName={setName} setAge={setAge} setIntroduction={setIntroduction}/>
        <h2>{`<Form>`} state: **for development purposes**</h2>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Introduction: {introduction} </h2>
      </> }
      {pageNumber === 4 && <p>Congrats!</p> }
      {pageNumber === 5 && <p>Finish this sentence</p> }
      {pageNumber === 6 && <p>Way to Go!</p> }
      {pageNumber === 7 && <p>Please check all that apply:</p> }
      {pageNumber === 8 && <p>Hooray!</p> }
      {pageNumber === 9 && <p>Please describe what goals you are working towards acheiving right now. (2 sentences maximum)</p> }
      {pageNumber === 10 && <p>Great job!</p> }
      {pageNumber === 11 && <p>Please finish this sentence: I want to clear my record because...</p> }
      {pageNumber === 12 && <p>Fabulous!</p> }
      {pageNumber === 13 && <p>Previewing Final Statement</p> }
    </Wrapper>
  )
}

export default Form;