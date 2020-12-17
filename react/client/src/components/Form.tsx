import React, { useState } from 'react';

import Button from 'components/Button'
import ContentContainer from 'components/ContentContainer'

import BeforeYouBegin from './formPages/BeforeYouBegin'
import Step1 from './formPages/Step1';
import Step2 from './formPages/Step2';
import Step3 from './formPages/Step3';
import Step4 from './formPages/Step4';
import Step5 from './formPages/Step5';
import Download from './formPages/Download';
import Affirmation from './formPages/Affirmation';

import { Flex } from 'styles/GlobalStyle'

interface FormProps {
  pageNumber: number;
  goToPage: (pageNumber: number) => void;
}

const Form = ({ pageNumber, goToPage }: FormProps) => {
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
    difficultyFindingWorkDescription: '',

    goals: '',
    goalsHow: '',

    clearRecordWhy: '',
    clearRecordHow: '',

    pdf: undefined,
  });

  return (
    <ContentContainer>
      {pageNumber === 1 && <BeforeYouBegin goToPage={goToPage} />}
      {pageNumber === 2 && (
        <Affirmation
          pageNumber={pageNumber}
          message="Welcome!"
          goToPage={goToPage}
        />
      )}
      {pageNumber === 3 && (
        <Step1 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
      {pageNumber === 4 && (
        <Affirmation
          pageNumber={pageNumber}
          message="Congrats!"
          goToPage={goToPage}
        />
      )}
      {pageNumber === 5 && (
        <Step2 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
      {pageNumber === 6 && (
        <Affirmation
          pageNumber={pageNumber}
          message="Way to Go!"
          goToPage={goToPage}
        />
      )}
      {pageNumber === 7 && (
        <Step3 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
      {pageNumber === 8 && (
        <Affirmation
          pageNumber={pageNumber}
          message="Hooray!"
          goToPage={goToPage}
        />
      )}
      {pageNumber === 9 && (
        <Step4 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
      {pageNumber === 10 && (
        <Affirmation
          pageNumber={pageNumber}
          message="Great Job!"
          goToPage={goToPage}
        />
      )}
      {pageNumber === 11 && (
        <Step5 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
      {pageNumber === 12 && (
        <Affirmation
          pageNumber={pageNumber}
          message="Fabulous!"
          goToPage={goToPage}
        />
      )}
      {pageNumber === 13 && (
        <Flex className='adjacent-mar-top'>
          <p>Previewing Final Statement</p>
          <Button type="button" onClick={() => goToPage(14)}>
            EDIT
          </Button>
          <Button type="button" onClick={() => goToPage(14)}>
            NEXT
          </Button>
        </Flex>
      )}
      {pageNumber === 14 && (
        <Flex className='adjacent-mar-top'>
          <p>Editing</p>
          <Button onClick={() => goToPage(15)}>SAVE</Button>
        </Flex>
      )}
      {pageNumber === 15 && (
        <Download inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
    </ContentContainer>
  );
};

export default Form;
