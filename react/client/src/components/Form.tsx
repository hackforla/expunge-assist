import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';

import { PAGE_ENUMS } from 'contexts/RoutingProps';
import { FormStateContext } from 'contexts/FormStateContext';

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
  pageEnum: string;
  // goNextPage: () => void;
  goBackPage: () => void;
  onChangeAffirmation: (newState: object) => void;
  affirmationIsActive: boolean;
}

const Form = ({
  pageEnum,
  goBackPage,
  onChangeAffirmation,
  affirmationIsActive,
}: FormProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({});

  const useFormStateContext = () => React.useContext(FormStateContext);
  const { formState, updateStepToForm, goNextStep } = useFormStateContext();

  if (affirmationIsActive) {
    return <></>;
  }

  return (
    <div className={`${classes.root} content-page`}>
      {pageEnum === PAGE_ENUMS.BEFORE_YOU_BEGIN && (
        <BeforeYouBegin
          goNextPage={goNextStep}
          onChangeAffirmation={onChangeAffirmation}
        />
      )}

      {pageEnum === PAGE_ENUMS.INTRODUCTION && (
        <IntroductionStep
          stepState={formState.introduction}
          setFormState={(newStepState) =>
            updateStepToForm({ introduction: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.INITIAL && (
        <InvolvementInitialFlow
          stepState={formState.involvementInitialState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementInitialState: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.JOB && (
        <InvolvementJobFlow
          stepState={formState.involvementJobState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementJobState: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE && (
        <InvolvementCommunityServiceFlow
          stepState={formState.involvementServiceState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementServiceState: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.RECOVERY && (
        <InvolvementRecoveryFlow
          stepState={formState.involvementRecoveryState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementRecoveryState: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.SCHOOL && (
        <InvolvementSchoolFlow
          stepState={formState.involvementSchoolState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementSchoolState: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.PARENTING && (
        <InvolvementParentingFlow
          stepState={formState.involvementParentingState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementParentingState: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED && (
        <InvolvementUnemployedFlow
          stepState={formState.involvementUnemployedState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementUnemployedState: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.GOALS && (
        <GoalsStep
          stepState={formState.goalsStep}
          setFormState={(newStepState) =>
            updateStepToForm({ goalsStep: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.WHY && (
        <WhyStep
          stepState={formState.whyStep}
          setFormState={(newStepState) =>
            updateStepToForm({ whyStep: newStepState })
          }
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}

      {pageEnum === PAGE_ENUMS.PREVIEWING && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goBackPage()} buttonText="EDIT" />
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
          formState={formState}
          setFormState={updateStepToForm}
          goNextPage={goNextStep}
          goBackPage={goBackPage}
        />
      )}
    </div>
  );
};

export default Form;
