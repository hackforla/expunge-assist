import React, { useState, useEffect } from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import { FORM_STEPS } from 'contexts/RoutingProps';

import BeforeYouBegin from 'flows/BeforeYouBegin';
import IntroductionStep from 'flows/IntroductionStep';
import UnemployedStep from 'flows/UnemployedStep';
import GoalsStep from 'flows/GoalsStep';
import WhyStep from 'flows/WhyStep';
import Download from 'flows/Download';
import InvolvementStep from 'involvement-step/InvolvementStep';

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
  mainPage: string;
  substep?: string;
  goNextPage: () => void;
  goBackPage: () => void;
  onChangeAffirmation: (newState: object) => void;
}

const Form = ({
  pageNumber,
  mainPage,
  substep,
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
      {mainPage === FORM_STEPS.BEFORE_YOU_BEGIN && (
        <BeforeYouBegin goNextPage={goNextPage} />
      )}

      {mainPage === FORM_STEPS.INTRODUCTION && (
        <IntroductionStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {mainPage === FORM_STEPS.INVOLVEMENT_GENERIC && (
        <InvolvementStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {mainPage === FORM_STEPS.INVOLVEMENT.UNEMPLOYED && (
        <UnemployedStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {mainPage === FORM_STEPS.GOALS && (
        <GoalsStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {mainPage === FORM_STEPS.WHY && (
        <WhyStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {mainPage === FORM_STEPS.PREVIEWING && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goBackPage()} buttonText="EDIT" />
          <Button onClick={() => goNextPage()} buttonText="NEXT" />
        </div>
      )}
      {mainPage === FORM_STEPS.FINALIZE && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Editing</p>
          <Button onClick={() => goNextPage()} buttonText="SAVE" />
        </div>
      )}
      {mainPage === FORM_STEPS.DOWNLOAD && (
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
