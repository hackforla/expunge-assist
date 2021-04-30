import React, { useState } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import Button from 'components/Button';
import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';

import useUtilityStyles from 'styles/utilityStyles';

const GoalsStep = ({
  inputs,
  setInputs,
  goBackPage,
  goNextPage,
}: StepProps) => {
  const utilityClasses = useUtilityStyles();
  const [goalsFilled, setGoalsFilled] = useState(
    inputs.goals.split('.').length >= 3
  );
  const [goalsHowFilled, setGoalsHowFilled] = useState(
    inputs.goalsHow.split('.').length >= 3
  );
  const [previewPage, setPreview] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    if (inputName === 'goals') {
      setInputs({ ...inputs, goals: inputValue });
      inputValue === '' ? setGoalsFilled(false) : setGoalsFilled(true);
    } else if (inputName === 'goalsHow') {
      setInputs({ ...inputs, goalsHow: inputValue });
      inputValue === '' ? setGoalsHowFilled(false) : setGoalsHowFilled(true);
    }
  };
  return previewPage ? (
    <div className={utilityClasses.contentContainer}>
      <TextPreview
        content={`${inputs.goals}. To work towards my goals; ${inputs.goalsHow}. Having my record cleared would help me achieve these goals for my future.`}
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
        defaultValue={inputs.goals}
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
            defaultValue={inputs.goalsHow}
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
