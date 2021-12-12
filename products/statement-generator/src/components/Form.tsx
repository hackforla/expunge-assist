import React, { useContext } from 'react';

import useUtilityStyles from 'styles/utilityStyles';

import Button from 'components/Button';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import BeforeYouBegin from 'flows/BeforeYouBegin';
import IntroductionStep from 'flows/IntroductionStep';
import FinalizeStep from 'flows/FinalizeStep';
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

interface FormProps {
  onChangeAffirmation: (newState: object) => void;
  affirmationIsActive: boolean;
  isDarkTheme: boolean;
}

const Form = ({
  onChangeAffirmation,
  affirmationIsActive,
  isDarkTheme,
}: FormProps) => {
  const utilityClasses = useUtilityStyles({
    pageTheme: isDarkTheme ? 'dark' : 'transparent',
  });

  const { formState, updateStepToForm, goNextStep, goBackStep } = useContext(
    FormStateContext
  );
  const { currentStep } = useContext(RoutingContext);

  if (affirmationIsActive) {
    return <></>;
  }

  return (
    <>
      {currentStep === STEP_ENUMS.BEFORE_YOU_BEGIN && (
        <BeforeYouBegin onChangeAffirmation={onChangeAffirmation} />
      )}

      {currentStep === STEP_ENUMS.INTRODUCTION && (
        <IntroductionStep
          stepState={formState.introduction}
          setFormState={(newStepState) =>
            updateStepToForm({ introduction: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.INVOLVEMENT.INITIAL && (
        <InvolvementInitialFlow
          stepState={formState.involvementInitialState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementInitialState: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.INVOLVEMENT.JOB && (
        <InvolvementJobFlow
          stepState={formState.involvementJobState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementJobState: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE && (
        <InvolvementCommunityServiceFlow
          stepState={formState.involvementServiceState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementServiceState: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.INVOLVEMENT.RECOVERY && (
        <InvolvementRecoveryFlow
          stepState={formState.involvementRecoveryState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementRecoveryState: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.INVOLVEMENT.SCHOOL && (
        <InvolvementSchoolFlow
          stepState={formState.involvementSchoolState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementSchoolState: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.INVOLVEMENT.PARENTING && (
        <InvolvementParentingFlow
          stepState={formState.involvementParentingState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementParentingState: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.INVOLVEMENT.UNEMPLOYED && (
        <InvolvementUnemployedFlow
          stepState={formState.involvementUnemployedState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementUnemployedState: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.GOALS && (
        <GoalsStep
          stepState={formState.goalsStep}
          setFormState={(newStepState) =>
            updateStepToForm({ goalsStep: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.WHY && (
        <WhyStep
          stepState={formState.whyStep}
          setFormState={(newStepState) =>
            updateStepToForm({ whyStep: newStepState })
          }
        />
      )}

      {currentStep === STEP_ENUMS.FINALIZE && (
        <FinalizeStep formState={formState} />
      )}

      {currentStep === STEP_ENUMS.FINALIZE_PREVIEW && (
        <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goBackStep()} buttonText="EDIT" />
          <Button onClick={() => goNextStep()} buttonText="NEXT" />
        </div>
      )}

      {currentStep === STEP_ENUMS.DOWNLOAD && (
        <Download formState={formState} />
      )}
    </>
  );
};

export default Form;
