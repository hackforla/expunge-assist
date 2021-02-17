import React, { useState, useEffect } from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
import PopUp from 'components/PopUp';

import BeforeYouBegin from 'components/formPages/BeforeYouBegin';
import Step1 from 'components/formPages/Step1';
import Step2 from 'components/formPages/Step2';
import Step3 from 'components/formPages/Step3';
import Step4 from 'components/formPages/Step4';
import Step5 from 'components/formPages/Step5';
import Download from 'components/formPages/Download';
import Preview from 'components/formPages/Preview';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      maxWidth: '850px',
      marginLeft: 'auto',
      marginRight: 'auto',

      [theme.breakpoints.down('xs')]: {
        marginLeft: 'initial',
        marginRight: 'initial',
      },
    },
  })
);

interface FormProps {
  pageNumber: number;
  goToPage: (pageNumber: number) => void;
  onChangeAffirmation: (newState: object) => void;
}

const Form = ({ pageNumber, goToPage, onChangeAffirmation }: FormProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({});
  const [currentPrev, setCurrentPrev] = useState('');
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
    if (pageNumber === 2) {
      setCurrentPrev('Introduction');
    } else if (pageNumber === 4) {
      setCurrentPrev('Involvement');
    } else if (pageNumber === 5) {
      setCurrentPrev('Future Goals');
    } else if (pageNumber === 6) {
      setCurrentPrev('Why');
    }
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
    <div className={`${classes.root} content-page`}>
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
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goToPage(8)} buttonText="EDIT" />
          <Button onClick={() => goToPage(8)} buttonText="NEXT" />
        </div>
      )}
      {pageNumber === 8 && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Editing</p>
          <Button onClick={() => goToPage(9)} buttonText="SAVE" />
        </div>
      )}
      {pageNumber === 9 && (
        <Download inputs={inputs} setInputs={setInputs} goToPage={goToPage} />
      )}
      {pageNumber === 11 && (
        <Preview
          currentPrev={currentPrev}
          inputs={inputs}
          goToPage={goToPage}
        />
      )}
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
    </div>
  );
};

export default Form;
