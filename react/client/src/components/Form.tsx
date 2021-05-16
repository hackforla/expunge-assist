import React, { useContext } from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { PAGE_ENUMS } from 'contexts/RoutingProps';

import BeforeYouBegin from 'flows/BeforeYouBegin';
import IntroductionStep from 'flows/IntroductionStep';
import GoalsStep from 'flows/GoalsStep';
import WhyStep from 'flows/WhyStep';
import Download from 'flows/Download';
import InvolvementInitialFlow from 'involvement-step/InvolvementInitialFlow';
import InvolvementJobFlow from 'involvement-step/InvolvementJobFlow';
import InvolvementParentingFlow from 'involvement-step/InvolvementParentingFlow';
import InvolvementCommunityServiceFlow from 'involvement-step/InvolvementCommunityServiceFlow';
import InvolvementRecoveryFlow from 'involvement-step/InvolvementRecoveryFlow';
import InvolvementSchoolFlow from 'involvement-step/InvolvementSchoolFlow';
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
  onChangeAffirmation: (newState: object) => void;
  affirmationIsActive: boolean;
}

const Form = ({ onChangeAffirmation, affirmationIsActive }: FormProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({});

  const { formState, updateStepToForm, goNextStep, goBackStep } = useContext(
    FormStateContext
  );
  const { pageEnum } = useContext(RoutingContext);

  if (affirmationIsActive) {
    return <></>;
  }

  return (
    <div className={`${classes.root} content-page`}>
      {pageEnum === PAGE_ENUMS.BEFORE_YOU_BEGIN && (
        <BeforeYouBegin onChangeAffirmation={onChangeAffirmation} />
      )}

      {pageEnum === PAGE_ENUMS.INTRODUCTION && (
        <IntroductionStep
          stepState={formState.introduction}
          setFormState={(newStepState) =>
            updateStepToForm({ introduction: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.INITIAL && (
        <InvolvementInitialFlow
          stepState={formState.involvementInitialState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementInitialState: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.JOB && (
        <InvolvementJobFlow
          stepState={formState.involvementJobState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementJobState: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE && (
        <InvolvementCommunityServiceFlow
          stepState={formState.involvementServiceState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementServiceState: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.RECOVERY && (
        <InvolvementRecoveryFlow
          stepState={formState.involvementRecoveryState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementRecoveryState: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.SCHOOL && (
        <InvolvementSchoolFlow
          stepState={formState.involvementSchoolState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementSchoolState: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.PARENTING && (
        <InvolvementParentingFlow
          stepState={formState.involvementParentingState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementParentingState: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED && (
        <InvolvementUnemployedFlow
          stepState={formState.involvementUnemployedState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementUnemployedState: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.GOALS && (
        <GoalsStep
          stepState={formState.goalsStep}
          setFormState={(newStepState) =>
            updateStepToForm({ goalsStep: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.WHY && (
        <WhyStep
          stepState={formState.whyStep}
          setFormState={(newStepState) =>
            updateStepToForm({ whyStep: newStepState })
          }
        />
      )}

      {pageEnum === PAGE_ENUMS.PREVIEWING && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goBackStep()} buttonText="EDIT" />
          <Button onClick={() => goNextStep()} buttonText="NEXT" />
        </div>
      )}

      {pageEnum === PAGE_ENUMS.FINALIZE && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Editing</p>
          <Button onClick={() => goNextStep()} buttonText="SAVE" />
        </div>
      )}

      {pageEnum === PAGE_ENUMS.DOWNLOAD && (
        <Download
        />
      )}
    </div>
  );
};

export default Form;
