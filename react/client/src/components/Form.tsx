import React, { useState, useEffect } from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import { PAGE_ENUMS } from 'contexts/RoutingProps';

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
  pageEnum: string;
  goNextPage: () => void;
  goBackPage: () => void;
  onChangeAffirmation: (newState: object) => void;
}

const Form = ({
  pageEnum,
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

  const isAnInvolvementPage =
    pageEnum === PAGE_ENUMS.INVOLVEMENT.JOB ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.RECOVERY ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.SCHOOL ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.PARENTING;

  // todo: move text into a json for localization
  useEffect(() => {
    switch (pageEnum) {
      case PAGE_ENUMS.BEFORE_YOU_BEGIN:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Welcome!',
          buttonText: 'Begin',
          description: 'This is a tool to generate a personal statement.',
        });
        break;
      case PAGE_ENUMS.INTRODUCTION:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Congrats!',
          buttonText: 'Next',
          description:
            'You just finished introducing yourself! You are well on your way to completing your personal statement and getting your record cleared!',
        });
        break;
      case PAGE_ENUMS.INVOLVEMENT.INITIAL:
        onChangeAffirmation({
          isActive: true,
          titleText: 'Hooray!',
          buttonText: 'Next',
          description:
            'You just finished telling everyone about your involvement in your city and your various communities! Thank you for taking the time to tell us about this!',
        });
        break;
      case PAGE_ENUMS.GOALS:
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
  }, [pageEnum]);

  return (
    <div className={`${classes.root} content-page`}>
      {pageEnum === PAGE_ENUMS.BEFORE_YOU_BEGIN && (
        <BeforeYouBegin goNextPage={goNextPage} />
      )}

      {pageEnum === PAGE_ENUMS.INTRODUCTION && (
        <IntroductionStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.INITIAL && (
        <InvolvementStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {/* temporary, replace with appropriate forms */}
      {isAnInvolvementPage && (
        <InvolvementStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED && (
        <UnemployedStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.GOALS && (
        <GoalsStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.WHY && (
        <WhyStep
          inputs={inputs}
          setInputs={setInputs}
          goNextPage={goNextPage}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.PREVIEWING && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goBackPage()} buttonText="EDIT" />
          <Button onClick={() => goNextPage()} buttonText="NEXT" />
        </div>
      )}
      {pageEnum === PAGE_ENUMS.FINALIZE && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Editing</p>
          <Button onClick={() => goNextPage()} buttonText="SAVE" />
        </div>
      )}
      {pageEnum === PAGE_ENUMS.DOWNLOAD && (
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
