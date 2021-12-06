import React, { useState } from 'react';

import { IGoalsState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';

import useUtilityStyles from 'styles/utilityStyles';

interface IGoalsStepProps {
  stepState: IGoalsState;
  setFormState: (value: any) => void;
}

const GoalsStep = ({ stepState, setFormState }: IGoalsStepProps) => {
  const utilityClasses = useUtilityStyles();

  const [previewPage, setPreview] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    if (inputName === 'goals') {
      setFormState({ ...stepState, goals: inputValue });
    } else if (inputName === 'goalsHow') {
      setFormState({ ...stepState, goalsHow: inputValue });
    }
  };

  const goalsValid = stepState.goals !== '';
  const goalsHowValid = stepState.goalsHow !== '';
  const isNextDisabled = !goalsValid || !goalsHowValid;

  if (previewPage) {
    return (
      <div className={utilityClasses.contentContainer}>
        <TextPreview
          content={`${stepState.goals}. To work towards my goals; ${stepState.goalsHow}. Having my record cleared would help me achieve these goals for my future.`}
          onAdjustClick={() => setPreview(false)}
          nameOfStep="Future Goals"
        />

        <FlowNavigation
          onBack={() => setPreview(false)}
          isNextDisabled={isNextDisabled}
        />
      </div>
    );
  }

  return (
    <div className={utilityClasses.contentContainer}>
      <p>
        Please describe what goals you have to improve your life even further,
        like attending school, getting specialized training, etc. (2-3 sentences
        suggested)
      </p>

      <Textarea
        inputName="goals"
        handleChange={handleChange}
        placeholder="I have plans of..."
        multi
        isValid={goalsValid}
        defaultValue={stepState.goals}
      />

      <p>
        How are you working towards acheiving these goals? What are the concrete
        steps you are taking? (2-3 sentences suggested)
      </p>

      <Textarea
        inputName="goalsHow"
        handleChange={handleChange}
        placeholder="I have been..."
        multi
        isValid={goalsHowValid}
        disabled={!goalsValid}
        defaultValue={stepState.goalsHow}
      />

      <FlowNavigation
        // onNext={() => setPreview(true)}
        isNextDisabled={isNextDisabled}
      />
    </div>
  );
};

export default GoalsStep;
