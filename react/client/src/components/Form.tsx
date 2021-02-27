import React, { useState, useEffect } from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import BeforeYouBegin from 'flows/BeforeYouBegin';
import Step1 from 'flows/Step1';
import Step3 from 'flows/Step3';
import Step4 from 'flows/Step4';
import Step5 from 'flows/Step5';
import Download from 'flows/Download';
import InvolvementStep from 'flows/InvolvementStep';

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
  goNextPage: () => void;
  goBackPage: () => void;
  onChangeAffirmation: (newState: object) => void;
}

const Form = ({
  pageNumber,
  goNextPage,
  goBackPage,
  onChangeAffirmation,
}: FormProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({});
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
      case 2:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Welcome!',
          buttonText: 'Begin',
          description: 'This is a tool to generate a personal statement.',
        });
        break;
      case 4:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Congrats!',
          buttonText: 'Next',
          description:
            'You just finished introducing yourself! You are well on your way to completing your personal statement and getting your record cleared!',
        });
        break;
      case 5:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Hooray!',
          buttonText: 'Next',
          description:
            'You just finished telling everyone about your involvement in your city and your various communities! Thank you for taking the time to tell us about this!',
        });
        break;
      case 6:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Great Job!',
          buttonText: 'Next',
          description:
            'Those are some amazing goals you’ve set for yourself! You’re one step closer towards acheiving them too by getting your record cleared.',
        });
        break;
      default:
        break;
    }
  }, [pageNumber]);

  return (
    <div className={`${classes.root} content-page`}>
      {pageNumber === 1 && <BeforeYouBegin goNextPage={goNextPage} />}

      {pageNumber === 2 && (
        <Step1
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageNumber === 3 && (
        <InvolvementStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageNumber === 4 && (
        <Step3
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageNumber === 5 && (
        <Step4
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageNumber === 6 && (
        <Step5
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageNumber === 7 && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goBackPage()} buttonText="EDIT" />
          <Button onClick={() => goNextPage()} buttonText="NEXT" />
        </div>
      )}
      {pageNumber === 8 && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Editing</p>
          <Button onClick={() => goNextPage()} buttonText="SAVE" />
        </div>
      )}
      {pageNumber === 9 && (
        <Download
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}
    </div>
  );
};

export default Form;
