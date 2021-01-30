import React, { useState, useEffect } from 'react';

import Button from 'components/Button';

import useStyles from 'styles/useStyles';
import BeforeYouBegin from './formPages/BeforeYouBegin';
import Step1 from './formPages/Step1';
import Step2 from './formPages/Step2';
import Step3 from './formPages/Step3';
import Step4 from './formPages/Step4';
import Step5 from './formPages/Step5';
import Download from './formPages/Download';
import PopUp from './PopUp';

interface FormProps {
  pageNumber: number;
  goToPage: (pageNumber: number) => void;
  onChangeAffirmation: (newState: object) => void;
}

const Form = ({ pageNumber, goToPage, onChangeAffirmation }: FormProps) => {
  const classes = useStyles();
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

  // todo: move text into a json for localization
  useEffect(() => {
    switch (pageNumber) {
      case 1:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Welcome!',
          buttonText: 'Begin',
          description: 'This is a tool to generate a personal statement.',
        });
        break;
      case 2:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Congrats!',
          buttonText: 'Next',
          description: 'Page 2',
        });
        break;
      case 3:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Way to Go!',
          buttonText: 'Next',
          description: 'Page 3',
        });
        break;
      default:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Default Text',
          buttonText: 'Next',
          description: `Page ${pageNumber}`,
        });
        break;
    }
  }, [pageNumber]);

  return (
    <div className={`${classes.contentContainer} content-page`}>
      {pageNumber === 1 && <BeforeYouBegin goToPage={goToPage} />}

      {pageNumber === 2 && (
        <Step1 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}

      {pageNumber === 3 && (
        <Step2 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}

      {pageNumber === 4 && (
        <Step3 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}

      {pageNumber === 5 && (
        <Step4 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}

      {pageNumber === 6 && (
        <Step5 inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}

      {pageNumber === 7 && (
        <div className={`${classes.flex} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button type="button" onClick={() => goToPage(8)}>
            EDIT
          </Button>
          <Button type="button" onClick={() => goToPage(8)}>
            NEXT
          </Button>
        </div>
      )}
      {pageNumber === 8 && (
        <div className={`${classes.flex} adjacent-mar-top`}>
          <p>Editing</p>
          <Button onClick={() => goToPage(9)}>SAVE</Button>
        </div>
      )}
      {pageNumber === 9 && (
        <Download inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
<<<<<<< HEAD
      <PopUp
        title="Some advice for your personal statement"
        info={
          '1. Remember that you are writing for a judge, so refrain from using informal language such as abbreviations or slang' +
          '\n' +
          '2. Write in complete sentences when given the option' +
          '\n' +
          '3. Use the first person when answering questions. This means telling the story from your point of view.' +
          '\n' +
          '4. Please try to limit your responses. We recommend each paragraph being 3-5 sentences.'
        }
      />
    </ContentContainer>
=======
    </div>
>>>>>>> second pass - converted most things to material ui except button component
  );
};

export default Form;
