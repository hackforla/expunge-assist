import React, { useState } from 'react';

import ContentContainer from 'components/ContentContainer'

import BeforeYouBegin from './formPages/BeforeYouBegin'
import Step1 from './formPages/Step1';
import Step2 from './formPages/Step2';
import Step3 from './formPages/Step3';
import Step4 from './formPages/Step4';
import Step5 from './formPages/Step5';
import Download from './formPages/Download';
import Affirmation from './formPages/Affirmation'

interface FormProps {
  pageNumber: number;
  goToPage: (pageNumber: number) => void;
}

const Form: React.FC<FormProps> = ({ pageNumber, goToPage }) => {
  const [inputs, setInputs] = useState<userInputs>({
    name: '',
    age: null,
    introduction: '',

    lifeChanges: '',

    communityServiceOrgName: '',
    communityServiceDescription: '',
    jobName: '',
    jobTitle: '',
    jobDescription: '',
    difficultyFindingWorkDescription:'',

    goals: '',
    goalsHow: '',

    clearRecordWhy: '',
    clearRecordHow: '',

    pdf:undefined
  })

  return (
    <ContentContainer>
      {pageNumber === 1 && <BeforeYouBegin goToPage={goToPage} />}
      {pageNumber === 2 && <Affirmation pageNumber={pageNumber} message="Welcome!" goToPage={goToPage} />}
      {pageNumber === 3 && <Step1 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />}
      {pageNumber === 4 && <Affirmation pageNumber={pageNumber} message="Congrats!" goToPage={goToPage} />}
      {pageNumber === 5 && <Step2 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />}
      {pageNumber === 6 && <Affirmation pageNumber={pageNumber} message="Way to Go!" goToPage={goToPage} />}
      {pageNumber === 7 && <Step3 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />}
      {pageNumber === 8 && <Affirmation pageNumber={pageNumber} message="Hooray!" goToPage={goToPage} />}
      {pageNumber === 9 && <Step4 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />}
      {pageNumber === 10 && <Affirmation pageNumber={pageNumber} message="Great Job!" goToPage={goToPage} />}
      {pageNumber === 11 && <Step5 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />}
      {pageNumber === 12 && <Affirmation pageNumber={pageNumber} message="Fabulous!" goToPage={goToPage} />}
      {pageNumber === 13 &&
        <>
          <p>Previewing Final Statement</p>
          <button onClick={() => goToPage(14)}>EDIT</button>
          <button onClick={() => goToPage(14)}>NEXT</button>
        </>
      }
      {pageNumber === 14 &&
        <>
          <p>Editing</p>
          <button onClick={() => goToPage(15)}>SAVE</button>
        </>
      }
      {pageNumber === 15 &&
        <Download inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      }
    </ContentContainer>
  )
}

export default Form;
