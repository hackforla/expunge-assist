import React, { useState } from 'react';

import { IStepProps } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Button from 'components/Button';
import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';

import useUtilityStyles from 'styles/utilityStyles';

const GoalsStep = ({
  formState,
  setFormState,
  goBackPage,
  goNextPage,
}: IStepProps) => {
  const utilityClasses = useUtilityStyles();
  const [goalsFilled, setGoalsFilled] = useState(
    formState.goals.split('.').length >= 3
  );
  const [goalsHowFilled, setGoalsHowFilled] = useState(
    formState.goalsHow.split('.').length >= 3
  );
  const [previewPage, setPreview] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    if (inputName === 'goals') {
      setFormState({ ...formState, goals: inputValue });
      inputValue === '' ? setGoalsFilled(false) : setGoalsFilled(true);
    } else if (inputName === 'goalsHow') {
      setFormState({ ...formState, goalsHow: inputValue });
      inputValue === '' ? setGoalsHowFilled(false) : setGoalsHowFilled(true);
    }
  };
  return previewPage ? (
    <div className={utilityClasses.contentContainer}>
      <TextPreview
        content={`${formState.goals}. To work towards my goals; ${formState.goalsHow}. Having my record cleared would help me achieve these goals for my future.`}
        onAdjustClick={() => null}
        nameOfStep="Future Goals"
      />

      <div className={utilityClasses.flexRow}>
        <Button
          onClick={() => setPreview(false)}
          buttonText="BACK"
          theme="transparent"
        />
        <Button
          className={utilityClasses.buttonRight}
          onClick={() => goNextPage()}
          buttonText="LOOKS GOOD"
          hasArrow
        />
      </div>
    </div>
  ) : (
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
        isValid={goalsFilled}
        defaultValue={formState.goals}
      />
      {goalsFilled ? (
        <>
          <p>
            How are you working towards acheiving these goals? What are the
            concrete steps you are taking? (2-3 sentences suggested)
          </p>
          <Textarea
            inputName="goalsHow"
            handleChange={handleChange}
            placeholder="I have been..."
            multi
            isValid={goalsHowFilled}
            defaultValue={formState.goalsHow}
          />
        </>
      ) : (
        <p className="greyedOut">
          How are you working towards acheiving these goals? What are the
          concrete steps you are taking? (2-3 sentences suggested)
        </p>
      )}

      <FlowNavigation
        goBackPage={goBackPage}
        goNextPage={() => setPreview(true)}
      />
    </div>
  );
};

export default GoalsStep;
