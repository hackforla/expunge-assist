import React, { useState } from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

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
  goNextPage: () => void;
  goBackPage: () => void;
  onChangeAffirmation: (newState: object) => void;
  affirmationIsActive: boolean;
}

const Form = ({
  pageNumber,
  goNextPage,
  goBackPage,
  onChangeAffirmation,
  affirmationIsActive,
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

  return (
    <>
      {affirmationIsActive ? (
        <></>
      ) : (
        <div className={`${classes.root} content-page`}>
          {pageNumber === 1 && (
            <BeforeYouBegin
              goNextPage={goNextPage}
              onChangeAffirmation={onChangeAffirmation}
            />
          )}

          {pageNumber === 2 && (
            <IntroductionStep
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
            <UnemployedStep
              inputs={inputs}
              setInputs={setInputs}
              goNextPage={goNextPage}
              goBackPage={goBackPage}
            />
          )}

          {pageNumber === 5 && (
            <GoalsStep
              inputs={inputs}
              setInputs={setInputs}
              goNextPage={goNextPage}
              goBackPage={goBackPage}
            />
          )}

          {pageNumber === 6 && (
            <WhyStep
              inputs={inputs}
              setInputs={setInputs}
              goNextPage={goNextPage}
              goBackPage={goBackPage}
            />
          )}

          {pageNumber === 7 && (
            <div
              className={`${utilityClasses.buttonContainer} adjacent-mar-top`}
            >
              <p>Previewing Final Statement</p>
              <Button onClick={() => goBackPage()} buttonText="EDIT" />
              <Button onClick={() => goNextPage()} buttonText="NEXT" />
            </div>
          )}
          {pageNumber === 8 && (
            <div
              className={`${utilityClasses.buttonContainer} adjacent-mar-top`}
            >
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
      )}
    </>
  );
};

export default Form;
