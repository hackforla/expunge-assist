import React, { useState } from 'react';

import BeforeYouBegin from './formPages/BeforeYouBegin'
import Step1 from './formPages/Step1';
import Step2 from './formPages/Step2';
import Step3 from './formPages/Step3';
import Step4 from './formPages/Step4';
import Step5 from './formPages/Step5';

import { Wrapper } from '../styles/Form';

interface FormProps {
  pageNumber: number;
  handleClick: () => void;
}

interface userInputs {
  name:string;
  age:number | null;
  introduction:string;
  lifeChanges: string;

  goals: string;
  goalsHow: string;
  clearRecordWhy: string;
  clearRecordHow: string;
}

const Form: React.FC<FormProps> = ({ pageNumber, handleClick }) => {
  const [inputs, setInputs] = useState<userInputs>({
    name: '',
    age: null,
    introduction: '',
    lifeChanges: '',

    goals: '',
    goalsHow: '',
    
    clearRecordWhy: '',
    clearRecordHow: '',
  })

  return (
    <Wrapper>
      {pageNumber === 1 && <BeforeYouBegin />}
      {pageNumber === 2 && <p>Welcome!</p>}
      {pageNumber === 3 && 
        <Step1 inputs={inputs} setInputs={setInputs} />
      }
      {pageNumber === 4 && <p>Congrats!</p> }
      {pageNumber === 5 && 
        <Step2 inputs={inputs} setInputs={setInputs} />
      }
      {pageNumber === 6 && <p>Way to Go!</p> }
      {pageNumber === 7 && 
        <Step3 inputs={inputs} setInputs={setInputs} />
      }
      {pageNumber === 8 && <p>Hooray!</p> }
      {pageNumber === 9 && 
        <Step4 inputs={inputs} setInputs={setInputs} />
      }
      {pageNumber === 10 && <p>Great job!</p> }
      {pageNumber === 11 && 
        <Step5 inputs={inputs} setInputs={setInputs} />
      }
      {pageNumber === 12 && <p>Fabulous!</p> }
      {pageNumber === 13 && <p>Previewing Final Statement</p> }
    </Wrapper>
  )
}

export default Form;