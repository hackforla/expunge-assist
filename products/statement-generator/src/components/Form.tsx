import React, { useContext } from 'react';

import useUtilityStyles from 'styles/utilityStyles';

import Button from 'components/Button';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';

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
  affirmationIsActive: boolean;
  isDarkTheme: boolean;
}

const Form = ({ affirmationIsActive, isDarkTheme }: FormProps) => {
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
      {currentStep === AppUrl.Introduction && (
        <IntroductionStep
          stepState={formState.introduction}
          setFormState={(newStepState) =>
            updateStepToForm({ introduction: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Involvement && (
        <InvolvementInitialFlow
          stepState={formState.involvementInitialState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementInitialState: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Job && (
        <InvolvementJobFlow
          stepState={formState.involvementJobState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementJobState: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.CommunityService && (
        <InvolvementCommunityServiceFlow
          stepState={formState.involvementServiceState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementServiceState: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Recovery && (
        <InvolvementRecoveryFlow
          stepState={formState.involvementRecoveryState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementRecoveryState: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.School && (
        <InvolvementSchoolFlow
          stepState={formState.involvementSchoolState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementSchoolState: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Parenting && (
        <InvolvementParentingFlow
          stepState={formState.involvementParentingState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementParentingState: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Unemployed && (
        <InvolvementUnemployedFlow
          stepState={formState.involvementUnemployedState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementUnemployedState: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Goals && (
        <GoalsStep
          stepState={formState.goalsStep}
          setFormState={(newStepState) =>
            updateStepToForm({ goalsStep: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Why && (
        <WhyStep
          stepState={formState.whyStep}
          setFormState={(newStepState) =>
            updateStepToForm({ whyStep: newStepState })
          }
        />
      )}

      {currentStep === AppUrl.Finalize && (
        <FinalizeStep formState={formState} />
      )}

      {currentStep === AppUrl.FinalizePreview && (
        <div className={utilityClasses.buttonContainer}>
          <p>Previewing Final Statement</p>
          <Button onClick={() => goBackStep()} buttonText="EDIT" />
          <Button onClick={() => goNextStep()} buttonText="NEXT" />
        </div>
      )}

      {currentStep === AppUrl.Download && <Download formState={formState} />}
    </>
  );
};

export default Form;
