import React, { useState } from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import { PAGE_ENUMS } from 'contexts/RoutingProps';

import BeforeYouBegin from 'flows/BeforeYouBegin';
import IntroductionStep from 'flows/IntroductionStep';
import GoalsStep from 'flows/GoalsStep';
import WhyStep from 'flows/WhyStep';
import Download from 'flows/Download';
import InvolvementStep from 'involvement-step/InvolvementStep';
import InvolvementJobFlow from 'involvement-step/InvolvementJobFlow';
import InvolvementParentingFlow from 'involvement-step/InvolvementParentingFlow';
import InvolvementCommunityServiceFlow from 'involvement-step/InvolvementCommunityServiceFlow';
import InvolvementUnemployedFlow from 'involvement-step/InvolvementUnemployedFlow';

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
  affirmationIsActive: boolean;
}

const Form = ({
  pageEnum,
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

  const isAnInvolvementPage =
    pageEnum === PAGE_ENUMS.INVOLVEMENT.RECOVERY ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.SCHOOL;

  return (
    <>
      {affirmationIsActive ? (
        <></>
      ) : (
        <div className={`${classes.root} content-page`}>
          {pageEnum === PAGE_ENUMS.BEFORE_YOU_BEGIN && (
            <BeforeYouBegin
              goNextPage={goNextPage}
              onChangeAffirmation={onChangeAffirmation}
            />
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

          {pageEnum === PAGE_ENUMS.INVOLVEMENT.JOB && (
            <InvolvementJobFlow
              inputs={inputs}
              setInputs={setInputs}
              goNextPage={goNextPage}
              goBackPage={goBackPage}
            />
          )}

          {pageEnum === PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE && (
            <InvolvementCommunityServiceFlow
              inputs={inputs}
              setInputs={setInputs}
              goNextPage={goNextPage}
              goBackPage={goBackPage}
            />
          )}

          {pageEnum === PAGE_ENUMS.INVOLVEMENT.PARENTING && (
            <InvolvementParentingFlow
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
            <InvolvementUnemployedFlow
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
            <div
              className={`${utilityClasses.buttonContainer} adjacent-mar-top`}
            >
              <p>Previewing Final Statement</p>
              <Button onClick={() => goBackPage()} buttonText="EDIT" />
              <Button onClick={() => goNextPage()} buttonText="NEXT" />
            </div>
          )}
          {pageEnum === PAGE_ENUMS.FINALIZE && (
            <div
              className={`${utilityClasses.buttonContainer} adjacent-mar-top`}
            >
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
      )}
    </>
  );
};

export default Form;
