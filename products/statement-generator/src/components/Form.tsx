import React, { useContext } from 'react';

import useUtilityStyles from 'styles/utilityStyles';

import Button from 'components/Button';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { AppUrl } from 'contexts/RoutingProps';

import FinalizeStep from 'flows/FinalizeStep';
import GoalsStep from 'flows/GoalsStep';
import WhyStep from 'flows/WhyStep';
import Download from 'flows/Download';
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
      {currentStep === AppUrl.School && (
        <InvolvementSchoolFlow
          stepState={formState.involvementSchoolState}
          setFormState={(newStepState) =>
            updateStepToForm({ involvementSchoolState: newStepState })
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
